import{o as u,f as l,j as t,r as f,B as e,C as s,P as k,l as o,Q as w,x as p,u as m,F as M}from"./vendor.69ad1cd2.js";import"./index.5cdfe814.js";import{M as r}from"./index.c18f09c7.js";import"./tips.f775595e.js";const x={class:"tyh-markdown-body"},C=t("h1",null,"Message \u63D0\u793A\u6846",-1),v=t("h2",null,"\u4F7F\u7528\u524D",-1),B=t("p",null,"\u4F7F\u7528\u524D\uFF0C\u4F60\u5FC5\u987B\u5148\u5F15\u5165\u5B83",-1),q=t("pre",null,[t("code",{class:"language-js"},`import { Message } from 'tyh-ui2'
`)],-1),N=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),V=t("p",null,"\u63D0\u793A\u6846\u7684\u57FA\u672C\u4F7F\u7528 \u901A\u8FC7\u5F15\u5165 message \u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528 message \u5B9A\u4E49\u5185\u5BB9",-1),j=t("p",null,"type \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u63D0\u793A\u6846\u7C7B\u578B",-1),D=t("p",null,"round \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5706\u89D2",-1),F=[C,v,B,q,N,V,j,D],S={setup(h,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),l("div",x,F))}},T={class:"tyh-markdown-body"},A=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-button @click="change1">\u9ED8\u8BA4\u63D0\u793A</tyh-button>
  <tyh-button type="primary" @click="change2">\u4E3B\u8981\u63D0\u793A</tyh-button>
  <tyh-button type="success" @click="change3">\u6210\u529F\u63D0\u793A</tyh-button>
  <tyh-button type="danger" @click="change4">\u5371\u9669\u63D0\u793A</tyh-button>
  <tyh-button type="warning" @click="change5">\u8B66\u544A\u63D0\u793A</tyh-button>
</template>

<script setup>
  import { Message } from 'tyh-ui2'
  function change1() {
    Message({ message: '\u9ED8\u8BA4\u63D0\u793A', type: 'default', round: true })
  }
  function change2() {
    Message({ message: '\u4E3B\u8981\u63D0\u793A', type: 'primary', round: true })
  }
  function change3() {
    Message({ message: '\u6210\u529F\u63D0\u793A', type: 'success', round: true })
  }
  function change4() {
    Message({ message: '\u5371\u9669\u63D0\u793A', type: 'danger', round: true })
  }
  function change5() {
    Message({ message: '\u8B66\u544A\u63D0\u793A', type: 'warning', round: true })
  }
<\/script>
`)],-1),E=t("h2",null,"\u663E\u793A\u65F6\u957F",-1),P=t("p",null,"time \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u63D0\u793A\u6846\u7684\u663E\u793A\u65F6\u957F\uFF0C\u5E76\u5728 xxxx \u6BEB\u79D2\u540E\u6D88\u5931",-1),Q=[A,E,P],z={setup(h,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),l("div",T,Q))}},G={class:"tyh-markdown-body"},H=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="change6">\u5C55\u793A5000\u6BEB\u79D2</tyh-button>
</template>

<script setup>
  import { Message } from 'tyh-ui2'
  function change6() {
    Message({ message: '5000\u6BEB\u79D2\u540E\u9690\u85CF', type: 'primary', time: 5000 })
  }
<\/script>
`)],-1),I=t("h2",null,"\u5E26\u6709 icon",-1),J=t("p",null,"icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E icon \u7684\u7C7B\u540D\u8FDB\u884C\u914D\u7F6E",-1),K=[H,I,J],L={setup(h,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),l("div",G,K))}},O={class:"tyh-markdown-body"},R=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="change7">\u70B9\u51FB\u63D0\u793A</tyh-button>
</template>

<script setup>
  import { Message } from 'tyh-ui2'
  function change7() {
    Message({ message: '\u4E3B\u8981\u63D0\u793A', type: 'primary', icon: 'tyh-ui-smile' })
  }
<\/script>
`)],-1),U=t("h2",null,"\u53EF\u5173\u95ED",-1),W=t("p",null,"showClose \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4EE3\u7801\u5173\u95ED\u6309\u94AE",-1),X=[R,U,W],Y={setup(h,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),l("div",O,X))}},Z={class:"tyh-markdown-body"},tt=k(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-button type=&quot;primary&quot; @click=&quot;change8&quot;&gt;\u70B9\u51FB\u63D0\u793A&lt;/tyh-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { Message } from &#39;tyh-ui2&#39;
  function change8() {
    Message({
      message: &#39;\u4E3B\u8981\u63D0\u793A&#39;,
      type: &#39;primary&#39;,
      icon: &#39;tyh-ui-smile&#39;,
      showClose: true
    })
  }
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u663E\u793A\u6587\u5B57</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u63D0\u793A\u6846\u7684\u7C7B\u578B</td><td>string</td><td>default / primary / success / danger / warning</td><td>default</td></tr><tr><td>time</td><td>\u5C55\u793A\u7684\u65F6\u95F4</td><td>number</td><td>\u2014\u2014</td><td>2000</td></tr><tr><td>icon</td><td>\u5C55\u793A\u7684 icon</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>showClose</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB</td><td>number</td><td>\u2014\u2014</td><td>20</td></tr><tr><td>round</td><td>\u914D\u7F6E\u5706\u89D2</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table>`,3),et=o(" BackTop \u56DE\u5230\u9876\u90E8 "),nt=o(" Skeleton \u9AA8\u67B6 "),st={setup(h,{expose:n}){return n({frontmatter:{}}),(d,i)=>{const g=f("tyh-turn-page-item"),y=f("tyh-turn-page");return u(),l("div",Z,[tt,e(y,{style:{margin:"50px 0"}},{default:s(()=>[e(g,{direction:"left",url:"/component/backtop"},{default:s(()=>[et]),_:1}),e(g,{direction:"right",url:"/component/skeleton"},{default:s(()=>[nt]),_:1})]),_:1})])}}},ot=o("\u9ED8\u8BA4\u63D0\u793A"),ct=o("\u4E3B\u8981\u63D0\u793A"),rt=o("\u6210\u529F\u63D0\u793A"),at=o("\u5371\u9669\u63D0\u793A"),dt=o("\u8B66\u544A\u63D0\u793A"),it=o("\u5C55\u793A5000\u6BEB\u79D2"),ut=o("\u70B9\u51FB\u63D0\u793A"),lt=o("\u70B9\u51FB\u63D0\u793A"),ft={setup(h){function n(){r({message:"\u9ED8\u8BA4\u63D0\u793A",type:"default",round:!0})}function a(){r({message:"\u4E3B\u8981\u63D0\u793A",type:"primary",round:!0})}function d(){r({message:"\u6210\u529F\u63D0\u793A",type:"success",round:!0})}function i(){r({message:"\u5371\u9669\u63D0\u793A",type:"danger",round:!0})}function g(){r({message:"\u8B66\u544A\u63D0\u793A",type:"warning",round:!0})}function y(){r({message:"5000\u6BEB\u79D2\u540E\u9690\u85CF",type:"primary",time:5e3})}function b(){r({message:"\u4E3B\u8981\u63D0\u793A",type:"primary",icon:"tyh-ui-smile"})}function $(){r({message:"\u4E3B\u8981\u63D0\u793A",type:"primary",icon:"tyh-ui-smile",showClose:!0})}return(ht,_t)=>{const c=f("tyh-button"),_=w("high");return u(),l(M,null,[p(e(m(S),null,null,512),[[_]]),e(c,{onClick:n},{default:s(()=>[ot]),_:1}),e(c,{type:"primary",onClick:a},{default:s(()=>[ct]),_:1}),e(c,{type:"success",onClick:d},{default:s(()=>[rt]),_:1}),e(c,{type:"danger",onClick:i},{default:s(()=>[at]),_:1}),e(c,{type:"warning",onClick:g},{default:s(()=>[dt]),_:1}),p(e(m(z),null,null,512),[[_]]),e(c,{type:"primary",onClick:y},{default:s(()=>[it]),_:1}),p(e(m(L),null,null,512),[[_]]),e(c,{type:"primary",onClick:b},{default:s(()=>[ut]),_:1}),p(e(m(Y),null,null,512),[[_]]),e(c,{type:"primary",onClick:$},{default:s(()=>[lt]),_:1}),p(e(m(st),null,null,512),[[_]])],64)}}};export{ft as default};
