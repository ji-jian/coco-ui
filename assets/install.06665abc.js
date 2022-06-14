import{a as r,o as p,c as _,b as o,d as e,q as m,j as s,s as l,x as d,h,f}from"./index.df163828.js";const g={class:"coco-markdown-body"},x=m(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u5B89\u88C5</h2><p>\u63A8\u8350\u4F7F\u7528 npm \u7684\u65B9\u5F0F\u5B89\u88C5</p><pre><code class="language-shell">npm i coco-ui2
</code></pre><h2>\u5B8C\u6574\u5F15\u5165</h2><p>\u5728 main.js \u4E2D\u5F15\u5165\u4E0B\u9762\u5185\u5BB9</p><pre><code class="language-js">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import cocoUi2 from &#39;coco-ui2&#39;
import &#39;coco-ui2/style/index.css&#39;

createApp(App).use(cocoUi2).mount(&#39;#app&#39;)
</code></pre><h2>\u6309\u9700\u5F15\u5165</h2><p>\u4E3A\u4E86\u51CF\u5C0F\u4F53\u79EF\uFF0C\u53EA\u5E0C\u671B\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F</p><pre><code class="language-js">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import {
  CocoButton,
  CocoCard
  // ...
} from &#39;coco-ui2&#39;
import &#39;coco-ui2/style/index.css&#39;

createApp(App).use(CocoButton).use(CocoCard).mount(&#39;#app&#39;)
</code></pre>`,10),v=s(" \u9996\u9875 "),A=s(" Color \u8272\u5F69 "),C={__name:"install",setup(a,{expose:t}){return t({frontmatter:{}}),(c,y)=>{const n=r("coco-turn-page-item"),u=r("coco-turn-page");return p(),_("div",g,[x,o(u,{style:{margin:"50px 0"}},{default:e(()=>[o(n,{direction:"left",url:"/",icon:"coco-ui-shouye-xianxing"},{default:e(()=>[v]),_:1}),o(n,{direction:"right",url:"/component/color"},{default:e(()=>[A]),_:1})]),_:1})])}}},j={__name:"install",setup(a){return(t,i)=>{const c=l("high");return d((p(),h(f(C),null,null,512)),[[c]])}}};export{j as default};
