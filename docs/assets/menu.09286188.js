import {
  r as i,
  o as c,
  f as r,
  B as t,
  C as n,
  j as e,
  l as o,
  P as v,
  s as $,
  Q as x,
  x as f,
  u as g,
  F as k
} from './vendor.69ad1cd2.js'
const C = { class: 'coco-markdown-body' },
  w = e('h1', null, 'Menu \u5BFC\u822A\u680F', -1),
  V = e('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  q = e('p', null, '\u5BFC\u822A\u680F\u7684\u57FA\u672C\u4F7F\u7528', -1),
  z = o('\u9996\u9875'),
  B = o('\u5185\u5BB9'),
  N = o('\u8BBE\u7F6E'),
  j = o('\u56DE\u6536\u7AD9'),
  D = e(
    'pre',
    null,
    [
      e(
        'code',
        { class: 'language-html' },
        `<coco-menu>
  <coco-menu-item>\u9996\u9875</coco-menu-item>
  <coco-menu-item>\u5185\u5BB9</coco-menu-item>
  <coco-menu-item>\u8BBE\u7F6E</coco-menu-item>
  <coco-menu-item>\u56DE\u6536\u7AD9</coco-menu-item>
</coco-menu>
`
      )
    ],
    -1
  ),
  F = e('h2', null, '\u4E3B\u9898\u914D\u7F6E', -1),
  S = e(
    'p',
    null,
    '\u901A\u8FC7 theme \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E3B\u9898',
    -1
  ),
  A = o('\u9996\u9875'),
  E = o('\u5185\u5BB9'),
  I = o('\u8BBE\u7F6E'),
  M = o('\u56DE\u6536\u7AD9'),
  P = o('\u9996\u9875'),
  Q = o('\u5185\u5BB9'),
  T = o('\u8BBE\u7F6E'),
  U = o('\u56DE\u6536\u7AD9'),
  G = e(
    'pre',
    null,
    [
      e(
        'code',
        { class: 'language-html' },
        `<coco-menu theme="dark">
  <coco-menu-item>\u9996\u9875</coco-menu-item>
  <coco-menu-item>\u5185\u5BB9</coco-menu-item>
  <coco-menu-item>\u8BBE\u7F6E</coco-menu-item>
  <coco-menu-item>\u56DE\u6536\u7AD9</coco-menu-item>
</coco-menu>

<coco-menu theme="light">
  <coco-menu-item>\u9996\u9875</coco-menu-item>
  <coco-menu-item>\u5185\u5BB9</coco-menu-item>
  <coco-menu-item>\u8BBE\u7F6E</coco-menu-item>
  <coco-menu-item>\u56DE\u6536\u7AD9</coco-menu-item>
</coco-menu>
`
      )
    ],
    -1
  ),
  H = e('h2', null, '\u7981\u7528\u72B6\u6001', -1),
  J = e(
    'p',
    null,
    '\u901A\u8FC7 prohibit \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5B50\u7EC4\u4EF6\u94FE\u63A5\u662F\u5426\u7981\u7528',
    -1
  ),
  K = o('\u9996\u9875'),
  L = o('\u5185\u5BB9'),
  O = o('\u8BBE\u7F6E'),
  R = o('\u56DE\u6536\u7AD9'),
  W = e(
    'pre',
    null,
    [
      e(
        'code',
        { class: 'language-html' },
        `<coco-menu>
  <coco-menu-item prohibit url="/home">\u9996\u9875</coco-menu-item>
  <coco-menu-item prohibit url="/abc">\u5185\u5BB9</coco-menu-item>
  <coco-menu-item>\u8BBE\u7F6E</coco-menu-item>
  <coco-menu-item>\u56DE\u6536\u7AD9</coco-menu-item>
</coco-menu>
`
      )
    ],
    -1
  ),
  X = e('h2', null, '\u4E0D\u540C\u6392\u5217\u72B6\u6001', -1),
  Y = e(
    'p',
    null,
    'mode \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u6392\u5217\u72B6\u6001',
    -1
  ),
  Z = e(
    'p',
    null,
    [
      o(
        'collapse \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u662F\u5426\u6298\u53E0\u5BFC\u822A\u680F\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u5728\u6298\u53E0\u7684\u5BFC\u822A\u680F\u4E2D\uFF0Ctitle \u5FC5\u987B\u4F7F\u7528 '
      ),
      e('code', null, 'span'),
      o(
        ' \u6807\u7B7E\u8FDB\u884C\u5305\u88F9\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002'
      )
    ],
    -1
  ),
  tt = {
    setup(y, { expose: u }) {
      return (
        u({ frontmatter: {} }),
        (d, _) => {
          const l = i('coco-menu-item'),
            h = i('coco-menu')
          return (
            c(),
            r('div', C, [
              w,
              V,
              q,
              t(h, null, {
                default: n(() => [
                  t(l, null, { default: n(() => [z]), _: 1 }),
                  t(l, null, { default: n(() => [B]), _: 1 }),
                  t(l, null, { default: n(() => [N]), _: 1 }),
                  t(l, null, { default: n(() => [j]), _: 1 })
                ]),
                _: 1
              }),
              D,
              F,
              S,
              t(
                h,
                { theme: 'dark' },
                {
                  default: n(() => [
                    t(l, null, { default: n(() => [A]), _: 1 }),
                    t(l, null, { default: n(() => [E]), _: 1 }),
                    t(l, null, { default: n(() => [I]), _: 1 }),
                    t(l, null, { default: n(() => [M]), _: 1 })
                  ]),
                  _: 1
                }
              ),
              t(
                h,
                { theme: 'light' },
                {
                  default: n(() => [
                    t(l, null, { default: n(() => [P]), _: 1 }),
                    t(l, null, { default: n(() => [Q]), _: 1 }),
                    t(l, null, { default: n(() => [T]), _: 1 }),
                    t(l, null, { default: n(() => [U]), _: 1 })
                  ]),
                  _: 1
                }
              ),
              G,
              H,
              J,
              t(h, null, {
                default: n(() => [
                  t(
                    l,
                    { prohibit: '', url: '/home' },
                    { default: n(() => [K]), _: 1 }
                  ),
                  t(
                    l,
                    { prohibit: '', url: '/abc' },
                    { default: n(() => [L]), _: 1 }
                  ),
                  t(l, null, { default: n(() => [O]), _: 1 }),
                  t(l, null, { default: n(() => [R]), _: 1 })
                ]),
                _: 1
              }),
              W,
              X,
              Y,
              Z
            ])
          )
        }
      )
    }
  },
  nt = { class: 'coco-markdown-body' },
  et = e(
    'pre',
    null,
    [
      e(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-switch v-model="isCollapse" />

  <coco-menu theme="dark" mode="vertical" :collapse="isCollapse">
    <coco-menu-item>
      <coco-icon icon="coco-ui-shouye-xianxing" />
      <span>\u9996\u9875</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-pdf" />
      <span>\u5185\u5BB9</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-setting" />
      <span>\u8BBE\u7F6E</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-ashbin" />
      <span>\u56DE\u6536\u7AD9</span>
    </coco-menu-item>
  </coco-menu>

  <coco-menu theme="light" mode="vertical" :collapse="isCollapse">
    <coco-menu-item>
      <coco-icon icon="coco-ui-shouye-xianxing" />
      <span>\u9996\u9875</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-pdf" />
      <span>\u5185\u5BB9</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-setting" />
      <span>\u8BBE\u7F6E</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-ashbin" />
      <span>\u56DE\u6536\u7AD9</span>
    </coco-menu-item>
  </coco-menu>
</template>

<script setup>
  import { ref } from 'vue'
  const isCollapse = ref(false)
<\/script>
`
      )
    ],
    -1
  ),
  lt = e('h2', null, '\u5DE6\u53F3\u63D2\u69FD', -1),
  ot = e(
    'p',
    null,
    'left \u63D2\u69FD\u53EF\u4EE5\u5B9A\u5236\u5DE6\u4FA7\u81EA\u5B9A\u4E49\u5185\u5BB9',
    -1
  ),
  ht = e(
    'p',
    null,
    'right \u63D2\u69FD\u53EF\u4EE5\u5B9A\u5236\u53F3\u4FA7\u81EA\u5B9A\u4E49\u5185\u5BB9',
    -1
  ),
  it = o('\u9996\u9875'),
  ut = o('\u5185\u5BB9'),
  dt = o('\u8BBE\u7F6E'),
  st = o('\u56DE\u6536\u7AD9'),
  mt = o('\u53F3\u4FA7\u63D2\u69FD'),
  at = v(
    `<pre><code class="language-html">&lt;coco-menu&gt;
  &lt;template v-slot:left&gt;
    &lt;coco-avatar
      :size=&quot;5&quot;
      round
      src=&quot;https://tianyuhao.cn/images/coco-ui/giraffe.jpg&quot;
    /&gt;
  &lt;/template&gt;
  &lt;coco-menu-item&gt;\u9996\u9875&lt;/coco-menu-item&gt;
  &lt;coco-menu-item&gt;\u5185\u5BB9&lt;/coco-menu-item&gt;
  &lt;coco-menu-item&gt;\u8BBE\u7F6E&lt;/coco-menu-item&gt;
  &lt;coco-menu-item&gt;\u56DE\u6536\u7AD9&lt;/coco-menu-item&gt;
  &lt;template v-slot:right&gt;
    &lt;coco-button simple&gt;\u53F3\u4FA7\u63D2\u69FD&lt;/coco-button&gt;
  &lt;/template&gt;
&lt;/coco-menu&gt;
</code></pre><h2>Attributes</h2><p>coco-menu</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>theme</td><td>\u4E3B\u9898\u989C\u8272</td><td>string</td><td>dark / light</td><td>dark</td></tr><tr><td>shadow</td><td>\u5E95\u90E8\u662F\u5426\u663E\u793A\u9634\u5F71</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>mode</td><td>\u6392\u5217\u65B9\u5F0F</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>backgroundColor</td><td>\u81EA\u5B9A\u4E49\u80CC\u666F\u8272</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>textColor</td><td>\u81EA\u5B9A\u4E49\u4E3B\u9898\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>collapse</td><td>\u662F\u5426\u6298\u53E0</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><p>coco-menu-item</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>route</td><td>\u8DF3\u8F6C\u7684\u8DEF\u5F84</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>prohibit</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>title</td><td>\u6807\u9898\u6587\u5B57\uFF08\u63D2\u69FD\u4F18\u5148\u7EA7\u5927\u4E8E\u5C5E\u6027\uFF09</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>link</td><td>\u8DF3\u8F6C\u7684\u94FE\u63A5\uFF08\u6743\u91CD\u9AD8\u4E8E router\uFF09</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr><tr><td>left</td><td>\u5DE6\u4FA7\u63D2\u69FD</td></tr><tr><td>right</td><td>\u53F3\u4FA7\u63D2\u69FD</td></tr></tbody></table>`,
    8
  ),
  _t = o(' Input \u8F93\u5165\u6846 '),
  ct = o(' Division \u5206\u5272\u7EBF '),
  rt = {
    setup(y, { expose: u }) {
      return (
        u({ frontmatter: {} }),
        (d, _) => {
          const l = i('coco-avatar'),
            h = i('coco-menu-item'),
            s = i('coco-button'),
            m = i('coco-menu'),
            a = i('coco-turn-page-item'),
            b = i('coco-turn-page')
          return (
            c(),
            r('div', nt, [
              et,
              lt,
              ot,
              ht,
              t(m, null, {
                left: n(() => [
                  t(l, {
                    size: 5,
                    round: '',
                    src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg'
                  })
                ]),
                right: n(() => [
                  t(
                    s,
                    { style: { margin: '0' }, simple: '' },
                    { default: n(() => [mt]), _: 1 }
                  )
                ]),
                default: n(() => [
                  t(h, null, { default: n(() => [it]), _: 1 }),
                  t(h, null, { default: n(() => [ut]), _: 1 }),
                  t(h, null, { default: n(() => [dt]), _: 1 }),
                  t(h, null, { default: n(() => [st]), _: 1 })
                ]),
                _: 1
              }),
              at,
              t(
                b,
                { style: { margin: '50px 0' } },
                {
                  default: n(() => [
                    t(
                      a,
                      { direction: 'left', url: '/component/input' },
                      { default: n(() => [_t]), _: 1 }
                    ),
                    t(
                      a,
                      { direction: 'right', url: '/component/division' },
                      { default: n(() => [ct]), _: 1 }
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
  yt = e('br', null, null, -1),
  pt = e('span', null, '\u9996\u9875', -1),
  ft = e('span', null, '\u5185\u5BB9', -1),
  gt = e('span', null, '\u8BBE\u7F6E', -1),
  bt = e('span', null, '\u56DE\u6536\u7AD9', -1),
  vt = e('br', null, null, -1),
  $t = e('span', null, '\u9996\u9875', -1),
  xt = e('span', null, '\u5185\u5BB9', -1),
  kt = e('span', null, '\u8BBE\u7F6E', -1),
  Ct = e('span', null, '\u56DE\u6536\u7AD9', -1),
  Vt = {
    setup(y) {
      const u = $(!1)
      return (p, d) => {
        const _ = i('coco-switch'),
          l = i('coco-icon'),
          h = i('coco-menu-item'),
          s = i('coco-menu'),
          m = x('high')
        return (
          c(),
          r(
            k,
            null,
            [
              f(t(g(tt), null, null, 512), [[m]]),
              t(
                _,
                {
                  modelValue: u.value,
                  'onUpdate:modelValue': d[0] || (d[0] = (a) => (u.value = a))
                },
                null,
                8,
                ['modelValue']
              ),
              yt,
              t(
                s,
                { theme: 'dark', mode: 'vertical', collapse: u.value },
                {
                  default: n(() => [
                    t(h, null, {
                      default: n(() => [
                        t(l, { icon: 'coco-ui-shouye-xianxing' }),
                        pt
                      ]),
                      _: 1
                    }),
                    t(h, null, {
                      default: n(() => [t(l, { icon: 'coco-ui-pdf' }), ft]),
                      _: 1
                    }),
                    t(h, null, {
                      default: n(() => [t(l, { icon: 'coco-ui-setting' }), gt]),
                      _: 1
                    }),
                    t(h, null, {
                      default: n(() => [t(l, { icon: 'coco-ui-ashbin' }), bt]),
                      _: 1
                    })
                  ]),
                  _: 1
                },
                8,
                ['collapse']
              ),
              vt,
              t(
                s,
                { theme: 'light', mode: 'vertical', collapse: u.value },
                {
                  default: n(() => [
                    t(h, null, {
                      default: n(() => [
                        t(l, { icon: 'coco-ui-shouye-xianxing' }),
                        $t
                      ]),
                      _: 1
                    }),
                    t(h, null, {
                      default: n(() => [t(l, { icon: 'coco-ui-pdf' }), xt]),
                      _: 1
                    }),
                    t(h, null, {
                      default: n(() => [t(l, { icon: 'coco-ui-setting' }), kt]),
                      _: 1
                    }),
                    t(h, null, {
                      default: n(() => [t(l, { icon: 'coco-ui-ashbin' }), Ct]),
                      _: 1
                    })
                  ]),
                  _: 1
                },
                8,
                ['collapse']
              ),
              f(t(g(rt), null, null, 512), [[m]])
            ],
            64
          )
        )
      }
    }
  }
export { Vt as default }
