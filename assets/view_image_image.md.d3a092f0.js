import{_ as r,r as c,o as n,c as l,a as o,b as s,F as d,h as i,t as D,d as e,e as p}from"./app.5c866d25.js";const V='{"title":"Image \u56FE\u7247","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846","slug":"\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846"},{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"slots","slug":"slots"}],"relativePath":"view/image/image.md"}',F={name:"view/image/image.md"},y=s("h1",{id:"image-\u56FE\u7247",tabindex:"-1"},[e("Image \u56FE\u7247 "),s("a",{class:"header-anchor",href:"#image-\u56FE\u7247","aria-hidden":"true"},"#")],-1),h=s("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[e("\u57FA\u672C\u4F7F\u7528 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1),u=s("p",null,"\u56FE\u7247\u7684\u57FA\u672C\u4F7F\u7528",-1),g=s("p",null,"src \u5C5E\u6027\u53EF\u4EE5\u6DFB\u52A0\u56FE\u7247\u8DEF\u5F84",-1),_=s("p",null,"width\uFF0Cheight \u53EF\u4EE5\u914D\u7F6E\u56FE\u7247\u5BBD\u9AD8",-1),f=p(`<div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">coco-image</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://tianyuhao.cn/images/coco-ui/giraffe.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846" tabindex="-1">\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846 <a class="header-anchor" href="#\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846" aria-hidden="true">#</a></h2><p>fit \u5C5E\u6027\u914D\u7F6E\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5230\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener noreferrer">object-fit</a></p>`,3),C={class:"fitBox"},m={class:"text"},b=p(`<div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fitBox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fit in [&#39;fill&#39;, &#39;contain&#39;, &#39;cover&#39;, &#39;none&#39;, &#39;scale-down&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ fit }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">coco-image</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://tianyuhao.cn/images/coco-ui/giraffe.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:fit</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>src</td><td>\u56FE\u7247\u8DEF\u5F84</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>width</td><td>\u56FE\u7247\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>height</td><td>\u56FE\u7247\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>fit</td><td>\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>alt</td><td>\u539F\u751F alt \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>select</td><td>\u662F\u5426\u53EF\u4EE5\u9009\u62E9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>draggable</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u52A8</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>load</td><td>\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1</td><td>\u2014\u2014</td></tr><tr><td>error</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1</td><td>\u2014\u2014</td></tr></tbody></table><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u5931\u8D25\u63D0\u793A</td></tr></tbody></table>`,7);function v(A,E,q,x,T,S){const a=c("coco-image");return n(),l("div",null,[y,h,u,g,_,o(a,{width:"300px",src:"https://tianyuhao.cn/images/coco-ui/giraffe.jpg"}),f,s("div",C,[(n(),l(d,null,i(["fill","contain","cover","none","scale-down"],t=>s("div",{class:"item",key:t},[s("span",m,D(t),1),o(a,{width:"100px",height:"100px",src:"https://tianyuhao.cn/images/coco-ui/giraffe.jpg",fit:t},null,8,["fit"])])),64))]),b])}var j=r(F,[["render",v]]);export{V as __pageData,j as default};
