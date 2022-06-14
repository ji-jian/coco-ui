import{o as u,c as _,e as t,a as y,b as e,d as o,q as k,j as c,s as w,x as m,f as g,F as M}from"./index.df163828.js";import{M as a}from"./index.90110a2f.js";import"./tips.e07c5751.js";const x={class:"coco-markdown-body"},C=t("h1",null,"Message \u63D0\u793A\u6846",-1),v=t("h2",null,"\u4F7F\u7528\u524D",-1),q=t("p",null,"\u4F7F\u7528\u524D\uFF0C\u4F60\u5FC5\u987B\u5148\u5F15\u5165\u5B83",-1),B=t("pre",null,[t("code",{class:"language-js"},`import { Message } from 'coco-ui2'
`)],-1),N=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),V=t("p",null,"\u63D0\u793A\u6846\u7684\u57FA\u672C\u4F7F\u7528 \u901A\u8FC7\u5F15\u5165 message \u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528 message \u5B9A\u4E49\u5185\u5BB9",-1),D=t("p",null,"type \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u63D0\u793A\u6846\u7C7B\u578B",-1),j=t("p",null,"round \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5706\u89D2",-1),A=[C,v,q,B,N,V,D,j],E={__name:"messageA",setup(l,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),_("div",x,A))}},F={class:"coco-markdown-body"},S=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-button @click="change1">\u9ED8\u8BA4\u63D0\u793A</coco-button>
  <coco-button type="primary" @click="change2">\u4E3B\u8981\u63D0\u793A</coco-button>
  <coco-button type="success" @click="change3">\u6210\u529F\u63D0\u793A</coco-button>
  <coco-button type="danger" @click="change4">\u5371\u9669\u63D0\u793A</coco-button>
  <coco-button type="warning" @click="change5">\u8B66\u544A\u63D0\u793A</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
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
`)],-1),T=t("h2",null,"\u663E\u793A\u65F6\u957F",-1),z=t("p",null,"time \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u63D0\u793A\u6846\u7684\u663E\u793A\u65F6\u957F\uFF0C\u5E76\u5728 xxxx \u6BEB\u79D2\u540E\u6D88\u5931",-1),G=[S,T,z],H={__name:"messageB",setup(l,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),_("div",F,G))}},I={class:"coco-markdown-body"},J=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="change6">\u5C55\u793A5000\u6BEB\u79D2</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
  function change6() {
    Message({ message: '5000\u6BEB\u79D2\u540E\u9690\u85CF', type: 'primary', time: 5000 })
  }
<\/script>
`)],-1),K=t("h2",null,"\u5E26\u6709 icon",-1),L=t("p",null,"icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E icon \u7684\u7C7B\u540D\u8FDB\u884C\u914D\u7F6E",-1),O=[J,K,L],P={__name:"messageC",setup(l,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),_("div",I,O))}},Q={class:"coco-markdown-body"},R=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="change7">\u70B9\u51FB\u63D0\u793A</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
  function change7() {
    Message({ message: '\u4E3B\u8981\u63D0\u793A', type: 'primary', icon: 'coco-ui-smile' })
  }
<\/script>
`)],-1),U=t("h2",null,"\u53EF\u5173\u95ED",-1),W=t("p",null,"showClose \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4EE3\u7801\u5173\u95ED\u6309\u94AE",-1),X=[R,U,W],Y={__name:"messageD",setup(l,{expose:n}){return n({frontmatter:{}}),(d,i)=>(u(),_("div",Q,X))}},Z={class:"coco-markdown-body"},tt=k(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-button type=&quot;primary&quot; @click=&quot;change8&quot;&gt;\u70B9\u51FB\u63D0\u793A&lt;/coco-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { Message } from &#39;coco-ui2&#39;
  function change8() {
    Message({
      message: &#39;\u4E3B\u8981\u63D0\u793A&#39;,
      type: &#39;primary&#39;,
      icon: &#39;coco-ui-smile&#39;,
      showClose: true
    })
  }
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u663E\u793A\u6587\u5B57</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u63D0\u793A\u6846\u7684\u7C7B\u578B</td><td>string</td><td>default / primary / success / danger / warning</td><td>default</td></tr><tr><td>time</td><td>\u5C55\u793A\u7684\u65F6\u95F4</td><td>number</td><td>\u2014\u2014</td><td>2000</td></tr><tr><td>icon</td><td>\u5C55\u793A\u7684 icon</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>showClose</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB</td><td>number</td><td>\u2014\u2014</td><td>20</td></tr><tr><td>round</td><td>\u914D\u7F6E\u5706\u89D2</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table>`,3),et=c(" BackTop \u56DE\u5230\u9876\u90E8 "),nt=c(" Skeleton \u9AA8\u67B6 "),ot={__name:"messageE",setup(l,{expose:n}){return n({frontmatter:{}}),(d,i)=>{const h=y("coco-turn-page-item"),f=y("coco-turn-page");return u(),_("div",Z,[tt,e(f,{style:{margin:"50px 0"}},{default:o(()=>[e(h,{direction:"left",url:"/component/backtop"},{default:o(()=>[et]),_:1}),e(h,{direction:"right",url:"/component/skeleton"},{default:o(()=>[nt]),_:1})]),_:1})])}}},ct=c("\u9ED8\u8BA4\u63D0\u793A"),st=c("\u4E3B\u8981\u63D0\u793A"),at=c("\u6210\u529F\u63D0\u793A"),rt=c("\u5371\u9669\u63D0\u793A"),dt=c("\u8B66\u544A\u63D0\u793A"),it=c("\u5C55\u793A5000\u6BEB\u79D2"),ut=c("\u70B9\u51FB\u63D0\u793A"),_t=c("\u70B9\u51FB\u63D0\u793A"),ft={__name:"message",setup(l){function n(){a({message:"\u9ED8\u8BA4\u63D0\u793A",type:"default",round:!0})}function r(){a({message:"\u4E3B\u8981\u63D0\u793A",type:"primary",round:!0})}function d(){a({message:"\u6210\u529F\u63D0\u793A",type:"success",round:!0})}function i(){a({message:"\u5371\u9669\u63D0\u793A",type:"danger",round:!0})}function h(){a({message:"\u8B66\u544A\u63D0\u793A",type:"warning",round:!0})}function f(){a({message:"5000\u6BEB\u79D2\u540E\u9690\u85CF",type:"primary",time:5e3})}function b(){a({message:"\u4E3B\u8981\u63D0\u793A",type:"primary",icon:"coco-ui-smile"})}function $(){a({message:"\u4E3B\u8981\u63D0\u793A",type:"primary",icon:"coco-ui-smile",showClose:!0})}return(lt,pt)=>{const s=y("coco-button"),p=w("high");return u(),_(M,null,[m(e(g(E),null,null,512),[[p]]),e(s,{onClick:n},{default:o(()=>[ct]),_:1}),e(s,{type:"primary",onClick:r},{default:o(()=>[st]),_:1}),e(s,{type:"success",onClick:d},{default:o(()=>[at]),_:1}),e(s,{type:"danger",onClick:i},{default:o(()=>[rt]),_:1}),e(s,{type:"warning",onClick:h},{default:o(()=>[dt]),_:1}),m(e(g(H),null,null,512),[[p]]),e(s,{type:"primary",onClick:f},{default:o(()=>[it]),_:1}),m(e(g(P),null,null,512),[[p]]),e(s,{type:"primary",onClick:b},{default:o(()=>[ut]),_:1}),m(e(g(Y),null,null,512),[[p]]),e(s,{type:"primary",onClick:$},{default:o(()=>[_t]),_:1}),m(e(g(ot),null,null,512),[[p]])],64)}}};export{ft as default};
