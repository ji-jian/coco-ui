import{r as d,o as s,f,B as t,C as e,P as y,l as n,Q as m,x,c as b,u as w}from"./vendor.69ad1cd2.js";const M={class:"tyh-markdown-body"},H=y("<h1>Container \u5E03\u5C40\u5BB9\u5668</h1><h2>\u57FA\u672C\u4F7F\u7528</h2><p>\u7528\u4E8E\u5E03\u5C40\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u5FEB\u901F\u642D\u5EFA\u9875\u9762\u7684\u57FA\u672C\u7ED3\u6784\uFF1A</p><p><code>&lt;tyh-container&gt;</code>\uFF1A\u5916\u5C42\u5BB9\u5668</p><p><code>&lt;tyh-header&gt;</code>\uFF1A\u9876\u680F\u5BB9\u5668</p><p><code>&lt;tyh-aside&gt;</code>\uFF1A\u4FA7\u8FB9\u680F\u5BB9\u5668</p><p><code>&lt;tyh-main&gt;</code>\uFF1A\u4E3B\u8981\u533A\u57DF\u5BB9\u5668</p><p><code>&lt;tyh-footer&gt;</code>\uFF1A\u5E95\u680F\u5BB9\u5668</p><p>\u5E38\u89C1\u9875\u9762\u5E03\u5C40</p>",9),A=n("Header"),q=n("Main"),k=n("Header"),v=n("Main"),F=n("Footer"),B=n("Aside"),C=n("Main"),N=n("Header"),V=n("Aside"),D=n("Main"),z=n("Header"),E=n("Aside"),P=n("Main"),Q=n("Footer"),S=n("Aside"),T=n("Header"),$=n("Main"),j=n("Aside"),G=n("Header"),I=n("Main"),J=n("Footer"),K=y(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
    &lt;tyh-footer&gt;Footer&lt;/tyh-footer&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-aside width=&quot;200px&quot;&gt;Aside&lt;/tyh-aside&gt;
    &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-container&gt;
      &lt;tyh-aside width=&quot;200px&quot;&gt;Aside&lt;/tyh-aside&gt;
      &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-container&gt;
      &lt;tyh-aside width=&quot;200px&quot;&gt;Aside&lt;/tyh-aside&gt;
      &lt;tyh-container&gt;
        &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
        &lt;tyh-footer&gt;Footer&lt;/tyh-footer&gt;
      &lt;/tyh-container&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-aside width=&quot;200px&quot;&gt;Aside&lt;/tyh-aside&gt;
    &lt;tyh-container&gt;
      &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
      &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-aside width=&quot;200px&quot;&gt;Aside&lt;/tyh-aside&gt;
    &lt;tyh-container&gt;
      &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
      &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
      &lt;tyh-footer&gt;Footer&lt;/tyh-footer&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;
&lt;/template&gt;

&lt;style scoped&gt;
  .tyh-header,
  .tyh-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .tyh-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .tyh-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body &gt; .tyh-container {
    margin-bottom: 40px;
  }

  .tyh-container:nth-child(5) .tyh-aside,
  .tyh-container:nth-child(6) .tyh-aside {
    line-height: 260px;
  }

  .tyh-container:nth-child(7) .tyh-aside {
    line-height: 320px;
  }
&lt;/style&gt;
</code></pre><h2>Attributes</h2><p>tyh-container</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5411</td><td>string</td><td>horizontal / vertical</td><td>\u2014\u2014</td></tr></tbody></table><p>tyh-header</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u9876\u680F\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>60px</td></tr></tbody></table><p>tyh-aside</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u4FA7\u8FB9\u680F\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>200px</td></tr></tbody></table><p>tyh-footer</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u5E95\u680F\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>60px</td></tr></tbody></table>`,10),L=n(" Color \u8272\u5F69 "),O=n(" Button \u6309\u94AE "),R={setup(g,{expose:r}){return r({frontmatter:{}}),(c,U)=>{const l=d("tyh-header"),o=d("tyh-main"),h=d("tyh-container"),i=d("tyh-footer"),a=d("tyh-aside"),_=d("tyh-turn-page-item"),p=d("tyh-turn-page");return s(),f("div",M,[H,t(h,null,{default:e(()=>[t(l,null,{default:e(()=>[A]),_:1}),t(o,null,{default:e(()=>[q]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(l,null,{default:e(()=>[k]),_:1}),t(o,null,{default:e(()=>[v]),_:1}),t(i,null,{default:e(()=>[F]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(a,{width:"200px"},{default:e(()=>[B]),_:1}),t(o,null,{default:e(()=>[C]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(l,null,{default:e(()=>[N]),_:1}),t(h,null,{default:e(()=>[t(a,{width:"200px"},{default:e(()=>[V]),_:1}),t(o,null,{default:e(()=>[D]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(l,null,{default:e(()=>[z]),_:1}),t(h,null,{default:e(()=>[t(a,{width:"200px"},{default:e(()=>[E]),_:1}),t(h,null,{default:e(()=>[t(o,null,{default:e(()=>[P]),_:1}),t(i,null,{default:e(()=>[Q]),_:1})]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(a,{width:"200px"},{default:e(()=>[S]),_:1}),t(h,null,{default:e(()=>[t(l,null,{default:e(()=>[T]),_:1}),t(o,null,{default:e(()=>[$]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(a,{width:"200px"},{default:e(()=>[j]),_:1}),t(h,null,{default:e(()=>[t(l,null,{default:e(()=>[G]),_:1}),t(o,null,{default:e(()=>[I]),_:1}),t(i,null,{default:e(()=>[J]),_:1})]),_:1})]),_:1}),K,t(p,{style:{margin:"50px 0"}},{default:e(()=>[t(_,{direction:"left",url:"/component/color"},{default:e(()=>[L]),_:1}),t(_,{direction:"right",url:"/component/button"},{default:e(()=>[O]),_:1})]),_:1})])}}},X={setup(g){return(r,u)=>{const c=m("high");return x((s(),b(w(R),null,null,512)),[[c]])}}};export{X as default};
