import{o as d,f as r,j as e,r as m,B as n,C as _,P as v,l as p,s as f,Q as g,x as h,u as i,F as y}from"./vendor.69ad1cd2.js";const $={class:"tyh-markdown-body"},V=e("h1",null,"Calendar \u65E5\u5386",-1),b=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),w=e("p",null,"\u65E5\u5386\u7684\u57FA\u672C\u4F7F\u7528",-1),x=e("p",null,"v-model \u7ED1\u5B9A\u4E00\u4E2A\u65E5\u671F",-1),q=[V,b,w,x],W={setup(u,{expose:t}){return t({frontmatter:{}}),(l,a)=>(d(),r("div",$,q))}},k={class:"tyh-markdown-body"},D=e("pre",null,[e("code",{class:"language-html"},`<template>
  <tyh-calendar v-model="value" />
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
<\/script>
`)],-1),B=e("h2",null,"\u5B9A\u5236\u5927\u5C0F",-1),C=e("p",null,"cellWidth \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u65E5\u671F\u5355\u5143\u683C\u7684\u5BBD\u5EA6",-1),N=e("p",null,"\u6700\u5C0F\u5BBD\u5EA6\u4E3A 28\uFF0C\u5982\u679C\u5C0F\u4E8E 28 \u5219\u6309\u7167 28 \u8BA1\u7B97",-1),U=[D,B,C,N],j={setup(u,{expose:t}){return t({frontmatter:{}}),(l,a)=>(d(),r("div",k,U))}},F={class:"tyh-markdown-body"},S=v(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-calendar v-model=&quot;value&quot; :cellWidth=&quot;70&quot; /&gt;
  &lt;tyh-calendar v-model=&quot;value&quot; :cellWidth=&quot;10&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value = ref(new Date())
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u7684\u65E5\u671F</td><td>object</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>cellWidth</td><td>\u5355\u5143\u683C\u5BBD\u5EA6</td><td>number</td><td>\u2014\u2014</td><td>50</td></tr></tbody></table>`,3),A=p(" Switch \u5F00\u5173 "),E=p(" Radio \u5355\u9009 "),P={setup(u,{expose:t}){return t({frontmatter:{}}),(l,a)=>{const s=m("tyh-turn-page-item"),o=m("tyh-turn-page");return d(),r("div",F,[S,n(o,{style:{margin:"50px 0"}},{default:_(()=>[n(s,{direction:"left",url:"/component/switch"},{default:_(()=>[A]),_:1}),n(s,{direction:"right",url:"/component/radio"},{default:_(()=>[E]),_:1})]),_:1})])}}},Q=e("br",null,null,-1),R=e("br",null,null,-1),z={setup(u){const t=f(new Date);return(c,l)=>{const a=m("tyh-calendar"),s=g("high");return d(),r(y,null,[h(n(i(W),null,null,512),[[s]]),n(a,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o)},null,8,["modelValue"]),h(n(i(j),null,null,512),[[s]]),n(a,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value=o),cellWidth:70},null,8,["modelValue"]),Q,R,n(a,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value=o),cellWidth:10},null,8,["modelValue"]),h(n(i(P),null,null,512),[[s]])],64)}}};export{z as default};
