import{_ as s,o as a,c as n,a as l}from"./app-CE-JDe1L.js";const o={},p=l(`<h1 id="ylogdata-class" tabindex="-1"><a class="header-anchor" href="#ylogdata-class" aria-hidden="true">#</a> YLogData <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">data</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YLogData</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> timestamp: </span><span style="color:#F69D50;">Long</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> time: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> tag: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> priority: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> packageName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> userId: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> msg: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> throwable: </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"><span style="color:#ADBAC7;">) : </span><span style="color:#F69D50;">Serializable</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>调试日志数据实现类。</p></blockquote>`,6),e=[p];function t(c,r){return a(),n("div",null,e)}const y=s(o,[["render",t],["__file","YLogData.html.vue"]]);export{y as default};
