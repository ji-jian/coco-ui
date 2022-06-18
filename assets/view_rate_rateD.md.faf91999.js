import{_ as s,o as t,c as a,e as n}from"./app.8bc1270f.js";const h='{"title":"Attributes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"view/rate/rateD.md"}',l={name:"view/rate/rateD.md"},o=n(`<div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">coco-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">showText</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">coco-rate</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">showText</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:sayText</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;1\u661F&#39;, &#39;2\u661F&#39;, &#39;3\u661F&#39;, &#39;4\u661F&#39;, &#39;5\u661F&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>color</td><td>\u9009\u4E2D\u7684 icon \u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#fbcc30</td></tr><tr><td>voidColor</td><td>\u672A\u9009\u4E2D\u7684 icon \u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#C6D1DE</td></tr><tr><td>showText</td><td>\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>sayText</td><td>\u81EA\u5B9A\u4E49\u8F85\u52A9\u6587\u5B57\u6570\u7EC4</td><td>boolean</td><td>\u2014\u2014</td><td>[&#39;\u6781\u5DEE&#39;, &#39;\u5931\u671B&#39;, &#39;\u4E00\u822C&#39;, &#39;\u60CA\u559C&#39;, &#39;\u6EE1\u610F&#39;]</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5206\u503C\u6539\u53D8\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,5),e=[o];function p(r,c,d,D,F,y){return t(),a("div",null,e)}var C=s(l,[["render",p]]);export{h as __pageData,C as default};
