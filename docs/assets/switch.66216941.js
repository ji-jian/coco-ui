import{o as c,f as _,j as t,r as b,B as e,C as $,P as V,l as y,s as u,Q as w,x as m,u as p,F as x}from"./vendor.69ad1cd2.js";const C={class:"tyh-markdown-body"},k=t("h1",null,"Switch \u5F00\u5173",-1),T=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),U=t("p",null,"\u5F00\u5173\u7684\u57FA\u672C\u4F7F\u7528",-1),q=[k,T,U],B={setup(i,{expose:l}){return l({frontmatter:{}}),(s,r)=>(c(),_("div",C,q))}},N={class:"tyh-markdown-body"},D=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-switch v-model="value1" />
  <tyh-switch v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
<\/script>
`)],-1),E=t("h2",null,"\u6587\u5B57\u63CF\u8FF0",-1),F=t("p",null,"closeText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5DE6\u4FA7\u7684\u6587\u5B57",-1),S=t("p",null,"openText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u53F3\u4FA7\u7684\u6587\u5B57",-1),j=[D,E,F,S],A={setup(i,{expose:l}){return l({frontmatter:{}}),(s,r)=>(c(),_("div",N,j))}},P={class:"tyh-markdown-body"},Q=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-switch v-model="value2" closeText="\u5173\u95ED" openText="\u5F00\u542F" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(true)
<\/script>
`)],-1),z=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),G=t("p",null,"disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u7981\u7528\u5F00\u5173",-1),H=[Q,z,G],I={setup(i,{expose:l}){return l({frontmatter:{}}),(s,r)=>(c(),_("div",P,H))}},J={class:"tyh-markdown-body"},K=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-switch v-model="value3" disabled />
  <tyh-switch v-model="value4" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref(true)
  const value4 = ref(false)
<\/script>
`)],-1),L=t("h2",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),M=t("p",null,"closeColor \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u81EA\u5B9A\u4E49\u5173\u95ED\u989C\u8272",-1),O=t("p",null,"openColor \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u81EA\u5B9A\u4E49\u5F00\u542F\u989C\u8272",-1),R=[K,L,M,O],W={setup(i,{expose:l}){return l({frontmatter:{}}),(s,r)=>(c(),_("div",J,R))}},X={class:"tyh-markdown-body"},Y=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-switch v-model="value5" closeColor="red" openColor="green" />
  <tyh-switch v-model="value6" closeColor="black" openColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value5 = ref(true)
  const value6 = ref(false)
<\/script>
`)],-1),Z=t("h2",null,"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",-1),tt=t("p",null,"width \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u5C3A\u5BF8 \u6700\u5C0F\u5BBD\u5EA6\u4E3A 20",-1),et=[Y,Z,tt],lt={setup(i,{expose:l}){return l({frontmatter:{}}),(s,r)=>(c(),_("div",X,et))}},ot={class:"tyh-markdown-body"},nt=V(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-switch v-model=&quot;value7&quot; :width=&quot;60&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value7 = ref(true)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u7684\u503C</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>closeColor</td><td>\u5173\u95ED\u7684\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#dcdfe6</td></tr><tr><td>openColor</td><td>\u5F00\u542F\u7684\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#3a6ff4</td></tr><tr><td>closeText</td><td>\u5DE6\u4FA7\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>openText</td><td>\u53F3\u4FA7\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>width</td><td>\u5F00\u5173\u5C3A\u5BF8</td><td>number</td><td>\u2014\u2014</td><td>40</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table>`,5),dt=y(" Table \u8868\u683C "),st=y(" Calendar \u65E5\u5386 "),rt={setup(i,{expose:l}){return l({frontmatter:{}}),(s,r)=>{const v=b("tyh-turn-page-item"),f=b("tyh-turn-page");return c(),_("div",ot,[nt,e(f,{style:{margin:"50px 0"}},{default:$(()=>[e(v,{direction:"left",url:"/component/table"},{default:$(()=>[dt]),_:1}),e(v,{direction:"right",url:"/component/calendar"},{default:$(()=>[st]),_:1})]),_:1})])}}},at=t("br",null,null,-1),ut=t("br",null,null,-1),ct=t("br",null,null,-1),ht={setup(i){const l=u(!0),d=u(!0),s=u(!0),r=u(!1),v=u(!0),f=u(!1),g=u(!0);return(_t,o)=>{const a=b("tyh-switch"),h=w("high");return c(),_(x,null,[m(e(p(B),null,null,512),[[h]]),e(a,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n)},null,8,["modelValue"]),at,e(a,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=n=>l.value=n)},null,8,["modelValue"]),m(e(p(A),null,null,512),[[h]]),e(a,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=n=>d.value=n),closeText:"\u5173\u95ED",openText:"\u5F00\u542F"},null,8,["modelValue"]),m(e(p(I),null,null,512),[[h]]),e(a,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=n=>s.value=n),disabled:""},null,8,["modelValue"]),ut,e(a,{modelValue:r.value,"onUpdate:modelValue":o[4]||(o[4]=n=>r.value=n),disabled:""},null,8,["modelValue"]),m(e(p(W),null,null,512),[[h]]),e(a,{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=n=>v.value=n),closeColor:"red",openColor:"green"},null,8,["modelValue"]),ct,e(a,{modelValue:f.value,"onUpdate:modelValue":o[6]||(o[6]=n=>f.value=n),closeColor:"black",openColor:"#eee"},null,8,["modelValue"]),m(e(p(lt),null,null,512),[[h]]),e(a,{modelValue:g.value,"onUpdate:modelValue":o[7]||(o[7]=n=>g.value=n),width:60},null,8,["modelValue"]),m(e(p(rt),null,null,512),[[h]])],64)}}};export{ht as default};
