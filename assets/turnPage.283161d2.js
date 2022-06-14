import{a as u,o as a,c as _,b as t,d as o,e,j as c,q as h,s as g,x as p,h as m,f}from"./index.df163828.js";const b={class:"coco-markdown-body"},q=e("h1",null,"TurnPage \u7FFB\u9875",-1),x=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),y=e("p",null,"\u7FFB\u9875\u7684\u57FA\u7840\u7528\u6CD5",-1),k=e("p",null,"direction \u5C5E\u6027\u7528\u4E8E\u914D\u7F6E\u5B50\u7EC4\u4EF6\uFF0C\u6B64\u5C5E\u6027\u4E3A\u5FC5\u4F20\u53C2\u6570\uFF0C\u5B83\u51B3\u5B9A\u4E86\u4F60\u7684\u7FFB\u9875\u6807\u8BC6\u6587\u5B57\u7684\u663E\u793A\u4F4D\u7F6E",-1),v=c("\u4E0A\u4E00\u9875"),B=c("\u4E0B\u4E00\u9875"),N=e("pre",null,[e("code",{class:"language-html"},`<coco-turn-page>
  <coco-turn-page-item direction="left" url="">\u4E0A\u4E00\u9875</coco-turn-page-item>
  <coco-turn-page-item direction="right" url="">\u4E0B\u4E00\u9875</coco-turn-page-item>
</coco-turn-page>
`)],-1),V=e("h2",null,"\u5C45\u4E2D\u663E\u793A",-1),w=e("p",null,"center \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5C45\u4E2D\u663E\u793A",-1),C=c(" \u4E0A\u4E00\u9875 - \u5C45\u4E2D "),P=c(" \u4E0B\u4E00\u9875 - \u5C45\u4E2D "),T=e("pre",null,[e("code",{class:"language-html"},`<coco-turn-page center>
  <coco-turn-page-item direction="left" url="">
    \u4E0A\u4E00\u9875 - \u5C45\u4E2D
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="">
    \u4E0B\u4E00\u9875 - \u5C45\u4E2D
  </coco-turn-page-item>
</coco-turn-page>
`)],-1),D=e("h2",null,"\u81EA\u5B9A\u4E49\u56FE\u6807",-1),j=e("p",null,"icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5176\u4ED6 icon",-1),A=c(" \u9996\u9875 "),E=c(" \u4E0B\u4E00\u9875 "),S=h(`<pre><code class="language-html">&lt;coco-turn-page&gt;
  &lt;coco-turn-page-item direction=&quot;left&quot; url=&quot;&quot; icon=&quot;coco-ui-shouye-xianxing&quot;&gt;
    \u9996\u9875
  &lt;/coco-turn-page-item&gt;
  &lt;coco-turn-page-item direction=&quot;right&quot; url=&quot;&quot; icon=&quot;coco-ui-direction-right&quot;&gt;
    \u4E0B\u4E00\u9875
  &lt;/coco-turn-page-item&gt;
&lt;/coco-turn-page&gt;
</code></pre><h2>Attributes</h2><p>coco-turn-page</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>center</td><td>\u5C45\u4E2D\u663E\u793A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><p>coco-turn-page-item</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u6587\u5B57\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>\u2014\u2014</td></tr><tr><td>url</td><td>\u8DF3\u8F6C\u7684\u8DEF\u7531</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>icon</td><td>\u5DE6\u53F3\u7684\u56FE\u6807</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>prohibit</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table>`,6),$=c(" Crumbs \u9762\u5305\u5C51 "),z=c(" BackTop \u56DE\u5230\u9876\u90E8 "),F={__name:"turnPage",setup(l,{expose:d}){return d({frontmatter:{}}),(i,G)=>{const n=u("coco-turn-page-item"),r=u("coco-turn-page");return a(),_("div",b,[q,x,y,k,t(r,null,{default:o(()=>[t(n,{direction:"left",url:""},{default:o(()=>[v]),_:1}),t(n,{direction:"right",url:""},{default:o(()=>[B]),_:1})]),_:1}),N,V,w,t(r,{center:""},{default:o(()=>[t(n,{direction:"left",url:""},{default:o(()=>[C]),_:1}),t(n,{direction:"right",url:""},{default:o(()=>[P]),_:1})]),_:1}),T,D,j,t(r,null,{default:o(()=>[t(n,{direction:"left",url:"",icon:"coco-ui-shouye-xianxing"},{default:o(()=>[A]),_:1}),t(n,{direction:"right",url:"",icon:"coco-ui-direction-right"},{default:o(()=>[E]),_:1})]),_:1}),S,t(r,{style:{margin:"50px 0"}},{default:o(()=>[t(n,{direction:"left",url:"/component/crumbs"},{default:o(()=>[$]),_:1}),t(n,{direction:"right",url:"/component/backtop"},{default:o(()=>[z]),_:1})]),_:1})])}}},I={__name:"turnPage",setup(l){return(d,s)=>{const i=g("high");return p((a(),m(f(F),null,null,512)),[[i]])}}};export{I as default};
