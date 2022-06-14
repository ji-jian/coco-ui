import{o as u,c as p,e as d,a as v,b as o,d as e,q as $,j as l,r as f,s as q,x as g,f as b,F as k}from"./index.df163828.js";const w={class:"coco-markdown-body"},x=d("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),V=d("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),C=d("p",null,"\u62BD\u5C49\u7684\u57FA\u672C\u4F7F\u7528",-1),B=d("p",null,"title \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u62BD\u5C49\u7684\u6807\u9898",-1),D=d("p",null,"footer \u63D2\u69FD\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u533A\u5185\u5BB9",-1),H=[x,V,C,B,D],N={__name:"dialogA",setup(_,{expose:s}){return s({frontmatter:{}}),(c,i)=>(u(),p("div",w,H))}},U={class:"coco-markdown-body"},z=d("pre",null,[d("code",{class:"language-html"},`<template>
  <coco-button simple @click="open1 = true">\u70B9\u6211\u6253\u5F00</coco-button>

  <coco-dialog v-model="open1" title="\u8FD9\u662F\u6807\u9898">
    \u6B22\u8FCE\u4F7F\u7528 coco-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01
    <template v-slot:footer>
      <coco-button type="primary" style="margin-right: 20px">\u786E\u5B9A</coco-button>
      <coco-button type="primary" simple @click="open1 = false">\u53D6\u6D88</coco-button>
    </template>
  </coco-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open1 = ref(false)
<\/script>
`)],-1),A=d("h2",null,"\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),E=d("p",null,"\u4E0D\u5E26\u6709 title \u548C\u5173\u95ED\u6309\u94AE",-1),F=d("p",null,"showHeader \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),S=[z,A,E,F],T={__name:"dialogB",setup(_,{expose:s}){return s({frontmatter:{}}),(c,i)=>(u(),p("div",U,S))}},j={class:"coco-markdown-body"},I=d("pre",null,[d("code",{class:"language-html"},`<template>
  <coco-button simple @click="open2 = true">\u70B9\u6211\u6253\u5F00</coco-button>

  <coco-dialog v-model="open2" title="\u8FD9\u662F\u6807\u9898" :showHeader="false">
    \u6B22\u8FCE\u4F7F\u7528 coco-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01
    <template v-slot:footer>
      <coco-button type="primary" style="margin-right: 20px">\u786E\u5B9A</coco-button>
      <coco-button type="primary" simple @click="open2 = false">\u53D6\u6D88</coco-button>
    </template>
  </coco-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
<\/script>
`)],-1),O=d("h2",null,"\u591A\u5C42\u5D4C\u5957",-1),G=d("p",null,"width \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6",-1),J=d("p",null,"top \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB",-1),K=[I,O,G,J],L={__name:"dialogC",setup(_,{expose:s}){return s({frontmatter:{}}),(c,i)=>(u(),p("div",j,K))}},M={class:"coco-markdown-body"},P=$(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-button simple @click=&quot;open3 = true&quot;&gt;\u70B9\u6211\u6253\u5F00\u7B2C\u4E00\u5C42&lt;/coco-button&gt;

  &lt;coco-dialog v-model=&quot;open3&quot; title=&quot;\u8FD9\u662F\u6807\u9898&quot; width=&quot;50%&quot;&gt;
    \u6B22\u8FCE\u4F7F\u7528 coco-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01
    &lt;coco-button type=&quot;success&quot; @click=&quot;open4 = true&quot;&gt;\u6253\u5F00\u7B2C\u4E8C\u5C42&lt;/coco-button&gt;
    &lt;coco-dialog v-model=&quot;open4&quot; title=&quot;\u8FD9\u662F\u6807\u9898&quot; top=&quot;10vh&quot;&gt;
      hi\uFF5E\u6211\u662F\u7B2C\u4E8C\u5C42\u7684 dialog \u5BF9\u8BDD\u6846
    &lt;/coco-dialog&gt;
  &lt;/coco-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const open3 = ref(false)
  const open4 = ref(false)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>30%</td></tr><tr><td>top</td><td>\u9876\u90E8\u8DDD\u79BB</td><td>string</td><td>\u2014\u2014</td><td>15vh</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>appendToBody</td><td>\u662F\u5426\u9576\u5D4C\u5230 body \u4E0A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>modal</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>modalClose</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showHeader</td><td>\u662F\u5426\u663E\u793A\u5934\u90E8\u4FE1\u606F</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>zIndex</td><td>z-index \u5C5E\u6027</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onOpen</td><td>\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A</td></tr><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table>`,7),Q=l(" Drawer \u62BD\u5C49 "),R={__name:"dialogD",setup(_,{expose:s}){return s({frontmatter:{}}),(c,i)=>{const y=v("coco-turn-page-item"),t=v("coco-turn-page");return u(),p("div",M,[P,o(t,{style:{margin:"50px 0"}},{default:e(()=>[o(y,{direction:"left",url:"/component/drawer"},{default:e(()=>[Q]),_:1})]),_:1})])}}},W=l("\u70B9\u6211\u6253\u5F00"),X=l(" \u6B22\u8FCE\u4F7F\u7528 coco-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01 "),Y=l("\u786E\u5B9A"),Z=l("\u53D6\u6D88"),tt=l("\u70B9\u6211\u6253\u5F00"),ot=l(" \u6B22\u8FCE\u4F7F\u7528 coco-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01 "),et=l("\u786E\u5B9A"),dt=l("\u53D6\u6D88"),nt=l("\u70B9\u6211\u6253\u5F00\u7B2C\u4E00\u5C42"),lt=l(" \u6B22\u8FCE\u4F7F\u7528 coco-ui \u7684 dialog \u5BF9\u8BDD\u6846\uFF01 "),st=l("\u6253\u5F00\u7B2C\u4E8C\u5C42"),rt=l(" hi\uFF5E\u6211\u662F\u7B2C\u4E8C\u5C42\u7684 dialog \u5BF9\u8BDD\u6846 "),ct={__name:"dialog",setup(_){const s=f(!1),r=f(!1),c=f(!1),i=f(!1);return(y,t)=>{const a=v("coco-button"),m=v("coco-dialog"),h=q("high");return u(),p(k,null,[g(o(b(N),null,null,512),[[h]]),o(a,{simple:"",onClick:t[0]||(t[0]=n=>s.value=!0)},{default:e(()=>[W]),_:1}),o(m,{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=n=>s.value=n),title:"\u8FD9\u662F\u6807\u9898"},{footer:e(()=>[o(a,{type:"primary",style:{"margin-right":"20px"}},{default:e(()=>[Y]),_:1}),o(a,{type:"primary",simple:"",onClick:t[1]||(t[1]=n=>s.value=!1)},{default:e(()=>[Z]),_:1})]),default:e(()=>[X]),_:1},8,["modelValue"]),g(o(b(T),null,null,512),[[h]]),o(a,{simple:"",onClick:t[3]||(t[3]=n=>r.value=!0)},{default:e(()=>[tt]),_:1}),o(m,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=n=>r.value=n),title:"\u8FD9\u662F\u6807\u9898",showHeader:!1},{footer:e(()=>[o(a,{type:"primary",style:{"margin-right":"20px"}},{default:e(()=>[et]),_:1}),o(a,{type:"primary",simple:"",onClick:t[4]||(t[4]=n=>r.value=!1)},{default:e(()=>[dt]),_:1})]),default:e(()=>[ot]),_:1},8,["modelValue"]),g(o(b(L),null,null,512),[[h]]),o(a,{simple:"",onClick:t[6]||(t[6]=n=>c.value=!0)},{default:e(()=>[nt]),_:1}),o(m,{modelValue:c.value,"onUpdate:modelValue":t[9]||(t[9]=n=>c.value=n),title:"\u8FD9\u662F\u6807\u9898",width:"50%"},{default:e(()=>[lt,o(a,{type:"success",onClick:t[7]||(t[7]=n=>i.value=!0)},{default:e(()=>[st]),_:1}),o(m,{modelValue:i.value,"onUpdate:modelValue":t[8]||(t[8]=n=>i.value=n),title:"\u8FD9\u662F\u6807\u9898",top:"10vh"},{default:e(()=>[rt]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),g(o(b(R),null,null,512),[[h]])],64)}}};export{ct as default};
