import{a as n,o as p,c as f,b as o,d as e,e as t,j as c,q as y,s as b,x as v,h as x,f as q}from"./index.df163828.js";const w={class:"coco-markdown-body"},k=t("h1",null,"Info \u4FE1\u606F\u680F",-1),z=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),I=t("p",null,"Info \u7684\u57FA\u672C\u4F7F\u7528",-1),j=t("p",null,"userInfo \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6635\u79F0",-1),C=t("p",null,"describe \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u63CF\u8FF0\u4FE1\u606F",-1),T=t("p",null,"photo \u63D2\u69FD\u53EF\u4EE5\u63D2\u5165\u4E00\u4E2A\u5934\u50CF",-1),A=t("p",null,"right \u63D2\u69FD\u53EF\u4EE5\u63D2\u5165\u53F3\u4FA7\u5185\u5BB9",-1),B=c("\u5173\u6CE8 TA"),N=t("pre",null,[t("code",{class:"language-html"},`<coco-info userInfo="Coco2001" describe="hello world">
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <coco-button simple type="primary" size="mini">\u5173\u6CE8 TA</coco-button>
  </template>
</coco-info>
`)],-1),U=t("h2",null,"\u66F4\u591A\u6269\u5C55",-1),V=t("p",null,"body \u548C footer \u63D2\u69FD\u53EF\u4EE5\u8FDB\u884C\u63D2\u5165\u8EAB\u4F53\u548C\u9875\u811A\u7684\u5185\u5BB9",-1),D=c("\u5173\u6CE8 TA"),H=c("\u8FD9\u662F\u6211\u4ECA\u5929\u62CD\u7684\u7167\u7247\uFF0C\u597D\u770B\u5417\uFF1F"),S=c("2022-02-12"),E=t("pre",null,[t("code",{class:"language-html"},`<coco-info userInfo="Coco2001" describe="hello world">
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <coco-button simple type="primary" size="mini">\u5173\u6CE8 TA</coco-button>
  </template>

  <template v-slot:body>
    <coco-text block type="success">\u8FD9\u662F\u6211\u4ECA\u5929\u62CD\u7684\u7167\u7247\uFF0C\u597D\u770B\u5417\uFF1F</coco-text>
    <coco-image
      width="300px"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <coco-text type="danger">2022-02-12</coco-text>
  </template>
</coco-info>
`)],-1),P=t("h2",null,"\u6635\u79F0\u8D85\u94FE\u63A5",-1),$=t("p",null,"\u4F7F\u7528 linkUrl \u5C5E\u6027\uFF0C\u4F20\u5165\u4E00\u4E2A url \u53EF\u4EE5\u914D\u7F6E\u70B9\u51FB\u6635\u79F0\u7684\u65F6\u5019\u8FDB\u884C\u8D85\u94FE\u63A5\u8DF3\u8F6C",-1),F=y(`<pre><code class="language-html">&lt;coco-info
  userInfo=&quot;Coco2001&quot;
  describe=&quot;hello world&quot;
  linkUrl=&quot;https://tianyuhao.cn&quot;
&gt;
  &lt;template v-slot:photo&gt;
    &lt;coco-avatar
      round
      :size=&quot;5&quot;
      src=&quot;https://tianyuhao.cn/images/coco-ui/giraffe.jpg&quot;
    /&gt;
  &lt;/template&gt;
&lt;/coco-info&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>userInfo</td><td>\u6635\u79F0</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>describe</td><td>\u63CF\u8FF0\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>linkUrl</td><td>\u70B9\u51FB\u6635\u79F0\u7684\u8DF3\u8F6C\u94FE\u63A5</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>photo</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u5934\u50CF</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u53F3\u4FA7\u5185\u5BB9</td></tr><tr><td>body</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u4E3B\u8981\u90E8\u5206</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u4FE1\u606F\u680F\u7684\u9875\u811A\u90E8\u5206</td></tr></tbody></table>`,5),G=c(" PageHeader \u9875\u5934 "),J=c(" Textarea \u6587\u672C\u57DF "),K={__name:"info",setup(_,{expose:r}){return r({frontmatter:{}}),(i,L)=>{const s=n("coco-avatar"),d=n("coco-button"),a=n("coco-info"),l=n("coco-text"),m=n("coco-image"),h=n("coco-turn-page-item"),g=n("coco-turn-page");return p(),f("div",w,[k,z,I,j,C,T,A,o(a,{userInfo:"Coco2001",describe:"hello world"},{photo:e(()=>[o(s,{round:"",size:5,src:"https://tianyuhao.cn/images/coco-ui/giraffe.jpg"})]),right:e(()=>[o(d,{simple:"",type:"primary",size:"mini"},{default:e(()=>[B]),_:1})]),_:1}),N,U,V,o(a,{userInfo:"Coco2001",describe:"hello world"},{photo:e(()=>[o(s,{round:"",size:5,src:"https://tianyuhao.cn/images/coco-ui/giraffe.jpg"})]),right:e(()=>[o(d,{simple:"",type:"primary",size:"mini"},{default:e(()=>[D]),_:1})]),body:e(()=>[o(l,{block:"",type:"success"},{default:e(()=>[H]),_:1}),o(m,{width:"300px",src:"https://tianyuhao.cn/images/coco-ui/giraffe.jpg"})]),footer:e(()=>[o(l,{type:"danger"},{default:e(()=>[S]),_:1})]),_:1}),E,P,$,o(a,{userInfo:"Coco2001",describe:"hello world",linkUrl:"https://tianyuhao.cn"},{photo:e(()=>[o(s,{round:"",size:5,src:"https://tianyuhao.cn/images/coco-ui/giraffe.jpg"})]),_:1}),F,o(g,{style:{margin:"50px 0"}},{default:e(()=>[o(h,{direction:"left",url:"/component/pageHeader"},{default:e(()=>[G]),_:1}),o(h,{direction:"right",url:"/component/textarea"},{default:e(()=>[J]),_:1})]),_:1})])}}},O={__name:"info",setup(_){return(r,u)=>{const i=b("high");return v((p(),x(q(K),null,null,512)),[[i]])}}};export{O as default};
