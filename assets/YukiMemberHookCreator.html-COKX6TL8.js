import{_ as o,o as s,c as e,a}from"./app-CE-JDe1L.js";const n={},l=a(`<h1 id="yukimemberhookcreator-class" tabindex="-1"><a class="header-anchor" href="#yukimemberhookcreator-class" aria-hidden="true">#</a> YukiMemberHookCreator <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiMemberHookCreator</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> packageParam: </span><span style="color:#F69D50;">PackageParam</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> hookClass: </span><span style="color:#F69D50;">HookClass</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>对 <code>hookClass</code> 进行 inline 处理</p><p><code>v1.1.0</code> <code>修改</code></p><p>修正拼写错误的 <strong>Creater</strong> 命名到 <strong>Creator</strong></p><p><code>v1.1.5</code> <code>修改</code></p><p>私有化构造方法</p><p><strong>功能描述</strong></p><blockquote><p><code>YukiHookAPI</code> 的 <code>Member</code> 核心 Hook 实现类。</p></blockquote><h2 class="deprecated">PRIORITY_DEFAULT - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>请迁移到 <code>YukiHookPriority</code></p><h2 class="deprecated">PRIORITY_LOWEST - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>请迁移到 <code>YukiHookPriority</code></p><h2 class="deprecated">PRIORITY_HIGHEST - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>请迁移到 <code>YukiHookPriority</code></p><h2 class="deprecated">instanceClass - field</h2><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.2</code> <code>修改</code></p><p><s><code>thisClass</code></s> 更名为 <code>instanceClass</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>不再推荐使用</p><h2 class="deprecated">injectMember - method</h2><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>将方法体进行 inline</p><p>增加 <code>priority</code> Hook 优先级</p><p><code>v1.2.0</code> <code>作废</code></p><p>请迁移到另一个 <code>injectMember</code></p><h2 id="injectmember-method" tabindex="-1"><a class="header-anchor" href="#injectmember-method" aria-hidden="true">#</a> injectMember <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">injectMember</span><span style="color:#ADBAC7;">(priority: </span><span style="color:#F69D50;">YukiHookPriority</span><span style="color:#ADBAC7;">, initiate: </span><span style="color:#F69D50;">MemberHookCreator</span><span style="color:#ADBAC7;">.LegacyCreator.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">MemberHookCreator</span><span style="color:#ADBAC7;">.Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>注入要 Hook 的 <code>Method</code>、<code>Constructor</code>。</p></blockquote><h2 class="deprecated">useDangerousOperation - method</h2><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>此功能已被弃用</p><h2 id="memberhookcreator-class" tabindex="-1"><a class="header-anchor" href="#memberhookcreator-class" aria-hidden="true">#</a> MemberHookCreator <span class="symbol">- class</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MemberHookCreator</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> priority: </span><span style="color:#F69D50;">YukiHookPriority</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> hookMode: </span><span style="color:#F69D50;">HookMode</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>增加 <code>priority</code> Hook 优先级</p><p><code>v1.0.81</code> <code>修改</code></p><p>增加 <code>packageName</code> 当前 Hook 的 APP 包名</p><p><code>v1.1.0</code> <code>修改</code></p><p>移除 <code>packageName</code></p><p>修正拼写错误的 <strong>Creater</strong> 命名到 <strong>Creator</strong></p><p><code>v1.2.0</code> <code>修改</code></p><p>移除 <code>tag</code></p><p><code>priority</code> 类型由 <code>Int</code> 变更为 <code>YukiHookPriority</code></p><p>增加 <code>hookMode</code> Hook 模式</p><p><strong>功能描述</strong></p><blockquote><p>Hook 核心功能实现类，查找和处理需要 Hook 的 <code>Method</code>、<code>Constructor</code>。</p></blockquote><h3 id="before-method" tabindex="-1"><a class="header-anchor" href="#before-method" aria-hidden="true">#</a> before <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">before</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">HookParam</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">HookCallback</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>在 <code>Member</code> 执行完成前 Hook。</p></blockquote><h3 id="after-method" tabindex="-1"><a class="header-anchor" href="#after-method" aria-hidden="true">#</a> after <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">HookParam</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">HookCallback</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>在 <code>Member</code> 执行完成后 Hook。</p></blockquote><h3 id="replaceany-method" tabindex="-1"><a class="header-anchor" href="#replaceany-method" aria-hidden="true">#</a> replaceAny <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">replaceAny</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">HookParam</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Any?)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>拦截并替换此 <code>Member</code> 内容，给出返回值。</p></blockquote><h3 id="replaceunit-method" tabindex="-1"><a class="header-anchor" href="#replaceunit-method" aria-hidden="true">#</a> replaceUnit <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">replaceUnit</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">HookParam</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>拦截并替换此 <code>Member</code> 内容，没有返回值，可以称为 <code>Void</code>。</p></blockquote><h3 id="replaceto-method" tabindex="-1"><a class="header-anchor" href="#replaceto-method" aria-hidden="true">#</a> replaceTo <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">replaceTo</span><span style="color:#ADBAC7;">(any: </span><span style="color:#F69D50;">Any</span><span style="color:#ADBAC7;">?)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>拦截并替 <code>Member</code> 返回值。</p></blockquote><h3 id="replacetotrue-method" tabindex="-1"><a class="header-anchor" href="#replacetotrue-method" aria-hidden="true">#</a> replaceToTrue <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">replaceToTrue</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>拦截并替换 <code>Member</code> 返回值为 <code>true</code>。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>确保替换 <strong>Member</strong> 的返回对象为 <strong>Boolean</strong>。</p></div><h3 id="replacetofalse-method" tabindex="-1"><a class="header-anchor" href="#replacetofalse-method" aria-hidden="true">#</a> replaceToFalse <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">replaceToFalse</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>拦截并替换 <code>Member</code> 返回值为 <code>false</code>。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>确保替换 <strong>Member</strong> 的返回对象为 <strong>Boolean</strong>。</p></div><h3 id="intercept-method" tabindex="-1"><a class="header-anchor" href="#intercept-method" aria-hidden="true">#</a> intercept <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">intercept</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>拦截此 <code>Member</code> 。</p></blockquote><p>这将会禁止此 <code>Member</code> 执行并返回 <code>null</code>。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>例如 <strong>Int</strong>、<strong>Long</strong>、<strong>Boolean</strong> 常量返回值的 <strong>Member</strong> 一旦被设置为 <strong>null</strong> 可能会造成 Hook APP 抛出异常。</p></div><h3 id="removeself-method" tabindex="-1"><a class="header-anchor" href="#removeself-method" aria-hidden="true">#</a> removeSelf <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">removeSelf</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Boolean</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>移除当前注入的 Hook <code>Method</code>、<code>Constructor</code> (解除 Hook)。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>你只能在 Hook 回调方法中使用此功能。</p></div><h3 id="legacycreator-class" tabindex="-1"><a class="header-anchor" href="#legacycreator-class" aria-hidden="true">#</a> LegacyCreator <span class="symbol">- class</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">LegacyCreator</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>使用 <code>injectMember</code> 创建的 Hook 核心功能实现类 (旧版本)。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>大部分旧版 API 已被迁移至此处，将不再特殊说明其中包含的旧版 API。</p></div><h3 id="hookcallback-class" tabindex="-1"><a class="header-anchor" href="#hookcallback-class" aria-hidden="true">#</a> HookCallback <span class="symbol">- class</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookCallback</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>Hook 方法体回调实现类。</p></blockquote><h4 id="onfailurethrowtoapp-method" tabindex="-1"><a class="header-anchor" href="#onfailurethrowtoapp-method" aria-hidden="true">#</a> onFailureThrowToApp <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onFailureThrowToApp</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>当回调方法体内发生异常时将异常抛出给当前 Hook APP。</p></blockquote><h3 id="result-class" tabindex="-1"><a class="header-anchor" href="#result-class" aria-hidden="true">#</a> Result <span class="symbol">- class</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 Hook 结果实现类。</p></blockquote><h4 id="result-method" tabindex="-1"><a class="header-anchor" href="#result-method" aria-hidden="true">#</a> result <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">result</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.5</code> <code>修改</code></p><p><s><code>failures</code></s> 修改为 <code>result</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>将方法体进行 inline</p><p><strong>功能描述</strong></p><blockquote><p>创建监听失败事件方法体。</p></blockquote><h4 id="by-method" tabindex="-1"><a class="header-anchor" href="#by-method" aria-hidden="true">#</a> by <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">by</span><span style="color:#ADBAC7;">(condition: () </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Boolean): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>将方法体进行 inline</p><p><strong>功能描述</strong></p><blockquote><p>添加执行 Hook 需要满足的条件，不满足条件将直接停止 Hook。</p></blockquote><h4 id="onhooked-method" tabindex="-1"><a class="header-anchor" href="#onhooked-method" aria-hidden="true">#</a> onHooked <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHooked</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Member</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.70</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 <code>members</code> Hook 成功的回调方法。</p></blockquote><p>在首次 Hook 成功后回调。</p><p>在重复 Hook 时会回调 <code>onAlreadyHooked</code>。</p><h4 id="onalreadyhooked-method" tabindex="-1"><a class="header-anchor" href="#onalreadyhooked-method" aria-hidden="true">#</a> onAlreadyHooked <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onAlreadyHooked</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Member</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.89</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 <code>members</code> 重复 Hook 的回调方法。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>同一个 <strong>hookClass</strong> 中的同一个 <strong>members</strong> 不会被 API 重复 Hook，若由于各种原因重复 Hook 会回调此方法。</p></div><h4 id="onnosuchmemberfailure-method" tabindex="-1"><a class="header-anchor" href="#onnosuchmemberfailure-method" aria-hidden="true">#</a> onNoSuchMemberFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onNoSuchMemberFailure</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 <code>members</code> 不存在发生错误的回调方法。</p></blockquote><h4 id="onconductfailure-method" tabindex="-1"><a class="header-anchor" href="#onconductfailure-method" aria-hidden="true">#</a> onConductFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onConductFailure</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">HookParam</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 Hook 进行过程中发生错误的回调方法。</p></blockquote><h4 id="onhookingfailure-method" tabindex="-1"><a class="header-anchor" href="#onhookingfailure-method" aria-hidden="true">#</a> onHookingFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHookingFailure</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 Hook 开始时发生的错误的回调方法。</p></blockquote><h4 id="onallfailure-method" tabindex="-1"><a class="header-anchor" href="#onallfailure-method" aria-hidden="true">#</a> onAllFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onAllFailure</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>监听全部 Hook 过程发生错误的回调方法。</p></blockquote><h4 id="ignorednosuchmemberfailure-method" tabindex="-1"><a class="header-anchor" href="#ignorednosuchmemberfailure-method" aria-hidden="true">#</a> ignoredNoSuchMemberFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">ignoredNoSuchMemberFailure</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>忽略 <code>members</code> 不存在发生的错误。</p></blockquote><h4 id="ignoredconductfailure-method" tabindex="-1"><a class="header-anchor" href="#ignoredconductfailure-method" aria-hidden="true">#</a> ignoredConductFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">ignoredConductFailure</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>忽略 Hook 进行过程中发生的错误。</p></blockquote><h4 id="ignoredhookingfailure-method" tabindex="-1"><a class="header-anchor" href="#ignoredhookingfailure-method" aria-hidden="true">#</a> ignoredHookingFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">ignoredHookingFailure</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>忽略 Hook 开始时发生的错误。</p></blockquote><h4 id="ignoredallfailure-method" tabindex="-1"><a class="header-anchor" href="#ignoredallfailure-method" aria-hidden="true">#</a> ignoredAllFailure <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">ignoredAllFailure</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>忽略全部 Hook 过程发生的错误。</p></blockquote><h4 id="remove-method" tabindex="-1"><a class="header-anchor" href="#remove-method" aria-hidden="true">#</a> remove <span class="symbol">- method</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">remove</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Boolean</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>移除当前注入的 Hook <code>Method</code>、<code>Constructor</code> (解除 Hook)。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>你只能在 Hook 成功后才能解除 Hook，可监听 <strong>onHooked</strong> 事件。</p></div><h2 id="result-class-1" tabindex="-1"><a class="header-anchor" href="#result-class-1" aria-hidden="true">#</a> Result <span class="symbol">- class</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听全部 Hook 结果实现类。</p></blockquote><h3 id="result-method-1" tabindex="-1"><a class="header-anchor" href="#result-method-1" aria-hidden="true">#</a> result <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">result</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><code>v1.0.5</code> <code>修改</code></p><p><s><code>failures</code></s> 修改为 <code>result</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>将方法体进行 inline</p><p><strong>功能描述</strong></p><blockquote><p>创建监听事件方法体。</p></blockquote><h3 id="by-method-1" tabindex="-1"><a class="header-anchor" href="#by-method-1" aria-hidden="true">#</a> by <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">by</span><span style="color:#ADBAC7;">(condition: () </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Boolean): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>将方法体进行 inline</p><p><strong>功能描述</strong></p><blockquote><p>添加执行 Hook 需要满足的条件，不满足条件将直接停止 Hook。</p></blockquote><h3 id="onpreparehook-method" tabindex="-1"><a class="header-anchor" href="#onpreparehook-method" aria-hidden="true">#</a> onPrepareHook <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onPrepareHook</span><span style="color:#ADBAC7;">(callback: () </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.70</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 <code>hookClass</code> 存在时准备开始 Hook 的操作。</p></blockquote><h3 id="onhookclassnotfoundfailure-method" tabindex="-1"><a class="header-anchor" href="#onhookclassnotfoundfailure-method" aria-hidden="true">#</a> onHookClassNotFoundFailure <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHookClassNotFoundFailure</span><span style="color:#ADBAC7;">(result: (</span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">) -&gt; </span><span style="color:#F69D50;">Unit</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 <code>hookClass</code> 找不到时发生错误的回调方法。</p></blockquote><h3 id="ignoredhookclassnotfoundfailure-method" tabindex="-1"><a class="header-anchor" href="#ignoredhookclassnotfoundfailure-method" aria-hidden="true">#</a> ignoredHookClassNotFoundFailure <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">ignoredHookClassNotFoundFailure</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Result</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>忽略 <code>hookClass</code> 找不到时出现的错误。</p></blockquote>`,284),p=[l];function c(t,r){return s(),e("div",null,p)}const i=o(n,[["render",c],["__file","YukiMemberHookCreator.html.vue"]]);export{i as default};
