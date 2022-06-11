import{o as d,f as r,j as h,r as s,B as t,C as n,P as f,l as i,s as x,Q as q,x as v,u as g,F as y,k,t as V}from"./vendor.69ad1cd2.js";const w={class:"tyh-markdown-body"},B=h("h1",null,"Select \u9009\u62E9\u5668",-1),N=h("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),$=h("p",null,"\u9009\u62E9\u5668\u7684\u57FA\u672C\u7528\u6CD5",-1),C=[B,N,$],D={setup(_,{expose:e}){return e({frontmatter:{}}),(p,l)=>(d(),r("div",w,C))}},S={class:"tyh-markdown-body"},T=f(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-select v-model=&quot;value&quot; placeholder=&quot;\u8BF7\u9009\u62E9&quot;&gt;
    &lt;tyh-option
      v-for=&quot;(item, index) in options&quot;
      :key=&quot;index&quot;
      :value=&quot;item.value&quot;
    &gt;
      {{ item.label }}
    &lt;/tyh-option&gt;
  &lt;/tyh-select&gt;
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
</code></pre><h2>Attributes</h2><p>tyh-select</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><p>tyh-option</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9009\u9879\u7684\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>label</td><td>\u5206\u7EC4\u7684\u7EC4\u540D</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table>`,6),F=i(" Textarea \u6587\u672C\u57DF "),j=i(" Tagging \u6807\u6CE8 "),A={setup(_,{expose:e}){return e({frontmatter:{}}),(p,l)=>{const o=s("tyh-turn-page-item"),c=s("tyh-turn-page");return d(),r("div",S,[T,t(c,{style:{margin:"50px 0"}},{default:n(()=>[t(o,{direction:"left",url:"/component/textarea"},{default:n(()=>[F]),_:1}),t(o,{direction:"right",url:"/component/tagging"},{default:n(()=>[j]),_:1})]),_:1})])}}},L={setup(_){const e=x("\u9009\u98792"),u=[{value:"\u9009\u98791",label:"\u4E0A\u6D77"},{value:"\u9009\u98792",label:"\u5317\u4EAC"},{value:"\u9009\u98793",label:"\u676D\u5DDE"},{value:"\u9009\u98794",label:"\u5929\u6D25"},{value:"\u9009\u98795",label:"\u5927\u8FDE"}];return(p,l)=>{const o=s("tyh-option"),c=s("tyh-select"),m=q("high");return d(),r(y,null,[v(t(g(D),null,null,512),[[m]]),t(c,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(d(),r(y,null,k(u,(a,b)=>t(o,{key:b,value:a.value},{default:n(()=>[i(V(a.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),v(t(g(A),null,null,512),[[m]])],64)}}};export{L as default};
