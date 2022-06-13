import{o as i,f as c,j as t,r as y,B as n,C as x,P as U,l as k,s,Q as z,x as _,u as h,F as P}from"./vendor.69ad1cd2.js";const q={class:"tyh-markdown-body"},B=t("h1",null,"Input \u8F93\u5165\u6846",-1),N=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),C=t("p",null,"\u8F93\u5165\u6846\u7684\u57FA\u672C\u7528\u6CD5",-1),D=[B,N,C],E={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",q,D))}},F={class:"tyh-markdown-body"},j=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-input v-model="text1" />
</template>

<script setup>
  import { ref } from 'vue'
  const text1 = ref('')
<\/script>
`)],-1),A=t("h2",null,"\u8F93\u5165\u6846\u7C7B\u578B",-1),I=t("p",null,"type \u5C5E\u6027\u53EF\u4EE5\u89C4\u5B9A\u6587\u672C\u6846\u7C7B\u578B",-1),L=[j,A,I],M={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",F,L))}},Q={class:"tyh-markdown-body"},S=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-input type="text" v-model="text2" />
  <tyh-input type="password" v-model="text3" />
</template>

<script setup>
  import { ref } from 'vue'
  const text2 = ref('')
  const text3 = ref('')
<\/script>
`)],-1),T=t("h2",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),G=t("p",null,"size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u6846\u5C3A\u5BF8",-1),H=[S,T,G],J={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",Q,H))}},K={class:"tyh-markdown-body"},O=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-input size="large" v-model="text4" />
  <tyh-input size="medium" v-model="text5" />
  <tyh-input size="small" v-model="text6" />
  <tyh-input size="mini" v-model="text7" />
</template>

<script setup>
  import { ref } from 'vue'
  const text4 = ref('')
  const text5 = ref('')
  const text6 = ref('')
  const text7 = ref('')
<\/script>
`)],-1),R=t("h2",null,"\u53EF\u6E05\u7A7A",-1),W=t("p",null,"clear \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5E26\u6709\u6E05\u7A7A\u6309\u94AE\u7684\u6587\u672C\u6846",-1),X=[O,R,W],Y={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",K,X))}},Z={class:"tyh-markdown-body"},tt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-input v-model="text8" clear />
</template>

<script setup>
  import { ref } from 'vue'
  const text8 = ref('')
<\/script>
`)],-1),et=t("h2",null,"\u5E26\u6709 icon",-1),nt=t("p",null,"icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u6846\u5E26\u6709\u5176\u4ED6\u56FE\u6807\uFF0C\u76F4\u63A5\u4F20\u9012 icon \u7684\u540D\u5B57\u4F20\u9012\u5373\u53EF",-1),ot=[tt,et,nt],lt={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",Z,ot))}},dt={class:"tyh-markdown-body"},st=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-input v-model="text9" icon="tyh-ui-electronics" />
</template>

<script setup>
  import { ref } from 'vue'
  const text9 = ref('')
<\/script>
`)],-1),rt=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),at=t("p",null,"disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u6846\u7981\u7528\u72B6\u6001",-1),ut=[st,rt,at],it={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",dt,ut))}},ct={class:"tyh-markdown-body"},mt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-input v-model="text10" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text10 = ref('')
<\/script>
`)],-1),pt=t("h2",null,"\u67E5\u770B\u5BC6\u7801",-1),_t=t("p",null,"showPassword \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u67E5\u770B\u5BC6\u7801\u6309\u94AE\uFF0CshowPassword \u4F18\u5148\u7EA7\u5927\u4E8E clear",-1),ht=[mt,pt,_t],ft={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>(i(),c("div",ct,ht))}},vt={class:"tyh-markdown-body"},xt=U(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-input v-model=&quot;text11&quot; type=&quot;password&quot; showPassword /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const text11 = ref(&#39;&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>text / password</td><td>text</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>size</td><td>\u6587\u672C\u6846\u5C3A\u5BF8</td><td>string</td><td>large / medium / small / mini</td><td>medium</td></tr><tr><td>max</td><td>\u6700\u5927\u8F93\u5165\u4E0A\u9650</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>clear</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u6587\u672C\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7\u663E\u793A\u7684\u56FE\u6807</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>enter</td><td>\u6309\u4E0B\u56DE\u8F66\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onblur</td><td>\u5931\u53BB\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onfocus</td><td>\u83B7\u53D6\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,5),yt=k(" Link \u94FE\u63A5 "),$t=k(" Menu \u5BFC\u822A\u680F "),gt={setup(m,{expose:l}){return l({frontmatter:{}}),(a,u)=>{const f=y("tyh-turn-page-item"),v=y("tyh-turn-page");return i(),c("div",vt,[xt,n(v,{style:{margin:"50px 0"}},{default:x(()=>[n(f,{direction:"left",url:"/component/link"},{default:x(()=>[yt]),_:1}),n(f,{direction:"right",url:"/component/menu"},{default:x(()=>[$t]),_:1})]),_:1})])}}},wt={setup(m){const l=s(""),r=s(""),a=s(""),u=s(""),f=s(""),v=s(""),$=s(""),g=s(""),V=s(""),b=s(""),w=s("");return(Vt,e)=>{const d=y("tyh-input"),p=z("high");return i(),c(P,null,[_(n(h(E),null,null,512),[[p]]),n(d,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o)},null,8,["modelValue"]),_(n(h(M),null,null,512),[[p]]),n(d,{type:"text",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o)},null,8,["modelValue"]),n(d,{type:"password",modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value=o)},null,8,["modelValue"]),_(n(h(J),null,null,512),[[p]]),n(d,{size:"large",modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value=o)},null,8,["modelValue"]),n(d,{size:"medium",modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=o=>f.value=o)},null,8,["modelValue"]),n(d,{size:"small",modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=o=>v.value=o)},null,8,["modelValue"]),n(d,{size:"mini",modelValue:$.value,"onUpdate:modelValue":e[6]||(e[6]=o=>$.value=o)},null,8,["modelValue"]),_(n(h(Y),null,null,512),[[p]]),n(d,{modelValue:g.value,"onUpdate:modelValue":e[7]||(e[7]=o=>g.value=o),clear:""},null,8,["modelValue"]),_(n(h(lt),null,null,512),[[p]]),n(d,{modelValue:V.value,"onUpdate:modelValue":e[8]||(e[8]=o=>V.value=o),icon:"tyh-ui-electronics"},null,8,["modelValue"]),_(n(h(it),null,null,512),[[p]]),n(d,{modelValue:b.value,"onUpdate:modelValue":e[9]||(e[9]=o=>b.value=o),disabled:""},null,8,["modelValue"]),_(n(h(ft),null,null,512),[[p]]),n(d,{modelValue:w.value,"onUpdate:modelValue":e[10]||(e[10]=o=>w.value=o),type:"password",showPassword:""},null,8,["modelValue"]),_(n(h(gt),null,null,512),[[p]])],64)}}};export{wt as default};
