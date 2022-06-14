import{o as c,c as d,e as _,a as s,b as t,d as o,q as x,j as i,r as q,s as y,x as v,f as g,F as b,g as V,t as k}from"./index.df163828.js";const w={class:"coco-markdown-body"},B=_("h1",null,"Select \u9009\u62E9\u5668",-1),N=_("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),$=_("p",null,"\u9009\u62E9\u5668\u7684\u57FA\u672C\u7528\u6CD5",-1),D=[B,N,$],S={__name:"selectA",setup(p,{expose:e}){return e({frontmatter:{}}),(h,n)=>(c(),d("div",w,D))}},T={class:"coco-markdown-body"},A=x(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-select v-model=&quot;value&quot; placeholder=&quot;\u8BF7\u9009\u62E9&quot;&gt;
    &lt;coco-option
      v-for=&quot;(item, index) in options&quot;
      :key=&quot;index&quot;
      :value=&quot;item.value&quot;
    &gt;
      {{ item.label }}
    &lt;/coco-option&gt;
  &lt;/coco-select&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value = ref(&#39;\u9009\u98792&#39;)
  const options = [
    {
      value: &#39;\u9009\u98791&#39;,
      label: &#39;\u4E0A\u6D77&#39;
    },
    {
      value: &#39;\u9009\u98792&#39;,
      label: &#39;\u5317\u4EAC&#39;
    },
    {
      value: &#39;\u9009\u98793&#39;,
      label: &#39;\u676D\u5DDE&#39;
    },
    {
      value: &#39;\u9009\u98794&#39;,
      label: &#39;\u5929\u6D25&#39;
    },
    {
      value: &#39;\u9009\u98795&#39;,
      label: &#39;\u5927\u8FDE&#39;
    }
  ]
&lt;/script&gt;
</code></pre><h2>Attributes</h2><p>coco-select</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><p>coco-option</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9009\u9879\u7684\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>label</td><td>\u5206\u7EC4\u7684\u7EC4\u540D</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table>`,6),C=i(" Textarea \u6587\u672C\u57DF "),F=i(" Tagging \u6807\u6CE8 "),j={__name:"selectB",setup(p,{expose:e}){return e({frontmatter:{}}),(h,n)=>{const l=s("coco-turn-page-item"),u=s("coco-turn-page");return c(),d("div",T,[A,t(u,{style:{margin:"50px 0"}},{default:o(()=>[t(l,{direction:"left",url:"/component/textarea"},{default:o(()=>[C]),_:1}),t(l,{direction:"right",url:"/component/tagging"},{default:o(()=>[F]),_:1})]),_:1})])}}},L={__name:"select",setup(p){const e=q("\u9009\u98792"),r=[{value:"\u9009\u98791",label:"\u4E0A\u6D77"},{value:"\u9009\u98792",label:"\u5317\u4EAC"},{value:"\u9009\u98793",label:"\u676D\u5DDE"},{value:"\u9009\u98794",label:"\u5929\u6D25"},{value:"\u9009\u98795",label:"\u5927\u8FDE"}];return(h,n)=>{const l=s("coco-option"),u=s("coco-select"),m=y("high");return c(),d(b,null,[v(t(g(S),null,null,512),[[m]]),t(u,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(c(),d(b,null,V(r,(a,f)=>t(l,{key:f,value:a.value},{default:o(()=>[i(k(a.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),v(t(g(j),null,null,512),[[m]])],64)}}};export{L as default};
