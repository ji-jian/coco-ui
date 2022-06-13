import{r as l,o as c,f as d,B as e,j as a,C as o,P as m,l as u,Q as g,x as i,u as p,F as y}from"./vendor.69ad1cd2.js";const f={class:"tyh-markdown-body"},x=a("h1",null,"Tree \u6811\u5F62\u63A7\u4EF6",-1),v=a("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),$=a("p",null,"tree \u7684\u57FA\u672C\u4F7F\u7528",-1),k=a("p",null,"data \u5C5E\u6027\u4F20\u9012\u4E00\u4E2A\u6811\u578B\u7ED3\u6784\u7684\u6570\u636E",-1),w={setup(s,{expose:n}){return n({frontmatter:{}}),(_,r)=>{const t=l("tyh-alert");return c(),d("div",f,[x,e(t,{type:"danger",message:"\u7EC4\u4EF6\u4ECD\u5728\u5B8C\u5584\u4E2D\uFF0C\u8C28\u614E\u4F7F\u7528\uFF01"}),v,$,k])}}},B={class:"tyh-markdown-body"},N=m(`<pre><code class="language-html">&lt;template&gt;
  &lt;tyh-tree :data=&quot;data&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  const data = [
    {
      label: &#39;\u4E00\u7EA7 1&#39;,
      children: [
        {
          label: &#39;\u4E8C\u7EA7 1-1&#39;,
          children: [
            {
              label: &#39;\u4E09\u7EA7 1-1-1&#39;
            }
          ]
        }
      ]
    },
    {
      label: &#39;\u4E00\u7EA7 2&#39;,
      children: [
        {
          label: &#39;\u4E8C\u7EA7 2-1&#39;,
          children: [
            {
              label: &#39;\u4E09\u7EA7 2-1-1&#39;
            }
          ]
        },
        {
          label: &#39;\u4E8C\u7EA7 2-2&#39;,
          children: [
            {
              label: &#39;\u4E09\u7EA7 2-2-1&#39;
            }
          ]
        }
      ]
    },
    {
      label: &#39;\u4E00\u7EA7 3&#39;,
      children: [
        {
          label: &#39;\u4E8C\u7EA7 3-1&#39;,
          children: [
            {
              label: &#39;\u4E09\u7EA7 3-1-1&#39;
            }
          ]
        },
        {
          label: &#39;\u4E8C\u7EA7 3-2&#39;,
          children: [
            {
              label: &#39;\u4E09\u7EA7 3-2-1&#39;
            }
          ]
        }
      ]
    }
  ]
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E</td><td>array</td><td>\u2014\u2014</td><td>[]</td></tr></tbody></table>`,3),V=u(" Radio \u5355\u9009\u6846 "),C=u(" PageHeader \u9875\u5934 "),q={setup(s,{expose:n}){return n({frontmatter:{}}),(_,r)=>{const t=l("tyh-turn-page-item"),b=l("tyh-turn-page");return c(),d("div",B,[N,e(b,{style:{margin:"50px 0"}},{default:o(()=>[e(t,{direction:"left",url:"/component/radio"},{default:o(()=>[V]),_:1}),e(t,{direction:"right",url:"/component/pageHeader"},{default:o(()=>[C]),_:1})]),_:1})])}}},F={setup(s){const n=[{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}];return(h,_)=>{const r=l("tyh-tree"),t=g("high");return c(),d(y,null,[i(e(p(w),null,null,512),[[t]]),e(r,{data:n}),i(e(p(q),null,null,512),[[t]])],64)}}};export{F as default};
