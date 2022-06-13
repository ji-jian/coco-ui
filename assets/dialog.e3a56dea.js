import{o as h,f as p,j as d,r as b,B as e,C as o,P as $,l,s as y,Q as k,x as f,u as g,F as q}from"./vendor.69ad1cd2.js";const w={class:"tyh-markdown-body"},x=d("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),V=d("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),C=d("p",null,"\u62BD\u5C49\u7684\u57FA\u672C\u4F7F\u7528",-1),B=d("p",null,"title \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u62BD\u5C49\u7684\u6807\u9898",-1),D=d("p",null,"footer \u63D2\u69FD\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u533A\u5185\u5BB9",-1),H=[x,V,C,B,D],N={setup(_,{expose:s}){return s({frontmatter:{}}),(i,u)=>(h(),p("div",w,H))}},U={class:"tyh-markdown-body"},z=d("pre",null,[d("code",{class:"language-html"},`<template>
  <tyh-button simple @click="open1 = true">\u70B9\u6211\u6253\u5F00</tyh-button>

  <tyh-dialog v-model="open1" title="\u8FD9\u662F\u6807\u9898">
    \u6B22\u8FCE\u4F7F\u7528 tyh-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">\u786E\u5B9A</tyh-button>
      <tyh-button type="primary" simple @click="open1 = false">\u53D6\u6D88</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open1 = ref(false)
<\/script>
`)],-1),E=d("h2",null,"\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),F=d("p",null,"\u4E0D\u5E26\u6709 title \u548C\u5173\u95ED\u6309\u94AE",-1),S=d("p",null,"showHeader \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),T=[z,E,F,S],j={setup(_,{expose:s}){return s({frontmatter:{}}),(i,u)=>(h(),p("div",U,T))}},A={class:"tyh-markdown-body"},I=d("pre",null,[d("code",{class:"language-html"},`<template>
  <tyh-button simple @click="open2 = true">\u70B9\u6211\u6253\u5F00</tyh-button>

  <tyh-dialog v-model="open2" title="\u8FD9\u662F\u6807\u9898" :showHeader="false">
    \u6B22\u8FCE\u4F7F\u7528 tyh-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">\u786E\u5B9A</tyh-button>
      <tyh-button type="primary" simple @click="open2 = false">\u53D6\u6D88</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
<\/script>
`)],-1),O=d("h2",null,"\u591A\u5C42\u5D4C\u5957",-1),P=d("p",null,"width \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6",-1),Q=d("p",null,"top \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB",-1),G=[I,O,P,Q],J={setup(_,{expose:s}){return s({frontmatter:{}}),(i,u)=>(h(),p("div",A,G))}},K={class:"tyh-markdown-body"},L=$(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-button simple @click=&quot;open3 = true&quot;&gt;\u70B9\u6211\u6253\u5F00\u7B2C\u4E00\u5C42&lt;/tyh-button&gt;

  &lt;tyh-dialog v-model=&quot;open3&quot; title=&quot;\u8FD9\u662F\u6807\u9898&quot; width=&quot;50%&quot;&gt;
    \u6B22\u8FCE\u4F7F\u7528 tyh-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01
    &lt;tyh-button type=&quot;success&quot; @click=&quot;open4 = true&quot;&gt;\u6253\u5F00\u7B2C\u4E8C\u5C42&lt;/tyh-button&gt;
    &lt;tyh-dialog v-model=&quot;open4&quot; title=&quot;\u8FD9\u662F\u6807\u9898&quot; top=&quot;10vh&quot;&gt;
      hi\uFF5E\u6211\u662F\u7B2C\u4E8C\u5C42\u7684 dialog \u5BF9\u8BDD\u6846
    &lt;/tyh-dialog&gt;
  &lt;/tyh-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const open3 = ref(false)
  const open4 = ref(false)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>30%</td></tr><tr><td>top</td><td>\u9876\u90E8\u8DDD\u79BB</td><td>string</td><td>\u2014\u2014</td><td>15vh</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>appendToBody</td><td>\u662F\u5426\u9576\u5D4C\u5230 body \u4E0A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>modal</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>modalClose</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showHeader</td><td>\u662F\u5426\u663E\u793A\u5934\u90E8\u4FE1\u606F</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>zIndex</td><td>z-index \u5C5E\u6027</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onOpen</td><td>\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A</td></tr><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table>`,7),M=l(" Drawer \u62BD\u5C49 "),R={setup(_,{expose:s}){return s({frontmatter:{}}),(i,u)=>{const v=b("tyh-turn-page-item"),t=b("tyh-turn-page");return h(),p("div",K,[L,e(t,{style:{margin:"50px 0"}},{default:o(()=>[e(v,{direction:"left",url:"/component/drawer"},{default:o(()=>[M]),_:1})]),_:1})])}}},W=l("\u70B9\u6211\u6253\u5F00"),X=l(" \u6B22\u8FCE\u4F7F\u7528 tyh-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01 "),Y=l("\u786E\u5B9A"),Z=l("\u53D6\u6D88"),tt=l("\u70B9\u6211\u6253\u5F00"),et=l(" \u6B22\u8FCE\u4F7F\u7528 tyh-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01 "),ot=l("\u786E\u5B9A"),dt=l("\u53D6\u6D88"),nt=l("\u70B9\u6211\u6253\u5F00\u7B2C\u4E00\u5C42"),lt=l(" \u6B22\u8FCE\u4F7F\u7528 tyh-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01 "),st=l("\u6253\u5F00\u7B2C\u4E8C\u5C42"),rt=l(" hi\uFF5E\u6211\u662F\u7B2C\u4E8C\u5C42\u7684 dialog \u5BF9\u8BDD\u6846 "),it={setup(_){const s=y(!1),r=y(!1),i=y(!1),u=y(!1);return(v,t)=>{const a=b("tyh-button"),c=b("tyh-dialog"),m=k("high");return h(),p(q,null,[f(e(g(N),null,null,512),[[m]]),e(a,{simple:"",onClick:t[0]||(t[0]=n=>s.value=!0)},{default:o(()=>[W]),_:1}),e(c,{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=n=>s.value=n),title:"\u8FD9\u662F\u6807\u9898"},{footer:o(()=>[e(a,{type:"primary",style:{"margin-right":"20px"}},{default:o(()=>[Y]),_:1}),e(a,{type:"primary",simple:"",onClick:t[1]||(t[1]=n=>s.value=!1)},{default:o(()=>[Z]),_:1})]),default:o(()=>[X]),_:1},8,["modelValue"]),f(e(g(j),null,null,512),[[m]]),e(a,{simple:"",onClick:t[3]||(t[3]=n=>r.value=!0)},{default:o(()=>[tt]),_:1}),e(c,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=n=>r.value=n),title:"\u8FD9\u662F\u6807\u9898",showHeader:!1},{footer:o(()=>[e(a,{type:"primary",style:{"margin-right":"20px"}},{default:o(()=>[ot]),_:1}),e(a,{type:"primary",simple:"",onClick:t[4]||(t[4]=n=>r.value=!1)},{default:o(()=>[dt]),_:1})]),default:o(()=>[et]),_:1},8,["modelValue"]),f(e(g(J),null,null,512),[[m]]),e(a,{simple:"",onClick:t[6]||(t[6]=n=>i.value=!0)},{default:o(()=>[nt]),_:1}),e(c,{modelValue:i.value,"onUpdate:modelValue":t[9]||(t[9]=n=>i.value=n),title:"\u8FD9\u662F\u6807\u9898",width:"50%"},{default:o(()=>[lt,e(a,{type:"success",onClick:t[7]||(t[7]=n=>u.value=!0)},{default:o(()=>[st]),_:1}),e(c,{modelValue:u.value,"onUpdate:modelValue":t[8]||(t[8]=n=>u.value=n),title:"\u8FD9\u662F\u6807\u9898",top:"10vh"},{default:o(()=>[rt]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),f(e(g(R),null,null,512),[[m]])],64)}}};export{it as default};
