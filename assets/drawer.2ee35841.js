import{o as p,c as m,e as l,a as _,b as e,d as n,q as w,j as r,r as u,s as q,x as $,f as y,F as k}from"./index.df163828.js";const x={class:"coco-markdown-body"},C=l("h1",null,"Drawer \u62BD\u5C49",-1),U=l("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),z=l("p",null,"\u62BD\u5C49\u7684\u57FA\u672C\u4F7F\u7528",-1),B=l("p",null,"title \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u62BD\u5C49\u7684\u6807\u9898",-1),D=l("p",null,"direction \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u62BD\u5C49\u7684\u5F39\u51FA\u65B9\u5411",-1),N=[C,U,z,B,D],H={__name:"drawerA",setup(h,{expose:d}){return d({frontmatter:{}}),(c,s)=>(p(),m("div",x,N))}},A={class:"coco-markdown-body"},E=l("pre",null,[l("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="open = true">\u70B9\u6211\u6253\u5F00</coco-button>

  <coco-radio v-model="radio" label="right">\u4ECE\u53F3\u9762\u5F39\u51FA</coco-radio>
  <coco-radio v-model="radio" label="left">\u4ECE\u5DE6\u9762\u5F39\u51FA</coco-radio>
  <coco-radio v-model="radio" label="bottom">\u4ECE\u4E0B\u9762\u5F39\u51FA</coco-radio>
  <coco-radio v-model="radio" label="top">\u4ECE\u4E0A\u9762\u5F39\u51FA</coco-radio>

  <coco-drawer v-model="open" :direction="radio" title="\u8FD9\u662F\u6807\u9898">
    hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 coco-ui!
  </coco-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const radio = ref('right')
  const open = ref(false)
<\/script>
`)],-1),F=l("h2",null,"\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),S=l("p",null,"\u4E0D\u5E26\u6709 title \u548C\u5173\u95ED\u6309\u94AE",-1),T=l("p",null,"showHeader \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u5E26\u5934\u90E8\u4FE1\u606F",-1),j=[E,F,S,T],I={__name:"drawerB",setup(h,{expose:d}){return d({frontmatter:{}}),(c,s)=>(p(),m("div",A,j))}},O={class:"coco-markdown-body"},G=l("pre",null,[l("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="open2 = true">\u70B9\u6211\u6253\u5F00</coco-button>

  <coco-drawer v-model="open2" direction="right" :showHeader="false">
    hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 coco-ui!
  </coco-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
<\/script>
`)],-1),J=l("h2",null,"\u591A\u5C42\u5D4C\u5957",-1),K=l("p",null,"size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u6216\u8005\u9AD8\u5EA6",-1),L=[G,J,K],M={__name:"drawerC",setup(h,{expose:d}){return d({frontmatter:{}}),(c,s)=>(p(),m("div",O,L))}},P={class:"coco-markdown-body"},Q=w(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-button type=&quot;primary&quot; @click=&quot;open3 = true&quot;&gt;\u70B9\u6211\u6253\u5F00&lt;/coco-button&gt;

  &lt;coco-drawer v-model=&quot;open3&quot; direction=&quot;right&quot; size=&quot;50%&quot;&gt;
    &lt;coco-button type=&quot;primary&quot; @click=&quot;open4 = true&quot;&gt;\u70B9\u6211\u6253\u5F00\u5185\u5C42&lt;/coco-button&gt;
    hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 coco-ui!
    &lt;coco-drawer v-model=&quot;open4&quot; direction=&quot;right&quot;&gt; \u8FD9\u662F\u5185\u5C42\u7684 &lt;/coco-drawer&gt;
  &lt;/coco-drawer&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const open3 = ref(false)
  const open4 = ref(false)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>direction</td><td>\u5F39\u51FA\u65B9\u5411</td><td>string</td><td>top / left / bottom / right</td><td>right</td></tr><tr><td>size</td><td>\u5BBD\u5EA6\u6216\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>30%</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>appendToBody</td><td>\u662F\u5426\u9576\u5D4C\u5230 body \u4E0A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>modal</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>modalClose</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>showHeader</td><td>\u662F\u5426\u663E\u793A\u5934\u90E8\u4FE1\u606F</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td>zIndex</td><td>z-index \u5C5E\u6027</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onOpen</td><td>\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table>`,7),R=r(" Notification \u901A\u77E5 "),W=r(" Dialog \u5BF9\u8BDD\u6846 "),X={__name:"drawerD",setup(h,{expose:d}){return d({frontmatter:{}}),(c,s)=>{const i=_("coco-turn-page-item"),V=_("coco-turn-page");return p(),m("div",P,[Q,e(V,{style:{margin:"50px 0"}},{default:n(()=>[e(i,{direction:"left",url:"/component/notification"},{default:n(()=>[R]),_:1}),e(i,{direction:"right",url:"/component/dialog"},{default:n(()=>[W]),_:1})]),_:1})])}}},Y=r("\u70B9\u6211\u6253\u5F00"),Z=r("\u4ECE\u53F3\u9762\u5F39\u51FA"),tt=r("\u4ECE\u5DE6\u9762\u5F39\u51FA"),ot=r("\u4ECE\u4E0B\u9762\u5F39\u51FA"),et=r("\u4ECE\u4E0A\u9762\u5F39\u51FA"),dt=r(" hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 coco-ui! "),nt=r("\u70B9\u6211\u6253\u5F00"),lt=r(" hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 coco-ui! "),rt=r("\u70B9\u6211\u6253\u5F00"),at=r("\u70B9\u6211\u6253\u5F00\u5185\u5C42"),ct=r(" hello\uFF0C\u6B22\u8FCE\u4F7F\u7528 coco-ui! "),st=r(" \u8FD9\u662F\u5185\u5C42\u7684 "),ut={__name:"drawer",setup(h){const d=u("right"),a=u(!1),c=u(!1),s=u(!1),i=u(!1);return(V,t)=>{const f=_("coco-button"),b=_("coco-radio"),v=_("coco-drawer"),g=q("high");return p(),m(k,null,[$(e(y(H),null,null,512),[[g]]),e(f,{type:"primary",onClick:t[0]||(t[0]=o=>a.value=!0)},{default:n(()=>[Y]),_:1}),e(b,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=o=>d.value=o),label:"right"},{default:n(()=>[Z]),_:1},8,["modelValue"]),e(b,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=o=>d.value=o),label:"left"},{default:n(()=>[tt]),_:1},8,["modelValue"]),e(b,{modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=o=>d.value=o),label:"bottom"},{default:n(()=>[ot]),_:1},8,["modelValue"]),e(b,{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=o=>d.value=o),label:"top"},{default:n(()=>[et]),_:1},8,["modelValue"]),e(v,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value=o),direction:d.value,title:"\u8FD9\u662F\u6807\u9898"},{default:n(()=>[dt]),_:1},8,["modelValue","direction"]),$(e(y(I),null,null,512),[[g]]),e(f,{type:"primary",onClick:t[6]||(t[6]=o=>c.value=!0)},{default:n(()=>[nt]),_:1}),e(v,{modelValue:c.value,"onUpdate:modelValue":t[7]||(t[7]=o=>c.value=o),direction:"right",showHeader:!1},{default:n(()=>[lt]),_:1},8,["modelValue"]),$(e(y(M),null,null,512),[[g]]),e(f,{type:"primary",onClick:t[8]||(t[8]=o=>s.value=!0)},{default:n(()=>[rt]),_:1}),e(v,{modelValue:s.value,"onUpdate:modelValue":t[11]||(t[11]=o=>s.value=o),direction:"right",size:"50%"},{default:n(()=>[e(f,{type:"primary",onClick:t[9]||(t[9]=o=>i.value=!0)},{default:n(()=>[at]),_:1}),ct,e(v,{modelValue:i.value,"onUpdate:modelValue":t[10]||(t[10]=o=>i.value=o),direction:"right"},{default:n(()=>[st]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),$(e(y(X),null,null,512),[[g]])],64)}}};export{ut as default};
