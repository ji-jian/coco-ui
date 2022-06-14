import{a as l,o as r,c as d,b as t,e as a,d as c,q as m,j as b,s as g,x as h,f as p,F as f}from"./index.df163828.js";const x={class:"coco-markdown-body"},v=a("h1",null,"Tree \u6811\u5F62\u63A7\u4EF6",-1),y=a("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),$=a("p",null,"tree \u7684\u57FA\u672C\u4F7F\u7528",-1),k=a("p",null,"data \u5C5E\u6027\u4F20\u9012\u4E00\u4E2A\u6811\u578B\u7ED3\u6784\u7684\u6570\u636E",-1),w={__name:"treeA",setup(s,{expose:n}){return n({frontmatter:{}}),(i,o)=>{const e=l("coco-alert");return r(),d("div",x,[v,t(e,{type:"danger",message:"\u7EC4\u4EF6\u4ECD\u5728\u5B8C\u5584\u4E2D\uFF0C\u8C28\u614E\u4F7F\u7528\uFF01"}),y,$,k])}}},B={class:"coco-markdown-body"},N=m(`<pre><code class="language-html">&lt;template&gt;
  &lt;coco-tree :data=&quot;data&quot; /&gt;
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
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E</td><td>array</td><td>\u2014\u2014</td><td>[]</td></tr></tbody></table>`,3),V=b(" Radio \u5355\u9009\u6846 "),q=b(" PageHeader \u9875\u5934 "),A={__name:"treeB",setup(s,{expose:n}){return n({frontmatter:{}}),(i,o)=>{const e=l("coco-turn-page-item"),u=l("coco-turn-page");return r(),d("div",B,[N,t(u,{style:{margin:"50px 0"}},{default:c(()=>[t(e,{direction:"left",url:"/component/radio"},{default:c(()=>[V]),_:1}),t(e,{direction:"right",url:"/component/pageHeader"},{default:c(()=>[q]),_:1})]),_:1})])}}},D={__name:"tree",setup(s){const n=[{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}];return(_,i)=>{const o=l("coco-tree"),e=g("high");return r(),d(f,null,[h(t(p(w),null,null,512),[[e]]),t(o,{data:n}),h(t(p(A),null,null,512),[[e]])],64)}}};export{D as default};
