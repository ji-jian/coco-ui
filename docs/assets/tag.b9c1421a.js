import {
  r as g,
  o as p,
  f,
  j as n,
  B as t,
  C as e,
  l as s,
  P as C,
  s as h,
  Q as $,
  x as l,
  u as q,
  y as u,
  F as b
} from './vendor.69ad1cd2.js'
const x = { class: 'coco-markdown-body' },
  k = n('h1', null, 'Tag \u6807\u7B7E', -1),
  z = n('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  B = n('p', null, '\u6807\u7B7E\u7684\u57FA\u672C\u4F7F\u7528', -1),
  N = s('\u6807\u7B7E\u4E00'),
  V = s('\u6807\u7B7E\u4E8C'),
  T = s('\u6807\u7B7E\u4E09'),
  D = s('\u6807\u7B7E\u56DB'),
  E = s('\u6807\u7B7E\u4E94'),
  F = n(
    'pre',
    null,
    [
      n(
        'code',
        { class: 'language-html' },
        `<coco-tag>\u6807\u7B7E\u4E00</coco-tag>
<coco-tag type="primary">\u6807\u7B7E\u4E8C</coco-tag>
<coco-tag type="success">\u6807\u7B7E\u4E09</coco-tag>
<coco-tag type="danger">\u6807\u7B7E\u56DB</coco-tag>
<coco-tag type="warning">\u6807\u7B7E\u4E94</coco-tag>
`
      )
    ],
    -1
  ),
  S = n('h2', null, '\u4E0D\u540C\u5C3A\u5BF8', -1),
  j = n(
    'p',
    null,
    'size \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8',
    -1
  ),
  A = s('\u6807\u7B7E'),
  P = s('\u6807\u7B7E'),
  Q = s('\u6807\u7B7E'),
  G = n(
    'pre',
    null,
    [
      n(
        'code',
        { class: 'language-html' },
        `<coco-tag type="primary">\u6807\u7B7E</coco-tag>
<coco-tag size="small" type="primary">\u6807\u7B7E</coco-tag>
<coco-tag size="mini" type="primary">\u6807\u7B7E</coco-tag>
`
      )
    ],
    -1
  ),
  H = n('h2', null, '\u5706\u89D2\u6807\u7B7E', -1),
  I = n(
    'p',
    null,
    'round \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5706\u89D2\u663E\u793A',
    -1
  ),
  J = s('\u6807\u7B7E\u4E00'),
  K = s('\u6807\u7B7E\u4E8C'),
  L = s('\u6807\u7B7E\u4E09'),
  M = s('\u6807\u7B7E\u56DB'),
  O = s('\u6807\u7B7E\u4E94'),
  R = n(
    'pre',
    null,
    [
      n(
        'code',
        { class: 'language-html' },
        `<coco-tag round>\u6807\u7B7E\u4E00</coco-tag>
<coco-tag round type="primary">\u6807\u7B7E\u4E8C</coco-tag>
<coco-tag round type="success">\u6807\u7B7E\u4E09</coco-tag>
<coco-tag round type="danger">\u6807\u7B7E\u56DB</coco-tag>
<coco-tag round type="warning">\u6807\u7B7E\u4E94</coco-tag>
`
      )
    ],
    -1
  ),
  U = n('h2', null, '\u53EF\u5173\u95ED', -1),
  W = n(
    'p',
    null,
    '\u8BBE\u7F6E isclose \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6807\u7B7E\u662F\u5426\u53EF\u79FB\u9664',
    -1
  ),
  X = n(
    'p',
    null,
    '\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 onClose \u4E8B\u4EF6\u6765\u5B9E\u73B0',
    -1
  ),
  Y = {
    setup(m, { expose: d }) {
      return (
        d({ frontmatter: {} }),
        (i, c) => {
          const o = g('coco-tag')
          return (
            p(),
            f('div', x, [
              k,
              z,
              B,
              n('p', null, [
                t(o, null, { default: e(() => [N]), _: 1 }),
                t(o, { type: 'primary' }, { default: e(() => [V]), _: 1 }),
                t(o, { type: 'success' }, { default: e(() => [T]), _: 1 }),
                t(o, { type: 'danger' }, { default: e(() => [D]), _: 1 }),
                t(o, { type: 'warning' }, { default: e(() => [E]), _: 1 })
              ]),
              F,
              S,
              j,
              n('p', null, [
                t(o, { type: 'primary' }, { default: e(() => [A]), _: 1 }),
                t(
                  o,
                  { size: 'small', type: 'primary' },
                  { default: e(() => [P]), _: 1 }
                ),
                t(
                  o,
                  { size: 'mini', type: 'primary' },
                  { default: e(() => [Q]), _: 1 }
                )
              ]),
              G,
              H,
              I,
              n('p', null, [
                t(o, { round: '' }, { default: e(() => [J]), _: 1 }),
                t(
                  o,
                  { round: '', type: 'primary' },
                  { default: e(() => [K]), _: 1 }
                ),
                t(
                  o,
                  { round: '', type: 'success' },
                  { default: e(() => [L]), _: 1 }
                ),
                t(
                  o,
                  { round: '', type: 'danger' },
                  { default: e(() => [M]), _: 1 }
                ),
                t(
                  o,
                  { round: '', type: 'warning' },
                  { default: e(() => [O]), _: 1 }
                )
              ]),
              R,
              U,
              W,
              X
            ])
          )
        }
      )
    }
  },
  Z = { class: 'coco-markdown-body' },
  tt = C(
    `<pre><code class="language-html">&lt;template&gt;
  &lt;coco-tag v-show=&quot;show1&quot; isClose @close=&quot;show1 = false&quot;&gt;\u6807\u7B7E\u4E00&lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show2&quot; type=&quot;primary&quot; isClose @close=&quot;show2 = false&quot;&gt;
    \u6807\u7B7E\u4E8C
  &lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show3&quot; type=&quot;success&quot; isClose @close=&quot;show3 = false&quot;&gt;
    \u6807\u7B7E\u4E09
  &lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show4&quot; type=&quot;danger&quot; isClose @close=&quot;show4 = false&quot;&gt;
    \u6807\u7B7E\u56DB
  &lt;/coco-tag&gt;
  &lt;coco-tag v-show=&quot;show5&quot; type=&quot;warning&quot; isClose @close=&quot;show5 = false&quot;&gt;
    \u6807\u7B7E\u4E94
  &lt;/coco-tag&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6807\u7B7E\u7684\u7C7B\u578B</td><td>string</td><td>default / primary / success / danger / warning</td><td>default</td></tr><tr><td>size</td><td>\u6807\u7B7E\u7684\u5C3A\u5BF8</td><td>string</td><td>\u2014 / small / mini</td><td>\u2014\u2014</td></tr><tr><td>round</td><td>\u914D\u7F6E\u5706\u89D2\u663E\u793A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>isClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,
    5
  ),
  et = s(' Card \u5361\u7247 '),
  st = s(' link \u94FE\u63A5 '),
  ot = {
    setup(m, { expose: d }) {
      return (
        d({ frontmatter: {} }),
        (i, c) => {
          const o = g('coco-turn-page-item'),
            w = g('coco-turn-page')
          return (
            p(),
            f('div', Z, [
              tt,
              t(
                w,
                { style: { margin: '50px 0' } },
                {
                  default: e(() => [
                    t(
                      o,
                      { direction: 'left', url: '/component/card' },
                      { default: e(() => [et]), _: 1 }
                    ),
                    t(
                      o,
                      { direction: 'right', url: '/component/link' },
                      { default: e(() => [st]), _: 1 }
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
  nt = s('\u6807\u7B7E\u4E00'),
  at = s(' \u6807\u7B7E\u4E8C '),
  lt = s(' \u6807\u7B7E\u4E09 '),
  dt = s(' \u6807\u7B7E\u56DB '),
  rt = s(' \u6807\u7B7E\u4E94 '),
  ut = {
    setup(m) {
      const d = h(!0),
        _ = h(!0),
        i = h(!0),
        c = h(!0),
        o = h(!0)
      return (w, a) => {
        const r = g('coco-tag'),
          v = $('high')
        return (
          p(),
          f(
            b,
            null,
            [
              l(t(q(Y), null, null, 512), [[v]]),
              l(
                t(
                  r,
                  {
                    isClose: '',
                    onClose: a[0] || (a[0] = (y) => (d.value = !1))
                  },
                  { default: e(() => [nt]), _: 1 },
                  512
                ),
                [[u, d.value]]
              ),
              l(
                t(
                  r,
                  {
                    type: 'primary',
                    isClose: '',
                    onClose: a[1] || (a[1] = (y) => (_.value = !1))
                  },
                  { default: e(() => [at]), _: 1 },
                  512
                ),
                [[u, _.value]]
              ),
              l(
                t(
                  r,
                  {
                    type: 'success',
                    isClose: '',
                    onClose: a[2] || (a[2] = (y) => (i.value = !1))
                  },
                  { default: e(() => [lt]), _: 1 },
                  512
                ),
                [[u, i.value]]
              ),
              l(
                t(
                  r,
                  {
                    type: 'danger',
                    isClose: '',
                    onClose: a[3] || (a[3] = (y) => (c.value = !1))
                  },
                  { default: e(() => [dt]), _: 1 },
                  512
                ),
                [[u, c.value]]
              ),
              l(
                t(
                  r,
                  {
                    type: 'warning',
                    isClose: '',
                    onClose: a[4] || (a[4] = (y) => (o.value = !1))
                  },
                  { default: e(() => [rt]), _: 1 },
                  512
                ),
                [[u, o.value]]
              ),
              l(t(q(ot), null, null, 512), [[v]])
            ],
            64
          )
        )
      }
    }
  }
export { ut as default }
