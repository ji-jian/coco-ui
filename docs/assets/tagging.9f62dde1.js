import {
  r as a,
  o as r,
  f as l,
  j as n,
  B as t,
  C as e,
  l as s,
  P as u,
  Q as p,
  x as y,
  c as f,
  u as m
} from './vendor.69ad1cd2.js'
const x = { class: 'coco-markdown-body' },
  b = n('h1', null, 'Tagging \u6807\u6CE8', -1),
  v = n('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  w = n(
    'p',
    null,
    '\u6807\u6CE8\u7684\u57FA\u672C\u7528\u6CD5\uFF0C\u7528\u4E8E\u5728\u6587\u672C\u4E4B\u95F4\u6807\u8BB0\u91CD\u70B9\u4FE1\u606F',
    -1
  ),
  B = n(
    'p',
    null,
    'type \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6807\u6CE8\u7684\u7C7B\u578B',
    -1
  ),
  N = s('\u6807\u6CE8 1'),
  k = s('\u6807\u6CE8 2'),
  z = s('\u6807\u6CE8 3'),
  V = s('\u6807\u6CE8 4'),
  C = s('\u6807\u6CE8 5'),
  q = n(
    'pre',
    null,
    [
      n(
        'code',
        { class: 'language-html' },
        `<coco-tagging>\u6807\u6CE81</coco-tagging>
<coco-tagging type="primary">\u6807\u6CE82</coco-tagging>
<coco-tagging type="success">\u6807\u6CE83</coco-tagging>
<coco-tagging type="danger">\u6807\u6CE84</coco-tagging>
<coco-tagging type="warning">\u6807\u6CE85</coco-tagging>
`
      )
    ],
    -1
  ),
  D = n('h2', null, '\u6587\u5B57\u914D\u7F6E', -1),
  S = n(
    'p',
    null,
    'size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6807\u6CE8\u7684\u6587\u5B57\u5927\u5C0F',
    -1
  ),
  T = s(
    ' \u4F7F\u7528\u65B9\u4FBF\uFF0C\u914D\u7F6E\u7B80\u5355\uFF0C\u76EE\u5F55\u6E05\u6670\uFF0C\u7ED3\u6784\u7B80\u5355\uFF0C\u7EC4\u4EF6\u8F7B\u91CF\u7EA7\uFF0C\u4E0A\u624B\u7B80\u5355\uFF0C\u50CF\u590D\u5236\u7C98\u8D34\u4E00\u6837\u5BB9\u6613\u3002 '
  ),
  j = u(
    `<pre><code class="language-html">&lt;coco-tagging size=&quot;14&quot;&gt;
  \u4F7F\u7528\u65B9\u4FBF\uFF0C\u914D\u7F6E\u7B80\u5355\uFF0C\u76EE\u5F55\u6E05\u6670\uFF0C\u7ED3\u6784\u7B80\u5355\uFF0C\u7EC4\u4EF6\u8F7B\u91CF\u7EA7\uFF0C\u4E0A\u624B\u7B80\u5355\uFF0C\u50CF\u590D\u5236\u7C98\u8D34\u4E00\u6837\u5BB9\u6613\u3002
&lt;/coco-tagging&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>default / primary / success / danger / warning</td><td>default</td></tr><tr><td>size</td><td>\u6587\u5B57\u5927\u5C0F</td><td>string</td><td>\u2014\u2014</td><td>13</td></tr><tr><td>color</td><td>\u6587\u5B57\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table>`,
    3
  ),
  A = s(' Select \u9009\u62E9\u5668 '),
  E = s(' Notification \u901A\u77E5 '),
  P = {
    setup(_, { expose: d }) {
      return (
        d({ frontmatter: {} }),
        (i, Q) => {
          const o = a('coco-tagging'),
            c = a('coco-turn-page-item'),
            h = a('coco-turn-page')
          return (
            r(),
            l('div', x, [
              b,
              v,
              w,
              B,
              n('p', null, [
                t(o, null, { default: e(() => [N]), _: 1 }),
                t(o, { type: 'primary' }, { default: e(() => [k]), _: 1 }),
                t(o, { type: 'success' }, { default: e(() => [z]), _: 1 }),
                t(o, { type: 'danger' }, { default: e(() => [V]), _: 1 }),
                t(o, { type: 'warning' }, { default: e(() => [C]), _: 1 })
              ]),
              q,
              D,
              S,
              t(o, { size: '14' }, { default: e(() => [T]), _: 1 }),
              j,
              t(
                h,
                { style: { margin: '50px 0' } },
                {
                  default: e(() => [
                    t(
                      c,
                      { direction: 'left', url: '/component/select' },
                      { default: e(() => [A]), _: 1 }
                    ),
                    t(
                      c,
                      { direction: 'right', url: '/component/notification' },
                      { default: e(() => [E]), _: 1 }
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
    setup(_) {
      return (d, g) => {
        const i = p('high')
        return y((r(), f(m(P), null, null, 512)), [[i]])
      }
    }
  }
export { F as default }
