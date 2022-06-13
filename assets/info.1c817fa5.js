import{r as n,o as p,f as g,B as e,C as o,j as t,l as s,P as f,Q as b,x as v,c as x,u as T}from"./vendor.69ad1cd2.js";const w={class:"tyh-markdown-body"},k=t("h1",null,"Info \u4FE1\u606F\u680F",-1),q=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),z=t("p",null,"Info \u7684\u57FA\u672C\u4F7F\u7528",-1),I=t("p",null,"userInfo \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6635\u79F0",-1),j=t("p",null,"describe \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u63CF\u8FF0\u4FE1\u606F",-1),A=t("p",null,"photo \u63D2\u69FD\u53EF\u4EE5\u63D2\u5165\u4E00\u4E2A\u5934\u50CF",-1),B=t("p",null,"right \u63D2\u69FD\u53EF\u4EE5\u63D2\u5165\u53F3\u4FA7\u5185\u5BB9",-1),N=s("\u5173\u6CE8 TA"),U=t("pre",null,[t("code",{class:"language-html"},`<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">\u5173\u6CE8 TA</tyh-button>
  </template>
</tyh-info>
`)],-1),V=t("h2",null,"\u66F4\u591A\u6269\u5C55",-1),C=t("p",null,"body \u548C footer \u63D2\u69FD\u53EF\u4EE5\u8FDB\u884C\u63D2\u5165\u8EAB\u4F53\u548C\u9875\u811A\u7684\u5185\u5BB9",-1),D=s("\u5173\u6CE8 TA"),H=s("\u8FD9\u662F\u6211\u4ECA\u5929\u62CD\u7684\u7167\u7247\uFF0C\u597D\u770B\u5417\uFF1F"),P=s("2022-02-12"),S=t("pre",null,[t("code",{class:"language-html"},`<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">\u5173\u6CE8 TA</tyh-button>
  </template>

  <template v-slot:body>
    <tyh-text block type="success">\u8FD9\u662F\u6211\u4ECA\u5929\u62CD\u7684\u7167\u7247\uFF0C\u597D\u770B\u5417\uFF1F</tyh-text>
    <tyh-image
      width="300px"
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <tyh-text type="danger">2022-02-12</tyh-text>
  </template>
</tyh-info>
`)],-1),E=t("h2",null,"\u6635\u79F0\u8D85\u94FE\u63A5",-1),Q=t("p",null,"\u4F7F\u7528 linkUrl \u5C5E\u6027\uFF0C\u4F20\u5165\u4E00\u4E2A url \u53EF\u4EE5\u914D\u7F6E\u70B9\u51FB\u6635\u79F0\u7684\u65F6\u5019\u8FDB\u884C\u8D85\u94FE\u63A5\u8DF3\u8F6C",-1),$=f(`<pre><code class="language-html">&lt;tyh-info
  userInfo=&quot;Tyh2001&quot;
  describe=&quot;hello world&quot;
  linkUrl=&quot;https://tianyuhao.cn&quot;
&gt;
  &lt;template v-slot:photo&gt;
    &lt;tyh-avatar
      round
      :size=&quot;5&quot;
      src=&quot;https://tianyuhao.cn/images/tyh-ui/giraffe.jpg&quot;
    /&gt;
  &lt;/template&gt;
&lt;/tyh-info&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>userInfo</td><td>\u6635\u79F0</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>describe</td><td>\u63CF\u8FF0\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>linkUrl</td><td>\u70B9\u51FB\u6635\u79F0\u7684\u8DF3\u8F6C\u94FE\u63A5</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>photo</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u5934\u50CF</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u53F3\u4FA7\u5185\u5BB9</td></tr><tr><td>body</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u4E3B\u8981\u90E8\u5206</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u9875\u811A\u90E8\u5206</td></tr></tbody></table>`,5),F=s(" PageHeader \u9875\u5934 "),G=s(" Textarea \u6587\u672C\u57DF "),J={setup(u,{expose:a}){return a({frontmatter:{}}),(i,K)=>{const h=n("tyh-avatar"),d=n("tyh-button"),r=n("tyh-info"),l=n("tyh-text"),y=n("tyh-image"),c=n("tyh-turn-page-item"),m=n("tyh-turn-page");return p(),g("div",w,[k,q,z,I,j,A,B,e(r,{userInfo:"Tyh2001",describe:"hello world"},{photo:o(()=>[e(h,{round:"",size:5,src:"https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"})]),right:o(()=>[e(d,{simple:"",type:"primary",size:"mini"},{default:o(()=>[N]),_:1})]),_:1}),U,V,C,e(r,{userInfo:"Tyh2001",describe:"hello world"},{photo:o(()=>[e(h,{round:"",size:5,src:"https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"})]),right:o(()=>[e(d,{simple:"",type:"primary",size:"mini"},{default:o(()=>[D]),_:1})]),body:o(()=>[e(l,{block:"",type:"success"},{default:o(()=>[H]),_:1}),e(y,{width:"300px",src:"https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"})]),footer:o(()=>[e(l,{type:"danger"},{default:o(()=>[P]),_:1})]),_:1}),S,E,Q,e(r,{userInfo:"Tyh2001",describe:"hello world",linkUrl:"https://tianyuhao.cn"},{photo:o(()=>[e(h,{round:"",size:5,src:"https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"})]),_:1}),$,e(m,{style:{margin:"50px 0"}},{default:o(()=>[e(c,{direction:"left",url:"/component/pageHeader"},{default:o(()=>[F]),_:1}),e(c,{direction:"right",url:"/component/textarea"},{default:o(()=>[G]),_:1})]),_:1})])}}},M={setup(u){return(a,_)=>{const i=b("high");return v((p(),x(T(J),null,null,512)),[[i]])}}};export{M as default};
