import{r as u,o as l,f as s,B as t,C as e,j as n,l as r,P as _,Q as g,x as p,c as y,u as m}from"./vendor.69ad1cd2.js";const f={class:"tyh-markdown-body"},b=n("h1",null,"TurnPage \u7FFB\u9875",-1),q=n("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),x=n("p",null,"\u7FFB\u9875\u7684\u57FA\u7840\u7528\u6CD5",-1),k=n("p",null,"direction \u5C5E\u6027\u7528\u4E8E\u914D\u7F6E\u5B50\u7EC4\u4EF6\uFF0C\u6B64\u5C5E\u6027\u4E3A\u5FC5\u4F20\u53C2\u6570\uFF0C\u5B83\u51B3\u5B9A\u4E86\u4F60\u7684\u7FFB\u9875\u6807\u8BC6\u6587\u5B57\u7684\u663E\u793A\u4F4D\u7F6E",-1),v=r("\u4E0A\u4E00\u9875"),B=r("\u4E0B\u4E00\u9875"),C=n("pre",null,[n("code",{class:"language-html"},`<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="">\u4E0A\u4E00\u9875</tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">\u4E0B\u4E00\u9875</tyh-turn-page-item>
</tyh-turn-page>
`)],-1),N=n("h2",null,"\u5C45\u4E2D\u663E\u793A",-1),V=n("p",null,"center \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5C45\u4E2D\u663E\u793A",-1),w=r(" \u4E0A\u4E00\u9875 - \u5C45\u4E2D "),T=r(" \u4E0B\u4E00\u9875 - \u5C45\u4E2D "),D=n("pre",null,[n("code",{class:"language-html"},`<tyh-turn-page center>
  <tyh-turn-page-item direction="left" url="">
    \u4E0A\u4E00\u9875 - \u5C45\u4E2D
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">
    \u4E0B\u4E00\u9875 - \u5C45\u4E2D
  </tyh-turn-page-item>
</tyh-turn-page>
`)],-1),P=n("h2",null,"\u81EA\u5B9A\u4E49\u56FE\u6807",-1),j=n("p",null,"icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5176\u4ED6 icon",-1),A=r(" \u9996\u9875 "),E=r(" \u4E0B\u4E00\u9875 "),Q=_(`<pre><code class="language-html">&lt;tyh-turn-page&gt;
  &lt;tyh-turn-page-item direction=&quot;left&quot; url=&quot;&quot; icon=&quot;tyh-ui-shouye-xianxing&quot;&gt;
    \u9996\u9875
  &lt;/tyh-turn-page-item&gt;
  &lt;tyh-turn-page-item direction=&quot;right&quot; url=&quot;&quot; icon=&quot;tyh-ui-direction-right&quot;&gt;
    \u4E0B\u4E00\u9875
  &lt;/tyh-turn-page-item&gt;
&lt;/tyh-turn-page&gt;
</code></pre><h2>Attributes</h2><p>tyh-turn-page</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>center</td><td>\u5C45\u4E2D\u663E\u793A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><p>tyh-turn-page-item</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u6587\u5B57\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>\u2014\u2014</td></tr><tr><td>url</td><td>\u8DF3\u8F6C\u7684\u8DEF\u7531</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>icon</td><td>\u5DE6\u53F3\u7684\u56FE\u6807</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>prohibit</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table>`,6),S=r(" Crumbs \u9762\u5305\u5C51 "),$=r(" BackTop \u56DE\u5230\u9876\u90E8 "),z={setup(a,{expose:i}){return i({frontmatter:{}}),(h,F)=>{const o=u("tyh-turn-page-item"),d=u("tyh-turn-page");return l(),s("div",f,[b,q,x,k,t(d,null,{default:e(()=>[t(o,{direction:"left",url:""},{default:e(()=>[v]),_:1}),t(o,{direction:"right",url:""},{default:e(()=>[B]),_:1})]),_:1}),C,N,V,t(d,{center:""},{default:e(()=>[t(o,{direction:"left",url:""},{default:e(()=>[w]),_:1}),t(o,{direction:"right",url:""},{default:e(()=>[T]),_:1})]),_:1}),D,P,j,t(d,null,{default:e(()=>[t(o,{direction:"left",url:"",icon:"tyh-ui-shouye-xianxing"},{default:e(()=>[A]),_:1}),t(o,{direction:"right",url:"",icon:"tyh-ui-direction-right"},{default:e(()=>[E]),_:1})]),_:1}),Q,t(d,{style:{margin:"50px 0"}},{default:e(()=>[t(o,{direction:"left",url:"/component/crumbs"},{default:e(()=>[S]),_:1}),t(o,{direction:"right",url:"/component/backtop"},{default:e(()=>[$]),_:1})]),_:1})])}}},H={setup(a){return(i,c)=>{const h=g("high");return p((l(),y(m(z),null,null,512)),[[h]])}}};export{H as default};
