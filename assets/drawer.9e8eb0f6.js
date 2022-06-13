import{o as p,f as c,j as n,r as _,B as o,C as l,P as w,l as r,s as h,Q as q,x as g,u as $,F as k}from"./vendor.69ad1cd2.js";const x={class:"tyh-markdown-body"},C=n("h1",null,"Drawer \u62BD\u5C49",-1),U=n("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),z=n("p",null,"\u62BD\u5C49\u7684\u57FA\u672C\u4F7F\u7528",-1),B=n("p",null,"title \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u62BD\u5C49\u7684\u6807\u9898",-1),N=n("p",null,"direction \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u62BD\u5C49\u7684\u5F39\u51FA\u65B9\u5411",-1),D=[C,U,z,B,N],H={setup(m,{expose:d}){return d({frontmatter:{}}),(s,i)=>(p(),c("div",x,D))}},E={class:"tyh-markdown-body"},F=n("pre",null,[n("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="open = true">\u70B9\u6211\u6253\u5F00</tyh-button>

  <tyh-radio v-model="radio" label="right">\u4ECE\u53F3\u9762\u5F39\u51FA</tyh-radio>
  <tyh-radio v-model="radio" label="left">\u4ECE\u5DE6\u9762\u5F39\u51FA</tyh-radio>
  <tyh-radio v-model="radio" label="bottom">\u4ECE\u4E0B\u9762\u5F39\u51FA</tyh-radio>
  <tyh-radio v-model="radio" label="top">\u4ECE\u4E0A\u9762\u5F39\u51FA</tyh-radio>

  <tyh-drawer v-model="open" :direction="radio" title="\u8FD9\u662F\u6807\u9898">
    hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const radio = ref('right')
  const open = ref(false)
<\/script>
`)],-1),S=n("h2",null,"\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),T=n("p",null,"\u4E0D\u5E26\u6709 title \u548C\u5173\u95ED\u6309\u94AE",-1),j=n("p",null,"showHeader \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),A=[F,S,T,j],I={setup(m,{expose:d}){return d({frontmatter:{}}),(s,i)=>(p(),c("div",E,A))}},O={class:"tyh-markdown-body"},P=n("pre",null,[n("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="open2 = true">\u70B9\u6211\u6253\u5F00</tyh-button>

  <tyh-drawer v-model="open2" direction="right" :showHeader="false">
    hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
<\/script>
`)],-1),Q=n("h2",null,"\u591A\u5C42\u5D4C\u5957",-1),G=n("p",null,"size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u6216\u8005\u9AD8\u5EA6",-1),J=[P,Q,G],K={setup(m,{expose:d}){return d({frontmatter:{}}),(s,i)=>(p(),c("div",O,J))}},L={class:"tyh-markdown-body"},M=w(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-button type=&quot;primary&quot; @click=&quot;open3 = true&quot;&gt;\u70B9\u6211\u6253\u5F00&lt;/tyh-button&gt;

  &lt;tyh-drawer v-model=&quot;open3&quot; direction=&quot;right&quot; size=&quot;50%&quot;&gt;
    &lt;tyh-button type=&quot;primary&quot; @click=&quot;open4 = true&quot;&gt;\u70B9\u6211\u6253\u5F00\u5185\u5C42&lt;/tyh-button&gt;
    hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 tyh-ui!
    &lt;tyh-drawer v-model=&quot;open4&quot; direction=&quot;right&quot;&gt; \u8FD9\u662F\u5185\u5C42\u7684 &lt;/tyh-drawer&gt;
  &lt;/tyh-drawer&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const open3 = ref(false)
  const open4 = ref(false)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>direction</td><td>\u5F39\u51FA\u65B9\u5411</td><td>string</td><td>top / left / bottom / right</td><td>right</td></tr><tr><td>size</td><td>\u5BBD\u5EA6\u6216\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>30%</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>appendToBody</td><td>\u662F\u5426\u9576\u5D4C\u5230 body \u4E0A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>modal</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>modalClose</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showHeader</td><td>\u662F\u5426\u663E\u793A\u5934\u90E8\u4FE1\u606F</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>zIndex</td><td>z-index \u5C5E\u6027</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onOpen</td><td>\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table>`,7),R=r(" Notification \u901A\u77E5 "),W=r(" Dialog \u5BF9\u8BDD\u6846 "),X={setup(m,{expose:d}){return d({frontmatter:{}}),(s,i)=>{const u=_("tyh-turn-page-item"),V=_("tyh-turn-page");return p(),c("div",L,[M,o(V,{style:{margin:"50px 0"}},{default:l(()=>[o(u,{direction:"left",url:"/component/notification"},{default:l(()=>[R]),_:1}),o(u,{direction:"right",url:"/component/dialog"},{default:l(()=>[W]),_:1})]),_:1})])}}},Y=r("\u70B9\u6211\u6253\u5F00"),Z=r("\u4ECE\u53F3\u9762\u5F39\u51FA"),tt=r("\u4ECE\u5DE6\u9762\u5F39\u51FA"),et=r("\u4ECE\u4E0B\u9762\u5F39\u51FA"),ot=r("\u4ECE\u4E0A\u9762\u5F39\u51FA"),dt=r(" hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 tyh-ui! "),lt=r("\u70B9\u6211\u6253\u5F00"),nt=r(" hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 tyh-ui! "),rt=r("\u70B9\u6211\u6253\u5F00"),at=r("\u70B9\u6211\u6253\u5F00\u5185\u5C42"),st=r(" hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 tyh-ui! "),it=r(" \u8FD9\u662F\u5185\u5C42\u7684 "),ht={setup(m){const d=h("right"),a=h(!1),s=h(!1),i=h(!1),u=h(!1);return(V,t)=>{const y=_("tyh-button"),f=_("tyh-radio"),v=_("tyh-drawer"),b=q("high");return p(),c(k,null,[g(o($(H),null,null,512),[[b]]),o(y,{type:"primary",onClick:t[0]||(t[0]=e=>a.value=!0)},{default:l(()=>[Y]),_:1}),o(f,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e),label:"right"},{default:l(()=>[Z]),_:1},8,["modelValue"]),o(f,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=e=>d.value=e),label:"left"},{default:l(()=>[tt]),_:1},8,["modelValue"]),o(f,{modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=e=>d.value=e),label:"bottom"},{default:l(()=>[et]),_:1},8,["modelValue"]),o(f,{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=e=>d.value=e),label:"top"},{default:l(()=>[ot]),_:1},8,["modelValue"]),o(v,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=e=>a.value=e),direction:d.value,title:"\u8FD9\u662F\u6807\u9898"},{default:l(()=>[dt]),_:1},8,["modelValue","direction"]),g(o($(I),null,null,512),[[b]]),o(y,{type:"primary",onClick:t[6]||(t[6]=e=>s.value=!0)},{default:l(()=>[lt]),_:1}),o(v,{modelValue:s.value,"onUpdate:modelValue":t[7]||(t[7]=e=>s.value=e),direction:"right",showHeader:!1},{default:l(()=>[nt]),_:1},8,["modelValue"]),g(o($(K),null,null,512),[[b]]),o(y,{type:"primary",onClick:t[8]||(t[8]=e=>i.value=!0)},{default:l(()=>[rt]),_:1}),o(v,{modelValue:i.value,"onUpdate:modelValue":t[11]||(t[11]=e=>i.value=e),direction:"right",size:"50%"},{default:l(()=>[o(y,{type:"primary",onClick:t[9]||(t[9]=e=>u.value=!0)},{default:l(()=>[at]),_:1}),st,o(v,{modelValue:u.value,"onUpdate:modelValue":t[10]||(t[10]=e=>u.value=e),direction:"right"},{default:l(()=>[it]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),g(o($(X),null,null,512),[[b]])],64)}}};export{ht as default};