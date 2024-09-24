import{_ as s,r as i,o as a,c as d,b as e,d as o,e as n,a as r}from"./app-CE-JDe1L.js";const l={},u=r('<h1 id="looking-for-future" tabindex="-1"><a class="header-anchor" href="#looking-for-future" aria-hidden="true">#</a> Looking for Future</h1><blockquote><p>The future is bright and uncertain, let us look forward to the future development space of <code>YukiHookAPI</code>.</p></blockquote><h2 id="unresolved-issues" tabindex="-1"><a class="header-anchor" href="#unresolved-issues" aria-hidden="true">#</a> Unresolved Issues</h2><blockquote><p>Here are the unresolved issues with <code>YukiHookAPI</code>.</p></blockquote><h3 id="yukihookprefsbridge" tabindex="-1"><a class="header-anchor" href="#yukihookprefsbridge" aria-hidden="true">#</a> YukiHookPrefsBridge</h3><p>Currently only supports LSPosed perfectly, other Xposed Framework need to downgrade the module target api.</p><p>TaiChi may not be supported at all, and TaiChi needs a lower target api to adapt on high-version systems.</p><p>Some Xposed Module developers currently choose the Hook target app self&#39;s SharedPreferences storage solution to solve the module settings sharing problem.</p><p>In the later period, the permissions of the Android system will become more and more strict, and <code>selinux</code> is a big problem currently facing, which needs to be discussed and studied.</p>',9),h={class:"custom-container tip"},c=e("p",{class:"custom-container-title"},"Updated on 2023.10.06",-1),p={href:"https://github.com/libxposed",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[o("In order to ensure the compatibility of most modules, "),e("strong",null,"YukiHookAPI"),o(" plans to use a customized ContentProvider to realize data exchange between the Module App and the Host App in the future, so stay tuned.")],-1),m=r('<h2 id="future-plans" tabindex="-1"><a class="header-anchor" href="#future-plans" aria-hidden="true">#</a> Future Plans</h2><blockquote><p>Features that <code>YukiHookAPI</code> may add later are included here.</p></blockquote><h3 id="lite-version-supported-for-standalone-use" tabindex="-1"><a class="header-anchor" href="#lite-version-supported-for-standalone-use" aria-hidden="true">#</a> Lite Version Supported for Standalone Use</h3><p>If you like the Reflection API of <code>YukiHookAPI</code>, but your project may not need related Hook functions.</p><p>Well here is some good news for you:</p>',5),b=e("code",null,"YukiHookAPI",-1),k={href:"https://github.com/HighCapable/YukiReflection",target:"_blank",rel:"noopener noreferrer"},g=r('<div class="custom-container tip"><p class="custom-container-title">To be Discussed</p><p>At present, the API only supports binding to <strong>xposed_init</strong> through the automatic builder.</p><p>If you don&#39;t like the automatic builder, you must implement the module loading entry yourself.</p><p>In the future, the Lite version with only API functions will be launched according to the number of people required.</p><p>You can submit <strong>issues</strong> with us.</p></div><p>We have provided the Xposed native API listening interface, you can find or view the implementation method of the Demo <a href="../config/xposed-using#native-xposed-api-events">here</a>.</p><h3 id="milestone-plan" tabindex="-1"><a class="header-anchor" href="#milestone-plan" aria-hidden="true">#</a> Milestone Plan</h3><p>The plans below have been published in <code>issues</code> on GitHub, and you can view the progress of each project.</p><p>All functions are expected to be completed in <code>2.0.0</code> version, so stay tuned.</p>',5),_={href:"https://github.com/HighCapable/YukiHookAPI/issues/49",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/HighCapable/YukiHookAPI/issues/48",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/HighCapable/YukiHookAPI/issues/33",target:"_blank",rel:"noopener noreferrer"};function w(I,P){const t=i("ExternalLinkIcon");return a(),d("div",null,[u,e("div",h,[c,e("p",null,[o("LSPosed has now experimentally launched "),e("a",p,[o("Modern Xposed API"),n(t)]),o(", which uses Service to communicate with modules, which will solve the problem of module data storage.")]),f]),m,e("p",null,[o("The core Reflection API of "),b,o(" has been decoupled into "),e("a",k,[o("YukiReflection"),n(t)]),o(" project, which can now be used in any Android project.")]),g,e("ul",null,[e("li",null,[e("a",_,[o("New Xposed Module Config Plan"),n(t)])]),e("li",null,[e("a",y,[o("New Hook Entry Class"),n(t)])]),e("li",null,[e("a",v,[o("New Hook Code Style"),n(t)])])])])}const H=s(l,[["render",w],["__file","future.html.vue"]]);export{H as default};
