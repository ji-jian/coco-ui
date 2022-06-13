import {
  o as a,
  f as u,
  j as t,
  r as f,
  B as o,
  C as p,
  P as g,
  l as y,
  s as v,
  Q as x,
  x as i,
  u as m,
  F as $
} from './vendor.69ad1cd2.js'
const b = { class: 'coco-markdown-body' },
  V = t('h1', null, 'Rate \u8BC4\u5206', -1),
  w = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  T = t('p', null, '\u8BC4\u5206\u7684\u57FA\u672C\u4F7F\u7528', -1),
  C = t('p', null, 'v-model \u7ED1\u5B9A\u8BC4\u5206\u503C', -1),
  k = [V, w, T, C],
  q = {
    setup(c, { expose: l }) {
      return l({ frontmatter: {} }), (s, _) => (a(), u('div', b, k))
    }
  },
  U = { class: 'coco-markdown-body' },
  B = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-rate v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(2)
<\/script>
`
      )
    ],
    -1
  ),
  D = t('h2', null, '\u914D\u7F6E\u989C\u8272', -1),
  N = t(
    'p',
    null,
    'color \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u9009\u4E2D\u7684 icon \u989C\u8272',
    -1
  ),
  E = t(
    'p',
    null,
    'voidColor \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u672A\u9009\u4E2D\u7684 icon \u989C\u8272',
    -1
  ),
  A = [B, D, N, E],
  F = {
    setup(c, { expose: l }) {
      return l({ frontmatter: {} }), (s, _) => (a(), u('div', U, A))
    }
  },
  S = { class: 'coco-markdown-body' },
  j = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-rate v-model="value2" />
  <coco-rate v-model="value2" color="red" voidColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(2)
<\/script>
`
      )
    ],
    -1
  ),
  I = t('h2', null, '\u8F85\u52A9\u6587\u5B57', -1),
  P = t(
    'p',
    null,
    'showText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57',
    -1
  ),
  Q = t(
    'p',
    null,
    'SayText \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8F85\u52A9\u6587\u5B57\u6570\u7EC4',
    -1
  ),
  R = [j, I, P, Q],
  z = {
    setup(c, { expose: l }) {
      return l({ frontmatter: {} }), (s, _) => (a(), u('div', S, R))
    }
  },
  G = { class: 'coco-markdown-body' },
  H = g(
    `<pre><code class="language-html">&lt;template&gt;
  &lt;coco-rate v-model=&quot;value3&quot; showText /&gt;
  &lt;coco-rate
    v-model=&quot;value3&quot;
    showText
    :sayText=&quot;[&#39;1\u661F&#39;, &#39;2\u661F&#39;, &#39;3\u661F&#39;, &#39;4\u661F&#39;, &#39;5\u661F&#39;]&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value3 = ref(2)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>color</td><td>\u9009\u4E2D\u7684 icon \u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#fbcc30</td></tr><tr><td>voidColor</td><td>\u672A\u9009\u4E2D\u7684 icon \u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#C6D1DE</td></tr><tr><td>showText</td><td>\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>sayText</td><td>\u81EA\u5B9A\u4E49\u8F85\u52A9\u6587\u5B57\u6570\u7EC4</td><td>boolean</td><td>\u2014\u2014</td><td>[\u2018\u6781\u5DEE\u2019, \u2018\u5931\u671B\u2019, \u2018\u4E00\u822C\u2019, \u2018\u60CA\u559C\u2019, \u2018\u6EE1\u610F\u2019]</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5206\u503C\u6539\u53D8\u65F6\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,
    5
  ),
  J = y(' Alert \u63D0\u793A '),
  K = y(' Image \u56FE\u7247 '),
  L = {
    setup(c, { expose: l }) {
      return (
        l({ frontmatter: {} }),
        (s, _) => {
          const e = f('coco-turn-page-item'),
            r = f('coco-turn-page')
          return (
            a(),
            u('div', G, [
              H,
              o(
                r,
                { style: { margin: '50px 0' } },
                {
                  default: p(() => [
                    o(
                      e,
                      { direction: 'left', url: '/component/alert' },
                      { default: p(() => [J]), _: 1 }
                    ),
                    o(
                      e,
                      { direction: 'right', url: '/component/image' },
                      { default: p(() => [K]), _: 1 }
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
  M = t('br', null, null, -1),
  O = t('br', null, null, -1),
  X = {
    setup(c) {
      const l = v(2),
        d = v(2),
        s = v(2)
      return (_, e) => {
        const r = f('coco-rate'),
          h = x('high')
        return (
          a(),
          u(
            $,
            null,
            [
              i(o(m(q), null, null, 512), [[h]]),
              o(
                r,
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': e[0] || (e[0] = (n) => (l.value = n))
                },
                null,
                8,
                ['modelValue']
              ),
              i(o(m(F), null, null, 512), [[h]]),
              o(
                r,
                {
                  modelValue: d.value,
                  'onUpdate:modelValue': e[1] || (e[1] = (n) => (d.value = n))
                },
                null,
                8,
                ['modelValue']
              ),
              M,
              o(
                r,
                {
                  modelValue: d.value,
                  'onUpdate:modelValue': e[2] || (e[2] = (n) => (d.value = n)),
                  color: 'red',
                  voidColor: '#eee'
                },
                null,
                8,
                ['modelValue']
              ),
              i(o(m(z), null, null, 512), [[h]]),
              o(
                r,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': e[3] || (e[3] = (n) => (s.value = n)),
                  showText: ''
                },
                null,
                8,
                ['modelValue']
              ),
              O,
              o(
                r,
                {
                  modelValue: s.value,
                  'onUpdate:modelValue': e[4] || (e[4] = (n) => (s.value = n)),
                  showText: '',
                  sayText: [
                    '1\u661F',
                    '2\u661F',
                    '3\u661F',
                    '4\u661F',
                    '5\u661F'
                  ]
                },
                null,
                8,
                ['modelValue']
              ),
              i(o(m(L), null, null, 512), [[h]])
            ],
            64
          )
        )
      }
    }
  }
export { X as default }
