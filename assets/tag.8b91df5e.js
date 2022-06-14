import{a as p,o as f,c as m,e as n,b as t,d as o,j as e,q as C,r,s as $,x as a,f as q,A as u,F as b}from"./index.df163828.js";const x={class:"coco-markdown-body"},k=n("h1",null,"Tag \u6807\u7B7E",-1),z=n("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),B=n("p",null,"\u6807\u7B7E\u7684\u57FA\u672C\u4F7F\u7528",-1),N=e("\u6807\u7B7E\u4E00"),V=e("\u6807\u7B7E\u4E8C"),A=e("\u6807\u7B7E\u4E09"),T=e("\u6807\u7B7E\u56DB"),D=e("\u6807\u7B7E\u4E94"),E=n("pre",null,[n("code",{class:"language-html"},`<coco-tag>\u6807\u7B7E\u4E00</coco-tag>
<coco-tag type="primary">\u6807\u7B7E\u4E8C</coco-tag>
<coco-tag type="success">\u6807\u7B7E\u4E09</coco-tag>
<coco-tag type="danger">\u6807\u7B7E\u56DB</coco-tag>
<coco-tag type="warning">\u6807\u7B7E\u4E94</coco-tag>
`)],-1),F=n("h2",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),S=n("p",null,"size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8",-1),j=e("\u6807\u7B7E"),G=e("\u6807\u7B7E"),H=e("\u6807\u7B7E"),I=n("pre",null,[n("code",{class:"language-html"},`<coco-tag type="primary">\u6807\u7B7E</coco-tag>
<coco-tag size="small" type="primary">\u6807\u7B7E</coco-tag>
<coco-tag size="mini" type="primary">\u6807\u7B7E</coco-tag>
`)],-1),J=n("h2",null,"\u5706\u89D2\u6807\u7B7E",-1),K=n("p",null,"round \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5706\u89D2\u663E\u793A",-1),L=e("\u6807\u7B7E\u4E00"),M=e("\u6807\u7B7E\u4E8C"),O=e("\u6807\u7B7E\u4E09"),P=e("\u6807\u7B7E\u56DB"),Q=e("\u6807\u7B7E\u4E94"),R=n("pre",null,[n("code",{class:"language-html"},`<coco-tag round>\u6807\u7B7E\u4E00</coco-tag>
<coco-tag round type="primary">\u6807\u7B7E\u4E8C</coco-tag>
<coco-tag round type="success">\u6807\u7B7E\u4E09</coco-tag>
<coco-tag round type="danger">\u6807\u7B7E\u56DB</coco-tag>
<coco-tag round type="warning">\u6807\u7B7E\u4E94</coco-tag>
`)],-1),U=n("h2",null,"\u53EF\u5173\u95ED",-1),W=n("p",null,"\u8BBE\u7F6E isclose \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6807\u7B7E\u662F\u5426\u53EF\u79FB\u9664",-1),X=n("p",null,"\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 onClose \u4E8B\u4EF6\u6765\u5B9E\u73B0",-1),Y={__name:"tagA",setup(y,{expose:l}){return l({frontmatter:{}}),(i,h)=>{const s=p("coco-tag");return f(),m("div",x,[k,z,B,n("p",null,[t(s,null,{default:o(()=>[N]),_:1}),t(s,{type:"primary"},{default:o(()=>[V]),_:1}),t(s,{type:"success"},{default:o(()=>[A]),_:1}),t(s,{type:"danger"},{default:o(()=>[T]),_:1}),t(s,{type:"warning"},{default:o(()=>[D]),_:1})]),E,F,S,n("p",null,[t(s,{type:"primary"},{default:o(()=>[j]),_:1}),t(s,{size:"small",type:"primary"},{default:o(()=>[G]),_:1}),t(s,{size:"mini",type:"primary"},{default:o(()=>[H]),_:1})]),I,J,K,n("p",null,[t(s,{round:""},{default:o(()=>[L]),_:1}),t(s,{round:"",type:"primary"},{default:o(()=>[M]),_:1}),t(s,{round:"",type:"success"},{default:o(()=>[O]),_:1}),t(s,{round:"",type:"danger"},{default:o(()=>[P]),_:1}),t(s,{round:"",type:"warning"},{default:o(()=>[Q]),_:1})]),R,U,W,X])}}},Z={class:"coco-markdown-body"},tt=C(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-tag v-show=&quot;show1&quot; isClose @close=&quot;show1 = false&quot;&gt;\u6807\u7B7E\u4E00&lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show2&quot; type=&quot;primary&quot; isClose @close=&quot;show2 = false&quot;&gt;
    \u6807\u7B7E\u4E8C
  &lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show3&quot; type=&quot;success&quot; isClose @close=&quot;show3 = false&quot;&gt;
    \u6807\u7B7E\u4E09
  &lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show4&quot; type=&quot;danger&quot; isClose @close=&quot;show4 = false&quot;&gt;
    \u6807\u7B7E\u56DB
  &lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show5&quot; type=&quot;warning&quot; isClose @close=&quot;show5 = false&quot;&gt;
    \u6807\u7B7E\u4E94
  &lt;/coco-tag&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6807\u7B7E\u7684\u7C7B\u578B</td><td>string</td><td>default / primary / success / danger / warning</td><td>default</td></tr><tr><td>size</td><td>\u6807\u7B7E\u7684\u5C3A\u5BF8</td><td>string</td><td>\u2014 / small / mini</td><td>\u2014\u2014</td></tr><tr><td>round</td><td>\u914D\u7F6E\u5706\u89D2\u663E\u793A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>isClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,5),ot=e(" Card \u5361\u7247 "),et=e(" link \u94FE\u63A5 "),st={__name:"tagB",setup(y,{expose:l}){return l({frontmatter:{}}),(i,h)=>{const s=p("coco-turn-page-item"),w=p("coco-turn-page");return f(),m("div",Z,[tt,t(w,{style:{margin:"50px 0"}},{default:o(()=>[t(s,{direction:"left",url:"/component/card"},{default:o(()=>[ot]),_:1}),t(s,{direction:"right",url:"/component/link"},{default:o(()=>[et]),_:1})]),_:1})])}}},nt=e("\u6807\u7B7E\u4E00"),ct=e(" \u6807\u7B7E\u4E8C "),at=e(" \u6807\u7B7E\u4E09 "),lt=e(" \u6807\u7B7E\u56DB "),dt=e(" \u6807\u7B7E\u4E94 "),ut={__name:"tag",setup(y){const l=r(!0),_=r(!0),i=r(!0),h=r(!0),s=r(!0);return(w,c)=>{const d=p("coco-tag"),v=$("high");return f(),m(b,null,[a(t(q(Y),null,null,512),[[v]]),a(t(d,{isClose:"",onClose:c[0]||(c[0]=g=>l.value=!1)},{default:o(()=>[nt]),_:1},512),[[u,l.value]]),a(t(d,{type:"primary",isClose:"",onClose:c[1]||(c[1]=g=>_.value=!1)},{default:o(()=>[ct]),_:1},512),[[u,_.value]]),a(t(d,{type:"success",isClose:"",onClose:c[2]||(c[2]=g=>i.value=!1)},{default:o(()=>[at]),_:1},512),[[u,i.value]]),a(t(d,{type:"danger",isClose:"",onClose:c[3]||(c[3]=g=>h.value=!1)},{default:o(()=>[lt]),_:1},512),[[u,h.value]]),a(t(d,{type:"warning",isClose:"",onClose:c[4]||(c[4]=g=>s.value=!1)},{default:o(()=>[dt]),_:1},512),[[u,s.value]]),a(t(q(st),null,null,512),[[v]])],64)}}};export{ut as default};
