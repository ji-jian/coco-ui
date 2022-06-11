import{r as n,o as _,f as r,B as s,C as e,j as t,l,P as u,Q as g,x as m,c as y,u as b}from"./vendor.69ad1cd2.js";const f={class:"tyh-markdown-body"},v=t("h1",null,"Card \u5361\u7247",-1),w=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),x=t("p",null,"\u5361\u7247\u7684\u57FA\u7840\u7528\u6CD5",-1),B=t("p",null,"title \u81EA\u5B9A\u4E49\u5361\u7247\u7684\u4E3B\u6807\u9898",-1),k=t("p",null,"subtitle \u81EA\u5B9A\u4E49\u5361\u7247\u7684\u526F\u6807\u9898",-1),q=l("\u4E3B\u6807\u9898"),C=l("\u526F\u6807\u9898"),N=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52061",-1),V=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52062",-1),j=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52063",-1),D=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52064",-1),S=t("pre",null,[t("code",{class:"language-html"},`<tyh-card>
  <template v-slot:title>\u4E3B\u6807\u9898</template>
  <template v-slot:subtitle>\u526F\u6807\u9898</template>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52061</p>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52062</p>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52063</p>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52064</p>
</tyh-card>
`)],-1),T=t("h2",null,"\u7B80\u7EA6\u5361\u7247",-1),A=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52061",-1),E=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52062",-1),L=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52063",-1),P=t("p",null,"\u8FD9\u662F\u5185\u5BB9\u90E8\u52064",-1),Q=t("pre",null,[t("code",{class:"language-html"},`<tyh-card simple>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52061</p>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52062</p>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52063</p>
  <p>\u8FD9\u662F\u5185\u5BB9\u90E8\u52064</p>
</tyh-card>
`)],-1),$=t("h2",null,"\u9634\u5F71\u663E\u793A\u65F6\u673A",-1),z=t("p",null,"shadow \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u9634\u5F71\u663E\u793A\u65F6\u673A",-1),F=l("\u4E3B\u6807\u9898"),G=l("\u526F\u6807\u9898"),H=t("p",null,"\u603B\u662F\u663E\u793A\u9634\u5F71",-1),I=l("\u4E3B\u6807\u9898"),J=l("\u526F\u6807\u9898"),K=t("p",null,"\u9F20\u6807\u79FB\u5165\u663E\u793A",-1),M=l("\u4E3B\u6807\u9898"),O=l("\u526F\u6807\u9898"),R=t("p",null,"\u4ECE\u4E0D\u663E\u793A",-1),U=u(`<pre><code class="language-html">&lt;tyh-card shadow=&quot;always&quot;&gt;
  &lt;template v-slot:title&gt;\u4E3B\u6807\u9898&lt;/template&gt;
  &lt;template v-slot:subtitle&gt;\u526F\u6807\u9898&lt;/template&gt;
  &lt;p&gt;\u603B\u662F\u663E\u793A\u9634\u5F71&lt;/p&gt;
&lt;/tyh-card&gt;

&lt;tyh-card shadow=&quot;hover&quot;&gt;
  &lt;template v-slot:title&gt;\u4E3B\u6807\u9898&lt;/template&gt;
  &lt;template v-slot:subtitle&gt;\u526F\u6807\u9898&lt;/template&gt;
  &lt;p&gt;\u9F20\u6807\u79FB\u5165\u663E\u793A&lt;/p&gt;
&lt;/tyh-card&gt;

&lt;tyh-card&gt;
  &lt;template v-slot:title&gt;\u4E3B\u6807\u9898&lt;/template&gt;
  &lt;template v-slot:subtitle&gt;\u526F\u6807\u9898&lt;/template&gt;
  &lt;p&gt;\u4ECE\u4E0D\u663E\u793A&lt;/p&gt;
&lt;/tyh-card&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>shadow</td><td>\u9634\u5F71\u663E\u793A\u65F6\u673A</td><td>string</td><td>always / hover</td><td>\u2014\u2014</td></tr><tr><td>body-style</td><td>\u81EA\u5B9A\u4E49 body \u6837\u5F0F</td><td>object</td><td>\u2014\u2014</td><td>{padding:20px}</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u5361\u7247\u7684\u4E3B\u6807\u9898</td></tr><tr><td>subtitle</td><td>\u81EA\u5B9A\u4E49\u5361\u7247\u7684\u526F\u6807\u9898</td></tr></tbody></table>`,5),W=l(" List \u5217\u8868 "),X=l(" Tag \u6807\u7B7E "),Y={setup(c,{expose:d}){return d({frontmatter:{}}),(a,Z)=>{const o=n("tyh-card"),h=n("tyh-turn-page-item"),p=n("tyh-turn-page");return _(),r("div",f,[v,w,x,B,k,s(o,null,{title:e(()=>[q]),subtitle:e(()=>[C]),default:e(()=>[N,V,j,D]),_:1}),S,T,s(o,{simple:""},{default:e(()=>[A,E,L,P]),_:1}),Q,$,z,s(o,{class:"tyh-card-item",shadow:"always"},{title:e(()=>[F]),subtitle:e(()=>[G]),default:e(()=>[H]),_:1}),s(o,{class:"tyh-card-item",shadow:"hover"},{title:e(()=>[I]),subtitle:e(()=>[J]),default:e(()=>[K]),_:1}),s(o,{class:"tyh-card-item"},{title:e(()=>[M]),subtitle:e(()=>[O]),default:e(()=>[R]),_:1}),U,s(p,{style:{margin:"50px 0"}},{default:e(()=>[s(h,{direction:"left",url:"/component/list"},{default:e(()=>[W]),_:1}),s(h,{direction:"right",url:"/component/tag"},{default:e(()=>[X]),_:1})]),_:1})])}}},et={setup(c){return(d,i)=>{const a=g("high");return m((_(),y(b(Y),null,null,512)),[[a]])}}};export{et as default};
