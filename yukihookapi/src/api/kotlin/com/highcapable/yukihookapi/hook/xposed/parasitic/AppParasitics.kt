/*
 * YukiHookAPI - An efficient Kotlin version of the Xposed Hook API.
 * Copyright (C) 2019-2022 HighCapable
 * https://github.com/fankes/YukiHookAPI
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This file is Created by fankes on 2022/8/14.
 */
package com.highcapable.yukihookapi.hook.xposed.parasitic

import android.app.Activity
import android.app.Application
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.content.res.Resources
import com.highcapable.yukihookapi.YukiHookAPI
import com.highcapable.yukihookapi.hook.factory.classOf
import com.highcapable.yukihookapi.hook.factory.current
import com.highcapable.yukihookapi.hook.factory.method
import com.highcapable.yukihookapi.hook.log.yLoggerE
import com.highcapable.yukihookapi.hook.log.yLoggerW
import com.highcapable.yukihookapi.hook.param.wrapper.HookParamWrapper
import com.highcapable.yukihookapi.hook.type.android.*
import com.highcapable.yukihookapi.hook.type.java.BooleanType
import com.highcapable.yukihookapi.hook.type.java.IntType
import com.highcapable.yukihookapi.hook.type.java.JavaClassLoader
import com.highcapable.yukihookapi.hook.type.java.StringType
import com.highcapable.yukihookapi.hook.xposed.bridge.YukiHookBridge
import com.highcapable.yukihookapi.hook.xposed.bridge.dummy.YukiModuleResources
import com.highcapable.yukihookapi.hook.xposed.bridge.factory.YukiHookHelper
import com.highcapable.yukihookapi.hook.xposed.bridge.factory.YukiMemberHook
import com.highcapable.yukihookapi.hook.xposed.channel.YukiHookDataChannel

/**
 * 这是一个管理 APP 寄生功能的控制类
 *
 * 通过这些功能即可轻松实现对 (Xposed) 宿主环境的 [Resources] 注入以及 [Activity] 代理
 */
@PublishedApi
internal object AppParasitics {

    /** Android 系统框架名称 */
    @PublishedApi
    internal const val SYSTEM_FRAMEWORK_NAME = "android"

    /** [YukiHookDataChannel] 是否已经注册 */
    private var isDataChannelRegister = false

    /** 已被注入到宿主 [Resources] 中的当前 Xposed 模块资源 HashCode 数组 */
    private val injectedHostResourcesHashCodes = HashSet<Int>()

    /**
     * 当前 Hook APP (宿主) 的全局生命周期 [Application]
     *
     * 需要 [YukiHookAPI.Configs.isEnableDataChannel] 或 [AppLifecycleCallback.isCallbackSetUp] 才会生效
     */
    internal var hostApplication: Application? = null

    /** 当前 Xposed 模块自身 APK 路径 */
    internal var moduleAppFilePath = ""

    /** 当前 Xposed 模块自身 [Resources] */
    internal var moduleAppResources: YukiModuleResources? = null

    /**
     * 当前环境中使用的 [ClassLoader]
     *
     * 装载位于 (Xposed) 宿主环境与模块环境时均使用当前 DEX 内的 [ClassLoader]
     * @return [ClassLoader]
     * @throws IllegalStateException 如果 [ClassLoader] 为空
     */
    internal val baseClassLoader get() = classOf<YukiHookAPI>().classLoader ?: error("Operating system not supported")

    /**
     * 获取当前 Xposed 模块自身动态 [Resources]
     * @return [YukiModuleResources] or null
     */
    internal val dynamicModuleAppResources get() = runCatching { YukiModuleResources.wrapper(moduleAppFilePath) }.getOrNull()

    /**
     * 获取当前系统框架的 [Context]
     * @return [Context] ContextImpl 实例对象
     * @throws IllegalStateException 如果获取不到系统框架的 [Context]
     */
    internal val systemContext
        get() = ActivityThreadClass.method { name = "currentActivityThread" }.ignored().get().call()?.let {
            ActivityThreadClass.method { name = "getSystemContext" }.ignored().get(it).invoke<Context?>()
        } ?: error("Failed to got SystemContext")

    /**
     * 获取指定 [packageName] 的用户 ID
     *
     * 机主为 0 - 应用双开 (分身) 或工作资料因系统环境不同 ID 也各不相同
     * @param packageName 当前包名
     * @return [Int]
     */
    internal fun findUserId(packageName: String) =
        UserHandleClass.method {
            name = "getUserId"
            param(IntType)
        }.ignored().get().int(systemContext.packageManager.getApplicationInfo(packageName, PackageManager.GET_ACTIVITIES).uid)

    /**
     * 注入当前 Hook APP (宿主) 全局生命周期
     * @param packageName 包名
     */
    internal fun registerToAppLifecycle(packageName: String) {
        /** Hook [Application] 装载方法 */
        runCatching {
            if (AppLifecycleCallback.isCallbackSetUp) {
                YukiHookHelper.hook(ApplicationClass.method { name = "attach"; param(ContextClass) }, object : YukiMemberHook() {
                    override fun beforeHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            (wrapper.args?.get(0) as? Context?)?.also { AppLifecycleCallback.attachBaseContextCallback?.invoke(it, false) }
                        }.onFailure { wrapper.throwable = it }
                    }

                    override fun afterHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            (wrapper.args?.get(0) as? Context?)?.also { AppLifecycleCallback.attachBaseContextCallback?.invoke(it, true) }
                        }.onFailure { wrapper.throwable = it }
                    }
                })
                YukiHookHelper.hook(ApplicationClass.method { name = "onTerminate" }, object : YukiMemberHook() {
                    override fun afterHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            (wrapper.instance as? Application?)?.also { AppLifecycleCallback.onTerminateCallback?.invoke(it) }
                        }.onFailure { wrapper.throwable = it }
                    }
                })
                YukiHookHelper.hook(ApplicationClass.method { name = "onLowMemory" }, object : YukiMemberHook() {
                    override fun afterHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            (wrapper.instance as? Application?)?.also { AppLifecycleCallback.onLowMemoryCallback?.invoke(it) }
                        }.onFailure { wrapper.throwable = it }
                    }
                })
                YukiHookHelper.hook(ApplicationClass.method { name = "onTrimMemory"; param(IntType) }, object : YukiMemberHook() {
                    override fun afterHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            val self = wrapper.instance as? Application? ?: return
                            val type = wrapper.args?.get(0) as? Int? ?: return
                            AppLifecycleCallback.onTrimMemoryCallback?.invoke(self, type)
                        }.onFailure { wrapper.throwable = it }
                    }
                })
                YukiHookHelper.hook(ApplicationClass.method { name = "onConfigurationChanged" }, object : YukiMemberHook() {
                    override fun afterHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            val self = wrapper.instance as? Application? ?: return
                            val config = wrapper.args?.get(0) as? Configuration? ?: return
                            AppLifecycleCallback.onConfigurationChangedCallback?.invoke(self, config)
                        }.onFailure { wrapper.throwable = it }
                    }
                })
            }
            if (YukiHookAPI.Configs.isEnableDataChannel || AppLifecycleCallback.isCallbackSetUp)
                YukiHookHelper.hook(InstrumentationClass.method { name = "callApplicationOnCreate" }, object : YukiMemberHook() {
                    override fun afterHookedMember(wrapper: HookParamWrapper) {
                        runCatching {
                            (wrapper.args?.get(0) as? Application?)?.also {
                                hostApplication = it
                                AppLifecycleCallback.onCreateCallback?.invoke(it)
                                AppLifecycleCallback.onReceiversCallback.takeIf { e -> e.isNotEmpty() }?.forEach { (_, e) ->
                                    if (e.first.isNotEmpty()) it.registerReceiver(object : BroadcastReceiver() {
                                        override fun onReceive(context: Context?, intent: Intent?) {
                                            if (context == null || intent == null) return
                                            if (e.first.any { e -> e == intent.action }) e.second(context, intent)
                                        }
                                    }, IntentFilter().apply { e.first.forEach { e -> addAction(e) } })
                                }
                                if (isDataChannelRegister) return
                                isDataChannelRegister = true
                                runCatching { YukiHookDataChannel.instance().register(it, packageName) }
                            }
                        }.onFailure { wrapper.throwable = it }
                    }
                })
        }
    }

    /**
     * 监听并 Hook 当前 [ClassLoader] 的 [ClassLoader.loadClass] 方法
     * @param loader 当前 [ClassLoader]
     * @param result 回调 - ([Class] 实例对象,[Boolean] 是否 resolve)
     */
    internal fun hookClassLoader(loader: ClassLoader?, result: (clazz: Class<*>, resolve: Boolean) -> Unit) {
        runCatching {
            YukiHookHelper.hook(JavaClassLoader.method { name = "loadClass"; param(StringType, BooleanType) }, object : YukiMemberHook() {
                override fun afterHookedMember(wrapper: HookParamWrapper) {
                    if (wrapper.instance?.javaClass?.name == loader?.javaClass?.name)
                        (wrapper.result as? Class<*>?)?.also { result(it, wrapper.args?.get(1) as? Boolean ?: false) }
                }
            })
        }.onFailure { yLoggerW(msg = "Try to hook ClassLoader failed: $it") }
    }

    /**
     * 向 Hook APP (宿主) 注入当前 Xposed 模块的资源
     * @param hostResources 需要注入的宿主 [Resources]
     */
    internal fun injectModuleAppResources(hostResources: Resources) {
        if (injectedHostResourcesHashCodes.contains(hostResources.hashCode())) return
        if (YukiHookBridge.hasXposedBridge) runCatching {
            hostResources.assets.current {
                method {
                    name = "addAssetPath"
                    param(StringType)
                }.call(moduleAppFilePath)
            }
            injectedHostResourcesHashCodes.add(hostResources.hashCode())
        }.onFailure {
            yLoggerE(msg = "Failed to inject module resources into [$hostResources]", e = it)
        } else yLoggerW(msg = "You can only inject module resources in Xposed Environment")
    }

    /** 刷新当前 Xposed 模块自身 [Resources] */
    internal fun refreshModuleAppResources() {
        dynamicModuleAppResources?.let { moduleAppResources = it }
    }

    /**
     * 当前 Hook APP (宿主) 的生命周期回调处理类
     */
    internal object AppLifecycleCallback {

        /** 是否已设置回调 */
        internal var isCallbackSetUp = false

        /** [Application.attachBaseContext] 回调 */
        internal var attachBaseContextCallback: ((Context, Boolean) -> Unit)? = null

        /** [Application.onCreate] 回调 */
        internal var onCreateCallback: (Application.() -> Unit)? = null

        /** [Application.onTerminate] 回调 */
        internal var onTerminateCallback: (Application.() -> Unit)? = null

        /** [Application.onLowMemory] 回调 */
        internal var onLowMemoryCallback: (Application.() -> Unit)? = null

        /** [Application.onTrimMemory] 回调 */
        internal var onTrimMemoryCallback: ((Application, Int) -> Unit)? = null

        /** [Application.onConfigurationChanged] 回调 */
        internal var onConfigurationChangedCallback: ((Application, Configuration) -> Unit)? = null

        /** 系统广播监听回调 */
        internal val onReceiversCallback = HashMap<String, Pair<Array<out String>, (Context, Intent) -> Unit>>()
    }
}