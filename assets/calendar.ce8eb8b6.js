import{o as d,c as s,e,a as h,b as n,d as _,q as v,j as p,r as f,s as g,x as i,f as m,F as $}from"./index.df163828.js";const b={class:"coco-markdown-body"},V=e("h1",null,"Calendar \u65E5\u5386",-1),w=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),q=e("p",null,"\u65E5\u5386\u7684\u57FA\u672C\u4F7F\u7528",-1),x=e("p",null,"v-model \u7ED1\u5B9A\u4E00\u4E2A\u65E5\u671F",-1),y=[V,w,q,x],W={__name:"calendarA",setup(r,{expose:t}){return t({frontmatter:{}}),(o,a)=>(d(),s("div",b,y))}},k={class:"coco-markdown-body"},D=e("pre",null,[e("code",{class:"language-html"},`<template>
  <coco-calendar v-model="value" />
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
<\/script>
`)],-1),B=e("h2",null,"\u5B9A\u5236\u5927\u5C0F",-1),C=e("p",null,"cellWidth \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u65E5\u671F\u5355\u5143\u683C\u7684\u5BBD\u5EA6",-1),N=e("p",null,"\u6700\u5C0F\u5BBD\u5EA6\u4E3A 28\uFF0C\u5982\u679C\u5C0F\u4E8E 28 \u5219\u6309\u7167 28 \u8BA1\u7B97",-1),U=[D,B,C,N],j={__name:"calendarB",setup(r,{expose:t}){return t({frontmatter:{}}),(o,a)=>(d(),s("div",k,U))}},A={class:"coco-markdown-body"},F=v(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-calendar v-model=&quot;value&quot; :cellWidth=&quot;70&quot; /&gt;
  &lt;coco-calendar v-model=&quot;value&quot; :cellWidth=&quot;10&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value = ref(new Date())
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u7684\u65E5\u671F</td><td>object</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>cellWidth</td><td>\u5355\u5143\u683C\u5BBD\u5EA6</td><td>number</td><td>\u2014\u2014</td><td>50</td></tr></tbody></table>`,3),S=p(" Switch \u5F00\u5173 "),E=p(" Radio \u5355\u9009 "),R={__name:"calendarC",setup(r,{expose:t}){return t({frontmatter:{}}),(o,a)=>{const c=h("coco-turn-page-item"),l=h("coco-turn-page");return d(),s("div",A,[F,n(l,{style:{margin:"50px 0"}},{default:_(()=>[n(c,{direction:"left",url:"/component/switch"},{default:_(()=>[S]),_:1}),n(c,{direction:"right",url:"/component/radio"},{default:_(()=>[E]),_:1})]),_:1})])}}},T=e("br",null,null,-1),z=e("br",null,null,-1),H={__name:"calendar",setup(r){const t=f(new Date);return(u,o)=>{const a=h("coco-calendar"),c=g("high");return d(),s($,null,[i(n(m(W),null,null,512),[[c]]),n(a,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l)},null,8,["modelValue"]),i(n(m(j),null,null,512),[[c]]),n(a,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=l=>t.value=l),cellWidth:70},null,8,["modelValue"]),T,z,n(a,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=l=>t.value=l),cellWidth:10},null,8,["modelValue"]),i(n(m(R),null,null,512),[[c]])],64)}}};export{H as default};
