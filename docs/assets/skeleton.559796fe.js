import {
  r as o,
  o as a,
  f as u,
  B as e,
  C as s,
  j as t,
  P as p,
  l as i,
  Q as m,
  x as g,
  c as y,
  u as k
} from './vendor.69ad1cd2.js'
const f = { class: 'coco-markdown-body' },
  x = t('h1', null, 'Skeleton \u9AA8\u67B6', -1),
  w = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  b = t('p', null, '\u9AA8\u67B6\u7684\u57FA\u672C\u4F7F\u7528', -1),
  v = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-skeleton />
<coco-skeleton />
<coco-skeleton />
`
      )
    ],
    -1
  ),
  B = t('h2', null, '\u5706\u89D2\u7684', -1),
  N = t(
    'p',
    null,
    'round \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5706\u89D2',
    -1
  ),
  V = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-skeleton round />
<coco-skeleton round />
<coco-skeleton round />
`
      )
    ],
    -1
  ),
  C = t('h2', null, '\u81EA\u5B9A\u4E49\u5BBD\u9AD8', -1),
  A = t(
    'p',
    null,
    'width \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6',
    -1
  ),
  D = t(
    'p',
    null,
    'height \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u9AD8\u5EA6',
    -1
  ),
  S = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-skeleton width="75%" />
<coco-skeleton width="150px" />
<coco-skeleton width="100px" height="100px" />
`
      )
    ],
    -1
  ),
  j = t('h2', null, '\u542F\u7528\u52A8\u753B', -1),
  E = t(
    'p',
    null,
    'animation \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u663E\u793A\u52A8\u753B',
    -1
  ),
  M = p(
    `<pre><code class="language-html">&lt;coco-skeleton animation /&gt;
&lt;coco-skeleton animation /&gt;
&lt;coco-skeleton animation /&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>round</td><td>\u5706\u89D2</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>100%</td></tr><tr><td>height</td><td>\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>15px</td></tr><tr><td>animation</td><td>\u662F\u5426\u542F\u7528\u52A8\u753B</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table>`,
    3
  ),
  P = i(' Message \u63D0\u793A\u6846 '),
  Q = i(' Alert \u63D0\u793A '),
  T = {
    setup(r, { expose: d }) {
      return (
        d({ frontmatter: {} }),
        (h, $) => {
          const n = o('coco-skeleton'),
            l = o('coco-turn-page-item'),
            _ = o('coco-turn-page')
          return (
            a(),
            u('div', f, [
              x,
              w,
              b,
              e(n),
              e(n),
              e(n),
              v,
              B,
              N,
              e(n, { round: '' }),
              e(n, { round: '' }),
              e(n, { round: '' }),
              V,
              C,
              A,
              D,
              e(n, { width: '75%' }),
              e(n, { width: '150px' }),
              e(n, { width: '100px', height: '100px' }),
              S,
              j,
              E,
              e(n, { animation: '' }),
              e(n, { animation: '' }),
              e(n, { animation: '' }),
              M,
              e(
                _,
                { style: { margin: '50px 0' } },
                {
                  default: s(() => [
                    e(
                      l,
                      { direction: 'left', url: '/component/message' },
                      { default: s(() => [P]), _: 1 }
                    ),
                    e(
                      l,
                      { direction: 'right', url: '/component/alert' },
                      { default: s(() => [Q]), _: 1 }
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
  z = {
    setup(r) {
      return (d, c) => {
        const h = m('high')
        return g((a(), y(k(T), null, null, 512)), [[h]])
      }
    }
  }
export { z as default }
