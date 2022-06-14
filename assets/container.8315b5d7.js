import{a as d,o as s,c as m,b as t,d as o,q as g,j as c,s as x,x as b,h as w,f as M}from"./index.df163828.js";const y={class:"coco-markdown-body"},H=g("<h1>Container \u5E03\u5C40\u5BB9\u5668</h1><h2>\u57FA\u672C\u4F7F\u7528</h2><p>\u7528\u4E8E\u5E03\u5C40\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u5FEB\u901F\u642D\u5EFA\u9875\u9762\u7684\u57FA\u672C\u7ED3\u6784\uFF1A</p><p><code>&lt;coco-container&gt;</code>\uFF1A\u5916\u5C42\u5BB9\u5668</p><p><code>&lt;coco-header&gt;</code>\uFF1A\u9876\u680F\u5BB9\u5668</p><p><code>&lt;coco-aside&gt;</code>\uFF1A\u4FA7\u8FB9\u680F\u5BB9\u5668</p><p><code>&lt;coco-main&gt;</code>\uFF1A\u4E3B\u8981\u533A\u57DF\u5BB9\u5668</p><p><code>&lt;coco-footer&gt;</code>\uFF1A\u5E95\u680F\u5BB9\u5668</p><p>\u5E38\u89C1\u9875\u9762\u5E03\u5C40</p>",9),q=c("Header"),A=c("Main"),k=c("Header"),v=c("Main"),F=c("Footer"),B=c("Aside"),C=c("Main"),N=c("Header"),V=c("Aside"),D=c("Main"),j=c("Header"),z=c("Aside"),E=c("Main"),S=c("Footer"),T=c("Aside"),$=c("Header"),G=c("Main"),I=c("Aside"),J=c("Header"),K=c("Main"),L=c("Footer"),O=g(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-container&gt;
    &lt;coco-header&gt;Header&lt;/coco-header&gt;
    &lt;coco-main&gt;Main&lt;/coco-main&gt;
  &lt;/coco-container&gt;

  &lt;coco-container&gt;
    &lt;coco-header&gt;Header&lt;/coco-header&gt;
    &lt;coco-main&gt;Main&lt;/coco-main&gt;
    &lt;coco-footer&gt;Footer&lt;/coco-footer&gt;
  &lt;/coco-container&gt;

  &lt;coco-container&gt;
    &lt;coco-aside width=&quot;200px&quot;&gt;Aside&lt;/coco-aside&gt;
    &lt;coco-main&gt;Main&lt;/coco-main&gt;
  &lt;/coco-container&gt;

  &lt;coco-container&gt;
    &lt;coco-header&gt;Header&lt;/coco-header&gt;
    &lt;coco-container&gt;
      &lt;coco-aside width=&quot;200px&quot;&gt;Aside&lt;/coco-aside&gt;
      &lt;coco-main&gt;Main&lt;/coco-main&gt;
    &lt;/coco-container&gt;
  &lt;/coco-container&gt;

  &lt;coco-container&gt;
    &lt;coco-header&gt;Header&lt;/coco-header&gt;
    &lt;coco-container&gt;
      &lt;coco-aside width=&quot;200px&quot;&gt;Aside&lt;/coco-aside&gt;
      &lt;coco-container&gt;
        &lt;coco-main&gt;Main&lt;/coco-main&gt;
        &lt;coco-footer&gt;Footer&lt;/coco-footer&gt;
      &lt;/coco-container&gt;
    &lt;/coco-container&gt;
  &lt;/coco-container&gt;

  &lt;coco-container&gt;
    &lt;coco-aside width=&quot;200px&quot;&gt;Aside&lt;/coco-aside&gt;
    &lt;coco-container&gt;
      &lt;coco-header&gt;Header&lt;/coco-header&gt;
      &lt;coco-main&gt;Main&lt;/coco-main&gt;
    &lt;/coco-container&gt;
  &lt;/coco-container&gt;

  &lt;coco-container&gt;
    &lt;coco-aside width=&quot;200px&quot;&gt;Aside&lt;/coco-aside&gt;
    &lt;coco-container&gt;
      &lt;coco-header&gt;Header&lt;/coco-header&gt;
      &lt;coco-main&gt;Main&lt;/coco-main&gt;
      &lt;coco-footer&gt;Footer&lt;/coco-footer&gt;
    &lt;/coco-container&gt;
  &lt;/coco-container&gt;
&lt;/template&gt;

&lt;style scoped&gt;
  .coco-header,
  .coco-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .coco-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .coco-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body &gt; .coco-container {
    margin-bottom: 40px;
  }

  .coco-container:nth-child(5) .coco-aside,
  .coco-container:nth-child(6) .coco-aside {
    line-height: 260px;
  }

  .coco-container:nth-child(7) .coco-aside {
    line-height: 320px;
  }
&lt;/style&gt;
</code></pre><h2>Attributes</h2><p>coco-container</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5411</td><td>string</td><td>horizontal / vertical</td><td>\u2014\u2014</td></tr></tbody></table><p>coco-header</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u9876\u680F\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>60px</td></tr></tbody></table><p>coco-aside</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u4FA7\u8FB9\u680F\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>200px</td></tr></tbody></table><p>coco-footer</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u5E95\u680F\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>60px</td></tr></tbody></table>`,10),P=c(" Color \u8272\u5F69 "),Q=c(" Button \u6309\u94AE "),R={__name:"container",setup(u,{expose:r}){return r({frontmatter:{}}),(h,U)=>{const l=d("coco-header"),n=d("coco-main"),e=d("coco-container"),i=d("coco-footer"),a=d("coco-aside"),_=d("coco-turn-page-item"),f=d("coco-turn-page");return s(),m("div",y,[H,t(e,null,{default:o(()=>[t(l,null,{default:o(()=>[q]),_:1}),t(n,null,{default:o(()=>[A]),_:1})]),_:1}),t(e,null,{default:o(()=>[t(l,null,{default:o(()=>[k]),_:1}),t(n,null,{default:o(()=>[v]),_:1}),t(i,null,{default:o(()=>[F]),_:1})]),_:1}),t(e,null,{default:o(()=>[t(a,{width:"200px"},{default:o(()=>[B]),_:1}),t(n,null,{default:o(()=>[C]),_:1})]),_:1}),t(e,null,{default:o(()=>[t(l,null,{default:o(()=>[N]),_:1}),t(e,null,{default:o(()=>[t(a,{width:"200px"},{default:o(()=>[V]),_:1}),t(n,null,{default:o(()=>[D]),_:1})]),_:1})]),_:1}),t(e,null,{default:o(()=>[t(l,null,{default:o(()=>[j]),_:1}),t(e,null,{default:o(()=>[t(a,{width:"200px"},{default:o(()=>[z]),_:1}),t(e,null,{default:o(()=>[t(n,null,{default:o(()=>[E]),_:1}),t(i,null,{default:o(()=>[S]),_:1})]),_:1})]),_:1})]),_:1}),t(e,null,{default:o(()=>[t(a,{width:"200px"},{default:o(()=>[T]),_:1}),t(e,null,{default:o(()=>[t(l,null,{default:o(()=>[$]),_:1}),t(n,null,{default:o(()=>[G]),_:1})]),_:1})]),_:1}),t(e,null,{default:o(()=>[t(a,{width:"200px"},{default:o(()=>[I]),_:1}),t(e,null,{default:o(()=>[t(l,null,{default:o(()=>[J]),_:1}),t(n,null,{default:o(()=>[K]),_:1}),t(i,null,{default:o(()=>[L]),_:1})]),_:1})]),_:1}),O,t(f,{style:{margin:"50px 0"}},{default:o(()=>[t(_,{direction:"left",url:"/component/color"},{default:o(()=>[P]),_:1}),t(_,{direction:"right",url:"/component/button"},{default:o(()=>[Q]),_:1})]),_:1})])}}},X={__name:"container",setup(u){return(r,p)=>{const h=x("high");return b((s(),w(M(R),null,null,512)),[[h]])}}};export{X as default};
