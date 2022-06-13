import{d as x,s as B,e as N,o as u,c as T,C as i,x as m,y as q,j as t,f as h,n as C,u as y,h as w,t as S,T as V,q as D,r as k,B as n,P as j,l as c,Q as A,F as E}from"./vendor.69ad1cd2.js";import"./index.fee72268.js";import{c as F,m as I}from"./tips.f775595e.js";const P={title:String,message:String,time:{type:Number,default:()=>3500},position:{type:String,default:()=>"top-right",validator(s){return["top-left","top-right","bottom-left","bottom-right",""].includes(s)}},close:Boolean,type:{type:String,validator(s){return["primary","success","danger","warning",""].includes(s)}}},z={class:"tyh-notification-body"},L={class:"tyh-notification-content"},O={class:"tyh-notification-title"},Q={class:"tyh-notification-message"},G=x({props:P,setup(s){const e=s,l=B(!0);let p;(function(){e.time>0&&(p=setTimeout(()=>{d()},e.time))})();const d=()=>{clearTimeout(p),l.value=!1},_=N(()=>{let o="";switch(e.type){case"primary":o="tyh-ui-smile";break;case"success":o="tyh-ui-success-filling";break;case"danger":o="tyh-ui-error";break;case"warning":o="tyh-ui-warning-filling";break}return o}),f=N(()=>["tyh-icon","tyh-notification-icon",_.value,`tyh-notification-icon-${e.type}`]),b=D(),$=()=>{var o;(o=b.vnode.el.parentElement)==null||o.removeChild(b.vnode.el)};return(o,v)=>(u(),T(V,{name:"tyh-notification-fade",onAfterLeave:$,appear:""},{default:i(()=>[m(t("div",{class:C(["tyh-notification",`tyh-notification-${o.position}`])},[t("div",z,[o.type?(u(),h("i",{key:0,class:C(y(f))},null,2)):w("",!0),t("div",L,[t("h3",O,S(o.title),1),t("div",Q,[t("p",null,S(o.message),1)])]),o.close?(u(),h("i",{key:1,class:"tyh-icon tyh-ui-close",onClick:d})):w("",!0)])],2),[[q,l.value]])]),_:1}))}}),H={time:3500,position:"top-right",close:!0},r=s=>F(G,I(H,s)),J={class:"tyh-markdown-body"},K=t("h1",null,"Notification \u901A\u77E5",-1),M=t("h2",null,"\u4F7F\u7528\u524D",-1),R=t("p",null,"\u4F7F\u7528\u524D\uFF0C\u4F60\u5FC5\u987B\u5148\u5F15\u5165\u5B83",-1),U=t("pre",null,[t("code",{class:"language-js"},`import { Notification } from 'tyh-ui2'
`)],-1),W=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),X=t("p",null,"\u901A\u77E5\u7684\u57FA\u672C\u4F7F\u7528",-1),Y=t("p",null,"\u901A\u8FC7\u5F15\u5165 Notification \u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61",-1),Z=t("p",null,"title \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6807\u9898",-1),tt=t("p",null,"message \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u5185\u5BB9",-1),nt=[K,M,R,U,W,X,Y,Z,tt],et={setup(s,{expose:e}){return e({frontmatter:{}}),(p,d)=>(u(),h("div",J,nt))}},ot={class:"tyh-markdown-body"},it=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="open1">\u5C55\u793A\u901A\u77E5</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open1() {
    Notification({
      title: '\u63D0\u793A',
      message: '\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848'
    })
  }
<\/script>
`)],-1),st=t("h2",null,"\u4E0D\u540C\u7C7B\u578B\u7684",-1),ct=t("p",null,"type \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684\u901A\u77E5",-1),at=[it,st,ct],rt={setup(s,{expose:e}){return e({frontmatter:{}}),(p,d)=>(u(),h("div",ot,at))}},lt={class:"tyh-markdown-body"},pt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="open2">\u4E3B\u8981\u901A\u77E5</tyh-button>
  <tyh-button type="success" @click="open3">\u6210\u529F\u901A\u77E5</tyh-button>
  <tyh-button type="danger" @click="open4">\u5371\u9669\u901A\u77E5</tyh-button>
  <tyh-button type="warning" @click="open5">\u8B66\u544A\u901A\u77E5</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open2() {
    Notification({
      title: '\u4E3B\u8981\u63D0\u793A',
      message: '\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A',
      type: 'primary'
    })
  }
  function open3() {
    Notification({
      title: '\u6210\u529F\u63D0\u793A',
      message: '\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A',
      type: 'success'
    })
  }
  function open4() {
    Notification({
      title: '\u5371\u9669\u63D0\u793A',
      message: '\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A',
      type: 'danger'
    })
  }
  function open5() {
    Notification({
      title: '\u8B66\u544A\u63D0\u793A',
      message: '\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A',
      type: 'warning'
    })
  }
<\/script>
`)],-1),dt=t("h2",null,"\u4E0D\u540C\u7684\u5F39\u51FA\u4F4D\u7F6E",-1),ut=t("p",null,"position \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684\u901A\u77E5",-1),ht=[pt,dt,ut],_t={setup(s,{expose:e}){return e({frontmatter:{}}),(p,d)=>(u(),h("div",lt,ht))}},mt={class:"tyh-markdown-body"},yt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <tyh-button type="primary" @click="open6">\u4E0A\u5DE6</tyh-button>
  <tyh-button type="primary" @click="open7">\u4E0A\u53F3</tyh-button>
  <tyh-button type="primary" @click="open8">\u4E0B\u5DE6</tyh-button>
  <tyh-button type="primary" @click="open9">\u4E0B\u53F3</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open6() {
    Notification({
      title: '\u63D0\u793A',
      message: '\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848',
      position: 'top-left'
    })
  }
  function open7() {
    Notification({
      title: '\u63D0\u793A',
      message: '\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848',
      position: 'top-right'
    })
  }
  function open8() {
    Notification({
      title: '\u63D0\u793A',
      message: '\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848',
      position: 'bottom-left'
    })
  }
  function open9() {
    Notification({
      title: '\u63D0\u793A',
      message: '\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848',
      position: 'bottom-right'
    })
  }
<\/script>
`)],-1),ft=t("h2",null,"\u81EA\u5B9A\u4E49\u65F6\u957F",-1),gt=t("p",null,"time \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u901A\u77E5\u5C55\u793A\u7684\u65F6\u957F",-1),bt=[yt,ft,gt],$t={setup(s,{expose:e}){return e({frontmatter:{}}),(p,d)=>(u(),h("div",mt,bt))}},kt={class:"tyh-markdown-body"},vt=j(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-button type=&quot;primary&quot; @click=&quot;open10&quot;&gt;4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED&lt;/tyh-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { Notification } from &#39;tyh-ui2&#39;
  function open10() {
    Notification({
      title: &#39;\u63D0\u793A&#39;,
      message: &#39;4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED&#39;,
      time: 4000
    })
  }
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>message</td><td>\u63D0\u793A\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u901A\u77E5\u7C7B\u578B</td><td>string</td><td>primary / success / danger / warning</td><td>\u2014\u2014</td></tr><tr><td>time</td><td>\u5C55\u793A\u7684\u5E02\u573A</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr><tr><td>position</td><td>\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>top-left / top-right / bottom-left / bottom-right</td><td>top-right</td></tr><tr><td>close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr></tbody></table>`,3),Nt=c(" Tagging \u6807\u6CE8 "),Ct=c(" Drawer \u62BD\u5C49 "),wt={setup(s,{expose:e}){return e({frontmatter:{}}),(p,d)=>{const _=k("tyh-turn-page-item"),f=k("tyh-turn-page");return u(),h("div",kt,[vt,n(f,{style:{margin:"50px 0"}},{default:i(()=>[n(_,{direction:"left",url:"/component/tagging"},{default:i(()=>[Nt]),_:1}),n(_,{direction:"right",url:"/component/drawer"},{default:i(()=>[Ct]),_:1})]),_:1})])}}},St=c("\u5C55\u793A\u901A\u77E5"),xt=c("\u4E3B\u8981\u901A\u77E5"),Bt=c("\u6210\u529F\u901A\u77E5"),Tt=c("\u5371\u9669\u901A\u77E5"),qt=c("\u8B66\u544A\u901A\u77E5"),Vt=c("\u4E0A\u5DE6"),Dt=c("\u4E0A\u53F3"),jt=c("\u4E0B\u5DE6"),At=c("\u4E0B\u53F3"),Et=c("4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED"),Ot={setup(s){function e(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848"})}function l(){r({title:"\u4E3B\u8981\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A",type:"primary"})}function p(){r({title:"\u6210\u529F\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A",type:"success"})}function d(){r({title:"\u5371\u9669\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A",type:"danger"})}function _(){r({title:"\u8B66\u544A\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A",type:"warning"})}function f(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"top-left"})}function b(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"top-right"})}function $(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"bottom-left"})}function o(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"bottom-right"})}function v(){r({title:"\u63D0\u793A",message:"4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED",time:4e3})}return(Ft,It)=>{const a=k("tyh-button"),g=A("high");return u(),h(E,null,[m(n(y(et),null,null,512),[[g]]),n(a,{type:"primary",onClick:e},{default:i(()=>[St]),_:1}),m(n(y(rt),null,null,512),[[g]]),n(a,{type:"primary",onClick:l},{default:i(()=>[xt]),_:1}),n(a,{type:"success",onClick:p},{default:i(()=>[Bt]),_:1}),n(a,{type:"danger",onClick:d},{default:i(()=>[Tt]),_:1}),n(a,{type:"warning",onClick:_},{default:i(()=>[qt]),_:1}),m(n(y(_t),null,null,512),[[g]]),n(a,{type:"primary",onClick:f},{default:i(()=>[Vt]),_:1}),n(a,{type:"primary",onClick:b},{default:i(()=>[Dt]),_:1}),n(a,{type:"primary",onClick:$},{default:i(()=>[jt]),_:1}),n(a,{type:"primary",onClick:o},{default:i(()=>[At]),_:1}),m(n(y($t),null,null,512),[[g]]),n(a,{type:"primary",onClick:v},{default:i(()=>[Et]),_:1}),m(n(y(wt),null,null,512),[[g]])],64)}}};export{Ot as default};
