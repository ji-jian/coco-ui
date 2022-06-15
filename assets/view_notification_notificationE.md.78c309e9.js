import{_ as s,o as t,c as n,e as a}from"./app.b656b8bd.js";const A='{"title":"Attributes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"}],"relativePath":"view/notification/notificationE.md"}',o={name:"view/notification/notificationE.md"},l=a(`<div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">coco-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">open10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">coco-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Notification</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">coco-ui2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open10</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">Notification</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u63D0\u793A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4000 \u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      time</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4000</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>message</td><td>\u63D0\u793A\u4FE1\u606F</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u901A\u77E5\u7C7B\u578B</td><td>string</td><td>primary / success / danger / warning</td><td>\u2014\u2014</td></tr><tr><td>time</td><td>\u5C55\u793A\u7684\u5E02\u573A</td><td>number</td><td>\u2014\u2014</td><td>3500</td></tr><tr><td>position</td><td>\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>top-left / top-right / bottom-left / bottom-right</td><td>top-right</td></tr><tr><td>close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr></tbody></table>`,3),p=[l];function e(r,c,F,D,y,i){return t(),n("div",null,p)}var C=s(o,[["render",e]]);export{A as __pageData,C as default};
