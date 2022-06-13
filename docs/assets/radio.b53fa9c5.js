import {
  o as m,
  f as _,
  j as l,
  r as c,
  B as d,
  C as a,
  P as y,
  l as n,
  s as q,
  Q as f,
  x as p,
  u as v,
  F as g
} from './vendor.69ad1cd2.js'
const $ = { class: 'coco-markdown-body' },
  z = l('h1', null, 'Radio \u5355\u9009\u6846', -1),
  U = l('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  x = l('p', null, 'Radio \u7684\u57FA\u672C\u4F7F\u7528', -1),
  k = l(
    'p',
    null,
    'label \u5C5E\u6027\u53EF\u914D\u7F6E Radio \u7684 value',
    -1
  ),
  w = [z, U, x, k],
  B = {
    setup(h, { expose: r }) {
      return r({ frontmatter: {} }), (i, o) => (m(), _('div', $, w))
    }
  },
  R = { class: 'coco-markdown-body' },
  C = l(
    'pre',
    null,
    [
      l(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-radio v-model="radio1" label="\u5907\u9009\u98791">\u5907\u9009\u98791</coco-radio>
  <coco-radio v-model="radio1" label="\u5907\u9009\u98792">\u5907\u9009\u98792</coco-radio>
  <coco-radio v-model="radio1" label="\u5907\u9009\u98793">\u5907\u9009\u98793</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('\u5907\u9009\u98791')
<\/script>
`
      )
    ],
    -1
  ),
  N = l('h2', null, '\u7981\u7528\u72B6\u6001', -1),
  D = l(
    'p',
    null,
    'disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u7981\u7528\u72B6\u6001',
    -1
  ),
  E = [C, N, D],
  F = {
    setup(h, { expose: r }) {
      return r({ frontmatter: {} }), (i, o) => (m(), _('div', R, E))
    }
  },
  T = { class: 'coco-markdown-body' },
  j = l(
    'pre',
    null,
    [
      l(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-radio v-model="radio2" disabled label="\u5907\u9009\u98791">\u5907\u9009\u98791</coco-radio>
  <coco-radio v-model="radio2" label="\u5907\u9009\u98792">\u5907\u9009\u98792</coco-radio>
  <coco-radio v-model="radio2" label="\u5907\u9009\u98793">\u5907\u9009\u98793</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio2 = ref('\u5907\u9009\u98792')
<\/script>
`
      )
    ],
    -1
  ),
  A = l('h2', null, '\u5E26\u6709\u8FB9\u6846', -1),
  P = l(
    'p',
    null,
    'border \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8FB9\u6846',
    -1
  ),
  Q = [j, A, P],
  S = {
    setup(h, { expose: r }) {
      return r({ frontmatter: {} }), (i, o) => (m(), _('div', T, Q))
    }
  },
  G = { class: 'coco-markdown-body' },
  H = l(
    'pre',
    null,
    [
      l(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-radio v-model="radio3" label="\u5907\u9009\u98791" border>\u5907\u9009\u98791</coco-radio>
  <coco-radio v-model="radio3" label="\u5907\u9009\u98792" border>\u5907\u9009\u98792</coco-radio>
  <coco-radio v-model="radio3" label="\u5907\u9009\u98793" border>\u5907\u9009\u98793</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio3 = ref('\u5907\u9009\u98793')
<\/script>
`
      )
    ],
    -1
  ),
  I = l('h2', null, '\u914D\u7F6E\u5927\u5C0F', -1),
  J = l(
    'p',
    null,
    'size \u5C5E\u6027\u53EF\u4EE5\u5927\u5C0F\uFF0C\u4F46\u662F\u5FC5\u987B\u662F\u5E26\u6709 border \u5C5E\u6027\u7684\u524D\u63D0\u624D\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C',
    -1
  ),
  K = [H, I, J],
  L = {
    setup(h, { expose: r }) {
      return r({ frontmatter: {} }), (i, o) => (m(), _('div', G, K))
    }
  },
  M = { class: 'coco-markdown-body' },
  O = y(
    `<pre><code class="language-html">&lt;template&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;large&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;large&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;large&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;

  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;medium&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;medium&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;medium&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;

  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;small&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;small&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;small&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;

  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98791&quot; border size=&quot;mini&quot;&gt;
    \u5907\u9009\u98791
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98792&quot; border size=&quot;mini&quot;&gt;
    \u5907\u9009\u98792
  &lt;/coco-radio&gt;
  &lt;coco-radio v-model=&quot;radio4&quot; label=&quot;\u5907\u9009\u98793&quot; border size=&quot;mini&quot;&gt;
    \u5907\u9009\u98793
  &lt;/coco-radio&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const radio4 = ref(&#39;\u5907\u9009\u98791&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-mod</td><td>\u7ED1\u5B9A\u7684\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>label</td><td>Radio \u7684 value</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>Boole</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5927\u5C0F\u5C3A\u5BF8</td><td>string</td><td>large / medium / small / mini</td><td>large</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8 Radio \u65F6\u89E6\u53D1</td><td>\u9009\u4E2D\u7684\u503C</td></tr></tbody></table>`,
    5
  ),
  W = n(' Calendar \u65E5\u5386 '),
  X = n(' Tree \u6811\u5F62\u63A7\u4EF6 '),
  Y = {
    setup(h, { expose: r }) {
      return (
        r({ frontmatter: {} }),
        (i, o) => {
          const V = c('coco-turn-page-item'),
            t = c('coco-turn-page')
          return (
            m(),
            _('div', M, [
              O,
              d(
                t,
                { style: { margin: '50px 0' } },
                {
                  default: a(() => [
                    d(
                      V,
                      { direction: 'left', url: '/component/calendar' },
                      { default: a(() => [W]), _: 1 }
                    ),
                    d(
                      V,
                      { direction: 'right', url: '/component/tree' },
                      { default: a(() => [X]), _: 1 }
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
  Z = n('\u5907\u9009\u98791'),
  tt = n('\u5907\u9009\u98792'),
  et = n('\u5907\u9009\u98793'),
  lt = l('br', null, null, -1),
  ot = l('br', null, null, -1),
  dt = n('\u5907\u9009\u98791'),
  at = n('\u5907\u9009\u98792'),
  nt = n('\u5907\u9009\u98793'),
  ut = l('br', null, null, -1),
  rt = l('br', null, null, -1),
  st = n('\u5907\u9009\u98791'),
  it = n('\u5907\u9009\u98792'),
  mt = n('\u5907\u9009\u98793'),
  _t = l('br', null, null, -1),
  ht = l('br', null, null, -1),
  bt = n(' \u5907\u9009\u98791 '),
  pt = n(' \u5907\u9009\u98792 '),
  vt = n(' \u5907\u9009\u98793 '),
  qt = l('br', null, null, -1),
  Vt = l('br', null, null, -1),
  ct = n(' \u5907\u9009\u98791 '),
  yt = n(' \u5907\u9009\u98792 '),
  ft = n(' \u5907\u9009\u98793 '),
  gt = l('br', null, null, -1),
  $t = l('br', null, null, -1),
  zt = n(' \u5907\u9009\u98791 '),
  Ut = n(' \u5907\u9009\u98792 '),
  xt = n(' \u5907\u9009\u98793 '),
  kt = l('br', null, null, -1),
  wt = l('br', null, null, -1),
  Bt = n(' \u5907\u9009\u98791 '),
  Rt = n(' \u5907\u9009\u98792 '),
  Ct = n(' \u5907\u9009\u98793 '),
  Nt = l('br', null, null, -1),
  Dt = l('br', null, null, -1),
  Ft = {
    setup(h) {
      const r = q('\u5907\u9009\u98791'),
        s = q('\u5907\u9009\u98792'),
        i = q('\u5907\u9009\u98793'),
        o = q('\u5907\u9009\u98791')
      return (V, t) => {
        const u = c('coco-radio'),
          b = f('high')
        return (
          m(),
          _(
            g,
            null,
            [
              p(d(v(B), null, null, 512), [[b]]),
              d(
                u,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': t[0] || (t[0] = (e) => (r.value = e)),
                  label: '\u5907\u9009\u98791'
                },
                { default: a(() => [Z]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': t[1] || (t[1] = (e) => (r.value = e)),
                  label: '\u5907\u9009\u98792'
                },
                { default: a(() => [tt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': t[2] || (t[2] = (e) => (r.value = e)),
                  label: '\u5907\u9009\u98793'
                },
                { default: a(() => [et]), _: 1 },
                8,
                ['modelValue']
              ),
              lt,
              ot,
              p(d(v(F), null, null, 512), [[b]]),
              d(
                u,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': t[3] || (t[3] = (e) => (s.value = e)),
                  disabled: '',
                  label: '\u5907\u9009\u98791'
                },
                { default: a(() => [dt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': t[4] || (t[4] = (e) => (s.value = e)),
                  label: '\u5907\u9009\u98792'
                },
                { default: a(() => [at]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': t[5] || (t[5] = (e) => (s.value = e)),
                  label: '\u5907\u9009\u98793'
                },
                { default: a(() => [nt]), _: 1 },
                8,
                ['modelValue']
              ),
              ut,
              rt,
              p(d(v(S), null, null, 512), [[b]]),
              d(
                u,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': t[6] || (t[6] = (e) => (i.value = e)),
                  label: '\u5907\u9009\u98791',
                  border: ''
                },
                { default: a(() => [st]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': t[7] || (t[7] = (e) => (i.value = e)),
                  label: '\u5907\u9009\u98792',
                  border: ''
                },
                { default: a(() => [it]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: i.value,
                  'onUpdate:modelValue': t[8] || (t[8] = (e) => (i.value = e)),
                  label: '\u5907\u9009\u98793',
                  border: ''
                },
                { default: a(() => [mt]), _: 1 },
                8,
                ['modelValue']
              ),
              _t,
              ht,
              p(d(v(L), null, null, 512), [[b]]),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': t[9] || (t[9] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98791',
                  border: '',
                  size: 'large'
                },
                { default: a(() => [bt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[10] || (t[10] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98792',
                  border: '',
                  size: 'large'
                },
                { default: a(() => [pt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[11] || (t[11] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98793',
                  border: '',
                  size: 'large'
                },
                { default: a(() => [vt]), _: 1 },
                8,
                ['modelValue']
              ),
              qt,
              Vt,
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[12] || (t[12] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98791',
                  border: '',
                  size: 'medium'
                },
                { default: a(() => [ct]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[13] || (t[13] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98792',
                  border: '',
                  size: 'medium'
                },
                { default: a(() => [yt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[14] || (t[14] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98793',
                  border: '',
                  size: 'medium'
                },
                { default: a(() => [ft]), _: 1 },
                8,
                ['modelValue']
              ),
              gt,
              $t,
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[15] || (t[15] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98791',
                  border: '',
                  size: 'small'
                },
                { default: a(() => [zt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[16] || (t[16] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98792',
                  border: '',
                  size: 'small'
                },
                { default: a(() => [Ut]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[17] || (t[17] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98793',
                  border: '',
                  size: 'small'
                },
                { default: a(() => [xt]), _: 1 },
                8,
                ['modelValue']
              ),
              kt,
              wt,
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[18] || (t[18] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98791',
                  border: '',
                  size: 'mini'
                },
                { default: a(() => [Bt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[19] || (t[19] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98792',
                  border: '',
                  size: 'mini'
                },
                { default: a(() => [Rt]), _: 1 },
                8,
                ['modelValue']
              ),
              d(
                u,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue':
                    t[20] || (t[20] = (e) => (o.value = e)),
                  label: '\u5907\u9009\u98793',
                  border: '',
                  size: 'mini'
                },
                { default: a(() => [Ct]), _: 1 },
                8,
                ['modelValue']
              ),
              Nt,
              Dt,
              p(d(v(Y), null, null, 512), [[b]])
            ],
            64
          )
        )
      }
    }
  }
export { Ft as default }
