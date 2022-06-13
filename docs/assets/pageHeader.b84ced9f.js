import {
  o as s,
  f as a,
  j as n,
  r as c,
  B as t,
  C as r,
  P as m,
  l as p,
  Q as f,
  x as i,
  u,
  F as y
} from './vendor.69ad1cd2.js'
const b = { class: 'coco-markdown-body' },
  k = n('h1', null, 'PageHeader \u9875\u5934', -1),
  B = n('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  v = n('p', null, 'PageHeader \u7684\u57FA\u672C\u4F7F\u7528', -1),
  x = n(
    'p',
    null,
    'title \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u9875\u5934\u7684\u6807\u9898',
    -1
  ),
  q = n(
    'p',
    null,
    'content \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u9875\u5934\u7684\u5185\u5BB9',
    -1
  ),
  $ = [k, B, v, x, q],
  w = {
    setup(h, { expose: e }) {
      return e({ frontmatter: {} }), (_, d) => (s(), a('div', b, $))
    }
  },
  N = { class: 'coco-markdown-body' },
  V = m(
    `<pre><code class="language-html">&lt;template&gt;
  &lt;coco-page-header title=&quot;\u8FD4\u56DE\u4E0A\u4E00\u5C42&quot; content=&quot;\u8BE6\u60C5\u9875\u9762&quot; @back=&quot;goBack&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  const goBack = () =&gt; console.log(&#39;goBack&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014\u2014</td><td>\u8FD4\u56DE</td></tr><tr><td>content</td><td>\u5185\u5BB9</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>icon</td><td>icon</td><td>string</td><td>\u2014\u2014</td><td>coco-ui-direction-left</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>back</td><td>\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF\u89E6\u53D1</td><td>\u2014\u2014</td></tr></tbody></table>`,
    5
  ),
  C = p(' Tree \u6811\u5F62\u63A7\u4EF6 '),
  P = p(' Info \u4FE1\u606F\u680F '),
  D = {
    setup(h, { expose: e }) {
      return (
        e({ frontmatter: {} }),
        (_, d) => {
          const o = c('coco-turn-page-item'),
            g = c('coco-turn-page')
          return (
            s(),
            a('div', N, [
              V,
              t(
                g,
                { style: { margin: '50px 0' } },
                {
                  default: r(() => [
                    t(
                      o,
                      { direction: 'left', url: '/component/tree' },
                      { default: r(() => [C]), _: 1 }
                    ),
                    t(
                      o,
                      { direction: 'right', url: '/component/info' },
                      { default: r(() => [P]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
      )
    }
  },
  F = {
    setup(h) {
      const e = () => console.log('goBack')
      return (l, _) => {
        const d = c('coco-page-header'),
          o = f('high')
        return (
          s(),
          a(
            y,
            null,
            [
              i(t(u(w), null, null, 512), [[o]]),
              t(d, {
                title: '\u8FD4\u56DE\u4E0A\u4E00\u5C42',
                content: '\u8BE6\u60C5\u9875\u9762',
                onBack: e
              }),
              i(t(u(D), null, null, 512), [[o]])
            ],
            64
          )
        )
      }
    }
  }
export { F as default }
