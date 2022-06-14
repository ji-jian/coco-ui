import{o as u,c as _,e as t,a as $,b as e,d as b,q as V,j as w,r as c,s as x,x as p,f as h,F as C}from"./index.df163828.js";const y={class:"coco-markdown-body"},k=t("h1",null,"Switch \u5F00\u5173",-1),T=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),U=t("p",null,"\u5F00\u5173\u7684\u57FA\u672C\u4F7F\u7528",-1),q=[k,T,U],B={__name:"switchA",setup(i,{expose:o}){return o({frontmatter:{}}),(d,r)=>(u(),_("div",y,q))}},N={class:"coco-markdown-body"},D=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-switch v-model="value1" />
  <coco-switch v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
<\/script>
`)],-1),E=t("h2",null,"\u6587\u5B57\u63CF\u8FF0",-1),F=t("p",null,"closeText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5DE6\u4FA7\u7684\u6587\u5B57",-1),A=t("p",null,"openText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u53F3\u4FA7\u7684\u6587\u5B57",-1),S=[D,E,F,A],j={__name:"switchB",setup(i,{expose:o}){return o({frontmatter:{}}),(d,r)=>(u(),_("div",N,S))}},z={class:"coco-markdown-body"},G=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-switch v-model="value2" closeText="\u5173\u95ED" openText="\u5F00\u542F" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(true)
<\/script>
`)],-1),H=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),I=t("p",null,"disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u7981\u7528\u5F00\u5173",-1),J=[G,H,I],K={__name:"switchC",setup(i,{expose:o}){return o({frontmatter:{}}),(d,r)=>(u(),_("div",z,J))}},L={class:"coco-markdown-body"},M=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-switch v-model="value3" disabled />
  <coco-switch v-model="value4" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref(true)
  const value4 = ref(false)
<\/script>
`)],-1),O=t("h2",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),P=t("p",null,"closeColor \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u81EA\u5B9A\u4E49\u5173\u95ED\u989C\u8272",-1),Q=t("p",null,"openColor \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u81EA\u5B9A\u4E49\u5F00\u542F\u989C\u8272",-1),R=[M,O,P,Q],W={__name:"switchD",setup(i,{expose:o}){return o({frontmatter:{}}),(d,r)=>(u(),_("div",L,R))}},X={class:"coco-markdown-body"},Y=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-switch v-model="value5" closeColor="red" openColor="green" />
  <coco-switch v-model="value6" closeColor="black" openColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value5 = ref(true)
  const value6 = ref(false)
<\/script>
`)],-1),Z=t("h2",null,"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",-1),tt=t("p",null,"width \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u5C3A\u5BF8 \u6700\u5C0F\u5BBD\u5EA6\u4E3A 20",-1),et=[Y,Z,tt],ot={__name:"switchE",setup(i,{expose:o}){return o({frontmatter:{}}),(d,r)=>(u(),_("div",X,et))}},lt={class:"coco-markdown-body"},nt=V(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-switch v-model=&quot;value7&quot; :width=&quot;60&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value7 = ref(true)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u7684\u503C</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>closeColor</td><td>\u5173\u95ED\u7684\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#dcdfe6</td></tr><tr><td>openColor</td><td>\u5F00\u542F\u7684\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#3a6ff4</td></tr><tr><td>closeText</td><td>\u5DE6\u4FA7\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>openText</td><td>\u53F3\u4FA7\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>width</td><td>\u5F00\u5173\u5C3A\u5BF8</td><td>number</td><td>\u2014\u2014</td><td>40</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table>`,5),st=w(" Table \u8868\u683C "),dt=w(" Calendar \u65E5\u5386 "),rt={__name:"switchF",setup(i,{expose:o}){return o({frontmatter:{}}),(d,r)=>{const v=$("coco-turn-page-item"),f=$("coco-turn-page");return u(),_("div",lt,[nt,e(f,{style:{margin:"50px 0"}},{default:b(()=>[e(v,{direction:"left",url:"/component/table"},{default:b(()=>[st]),_:1}),e(v,{direction:"right",url:"/component/calendar"},{default:b(()=>[dt]),_:1})]),_:1})])}}},at=t("br",null,null,-1),ct=t("br",null,null,-1),ut=t("br",null,null,-1),mt={__name:"switch",setup(i){const o=c(!0),s=c(!0),d=c(!0),r=c(!1),v=c(!0),f=c(!1),g=c(!0);return(_t,l)=>{const a=$("coco-switch"),m=x("high");return u(),_(C,null,[p(e(h(B),null,null,512),[[m]]),e(a,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value=n)},null,8,["modelValue"]),at,e(a,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value=n)},null,8,["modelValue"]),p(e(h(j),null,null,512),[[m]]),e(a,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=n=>s.value=n),closeText:"\u5173\u95ED",openText:"\u5F00\u542F"},null,8,["modelValue"]),p(e(h(K),null,null,512),[[m]]),e(a,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=n=>d.value=n),disabled:""},null,8,["modelValue"]),ct,e(a,{modelValue:r.value,"onUpdate:modelValue":l[4]||(l[4]=n=>r.value=n),disabled:""},null,8,["modelValue"]),p(e(h(W),null,null,512),[[m]]),e(a,{modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=n=>v.value=n),closeColor:"red",openColor:"green"},null,8,["modelValue"]),ut,e(a,{modelValue:f.value,"onUpdate:modelValue":l[6]||(l[6]=n=>f.value=n),closeColor:"black",openColor:"#eee"},null,8,["modelValue"]),p(e(h(ot),null,null,512),[[m]]),e(a,{modelValue:g.value,"onUpdate:modelValue":l[7]||(l[7]=n=>g.value=n),width:60},null,8,["modelValue"]),p(e(h(rt),null,null,512),[[m]])],64)}}};export{mt as default};
