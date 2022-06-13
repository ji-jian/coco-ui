import {
  r as n,
  o as r,
  f as m,
  j as t,
  B as o,
  C as e,
  l as c,
  P as g,
  Q as b,
  x as y,
  c as f,
  u as x
} from './vendor.69ad1cd2.js'
const k = { class: 'coco-markdown-body' },
  T = t('h1', null, 'BackTop \u56DE\u5230\u9876\u90E8', -1),
  v = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  q = t(
    'p',
    null,
    '\u56DE\u5230\u9876\u90E8\u7684\u57FA\u7840\u7528\u6CD5',
    -1
  ),
  B = c('Top'),
  N = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-back-top>Top</coco-back-top>
`
      )
    ],
    -1
  ),
  V = t('h2', null, '\u4F4D\u7F6E\u504F\u79FB', -1),
  w = t(
    'p',
    null,
    'bottom \u548C right \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8DDD\u79BB\u53F3\u8FB9\u548C\u4E0B\u8FB9\u7684\u8DDD\u79BB',
    -1
  ),
  C = c('Go'),
  D = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-backTop bottom="150px" right="120px">Go</coco-backTop>
`
      )
    ],
    -1
  ),
  G = t('h2', null, '\u63D2\u5165 Icon', -1),
  P = g(
    `<pre><code class="language-html">&lt;coco-backTop bottom=&quot;100px&quot;&gt;
  &lt;coco-icon icon=&quot;coco-ui-top&quot; color=&quot;#409eff&quot; /&gt;
&lt;/coco-backTop&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>bottom</td><td>\u8DDD\u79BB\u4E0B\u9762\u7684\u8DDD\u79BB</td><td>string</td><td>\u2014\u2014</td><td>50px</td></tr><tr><td>right</td><td>\u8DDD\u79BB\u53F3\u9762\u7684\u8DDD\u79BB</td><td>string</td><td>\u2014\u2014</td><td>50px</td></tr><tr><td>behavior</td><td>\u6EDA\u52A8\u6A21\u5F0F</td><td>string</td><td>smooth / instant</td><td>smooth</td></tr><tr><td>beyond</td><td>\u8D85\u51FA xx \u8303\u56F4\u663E\u793A</td><td>number</td><td>\u2014\u2014</td><td>100</td></tr></tbody></table>`,
    3
  ),
  j = c(' TurnPage \u5206\u9875 '),
  A = c(' Message \u63D0\u793A\u6846 '),
  E = {
    setup(_, { expose: s }) {
      return (
        s({ frontmatter: {} }),
        (d, I) => {
          const i = n('coco-back-top'),
            h = n('coco-backTop'),
            p = n('coco-icon'),
            a = n('coco-turn-page-item'),
            u = n('coco-turn-page')
          return (
            r(),
            m('div', k, [
              T,
              v,
              q,
              t('p', null, [o(i, null, { default: e(() => [B]), _: 1 })]),
              N,
              V,
              w,
              t('p', null, [
                o(
                  h,
                  { bottom: '150px', right: '120px' },
                  { default: e(() => [C]), _: 1 }
                )
              ]),
              D,
              G,
              o(
                h,
                { bottom: '100px' },
                {
                  default: e(() => [
                    o(p, { icon: 'coco-ui-top', color: '#409eff' })
                  ]),
                  _: 1
                }
              ),
              P,
              o(
                u,
                { style: { margin: '50px 0' } },
                {
                  default: e(() => [
                    o(
                      a,
                      { direction: 'left', url: '/component/crumbs' },
                      { default: e(() => [j]), _: 1 }
                    ),
                    o(
                      a,
                      { direction: 'right', url: '/component/message' },
                      { default: e(() => [A]), _: 1 }
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
  Q = {
    setup(_) {
      return (s, l) => {
        const d = b('high')
        return y((r(), f(x(E), null, null, 512)), [[d]])
      }
    }
  }
export { Q as default }
