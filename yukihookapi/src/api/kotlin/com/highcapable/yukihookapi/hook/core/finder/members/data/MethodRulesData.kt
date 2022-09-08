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
 * This file is Created by fankes on 2022/9/4.
 */
package com.highcapable.yukihookapi.hook.core.finder.members.data

import com.highcapable.yukihookapi.hook.core.finder.type.NameConditions
import java.lang.reflect.Method

/**
 * [Method] 规则查询数据类
 * @param name 名称
 * @param nameConditions 名称规则
 * @param paramTypes 参数类型数组
 * @param paramCount 参数个数
 * @param paramCountRange 参数个数范围
 * @param returnType 返回值类型
 */
@PublishedApi
internal class MethodRulesData internal constructor(
    var name: String = "",
    var nameConditions: NameConditions? = null,
    var paramTypes: Array<out Class<*>>? = null,
    var paramCount: Int = -1,
    var paramCountRange: IntRange = IntRange.EMPTY,
    var returnType: Any? = null
) : MemberRulesData() {

    override val objectName get() = "Method"

    override val isInitialize
        get() = super.isInitializeOfSuper || name.isNotBlank() || nameConditions != null || paramTypes != null ||
                paramCount >= 0 || paramCountRange != IntRange.EMPTY || returnType != null

    override fun hashCode(other: Any?) =
        super.hashCode(other) + "[$name][$nameConditions][$paramTypes][$paramCount][$paramCountRange][$returnType]".hashCode()
}