import{o as s,c as r,e as t,a as i,b as n,d as h,q as p,j as u,s as f,x as l,f as m,F as $}from"./index.df163828.js";const b={class:"coco-markdown-body"},y=t("h1",null,"List \u5217\u8868",-1),k=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),v=t("p",null,"\u5217\u8868\u7684\u57FA\u672C\u4F7F\u7528",-1),w=t("p",null,"content \u5C5E\u6027\u53EF\u4EE5\u7ED1\u5B9A\u9700\u8981\u5C55\u793A\u7684\u6570\u7EC4\u5143\u7D20",-1),x=t("p",null,"keys \u5C5E\u6027\u53EF\u4EE5\u7ED1\u5B9A\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u952E\u503C",-1),S=[y,k,v,w,x],q={__name:"listA",setup(d,{expose:e}){return e({frontmatter:{}}),(_,o)=>(s(),r("div",b,S))}},B={class:"coco-markdown-body"},z=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-list :content="arr" keys="name" />
</template>

<script setup>
  const arr = [
    { name: '\u5C0F\u660E1', age: 11 },
    { name: '\u5C0F\u660E2', age: 12 },
    { name: '\u5C0F\u660E3', age: 13 },
    { name: '\u5C0F\u660E4', age: 14 },
    { name: '\u5C0F\u660E5', age: 15 },
    { name: '\u5C0F\u660E6', age: 16 },
    { name: '\u5C0F\u660E7', age: 17 },
    { name: '\u5C0F\u660E8', age: 18 }
  ]
<\/script>
`)],-1),C=t("h2",null,"\u914D\u7F6E\u8868\u5934\u548C\u9875\u811A",-1),N=t("p",null,"header \u8868\u5934\u5185\u5BB9",-1),V=t("p",null,"footer \u9875\u811A\u5185\u5BB9",-1),D=[z,C,N,V],A={__name:"listB",setup(d,{expose:e}){return e({frontmatter:{}}),(_,o)=>(s(),r("div",B,D))}},E={class:"coco-markdown-body"},F=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-list :content="arr" keys="name" header="\u8FD9\u662F\u5934\u90E8" footer="\u8FD9\u662F\u9875\u811A" />
</template>

<script setup>
  const arr = [
    { name: '\u5C0F\u660E1', age: 11 },
    { name: '\u5C0F\u660E2', age: 12 },
    { name: '\u5C0F\u660E3', age: 13 },
    { name: '\u5C0F\u660E4', age: 14 },
    { name: '\u5C0F\u660E5', age: 15 },
    { name: '\u5C0F\u660E6', age: 16 },
    { name: '\u5C0F\u660E7', age: 17 },
    { name: '\u5C0F\u660E8', age: 18 }
  ]
<\/script>
`)],-1),j=t("h2",null,"\u6591\u9A6C\u7EB9",-1),H=t("p",null,"zebra \u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9",-1),L=t("p",null,"num \u662F\u5426\u663E\u793A\u5E8F\u53F7",-1),T=[F,j,H,L],G={__name:"listC",setup(d,{expose:e}){return e({frontmatter:{}}),(_,o)=>(s(),r("div",E,T))}},I={class:"coco-markdown-body"},J=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-list
    zebra
    num
    :content="arr"
    keys="name"
    header="\u8FD9\u662F\u5934\u90E8"
    footer="\u8FD9\u662F\u9875\u811A"
  />
</template>

<script setup>
  const arr = [
    { name: '\u5C0F\u660E1', age: 11 },
    { name: '\u5C0F\u660E2', age: 12 },
    { name: '\u5C0F\u660E3', age: 13 },
    { name: '\u5C0F\u660E4', age: 14 },
    { name: '\u5C0F\u660E5', age: 15 },
    { name: '\u5C0F\u660E6', age: 16 },
    { name: '\u5C0F\u660E7', age: 17 },
    { name: '\u5C0F\u660E8', age: 18 }
  ]
<\/script>
`)],-1),K=t("h2",null,"hover \u72B6\u6001\u5C55\u793A\u6295\u5F71",-1),M=t("p",null,"hoverShow \u914D\u7F6E Hover \u72B6\u6001\u5C55\u793A\u6295\u5F71",-1),O=[J,K,M],P={__name:"listD",setup(d,{expose:e}){return e({frontmatter:{}}),(_,o)=>(s(),r("div",I,O))}},Q={class:"coco-markdown-body"},R=p(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-list hoverShow :content=&quot;arr&quot; keys=&quot;name&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  const arr = [
    { name: &#39;\u5C0F\u660E1&#39;, age: 11 },
    { name: &#39;\u5C0F\u660E2&#39;, age: 12 },
    { name: &#39;\u5C0F\u660E3&#39;, age: 13 },
    { name: &#39;\u5C0F\u660E4&#39;, age: 14 },
    { name: &#39;\u5C0F\u660E5&#39;, age: 15 },
    { name: &#39;\u5C0F\u660E6&#39;, age: 16 },
    { name: &#39;\u5C0F\u660E7&#39;, age: 17 },
    { name: &#39;\u5C0F\u660E8&#39;, age: 18 }
  ]
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>header</td><td>\u8868\u5934\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>footer</td><td>\u9875\u811A\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>content</td><td>\u4E3B\u4F53\u5185\u5BB9</td><td>array</td><td>\u2014\u2014</td><td>[]</td></tr><tr><td>keys</td><td>\u5FAA\u73AF\u5BF9\u8C61\u952E\u540D</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>zebra</td><td>\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9</td><td>boolean</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>num</td><td>\u662F\u5426\u663E\u793A\u5E8F\u53F7</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>hoverShow</td><td>hover \u72B6\u6001\u663E\u793A\u9634\u5F71</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9</td></tr></tbody></table>`,5),U=u(" Button \u6309\u94AE "),W=u(" Card \u5361\u7247 "),X={__name:"listE",setup(d,{expose:e}){return e({frontmatter:{}}),(_,o)=>{const a=i("coco-turn-page-item"),g=i("coco-turn-page");return s(),r("div",Q,[R,n(g,{style:{margin:"50px 0"}},{default:h(()=>[n(a,{direction:"left",url:"/component/button"},{default:h(()=>[U]),_:1}),n(a,{direction:"right",url:"/component/card"},{default:h(()=>[W]),_:1})]),_:1})])}}},Z={__name:"list",setup(d){const e=[{name:"\u5C0F\u660E1",age:11},{name:"\u5C0F\u660E2",age:12},{name:"\u5C0F\u660E3",age:13},{name:"\u5C0F\u660E4",age:14},{name:"\u5C0F\u660E5",age:15},{name:"\u5C0F\u660E6",age:16},{name:"\u5C0F\u660E7",age:17},{name:"\u5C0F\u660E8",age:18}];return(c,_)=>{const o=i("coco-list"),a=f("high");return s(),r($,null,[l(n(m(q),null,null,512),[[a]]),n(o,{content:e,keys:"name"}),l(n(m(A),null,null,512),[[a]]),n(o,{content:e,keys:"name",header:"\u8FD9\u662F\u5934\u90E8",footer:"\u8FD9\u662F\u9875\u811A"}),l(n(m(G),null,null,512),[[a]]),n(o,{zebra:"",num:"",content:e,keys:"name",header:"\u8FD9\u662F\u5934\u90E8",footer:"\u8FD9\u662F\u9875\u811A"}),l(n(m(P),null,null,512),[[a]]),n(o,{hoverShow:"",content:e,keys:"name"}),l(n(m(X),null,null,512),[[a]])],64)}}};export{Z as default};
