import{o as u,c as i,e as t,a as $,b as o,d as x,q as U,j as k,r as s,s as z,x as _,f as h,F as q}from"./index.df163828.js";const B={class:"coco-markdown-body"},N=t("h1",null,"Input \u8F93\u5165\u6846",-1),P=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),C=t("p",null,"\u8F93\u5165\u6846\u7684\u57FA\u672C\u7528\u6CD5",-1),D=[N,P,C],E={__name:"inputA",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",B,D))}},F={class:"coco-markdown-body"},A=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-input v-model="text1" />
</template>

<script setup>
  import { ref } from 'vue'
  const text1 = ref('')
<\/script>
`)],-1),j=t("h2",null,"\u8F93\u5165\u6846\u7C7B\u578B",-1),G=t("p",null,"type \u5C5E\u6027\u53EF\u4EE5\u89C4\u5B9A\u6587\u672C\u6846\u7C7B\u578B",-1),H=[A,j,G],I={__name:"inputB",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",F,H))}},L={class:"coco-markdown-body"},M=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-input type="text" v-model="text2" />
  <coco-input type="password" v-model="text3" />
</template>

<script setup>
  import { ref } from 'vue'
  const text2 = ref('')
  const text3 = ref('')
<\/script>
`)],-1),S=t("h2",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),T=t("p",null,"size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u6846\u5C3A\u5BF8",-1),J=[M,S,T],K={__name:"inputC",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",L,J))}},O={class:"coco-markdown-body"},Q=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-input size="large" v-model="text4" />
  <coco-input size="medium" v-model="text5" />
  <coco-input size="small" v-model="text6" />
  <coco-input size="mini" v-model="text7" />
</template>

<script setup>
  import { ref } from 'vue'
  const text4 = ref('')
  const text5 = ref('')
  const text6 = ref('')
  const text7 = ref('')
<\/script>
`)],-1),R=t("h2",null,"\u53EF\u6E05\u7A7A",-1),W=t("p",null,"clear \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5E26\u6709\u6E05\u7A7A\u6309\u94AE\u7684\u6587\u672C\u6846",-1),X=[Q,R,W],Y={__name:"inputD",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",O,X))}},Z={class:"coco-markdown-body"},tt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-input v-model="text8" clear />
</template>

<script setup>
  import { ref } from 'vue'
  const text8 = ref('')
<\/script>
`)],-1),et=t("h2",null,"\u5E26\u6709 icon",-1),ot=t("p",null,"icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u6846\u5E26\u6709\u5176\u4ED6\u56FE\u6807\uFF0C\u76F4\u63A5\u4F20\u9012 icon \u7684\u540D\u5B57\u4F20\u9012\u5373\u53EF",-1),nt=[tt,et,ot],lt={__name:"inputE",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",Z,nt))}},dt={class:"coco-markdown-body"},st=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-input v-model="text9" icon="coco-ui-electronics" />
</template>

<script setup>
  import { ref } from 'vue'
  const text9 = ref('')
<\/script>
`)],-1),rt=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),at=t("p",null,"disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u6846\u7981\u7528\u72B6\u6001",-1),ct=[st,rt,at],ut={__name:"inputF",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",dt,ct))}},it={class:"coco-markdown-body"},mt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-input v-model="text10" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text10 = ref('')
<\/script>
`)],-1),pt=t("h2",null,"\u67E5\u770B\u5BC6\u7801",-1),_t=t("p",null,"showPassword \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u67E5\u770B\u5BC6\u7801\u6309\u94AE\uFF0CshowPassword \u4F18\u5148\u7EA7\u5927\u4E8E clear",-1),ht=[mt,pt,_t],ft={__name:"inputG",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>(u(),i("div",it,ht))}},vt={class:"coco-markdown-body"},xt=U(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-input v-model=&quot;text11&quot; type=&quot;password&quot; showPassword /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const text11 = ref(&#39;&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>text / password</td><td>text</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>size</td><td>\u6587\u672C\u6846\u5C3A\u5BF8</td><td>string</td><td>large / medium / small / mini</td><td>medium</td></tr><tr><td>max</td><td>\u6700\u5927\u8F93\u5165\u4E0A\u9650</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>clear</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u6587\u672C\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7\u663E\u793A\u7684\u56FE\u6807</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>enter</td><td>\u6309\u4E0B\u56DE\u8F66\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onblur</td><td>\u5931\u53BB\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onfocus</td><td>\u83B7\u53D6\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,5),$t=k(" Link \u94FE\u63A5 "),gt=k(" Menu \u5BFC\u822A\u680F "),Vt={__name:"inputH",setup(m,{expose:l}){return l({frontmatter:{}}),(a,c)=>{const f=$("coco-turn-page-item"),v=$("coco-turn-page");return u(),i("div",vt,[xt,o(v,{style:{margin:"50px 0"}},{default:x(()=>[o(f,{direction:"left",url:"/component/link"},{default:x(()=>[$t]),_:1}),o(f,{direction:"right",url:"/component/menu"},{default:x(()=>[gt]),_:1})]),_:1})])}}},yt={__name:"input",setup(m){const l=s(""),r=s(""),a=s(""),c=s(""),f=s(""),v=s(""),g=s(""),V=s(""),b=s(""),w=s(""),y=s("");return(bt,e)=>{const d=$("coco-input"),p=z("high");return u(),i(q,null,[_(o(h(E),null,null,512),[[p]]),o(d,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n)},null,8,["modelValue"]),_(o(h(I),null,null,512),[[p]]),o(d,{type:"text",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n)},null,8,["modelValue"]),o(d,{type:"password",modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=n=>a.value=n)},null,8,["modelValue"]),_(o(h(K),null,null,512),[[p]]),o(d,{size:"large",modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=n=>c.value=n)},null,8,["modelValue"]),o(d,{size:"medium",modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=n=>f.value=n)},null,8,["modelValue"]),o(d,{size:"small",modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=n=>v.value=n)},null,8,["modelValue"]),o(d,{size:"mini",modelValue:g.value,"onUpdate:modelValue":e[6]||(e[6]=n=>g.value=n)},null,8,["modelValue"]),_(o(h(Y),null,null,512),[[p]]),o(d,{modelValue:V.value,"onUpdate:modelValue":e[7]||(e[7]=n=>V.value=n),clear:""},null,8,["modelValue"]),_(o(h(lt),null,null,512),[[p]]),o(d,{modelValue:b.value,"onUpdate:modelValue":e[8]||(e[8]=n=>b.value=n),icon:"coco-ui-electronics"},null,8,["modelValue"]),_(o(h(ut),null,null,512),[[p]]),o(d,{modelValue:w.value,"onUpdate:modelValue":e[9]||(e[9]=n=>w.value=n),disabled:""},null,8,["modelValue"]),_(o(h(ft),null,null,512),[[p]]),o(d,{modelValue:y.value,"onUpdate:modelValue":e[10]||(e[10]=n=>y.value=n),type:"password",showPassword:""},null,8,["modelValue"]),_(o(h(Vt),null,null,512),[[p]])],64)}}};export{yt as default};
