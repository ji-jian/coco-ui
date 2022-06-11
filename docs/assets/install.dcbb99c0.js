import{r as p,o as s,f as h,B as e,C as t,P as m,l as a,Q as _,x as l,c as d,u as y}from"./vendor.69ad1cd2.js";const f={class:"tyh-markdown-body"},g=m(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u5B89\u88C5</h2><p>\u63A8\u8350\u4F7F\u7528 npm \u7684\u65B9\u5F0F\u5B89\u88C5</p><pre><code class="language-shell">npm i tyh-ui2
</code></pre><h2>\u5B8C\u6574\u5F15\u5165</h2><p>\u5728 main.js \u4E2D\u5F15\u5165\u4E0B\u9762\u5185\u5BB9</p><pre><code class="language-js">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import tyhUi2 from &#39;tyh-ui2&#39;
import &#39;tyh-ui2/style/index.css&#39;

createApp(App).use(tyhUi2).mount(&#39;#app&#39;)
</code></pre><h2>\u6309\u9700\u5F15\u5165</h2><p>\u4E3A\u4E86\u51CF\u5C0F\u4F53\u79EF\uFF0C\u53EA\u5E0C\u671B\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F</p><pre><code class="language-js">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import {
  TyhButton,
  TyhCard
  // ...
} from &#39;tyh-ui2&#39;
import &#39;tyh-ui2/style/index.css&#39;

createApp(App).use(TyhButton).use(TyhCard).mount(&#39;#app&#39;)
</code></pre>`,10),x=a(" \u9996\u9875 "),v=a(" Color \u8272\u5F69 "),A={setup(c,{expose:o}){return o({frontmatter:{}}),(n,B)=>{const r=p("tyh-turn-page-item"),u=p("tyh-turn-page");return s(),h("div",f,[g,e(u,{style:{margin:"50px 0"}},{default:t(()=>[e(r,{direction:"left",url:"/",icon:"tyh-ui-shouye-xianxing"},{default:t(()=>[x]),_:1}),e(r,{direction:"right",url:"/component/color"},{default:t(()=>[v]),_:1})]),_:1})])}}},T={setup(c){return(o,i)=>{const n=_("high");return l((s(),d(y(A),null,null,512)),[[n]])}}};export{T as default};
