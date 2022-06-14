import{o as m,c,e,a as h,b as d,d as a,q as f,j as n,r as q,s as g,x as p,f as v,F as $}from"./index.df163828.js";const z={class:"coco-markdown-body"},U=e("h1",null,"Radio \u5355\u9009\u6846",-1),x=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),y=e("p",null,"Radio \u7684\u57FA\u672C\u4F7F\u7528",-1),k=e("p",null,"label \u5C5E\u6027\u53EF\u914D\u7F6E Radio \u7684 value",-1),w=[U,x,y,k],B={__name:"radioA",setup(_,{expose:u}){return u({frontmatter:{}}),(i,l)=>(m(),c("div",z,w))}},R={class:"coco-markdown-body"},C=e("pre",null,[e("code",{class:"language-html"},`<template>
  <coco-radio v-model="radio1" label="\u5907\u9009\u98791">\u5907\u9009\u98791</coco-radio>
  <coco-radio v-model="radio1" label="\u5907\u9009\u98792">\u5907\u9009\u98792</coco-radio>
  <coco-radio v-model="radio1" label="\u5907\u9009\u98793">\u5907\u9009\u98793</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('\u5907\u9009\u98791')
<\/script>
`)],-1),N=e("h2",null,"\u7981\u7528\u72B6\u6001",-1),D=e("p",null,"disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u7981\u7528\u72B6\u6001",-1),E=[C,N,D],A={__name:"radioB",setup(_,{expose:u}){return u({frontmatter:{}}),(i,l)=>(m(),c("div",R,E))}},F={class:"coco-markdown-body"},T=e("pre",null,[e("code",{class:"language-html"},`<template>
  <coco-radio v-model="radio2" disabled label="\u5907\u9009\u98791">\u5907\u9009\u98791</coco-radio>
  <coco-radio v-model="radio2" label="\u5907\u9009\u98792">\u5907\u9009\u98792</coco-radio>
  <coco-radio v-model="radio2" label="\u5907\u9009\u98793">\u5907\u9009\u98793</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio2 = ref('\u5907\u9009\u98792')
<\/script>
`)],-1),j=e("h2",null,"\u5E26\u6709\u8FB9\u6846",-1),S=e("p",null,"border \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8FB9\u6846",-1),G=[T,j,S],H={__name:"radioC",setup(_,{expose:u}){return u({frontmatter:{}}),(i,l)=>(m(),c("div",F,G))}},I={class:"coco-markdown-body"},J=e("pre",null,[e("code",{class:"language-html"},`<template>
  <coco-radio v-model="radio3" label="\u5907\u9009\u98791" border>\u5907\u9009\u98791</coco-radio>
  <coco-radio v-model="radio3" label="\u5907\u9009\u98792" border>\u5907\u9009\u98792</coco-radio>
  <coco-radio v-model="radio3" label="\u5907\u9009\u98793" border>\u5907\u9009\u98793</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio3 = ref('\u5907\u9009\u98793')
<\/script>
`)],-1),K=e("h2",null,"\u914D\u7F6E\u5927\u5C0F",-1),L=e("p",null,"size \u5C5E\u6027\u53EF\u4EE5\u5927\u5C0F\uFF0C\u4F46\u662F\u5FC5\u987B\u662F\u5E26\u6709 border \u5C5E\u6027\u7684\u524D\u63D0\u624D\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C",-1),M=[J,K,L],O={__name:"radioD",setup(_,{expose:u}){return u({frontmatter:{}}),(i,l)=>(m(),c("div",I,M))}},P={class:"coco-markdown-body"},Q=f(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;large&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;large&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;large&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;

  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;medium&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;medium&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;medium&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;

  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;small&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;small&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;small&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;

  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;mini&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;mini&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;mini&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const radio4 = ref(&#39;\u5907\u9009\u98791&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-mod</td><td>\u7ED1\u5B9A\u7684\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>label</td><td>Radio \u7684 value</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>Boole</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5927\u5C0F\u5C3A\u5BF8</td><td>string</td><td>large / medium / small / mini</td><td>large</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8 Radio \u65F6\u89E6\u53D1</td><td>\u9009\u4E2D\u7684\u503C</td></tr></tbody></table>`,5),W=n(" Calendar \u65E5\u5386 "),X=n(" Tree \u6811\u5F62\u63A7\u4EF6 "),Y={__name:"radioE",setup(_,{expose:u}){return u({frontmatter:{}}),(i,l)=>{const V=h("coco-turn-page-item"),o=h("coco-turn-page");return m(),c("div",P,[Q,d(o,{style:{margin:"50px 0"}},{default:a(()=>[d(V,{direction:"left",url:"/component/calendar"},{default:a(()=>[W]),_:1}),d(V,{direction:"right",url:"/component/tree"},{default:a(()=>[X]),_:1})]),_:1})])}}},Z=n("\u5907\u9009\u98791"),oo=n("\u5907\u9009\u98792"),to=n("\u5907\u9009\u98793"),eo=e("br",null,null,-1),lo=e("br",null,null,-1),ao=n("\u5907\u9009\u98791"),no=n("\u5907\u9009\u98792"),ro=n("\u5907\u9009\u98793"),uo=e("br",null,null,-1),so=e("br",null,null,-1),io=n("\u5907\u9009\u98791"),mo=n("\u5907\u9009\u98792"),co=n("\u5907\u9009\u98793"),_o=e("br",null,null,-1),bo=e("br",null,null,-1),po=n(" \u5907\u9009\u98791 "),vo=n(" \u5907\u9009\u98792 "),qo=n(" \u5907\u9009\u98793 "),Vo=e("br",null,null,-1),ho=e("br",null,null,-1),fo=n(" \u5907\u9009\u98791 "),go=n(" \u5907\u9009\u98792 "),$o=n(" \u5907\u9009\u98793 "),zo=e("br",null,null,-1),Uo=e("br",null,null,-1),xo=n(" \u5907\u9009\u98791 "),yo=n(" \u5907\u9009\u98792 "),ko=n(" \u5907\u9009\u98793 "),wo=e("br",null,null,-1),Bo=e("br",null,null,-1),Ro=n(" \u5907\u9009\u98791 "),Co=n(" \u5907\u9009\u98792 "),No=n(" \u5907\u9009\u98793 "),Do=e("br",null,null,-1),Eo=e("br",null,null,-1),Fo={__name:"radio",setup(_){const u=q("\u5907\u9009\u98791"),s=q("\u5907\u9009\u98792"),i=q("\u5907\u9009\u98793"),l=q("\u5907\u9009\u98791");return(V,o)=>{const r=h("coco-radio"),b=g("high");return m(),c($,null,[p(d(v(B),null,null,512),[[b]]),d(r,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),label:"\u5907\u9009\u98791"},{default:a(()=>[Z]),_:1},8,["modelValue"]),d(r,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=t=>u.value=t),label:"\u5907\u9009\u98792"},{default:a(()=>[oo]),_:1},8,["modelValue"]),d(r,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=t=>u.value=t),label:"\u5907\u9009\u98793"},{default:a(()=>[to]),_:1},8,["modelValue"]),eo,lo,p(d(v(A),null,null,512),[[b]]),d(r,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=t=>s.value=t),disabled:"",label:"\u5907\u9009\u98791"},{default:a(()=>[ao]),_:1},8,["modelValue"]),d(r,{modelValue:s.value,"onUpdate:modelValue":o[4]||(o[4]=t=>s.value=t),label:"\u5907\u9009\u98792"},{default:a(()=>[no]),_:1},8,["modelValue"]),d(r,{modelValue:s.value,"onUpdate:modelValue":o[5]||(o[5]=t=>s.value=t),label:"\u5907\u9009\u98793"},{default:a(()=>[ro]),_:1},8,["modelValue"]),uo,so,p(d(v(H),null,null,512),[[b]]),d(r,{modelValue:i.value,"onUpdate:modelValue":o[6]||(o[6]=t=>i.value=t),label:"\u5907\u9009\u98791",border:""},{default:a(()=>[io]),_:1},8,["modelValue"]),d(r,{modelValue:i.value,"onUpdate:modelValue":o[7]||(o[7]=t=>i.value=t),label:"\u5907\u9009\u98792",border:""},{default:a(()=>[mo]),_:1},8,["modelValue"]),d(r,{modelValue:i.value,"onUpdate:modelValue":o[8]||(o[8]=t=>i.value=t),label:"\u5907\u9009\u98793",border:""},{default:a(()=>[co]),_:1},8,["modelValue"]),_o,bo,p(d(v(O),null,null,512),[[b]]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[9]||(o[9]=t=>l.value=t),label:"\u5907\u9009\u98791",border:"",size:"large"},{default:a(()=>[po]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[10]||(o[10]=t=>l.value=t),label:"\u5907\u9009\u98792",border:"",size:"large"},{default:a(()=>[vo]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[11]||(o[11]=t=>l.value=t),label:"\u5907\u9009\u98793",border:"",size:"large"},{default:a(()=>[qo]),_:1},8,["modelValue"]),Vo,ho,d(r,{modelValue:l.value,"onUpdate:modelValue":o[12]||(o[12]=t=>l.value=t),label:"\u5907\u9009\u98791",border:"",size:"medium"},{default:a(()=>[fo]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[13]||(o[13]=t=>l.value=t),label:"\u5907\u9009\u98792",border:"",size:"medium"},{default:a(()=>[go]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[14]||(o[14]=t=>l.value=t),label:"\u5907\u9009\u98793",border:"",size:"medium"},{default:a(()=>[$o]),_:1},8,["modelValue"]),zo,Uo,d(r,{modelValue:l.value,"onUpdate:modelValue":o[15]||(o[15]=t=>l.value=t),label:"\u5907\u9009\u98791",border:"",size:"small"},{default:a(()=>[xo]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[16]||(o[16]=t=>l.value=t),label:"\u5907\u9009\u98792",border:"",size:"small"},{default:a(()=>[yo]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[17]||(o[17]=t=>l.value=t),label:"\u5907\u9009\u98793",border:"",size:"small"},{default:a(()=>[ko]),_:1},8,["modelValue"]),wo,Bo,d(r,{modelValue:l.value,"onUpdate:modelValue":o[18]||(o[18]=t=>l.value=t),label:"\u5907\u9009\u98791",border:"",size:"mini"},{default:a(()=>[Ro]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[19]||(o[19]=t=>l.value=t),label:"\u5907\u9009\u98792",border:"",size:"mini"},{default:a(()=>[Co]),_:1},8,["modelValue"]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[20]||(o[20]=t=>l.value=t),label:"\u5907\u9009\u98793",border:"",size:"mini"},{default:a(()=>[No]),_:1},8,["modelValue"]),Do,Eo,p(d(v(Y),null,null,512),[[b]])],64)}}};export{Fo as default};
