import{d,s as y,e as g,o as a,c as h,C as v,x as C,y as w,j as o,f as m,n,h as u,t as S,u as k,g as B,T as N,q as T}from"./vendor.69ad1cd2.js";import{c as $,m as b}from"./tips.f775595e.js";const z={message:String,type:{type:String,default:()=>"default",validator(s){return["primary","success","danger","warning","default",""].includes(s)}},showClose:Boolean,time:{type:Number,default:()=>200},offset:{type:Number,default:()=>20},icon:String,round:Boolean},D={class:"tyh-message-content"},E=d({props:z,setup(s){const t=s,r=y(!0);let i;(function(){t.time>0&&(i=setTimeout(()=>{l()},t.time))})();const l=()=>{clearTimeout(i),r.value=!1},c=T(),p=()=>{var e;(e=c.vnode.el.parentElement)==null||e.removeChild(c.vnode.el)},f=g(()=>["tyh-message",`tyh-message-${t.type}`,{"tyh-message-round":t.round}]);return(e,V)=>(a(),h(N,{name:"tyh-message-fade",onAfterLeave:p,appear:""},{default:v(()=>[C(o("div",{class:n(k(f)),style:B({top:`${e.offset}px`})},[o("div",D,[e.icon?(a(),m("i",{key:0,class:n(["tyh-icon","lef-icon",e.icon,`tyh-message-${e.type}`])},null,2)):u("",!0),o("span",null,S(e.message),1),e.showClose?(a(),m("i",{key:1,class:n(["tyh-icon","tyh-ui-close",`tyh-message-${e.type}`]),onClick:l},null,2)):u("",!0)])],6),[[w,r.value]])]),_:1}))}}),M={time:2e3,offset:20},A=s=>$(E,b(M,s));export{A as M};
