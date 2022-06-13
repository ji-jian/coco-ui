import {
  o as c,
  f as i,
  j as t,
  r as g,
  B as l,
  C as y,
  P as w,
  l as b,
  s,
  Q as z,
  x as h,
  u as p,
  F as U
} from './vendor.69ad1cd2.js'
const k = { class: 'coco-markdown-body' },
  q = t('h1', null, 'Textarea \u6587\u672C\u57DF', -1),
  B = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  N = t('p', null, '\u6587\u672C\u57DF\u7684\u57FA\u672C\u7528\u6CD5', -1),
  C = [q, B, N],
  D = {
    setup(m, { expose: o }) {
      return o({ frontmatter: {} }), (r, u) => (c(), i('div', k, C))
    }
  },
  E = { class: 'coco-markdown-body' },
  F = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-textarea v-model="value1" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9..." />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref('')
<\/script>
`
      )
    ],
    -1
  ),
  S = t('h2', null, '\u62C9\u4F38\u65B9\u5F0F', -1),
  T = t(
    'p',
    null,
    'resize \u5C5E\u6027\u53EF\u4EE5\u89C4\u5B9A\u6587\u672C\u57DF\u7684\u62C9\u4F38\u65B9\u5F0F',
    -1
  ),
  j = [F, S, T],
  A = {
    setup(m, { expose: o }) {
      return o({ frontmatter: {} }), (r, u) => (c(), i('div', E, j))
    }
  },
  I = { class: 'coco-markdown-body' },
  P = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-textarea v-model="value7" />
  <coco-textarea v-model="value8" resize="vertical" />
  <coco-textarea v-model="value9" resize="horizontal" />
  <coco-textarea v-model="value10" resize="none" />
</template>

<script setup>
  import { ref } from 'vue'
  const value7 = ref('\u968F\u610F\u62C9\u4F38')
  const value8 = ref('\u53EA\u80FD\u7EB5\u5411\u62C9\u4F38')
  const value9 = ref('\u53EA\u80FD\u6A2A\u5411\u62C9\u4F38')
  const value10 = ref('\u7981\u6B62\u62C9\u4F38')
<\/script>
`
      )
    ],
    -1
  ),
  Q = t('h2', null, '\u4E0D\u540C\u5C3A\u5BF8', -1),
  G = t(
    'p',
    null,
    'rows \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u7684\u884C\u6570',
    -1
  ),
  H = t(
    'p',
    null,
    'cols \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u7684\u5BBD\u5EA6',
    -1
  ),
  J = [P, Q, G, H],
  K = {
    setup(m, { expose: o }) {
      return o({ frontmatter: {} }), (r, u) => (c(), i('div', I, J))
    }
  },
  L = { class: 'coco-markdown-body' },
  M = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-textarea v-model="value3" rows="5" />
  <coco-textarea v-model="value4" cols="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref('')
  const value4 = ref('')
<\/script>
`
      )
    ],
    -1
  ),
  O = t('h2', null, '\u7981\u7528\u72B6\u6001', -1),
  R = t(
    'p',
    null,
    'disabled \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u7981\u7528\u72B6\u6001',
    -1
  ),
  W = [M, O, R],
  X = {
    setup(m, { expose: o }) {
      return o({ frontmatter: {} }), (r, u) => (c(), i('div', L, W))
    }
  },
  Y = { class: 'coco-markdown-body' },
  Z = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-textarea v-model="value5" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text5 = ref('\u7981\u7528\u72B6\u6001')
<\/script>
`
      )
    ],
    -1
  ),
  tt = t('h2', null, '\u6700\u5927\u4E0A\u9650', -1),
  et = t(
    'p',
    null,
    'max \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u672C\u57DF\u8F93\u5165\u7684\u6700\u5927\u4E0A\u9650\u6587\u672C',
    -1
  ),
  lt = [Z, tt, et],
  nt = {
    setup(m, { expose: o }) {
      return o({ frontmatter: {} }), (r, u) => (c(), i('div', Y, lt))
    }
  },
  ot = { class: 'coco-markdown-body' },
  dt = w(
    `<pre><code class="language-html">&lt;template&gt;
  &lt;coco-textarea v-model=&quot;value6&quot; max=&quot;10&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from &#39;vue&#39;
  const value6 = ref(&#39;&#39;)
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>max</td><td>\u6700\u5927\u8F93\u5165\u4E0A\u9650</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>resize</td><td>\u62C9\u4F38\u65B9\u5F0F</td><td>string</td><td>vertical / horizontal / none</td><td>\u2014\u2014</td></tr><tr><td>rows</td><td>\u884C\u6570</td><td>string</td><td>\u2014\u2014</td><td>3</td></tr><tr><td>cols</td><td>\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onblur</td><td>\u5931\u53BB\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr><tr><td>onfocus</td><td>\u83B7\u53D6\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>\u2014\u2014</td></tr></tbody></table>`,
    5
  ),
  st = b(' Info \u4FE1\u606F\u680F '),
  at = b(' Select \u9009\u62E9\u5668 '),
  rt = {
    setup(m, { expose: o }) {
      return (
        o({ frontmatter: {} }),
        (r, u) => {
          const v = g('coco-turn-page-item'),
            f = g('coco-turn-page')
          return (
            c(),
            i('div', ot, [
              dt,
              l(
                f,
                { style: { margin: '50px 0' } },
                {
                  default: y(() => [
                    l(
                      v,
                      { direction: 'left', url: '/component/info' },
                      { default: y(() => [st]), _: 1 }
                    ),
                    l(
                      v,
                      { direction: 'right', url: '/component/select' },
                      { default: y(() => [at]), _: 1 }
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
  ut = t('br', null, null, -1),
  ct = t('br', null, null, -1),
  it = t('br', null, null, -1),
  ht = {
    setup(m) {
      const o = s(''),
        a = s(''),
        r = s(''),
        u = s('\u7981\u7528\u72B6\u6001'),
        v = s(''),
        f = s('\u968F\u610F\u62C9\u4F38'),
        V = s('\u53EA\u80FD\u7EB5\u5411\u62C9\u4F38'),
        $ = s('\u53EA\u80FD\u6A2A\u5411\u62C9\u4F38'),
        x = s('\u7981\u6B62\u62C9\u4F38')
      return (mt, e) => {
        const d = g('coco-textarea'),
          _ = z('high')
        return (
          c(),
          i(
            U,
            null,
            [
              h(l(p(D), null, null, 512), [[_]]),
              l(
                d,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': e[0] || (e[0] = (n) => (o.value = n)),
                  placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9...'
                },
                null,
                8,
                ['modelValue']
              ),
              h(l(p(A), null, null, 512), [[_]]),
              l(
                d,
                {
                  modelValue: f.value,
                  'onUpdate:modelValue': e[1] || (e[1] = (n) => (f.value = n))
                },
                null,
                8,
                ['modelValue']
              ),
              ut,
              l(
                d,
                {
                  modelValue: V.value,
                  'onUpdate:modelValue': e[2] || (e[2] = (n) => (V.value = n)),
                  resize: 'vertical'
                },
                null,
                8,
                ['modelValue']
              ),
              ct,
              l(
                d,
                {
                  modelValue: $.value,
                  'onUpdate:modelValue': e[3] || (e[3] = (n) => ($.value = n)),
                  resize: 'horizontal'
                },
                null,
                8,
                ['modelValue']
              ),
              it,
              l(
                d,
                {
                  modelValue: x.value,
                  'onUpdate:modelValue': e[4] || (e[4] = (n) => (x.value = n)),
                  resize: 'none'
                },
                null,
                8,
                ['modelValue']
              ),
              h(l(p(K), null, null, 512), [[_]]),
              l(
                d,
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': e[5] || (e[5] = (n) => (a.value = n)),
                  rows: '5'
                },
                null,
                8,
                ['modelValue']
              ),
              l(
                d,
                {
                  modelValue: r.value,
                  'onUpdate:modelValue': e[6] || (e[6] = (n) => (r.value = n)),
                  cols: '10'
                },
                null,
                8,
                ['modelValue']
              ),
              h(l(p(X), null, null, 512), [[_]]),
              l(
                d,
                {
                  modelValue: u.value,
                  'onUpdate:modelValue': e[7] || (e[7] = (n) => (u.value = n)),
                  disabled: ''
                },
                null,
                8,
                ['modelValue']
              ),
              h(l(p(nt), null, null, 512), [[_]]),
              l(
                d,
                {
                  modelValue: v.value,
                  'onUpdate:modelValue': e[8] || (e[8] = (n) => (v.value = n)),
                  max: '10'
                },
                null,
                8,
                ['modelValue']
              ),
              h(l(p(rt), null, null, 512), [[_]])
            ],
            64
          )
        )
      }
    }
  }
export { ht as default }
