import {
  r as c,
  o as _,
  f as a,
  B as t,
  C as e,
  j as n,
  l as s,
  P as y,
  Q as b,
  x as p,
  c as g,
  u as f
} from './vendor.69ad1cd2.js'
const x = { class: 'coco-markdown-body' },
  k = n('h1', null, 'Crumbs \u9762\u5305\u5C51', -1),
  v = n('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  B = n('p', null, '\u9762\u5305\u5C51\u7684\u57FA\u672C\u7528\u6CD5', -1),
  q = s('\u9996\u9875'),
  C = s('\u5B66\u5458\u7BA1\u7406'),
  N = s('\u6587\u7AE0\u7BA1\u7406'),
  V = s('\u8BBE\u7F6E'),
  w = n(
    'pre',
    null,
    [
      n(
        'code',
        { class: 'language-html' },
        `<coco-crumbs>
  <coco-crumbs-item to="/">\u9996\u9875</coco-crumbs-item>
  <coco-crumbs-item>\u5B66\u5458\u7BA1\u7406</coco-crumbs-item>
  <coco-crumbs-item>\u6587\u7AE0\u7BA1\u7406</coco-crumbs-item>
  <coco-crumbs-item>\u8BBE\u7F6E</coco-crumbs-item>
</coco-crumbs>
`
      )
    ],
    -1
  ),
  D = n('h2', null, '\u4E0D\u540C\u7684\u5206\u9694\u7B26', -1),
  P = n(
    'p',
    null,
    '\u901A\u8FC7\u7ED9\u7236\u7EC4\u4EF6 separator \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u5206\u9694\u7B26\uFF0C\u4F7F\u7528 icon \u7C7B\u540D',
    -1
  ),
  T = s('\u9996\u9875'),
  j = s('\u5B66\u5458\u7BA1\u7406'),
  A = s('\u6587\u7AE0\u7BA1\u7406'),
  E = s('\u8BBE\u7F6E'),
  I = n(
    'pre',
    null,
    [
      n(
        'code',
        { class: 'language-html' },
        `<coco-crumbs separator="coco-ui-link">
  <coco-crumbs-item to="/">\u9996\u9875</coco-crumbs-item>
  <coco-crumbs-item>\u5B66\u5458\u7BA1\u7406</coco-crumbs-item>
  <coco-crumbs-item>\u6587\u7AE0\u7BA1\u7406</coco-crumbs-item>
  <coco-crumbs-item>\u8BBE\u7F6E</coco-crumbs-item>
</coco-crumbs>
`
      )
    ],
    -1
  ),
  Q = n('h2', null, '\u8DF3\u8F6C\u8DEF\u7531', -1),
  S = n(
    'p',
    null,
    '\u901A\u8FC7\u7ED9\u5B50\u7EC4\u4EF6 to \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8DF3\u8F6C\u8DEF\u5F84\uFF0C\u6DFB\u52A0\u8BE5\u5C5E\u6027\u540E\u6587\u7AE0\u70B9\u51FB\u4F1A\u8DF3\u8F6C\uFF0C\u5E76\u4E14\u52A0\u7C97\u663E\u793A',
    -1
  ),
  $ = s('\u9996\u9875'),
  z = s('\u5B66\u5458\u7BA1\u7406'),
  F = s('\u6587\u7AE0\u7BA1\u7406'),
  G = s('\u8BBE\u7F6E'),
  H = y(
    `<pre><code class="language-html">&lt;coco-crumbs&gt;
  &lt;coco-crumbs-item to=&quot;/&quot;&gt;\u9996\u9875&lt;/coco-crumbs-item&gt;
  &lt;coco-crumbs-item to=&quot;/student&quot;&gt;\u5B66\u5458\u7BA1\u7406&lt;/coco-crumbs-item&gt;
  &lt;coco-crumbs-item&gt;\u6587\u7AE0\u7BA1\u7406&lt;/coco-crumbs-item&gt;
  &lt;coco-crumbs-item&gt;\u8BBE\u7F6E&lt;/coco-crumbs-item&gt;
&lt;/coco-crumbs&gt;
</code></pre><h2>Attributes</h2><p>coco-crumbs</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>separator</td><td>\u5206\u9694\u7B26\uFF0Cicon \u7684\u7C7B\u540D</td><td>string</td><td>\u2014\u2014</td><td>coco-ui-xiexian-01</td></tr></tbody></table><p>coco-crumbs-item</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DF3\u8F6C\u7684\u8DEF\u5F84</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table>`,
    6
  ),
  J = s(' Icon \u56FE\u6807 '),
  K = s(' TurnPage \u7FFB\u9875 '),
  L = {
    setup(d, { expose: u }) {
      return (
        u({ frontmatter: {} }),
        (r, M) => {
          const o = c('coco-crumbs-item'),
            h = c('coco-crumbs'),
            l = c('coco-turn-page-item'),
            m = c('coco-turn-page')
          return (
            _(),
            a('div', x, [
              k,
              v,
              B,
              t(h, null, {
                default: e(() => [
                  t(o, { to: '/' }, { default: e(() => [q]), _: 1 }),
                  t(o, null, { default: e(() => [C]), _: 1 }),
                  t(o, null, { default: e(() => [N]), _: 1 }),
                  t(o, null, { default: e(() => [V]), _: 1 })
                ]),
                _: 1
              }),
              w,
              D,
              P,
              t(
                h,
                { separator: 'coco-ui-link' },
                {
                  default: e(() => [
                    t(o, { to: '/' }, { default: e(() => [T]), _: 1 }),
                    t(o, null, { default: e(() => [j]), _: 1 }),
                    t(o, null, { default: e(() => [A]), _: 1 }),
                    t(o, null, { default: e(() => [E]), _: 1 })
                  ]),
                  _: 1
                }
              ),
              I,
              Q,
              S,
              t(h, null, {
                default: e(() => [
                  t(o, { to: '/' }, { default: e(() => [$]), _: 1 }),
                  t(o, { to: '/student' }, { default: e(() => [z]), _: 1 }),
                  t(o, null, { default: e(() => [F]), _: 1 }),
                  t(o, null, { default: e(() => [G]), _: 1 })
                ]),
                _: 1
              }),
              H,
              t(
                m,
                { style: { margin: '50px 0' } },
                {
                  default: e(() => [
                    t(
                      l,
                      { direction: 'left', url: '/component/icon' },
                      { default: e(() => [J]), _: 1 }
                    ),
                    t(
                      l,
                      { direction: 'right', url: '/component/turnpage' },
                      { default: e(() => [K]), _: 1 }
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
  R = {
    setup(d) {
      return (u, i) => {
        const r = b('high')
        return p((_(), g(f(L), null, null, 512)), [[r]])
      }
    }
  }
export { R as default }
