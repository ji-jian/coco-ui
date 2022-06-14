import{y as x,r as B,z as v,o as u,h as T,d as i,x as f,A as q,e as t,c as _,B as C,f as h,m as w,t as S,T as D,C as V,a as k,b as o,q as A,j as s,s as E,F as j}from"./index.df163828.js";import{c as z,m as F}from"./tips.e07c5751.js";const I={title:String,message:String,time:{type:Number,default:()=>3500},position:{type:String,default:()=>"top-right",validator(c){return["top-left","top-right","bottom-left","bottom-right",""].includes(c)}},close:Boolean,type:{type:String,validator(c){return["primary","success","danger","warning",""].includes(c)}}},L={class:"coco-notification-body"},O={class:"coco-notification-content"},P={class:"coco-notification-title"},G={class:"coco-notification-message"},H=x({__name:"CocoNotification",props:I,setup(c){const n=c,l=B(!0);let p;(function(){n.time>0&&(p=setTimeout(()=>{d()},n.time))})();const d=()=>{clearTimeout(p),l.value=!1},m=v(()=>{let e="";switch(n.type){case"primary":e="coco-ui-smile";break;case"success":e="coco-ui-success-filling";break;case"danger":e="coco-ui-error";break;case"warning":e="coco-ui-warning-filling";break}return e}),g=v(()=>["coco-icon","coco-notification-icon",m.value,`coco-notification-icon-${n.type}`]),b=V(),$=()=>{var e;(e=b.vnode.el.parentElement)==null||e.removeChild(b.vnode.el)};return(e,N)=>(u(),T(D,{name:"coco-notification-fade",onAfterLeave:$,appear:""},{default:i(()=>[f(t("div",{class:C(["coco-notification",`coco-notification-${e.position}`])},[t("div",L,[e.type?(u(),_("i",{key:0,class:C(h(g))},null,2)):w("",!0),t("div",O,[t("h3",P,S(e.title),1),t("div",G,[t("p",null,S(e.message),1)])]),e.close?(u(),_("i",{key:1,class:"coco-icon coco-ui-close",onClick:d})):w("",!0)])],2),[[q,l.value]])]),_:1}))}}),J={time:3500,position:"top-right",close:!0},r=c=>z(H,F(J,c)),K={class:"coco-markdown-body"},M=t("h1",null,"Notification \u901A\u77E5",-1),Q=t("h2",null,"\u4F7F\u7528\u524D",-1),R=t("p",null,"\u4F7F\u7528\u524D\uFF0C\u4F60\u5FC5\u987B\u5148\u5F15\u5165\u5B83",-1),U=t("pre",null,[t("code",{class:"language-js"},`import { Notification } from 'coco-ui2'
`)],-1),W=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),X=t("p",null,"\u901A\u77E5\u7684\u57FA\u672C\u4F7F\u7528",-1),Y=t("p",null,"\u901A\u8FC7\u5F15\u5165 Notification \u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61",-1),Z=t("p",null,"title \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6807\u9898",-1),tt=t("p",null,"message \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u5185\u5BB9",-1),ot=[M,Q,R,U,W,X,Y,Z,tt],nt={__name:"notificationA",setup(c,{expose:n}){return n({frontmatter:{}}),(p,d)=>(u(),_("div",K,ot))}},et={class:"coco-markdown-body"},it=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="open1">\u5C55\u793A\u901A\u77E5</coco-button>
</template>

<script setup>
  import { Notification } from 'coco-ui2'
  function open1() {
    Notification({
      title: '\u63D0\u793A',
      message: '\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848'
    })
  }
<\/script>
`)],-1),ct=t("h2",null,"\u4E0D\u540C\u7C7B\u578B\u7684",-1),st=t("p",null,"type \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684\u901A\u77E5",-1),at=[it,ct,st],rt={__name:"notificationB",setup(c,{expose:n}){return n({frontmatter:{}}),(p,d)=>(u(),_("div",et,at))}},lt={class:"coco-markdown-body"},pt=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="open2">\u4E3B\u8981\u901A\u77E5</coco-button>
  <coco-button type="success" @click="open3">\u6210\u529F\u901A\u77E5</coco-button>
  <coco-button type="danger" @click="open4">\u5371\u9669\u901A\u77E5</coco-button>
  <coco-button type="warning" @click="open5">\u8B66\u544A\u901A\u77E5</coco-button>
</template>

<script setup>
  import { Notification } from 'coco-ui2'
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
`)],-1),dt=t("h2",null,"\u4E0D\u540C\u7684\u5F39\u51FA\u4F4D\u7F6E",-1),ut=t("p",null,"position \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684\u901A\u77E5",-1),_t=[pt,dt,ut],mt={__name:"notificationC",setup(c,{expose:n}){return n({frontmatter:{}}),(p,d)=>(u(),_("div",lt,_t))}},ft={class:"coco-markdown-body"},ht=t("pre",null,[t("code",{class:"language-html"},`<template>
  <coco-button type="primary" @click="open6">\u4E0A\u5DE6</coco-button>
  <coco-button type="primary" @click="open7">\u4E0A\u53F3</coco-button>
  <coco-button type="primary" @click="open8">\u4E0B\u5DE6</coco-button>
  <coco-button type="primary" @click="open9">\u4E0B\u53F3</coco-button>
</template>

<script setup>
  import { Notification } from 'coco-ui2'
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
`)],-1),gt=t("h2",null,"\u81EA\u5B9A\u4E49\u65F6\u957F",-1),yt=t("p",null,"time \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u901A\u77E5\u5C55\u793A\u7684\u65F6\u957F",-1),bt=[ht,gt,yt],$t={__name:"notificationD",setup(c,{expose:n}){return n({frontmatter:{}}),(p,d)=>(u(),_("div",ft,bt))}},kt={class:"coco-markdown-body"},Nt=A(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-button type=&quot;primary&quot; @click=&quot;open10&quot;&gt;4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED&lt;/coco-button&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { Notification } from &#39;coco-ui2&#39;
  function open10() {
    Notification({
      title: &#39;\u63D0\u793A&#39;,
      message: &#39;4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED&#39;,
      time: 4000
    })
  }
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>message</td><td>\u63D0\u793A\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u901A\u77E5\u7C7B\u578B</td><td>string</td><td>primary / success / danger / warning</td><td>\u2014\u2014</td></tr><tr><td>time</td><td>\u5C55\u793A\u7684\u5E02\u573A</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr><tr><td>position</td><td>\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>top-left / top-right / bottom-left / bottom-right</td><td>top-right</td></tr><tr><td>close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr></tbody></table>`,3),vt=s(" Tagging \u6807\u6CE8 "),Ct=s(" Drawer \u62BD\u5C49 "),wt={__name:"notificationE",setup(c,{expose:n}){return n({frontmatter:{}}),(p,d)=>{const m=k("coco-turn-page-item"),g=k("coco-turn-page");return u(),_("div",kt,[Nt,o(g,{style:{margin:"50px 0"}},{default:i(()=>[o(m,{direction:"left",url:"/component/tagging"},{default:i(()=>[vt]),_:1}),o(m,{direction:"right",url:"/component/drawer"},{default:i(()=>[Ct]),_:1})]),_:1})])}}},St=s("\u5C55\u793A\u901A\u77E5"),xt=s("\u4E3B\u8981\u901A\u77E5"),Bt=s("\u6210\u529F\u901A\u77E5"),Tt=s("\u5371\u9669\u901A\u77E5"),qt=s("\u8B66\u544A\u901A\u77E5"),Dt=s("\u4E0A\u5DE6"),Vt=s("\u4E0A\u53F3"),At=s("\u4E0B\u5DE6"),Et=s("\u4E0B\u53F3"),jt=s("4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED"),Ot={__name:"notification",setup(c){function n(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848"})}function l(){r({title:"\u4E3B\u8981\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A",type:"primary"})}function p(){r({title:"\u6210\u529F\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A",type:"success"})}function d(){r({title:"\u5371\u9669\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A",type:"danger"})}function m(){r({title:"\u8B66\u544A\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A",type:"warning"})}function g(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"top-left"})}function b(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"top-right"})}function $(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"bottom-left"})}function e(){r({title:"\u63D0\u793A",message:"\u8FD9\u91CC\u662F\u63D0\u793A\u7684\u6587\u6848",position:"bottom-right"})}function N(){r({title:"\u63D0\u793A",message:"4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED",time:4e3})}return(zt,Ft)=>{const a=k("coco-button"),y=E("high");return u(),_(j,null,[f(o(h(nt),null,null,512),[[y]]),o(a,{type:"primary",onClick:n},{default:i(()=>[St]),_:1}),f(o(h(rt),null,null,512),[[y]]),o(a,{type:"primary",onClick:l},{default:i(()=>[xt]),_:1}),o(a,{type:"success",onClick:p},{default:i(()=>[Bt]),_:1}),o(a,{type:"danger",onClick:d},{default:i(()=>[Tt]),_:1}),o(a,{type:"warning",onClick:m},{default:i(()=>[qt]),_:1}),f(o(h(mt),null,null,512),[[y]]),o(a,{type:"primary",onClick:g},{default:i(()=>[Dt]),_:1}),o(a,{type:"primary",onClick:b},{default:i(()=>[Vt]),_:1}),o(a,{type:"primary",onClick:$},{default:i(()=>[At]),_:1}),o(a,{type:"primary",onClick:e},{default:i(()=>[Et]),_:1}),f(o(h($t),null,null,512),[[y]]),o(a,{type:"primary",onClick:N},{default:i(()=>[jt]),_:1}),f(o(h(wt),null,null,512),[[y]])],64)}}};export{Ot as default};
