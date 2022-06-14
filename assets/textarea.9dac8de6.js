import{o as c,c as _,e as t,a as g,b as o,d as x,q as y,j as w,r as a,s as z,x as p,f as v,F as U}from"./index.df163828.js";const k={class:"coco-markdown-body"},q=t("h1",null,"Textarea \u6587\u672C\u57DF",-1),B=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),N=t("p",null,"\u6587\u672C\u57DF\u7684\u57FA\u672C\u7528\u6CD5",-1),C=[q,B,N],D={__name:"textareaA",setup(m,{expose:n}){return n({frontmatter:{}}),(r,u)=>(c(),_("div",k,C))}},E={class:"coco-markdown-body"},F=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-textarea v-model="value1" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9..." />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref('')
<\/script>
`)],-1),A=t("h2",null,"\u62C9\u4F38\u65B9\u5F0F",-1),S=t("p",null,"resize \u5C5E\u6027\u53EF\u4EE5\u89C4\u5B9A\u6587\u672C\u57DF\u7684\u62C9\u4F38\u65B9\u5F0F",-1),T=[F,A,S],j={__name:"textareaB",setup(m,{expose:n}){return n({frontmatter:{}}),(r,u)=>(c(),_("div",E,T))}},I={class:"coco-markdown-body"},G=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-textarea v-model="value7" />
  <coco-textarea v-model="value8" resize="vertical" />
  <coco-textarea v-model="value9" resize="horizontal" />
  <coco-textarea v-model="value10" resize="none" />
</template>

<script setup>
  import { ref } from 'vue'
  const value7 = ref('\u968F\u610F\u62C9\u4F38')
  const value8 = ref('\u53EA\u80FD\u7EB5\u5411\u62C9\u4F38')
  const value9 = ref('\u53EA\u80FD\u6A2A\u5411\u62C9\u4F38')
  const value10 = ref('\u7981\u6B62\u62C9\u4F38')
<\/script>
`)],-1),H=t("h2",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),J=t("p",null,"rows \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u7684\u884C\u6570",-1),K=t("p",null,"cols \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u7684\u5BBD\u5EA6",-1),L=[G,H,J,K],M={__name:"textareaC",setup(m,{expose:n}){return n({frontmatter:{}}),(r,u)=>(c(),_("div",I,L))}},O={class:"coco-markdown-body"},P=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-textarea v-model="value3" rows="5" />
  <coco-textarea v-model="value4" cols="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref('')
  const value4 = ref('')
<\/script>
`)],-1),Q=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),R=t("p",null,"disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u7981\u7528\u72B6\u6001",-1),W=[P,Q,R],X={__name:"textareaD",setup(m,{expose:n}){return n({frontmatter:{}}),(r,u)=>(c(),_("div",O,W))}},Y={class:"coco-markdown-body"},Z=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-textarea v-model="value5" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text5 = ref('\u7981\u7528\u72B6\u6001')
<\/script>
`)],-1),tt=t("h2",null,"\u6700\u5927\u4E0A\u9650",-1),et=t("p",null,"max \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u8F93\u5165\u7684\u6700\u5927\u4E0A\u9650\u6587\u672C",-1),ot=[Z,tt,et],lt={__name:"textareaE",setup(m,{expose:n}){return n({frontmatter:{}}),(r,u)=>(c(),_("div",Y,ot))}},nt={class:"coco-markdown-body"},dt=y(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-textarea v-model=&quot;value6&quot; max=&quot;10&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value6 = ref(&#39;&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>max</td><td>\u6700\u5927\u8F93\u5165\u4E0A\u9650</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>resize</td><td>\u62C9\u4F38\u65B9\u5F0F</td><td>string</td><td>vertical / horizontal / none</td><td>\u2014\u2014</td></tr><tr><td>rows</td><td>\u884C\u6570</td><td>string</td><td>\u2014\u2014</td><td>3</td></tr><tr><td>cols</td><td>\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onblur</td><td>\u5931\u53BB\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onfocus</td><td>\u83B7\u53D6\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,5),at=w(" Info \u4FE1\u606F\u680F "),st=w(" Select \u9009\u62E9\u5668 "),rt={__name:"textareaF",setup(m,{expose:n}){return n({frontmatter:{}}),(r,u)=>{const h=g("coco-turn-page-item"),f=g("coco-turn-page");return c(),_("div",nt,[dt,o(f,{style:{margin:"50px 0"}},{default:x(()=>[o(h,{direction:"left",url:"/component/info"},{default:x(()=>[at]),_:1}),o(h,{direction:"right",url:"/component/select"},{default:x(()=>[st]),_:1})]),_:1})])}}},ut=t("br",null,null,-1),ct=t("br",null,null,-1),_t=t("br",null,null,-1),pt={__name:"textarea",setup(m){const n=a(""),s=a(""),r=a(""),u=a("\u7981\u7528\u72B6\u6001"),h=a(""),f=a("\u968F\u610F\u62C9\u4F38"),V=a("\u53EA\u80FD\u7EB5\u5411\u62C9\u4F38"),$=a("\u53EA\u80FD\u6A2A\u5411\u62C9\u4F38"),b=a("\u7981\u6B62\u62C9\u4F38");return(mt,e)=>{const d=g("coco-textarea"),i=z("high");return c(),_(U,null,[p(o(v(D),null,null,512),[[i]]),o(d,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9..."},null,8,["modelValue"]),p(o(v(j),null,null,512),[[i]]),o(d,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=l=>f.value=l)},null,8,["modelValue"]),ut,o(d,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=l=>V.value=l),resize:"vertical"},null,8,["modelValue"]),ct,o(d,{modelValue:$.value,"onUpdate:modelValue":e[3]||(e[3]=l=>$.value=l),resize:"horizontal"},null,8,["modelValue"]),_t,o(d,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=l=>b.value=l),resize:"none"},null,8,["modelValue"]),p(o(v(M),null,null,512),[[i]]),o(d,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value=l),rows:"5"},null,8,["modelValue"]),o(d,{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=l=>r.value=l),cols:"10"},null,8,["modelValue"]),p(o(v(X),null,null,512),[[i]]),o(d,{modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=l=>u.value=l),disabled:""},null,8,["modelValue"]),p(o(v(lt),null,null,512),[[i]]),o(d,{modelValue:h.value,"onUpdate:modelValue":e[8]||(e[8]=l=>h.value=l),max:"10"},null,8,["modelValue"]),p(o(v(rt),null,null,512),[[i]])],64)}}};export{pt as default};
