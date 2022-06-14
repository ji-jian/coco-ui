import{o as s,c,e as t,a as f,b as o,d as p,q as b,j as g,r as v,s as x,x as i,f as h,F as $}from"./index.df163828.js";const V={class:"coco-markdown-body"},y=t("h1",null,"Rate \u8BC4\u5206",-1),w=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),T=t("p",null,"\u8BC4\u5206\u7684\u57FA\u672C\u4F7F\u7528",-1),C=t("p",null,"v-model \u7ED1\u5B9A\u8BC4\u5206\u503C",-1),q=[y,w,T,C],k={__name:"rateA",setup(u,{expose:n}){return n({frontmatter:{}}),(a,_)=>(s(),c("div",V,q))}},D={class:"coco-markdown-body"},U=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-rate v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(2)
<\/script>
`)],-1),B=t("h2",null,"\u914D\u7F6E\u989C\u8272",-1),N=t("p",null,"color \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u9009\u4E2D\u7684 icon \u989C\u8272",-1),A=t("p",null,"voidColor \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u672A\u9009\u4E2D\u7684 icon \u989C\u8272",-1),E=[U,B,N,A],F={__name:"rateB",setup(u,{expose:n}){return n({frontmatter:{}}),(a,_)=>(s(),c("div",D,E))}},S={class:"coco-markdown-body"},j=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-rate v-model="value2" />
  <coco-rate v-model="value2" color="red" voidColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(2)
<\/script>
`)],-1),I=t("h2",null,"\u8F85\u52A9\u6587\u5B57",-1),R=t("p",null,"showText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57",-1),z=t("p",null,"SayText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8F85\u52A9\u6587\u5B57\u6570\u7EC4",-1),G=[j,I,R,z],H={__name:"rateC",setup(u,{expose:n}){return n({frontmatter:{}}),(a,_)=>(s(),c("div",S,G))}},J={class:"coco-markdown-body"},K=b(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-rate v-model=&quot;value3&quot; showText /&gt;
  &lt;coco-rate
    v-model=&quot;value3&quot;
    showText
    :sayText=&quot;[&#39;1\u661F&#39;, &#39;2\u661F&#39;, &#39;3\u661F&#39;, &#39;4\u661F&#39;, &#39;5\u661F&#39;]&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value3 = ref(2)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>color</td><td>\u9009\u4E2D\u7684 icon \u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#fbcc30</td></tr><tr><td>voidColor</td><td>\u672A\u9009\u4E2D\u7684 icon \u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#C6D1DE</td></tr><tr><td>showText</td><td>\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>sayText</td><td>\u81EA\u5B9A\u4E49\u8F85\u52A9\u6587\u5B57\u6570\u7EC4</td><td>boolean</td><td>\u2014\u2014</td><td>[\u2018\u6781\u5DEE\u2019, \u2018\u5931\u671B\u2019, \u2018\u4E00\u822C\u2019, \u2018\u60CA\u559C\u2019, \u2018\u6EE1\u610F\u2019]</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5206\u503C\u6539\u53D8\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,5),L=g(" Alert \u63D0\u793A "),M=g(" Image \u56FE\u7247 "),O={__name:"rateD",setup(u,{expose:n}){return n({frontmatter:{}}),(a,_)=>{const e=f("coco-turn-page-item"),r=f("coco-turn-page");return s(),c("div",J,[K,o(r,{style:{margin:"50px 0"}},{default:p(()=>[o(e,{direction:"left",url:"/component/alert"},{default:p(()=>[L]),_:1}),o(e,{direction:"right",url:"/component/image"},{default:p(()=>[M]),_:1})]),_:1})])}}},P=t("br",null,null,-1),Q=t("br",null,null,-1),X={__name:"rate",setup(u){const n=v(2),d=v(2),a=v(2);return(_,e)=>{const r=f("coco-rate"),m=x("high");return s(),c($,null,[i(o(h(k),null,null,512),[[m]]),o(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,8,["modelValue"]),i(o(h(F),null,null,512),[[m]]),o(r,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l)},null,8,["modelValue"]),P,o(r,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),color:"red",voidColor:"#eee"},null,8,["modelValue"]),i(o(h(H),null,null,512),[[m]]),o(r,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value=l),showText:""},null,8,["modelValue"]),Q,o(r,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value=l),showText:"",sayText:["1\u661F","2\u661F","3\u661F","4\u661F","5\u661F"]},null,8,["modelValue"]),i(o(h(O),null,null,512),[[m]])],64)}}};export{X as default};
