import {
  r as e,
  o as h,
  f as p,
  j as t,
  B as o,
  C as n,
  l as s,
  P as a,
  Q as g,
  x as y,
  c as f,
  u as v
} from './vendor.69ad1cd2.js'
const m = { class: 'coco-markdown-body' },
  q = t('h1', null, 'Division \u5206\u5272\u7EBF', -1),
  b = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  x = t('p', null, '\u5206\u5272\u7EBF\u7684\u57FA\u672C\u4F7F\u7528', -1),
  k = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  B = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-division></coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division></coco-division>
`
      )
    ],
    -1
  ),
  N = t('h2', null, '\u6587\u5B57\u4F4D\u7F6E', -1),
  V = t(
    'p',
    null,
    'position \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u5B57\u7684\u4F4D\u7F6E',
    -1
  ),
  w = s('\u8FD9\u662F\u5DE6\u8FB9\u6587\u5B57'),
  C = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  D = s('\u8FD9\u662F\u4E2D\u95F4\u6587\u5B57'),
  I = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  j = s('\u8FD9\u662F\u53F3\u8FB9\u6587\u5B57'),
  A = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-division position="left">\u8FD9\u662F\u5DE6\u8FB9\u6587\u5B57</coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division position="center">\u8FD9\u662F\u4E2D\u95F4\u6587\u5B57</coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division position="right">\u8FD9\u662F\u53F3\u8FB9\u6587\u5B57</coco-division>
`
      )
    ],
    -1
  ),
  E = t('h2', null, '\u6587\u5B57\u989C\u8272', -1),
  M = s(
    'color \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u5B57\u7684\u989C\u8272 '
  ),
  P = s('\u8FD9\u662F\u5DE6\u8FB9\u6587\u5B57'),
  Q = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  S = s('\u8FD9\u662F\u4E2D\u95F4\u6587\u5B57'),
  T = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  $ = s('\u8FD9\u662F\u53F3\u8FB9\u6587\u5B57'),
  z = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-division position="left" color="red">\u8FD9\u662F\u5DE6\u8FB9\u6587\u5B57</coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division position="center" color="blue">\u8FD9\u662F\u4E2D\u95F4\u6587\u5B57</coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division position="right" color="green">\u8FD9\u662F\u53F3\u8FB9\u6587\u5B57</coco-division>
`
      )
    ],
    -1
  ),
  F = t('h2', null, '\u4E0A\u4E0B\u7684\u8FB9\u8DDD', -1),
  G = t(
    'p',
    null,
    'margin \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0A\u4E0B\u7684\u8FB9\u8DDD',
    -1
  ),
  H = s('\u8FD9\u662F\u5DE6\u8FB9\u6587\u5B57'),
  J = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  K = s('\u8FD9\u662F\u4E2D\u95F4\u6587\u5B57'),
  L = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  O = s('\u8FD9\u662F\u53F3\u8FB9\u6587\u5B57'),
  R = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-division position="left" margin="0px">\u8FD9\u662F\u5DE6\u8FB9\u6587\u5B57</coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division position="center" margin="20px">\u8FD9\u662F\u4E2D\u95F4\u6587\u5B57</coco-division>
<p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</p>
<coco-division position="right">\u8FD9\u662F\u53F3\u8FB9\u6587\u5B57</coco-division>
`
      )
    ],
    -1
  ),
  U = t('h2', null, '\u5E26\u6709 Icon', -1),
  W = t('p', null, 'icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E icon', -1),
  X = t(
    'p',
    null,
    'icon \u7684\u4F18\u5148\u7EA7\u5927\u4E8E\u63CF\u8FF0\u6587\u5B57',
    -1
  ),
  Y = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  Z = t('p', null, '\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57', -1),
  tt = a(
    `<pre><code class="language-html">&lt;coco-division position=&quot;left&quot; color=&quot;red&quot; icon=&quot;coco-ui-githublogo&quot; /&gt;
&lt;p&gt;\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;
&lt;coco-division
  position=&quot;center&quot;
  color=&quot;blue&quot;
  icon=&quot;coco-ui-notification-filling&quot;
/&gt;
&lt;p&gt;\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57&lt;/p&gt;
&lt;coco-division position=&quot;right&quot; color=&quot;black&quot; icon=&quot;coco-ui-cry&quot; /&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>position</td><td>\u6587\u5B57\u4F4D\u7F6E</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>color</td><td>\u6587\u5B57\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#515a6e</td></tr><tr><td>margin</td><td>\u4E0A\u4E0B\u7684\u8FB9\u8DDD</td><td>string</td><td>\u2014\u2014</td><td>25px</td></tr><tr><td>icon</td><td>\u914D\u7F6E icon</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table>`,
    3
  ),
  ot = s(' Menu \u5BFC\u822A\u680F '),
  it = s(' Icon \u56FE\u6807 '),
  nt = {
    setup(_, { expose: l }) {
      return (
        l({ frontmatter: {} }),
        (d, st) => {
          const i = e('coco-division'),
            c = e('coco-turn-page-item'),
            u = e('coco-turn-page')
          return (
            h(),
            p('div', m, [
              q,
              b,
              x,
              t('p', null, [o(i)]),
              k,
              o(i),
              B,
              N,
              V,
              t('p', null, [
                o(i, { position: 'left' }, { default: n(() => [w]), _: 1 })
              ]),
              C,
              o(i, { position: 'center' }, { default: n(() => [D]), _: 1 }),
              I,
              o(i, { position: 'right' }, { default: n(() => [j]), _: 1 }),
              A,
              E,
              t('p', null, [
                M,
                o(
                  i,
                  { position: 'left', color: 'red' },
                  { default: n(() => [P]), _: 1 }
                )
              ]),
              Q,
              o(
                i,
                { position: 'center', color: 'blue' },
                { default: n(() => [S]), _: 1 }
              ),
              T,
              o(
                i,
                { position: 'right', color: 'green' },
                { default: n(() => [$]), _: 1 }
              ),
              z,
              F,
              G,
              t('p', null, [
                o(
                  i,
                  { position: 'left', margin: '0px' },
                  { default: n(() => [H]), _: 1 }
                )
              ]),
              J,
              o(
                i,
                { position: 'center', margin: '20px' },
                { default: n(() => [K]), _: 1 }
              ),
              L,
              o(i, { position: 'right' }, { default: n(() => [O]), _: 1 }),
              R,
              U,
              W,
              X,
              o(i, {
                position: 'left',
                color: 'red',
                icon: 'coco-ui-githublogo'
              }),
              Y,
              o(i, {
                position: 'center',
                color: 'blue',
                icon: 'coco-ui-notification-filling'
              }),
              Z,
              o(i, { position: 'right', color: 'black', icon: 'coco-ui-cry' }),
              tt,
              o(
                u,
                { style: { margin: '50px 0' } },
                {
                  default: n(() => [
                    o(
                      c,
                      { direction: 'left', url: '/component/menu' },
                      { default: n(() => [ot]), _: 1 }
                    ),
                    o(
                      c,
                      { direction: 'right', url: '/component/icon' },
                      { default: n(() => [it]), _: 1 }
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
  lt = {
    setup(_) {
      return (l, r) => {
        const d = g('high')
        return y((h(), f(v(nt), null, null, 512)), [[d]])
      }
    }
  }
export { lt as default }
