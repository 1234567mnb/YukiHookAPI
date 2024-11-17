# 介绍

> `YukiHookAPI`是一个集成化的挂钩API框架，本身不提供任何Hook功能，需要Xposed相关基础API的支持.

## 背景

这是一个使用科特林基于暴露的API重新构建的高效吊钩API，同时为X曝光的模块的开发打造了丰富的功能扩展。

名称取自 [《ももくり》女主栗原雪(Yuki)](https://www.bilibili.com/bangumi/play/ss5016)。

前身为 [开发学习项目](https://github.com/fankes/TMore)中使用的无辜的曝光API，现在重新命名并开源。

## 用途

`YukiHookAPI`完全采用科特林**Lambda**语法构建。

抛弃原始不太友好的 `XposedHelpers`，你可以使用它来轻松创建X曝光的模块以及轻松实现自定义挂钩API。

## 语言要求

请使用Kotlin，框架部分代码构成同样兼容Java但基础Hook场景的实现**可能完全无法使用**。

文档全部的Demo示例代码都将使用Kotlin进行描述，如果你完全不会使用科特林那你将有可能无法使用`YukiHookAPI`。

部分Java演示代码可在[这里](https://github.com/HighCapable/YukiHookAPI/tree/master/samples/demo-module/src/main/java/com/highcapable/yukihookapi/demo_module/hook/java)找到，但不推荐使用。

## 灵感来源

以前，我们在构建X曝光的模块的时候，首先需要在`资产` 下创建 `Xposed_init`文件。

然后，将自己的入口类名手动填入文件中，使用`XposedHelpers`去实现我们的Hook逻辑.

自科特林作为安卓主要开发语言以来，这套API用起来确实已经不是很优雅了.

有没有什么 **好用、轻量、优雅**的解决办法呢？

本着这样的想法，`YukiHookAPI`诞生了。

现在，我们只需要编写少量的代码，一切时间开销和花费交给自动化处理。

借助科特林优雅的**Lambda** 写法以及 `YukiHookAPI`，可以让你的Hook逻辑更加美观清晰.

> 示例如下

：：：：代码组
*代码组项目Yuki Hook API

```科特林
@InjectYukiHookWithXposed
对象HookEntry:IYukiHookXposedInit{

override fun onhook()=encase{
loadZygote{
ActivityClass.method{
name="onCreate"
param(BundleClass)
}.hook{
{之前
//此处为您的代码。
}
                after {
                  // Your code here.
                }
            }
        }
        loadApp(name = "com.android.browser") {
            ActivityClass.method {
                name = "onCreate"
                param(BundleClass)
            }.hook {
                before {
                  // Your code here.
                }
                after {
                  // Your code here.
                }
            }
        }
    }
}
```

:::
::: code-group-item Rovo89 Xposed API

```kotlin
class HookEntry : IXposedHookZygoteInit, IXposedHookLoadPackage {

    private lateinit var moduleResources: XModuleResources

    override fun initZygote(sparam: IXposedHookZygoteInit.StartupParam) {
        moduleResources = XModuleResources.createInstance(sparam.modulePath, null)
        XposedHelpers.findAndHookMethod(
                Activity::class.java.name,
                null, "onCreate",
                Bundle::class.java,
                object : XC_MethodHook() {
                    override fun beforeHookedMethod(param: MethodHookParam?) {
                        // Your code here.
                    }

                    override fun afterHookedMethod(param: MethodHookParam?) {
                        // Your code here.
                    }
                })
    }

    override fun handleLoadPackage(lpparam: XC_LoadPackage.LoadPackageParam) {
        if (lpparam.packageName == "com.android.browser")
            XposedHelpers.findAndHookMethod(
                Activity::class.java.name,
                lpparam.classLoader, "onCreate",
                Bundle::class.java,
                object : XC_MethodHook() {
                    override fun beforeHookedMethod(param: MethodHookParam?) {
                        // Your code here.
                    }

                    override fun afterHookedMethod(param: MethodHookParam?) {
                        // Your code here.
                    }
                })
    }
}
```

:::
::::

是的，你没有看错，仅仅就需要这些代码，就能完全取代传统的 Xposed API 实现同样的功能。

现在，借助高效强大的 `YukiHookAPI`，你就可以实现一个非常简单的 Xposed 模块。
