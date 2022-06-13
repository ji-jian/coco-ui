import {
  r as c,
  o as g,
  f as _,
  B as t,
  j as s,
  l as w,
  C as y,
  P as q,
  s as r,
  Q as b,
  x as o,
  u as S,
  y as i,
  F as $
} from './vendor.69ad1cd2.js'
const x = { class: 'coco-markdown-body' },
  C = s('h1', null, 'Alert \u63D0\u793A', -1),
  k = s('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  B = s('p', null, '\u63D0\u793A\u7684\u57FA\u672C\u4F7F\u7528', -1),
  N = s(
    'p',
    null,
    'message \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u63D0\u793A\u6587\u5B57',
    -1
  ),
  V = s('p', null, 'type \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u7C7B\u578B', -1),
  A = s(
    'pre',
    null,
    [
      s(
        'code',
        { class: 'language-html' },
        `<coco-alert message="\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u63D0\u793A" />
<coco-alert type="primary" message="\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A" />
<coco-alert type="success" message="\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A" />
<coco-alert type="danger" message="\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A" />
<coco-alert type="warning" message="\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A" />
`
      )
    ],
    -1
  ),
  D = s('h2', null, '\u5E26\u6709 icon', -1),
  E = w('icon \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E icon '),
  F = s(
    'pre',
    null,
    [
      s(
        'code',
        { class: 'language-html' },
        `<coco-alert icon="coco-ui-githublogo" message="\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u63D0\u793A" />
<coco-alert icon="coco-ui-home" type="primary" message="\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A" />
<coco-alert icon="coco-ui-history" type="success" message="\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A" />
<coco-alert icon="coco-ui-smile" type="danger" message="\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A" />
<coco-alert icon="coco-ui-warning" type="warning" message="\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A" />
`
      )
    ],
    -1
  ),
  j = s('h2', null, '\u53EF\u4EE5\u5173\u95ED\u7684', -1),
  P = s(
    'p',
    null,
    'close \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6',
    -1
  ),
  Q = s(
    'p',
    null,
    '\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 close \u4E8B\u4EF6\u6765\u5B9E\u73B0',
    -1
  ),
  R = {
    setup(f, { expose: a }) {
      return (
        a({ frontmatter: {} }),
        (d, u) => {
          const e = c('coco-alert')
          return (
            g(),
            _('div', x, [
              C,
              k,
              B,
              N,
              V,
              t(e, {
                message: '\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u63D0\u793A'
              }),
              t(e, {
                type: 'primary',
                message: '\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A'
              }),
              t(e, {
                type: 'success',
                message: '\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A'
              }),
              t(e, {
                type: 'danger',
                message: '\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A'
              }),
              t(e, {
                type: 'warning',
                message: '\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A'
              }),
              A,
              D,
              s('p', null, [
                E,
                t(e, {
                  icon: 'coco-ui-githublogo',
                  message: '\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u63D0\u793A'
                }),
                t(e, {
                  icon: 'coco-ui-home',
                  type: 'primary',
                  message: '\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A'
                }),
                t(e, {
                  icon: 'coco-ui-history',
                  type: 'success',
                  message: '\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A'
                }),
                t(e, {
                  icon: 'coco-ui-smile',
                  type: 'danger',
                  message: '\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A'
                }),
                t(e, {
                  icon: 'coco-ui-warning',
                  type: 'warning',
                  message: '\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A'
                })
              ]),
              F,
              j,
              P,
              Q
            ])
          )
        }
      )
    }
  },
  T = { class: 'coco-markdown-body' },
  z = s(
    'pre',
    null,
    [
      s(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-alert
    v-show="isShow1"
    close
    message="\u70B9\u51FB\u5173\u95ED\u666E\u901A\u63D0\u793A"
    @close="isShow1 = false"
  />
  <coco-alert
    v-show="isShow2"
    close
    type="primary"
    message="\u70B9\u51FB\u5173\u95ED\u4E3B\u8981\u63D0\u793A"
    @close="isShow2 = false"
  />
  <coco-alert
    v-show="isShow3"
    close
    type="success"
    message="\u70B9\u51FB\u5173\u95ED\u6210\u529F\u63D0\u793A"
    @close="isShow3 = false"
  />
  <coco-alert
    v-show="isShow4"
    close
    type="danger"
    message="\u70B9\u51FB\u5173\u95ED\u5371\u9669\u63D0\u793A"
    @close="isShow4 = false"
  />
  <coco-alert
    v-show="isShow5"
    close
    type="warning"
    message="\u70B9\u51FB\u5173\u95ED\u8B66\u544A\u63D0\u793A"
    @close="isShow5 = false"
  />
</template>

<script setup>
  import { ref } from 'vue'
  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
<\/script>
`
      )
    ],
    -1
  ),
  G = s('h2', null, '\u6587\u5B57\u5C45\u4E2D', -1),
  H = s(
    'p',
    null,
    'center \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6587\u5B57\u5C45\u4E2D',
    -1
  ),
  I = s(
    'pre',
    null,
    [
      s(
        'code',
        { class: 'language-html' },
        `<coco-alert center message="\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u63D0\u793A" />
<coco-alert center type="primary" message="\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A" />
<coco-alert center type="success" message="\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A" />
<coco-alert center type="danger" message="\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A" />
<coco-alert center type="warning" message="\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A" />
`
      )
    ],
    -1
  ),
  J = s('h2', null, '\u7B80\u7EA6\u63D0\u793A', -1),
  K = s(
    'p',
    null,
    'simple \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u7B80\u7EA6\u63D0\u793A',
    -1
  ),
  L = q(
    `<pre><code class="language-html">&lt;coco-alert simple message=&quot;\u7B80\u7EA6\u7684\u666E\u901A\u63D0\u793A&quot; /&gt;
&lt;coco-alert simple type=&quot;primary&quot; message=&quot;\u7B80\u7EA6\u7684\u4E3B\u8981\u63D0\u793A&quot; /&gt;
&lt;coco-alert simple type=&quot;success&quot; message=&quot;\u7B80\u7EA6\u7684\u6210\u529F\u63D0\u793A&quot; /&gt;
&lt;coco-alert simple type=&quot;danger&quot; message=&quot;\u7B80\u7EA6\u7684\u5371\u9669\u63D0\u793A&quot; /&gt;
&lt;coco-alert simple type=&quot;warning&quot; message=&quot;\u7B80\u7EA6\u7684\u8B66\u544A\u63D0\u793A&quot; /&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u63D0\u793A\u7684\u6587\u5B57</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>type</td><td>\u63D0\u793A\u7C7B\u578B</td><td>string</td><td>primary / success / danger / warning</td><td>\u2014\u2014</td></tr><tr><td>icon</td><td>icon \u7C7B\u540D</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>close</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>center</td><td>\u662F\u5426\u6587\u5B57\u5C45\u4E2D\u5BF9\u9F50</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>simple</td><td>\u7B80\u7EA6\u7684\u63D0\u793A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED Alert \u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td></td></tr></tbody></table>`,
    5
  ),
  M = w(' Skeleton \u9AA8\u67B6 '),
  O = w(' Rate \u8BC4\u5206 '),
  U = {
    setup(f, { expose: a }) {
      return (
        a({ frontmatter: {} }),
        (d, u) => {
          const e = c('coco-alert'),
            p = c('coco-turn-page-item'),
            n = c('coco-turn-page')
          return (
            g(),
            _('div', T, [
              z,
              G,
              H,
              t(e, {
                center: '',
                message: '\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u63D0\u793A'
              }),
              t(e, {
                center: '',
                type: 'primary',
                message: '\u8FD9\u662F\u4E00\u4E2A\u4E3B\u8981\u63D0\u793A'
              }),
              t(e, {
                center: '',
                type: 'success',
                message: '\u8FD9\u662F\u4E00\u4E2A\u6210\u529F\u63D0\u793A'
              }),
              t(e, {
                center: '',
                type: 'danger',
                message: '\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u63D0\u793A'
              }),
              t(e, {
                center: '',
                type: 'warning',
                message: '\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A\u63D0\u793A'
              }),
              I,
              J,
              K,
              t(e, {
                simple: '',
                message: '\u7B80\u7EA6\u7684\u666E\u901A\u63D0\u793A'
              }),
              t(e, {
                simple: '',
                type: 'primary',
                message: '\u7B80\u7EA6\u7684\u4E3B\u8981\u63D0\u793A'
              }),
              t(e, {
                simple: '',
                type: 'success',
                message: '\u7B80\u7EA6\u7684\u6210\u529F\u63D0\u793A'
              }),
              t(e, {
                simple: '',
                type: 'danger',
                message: '\u7B80\u7EA6\u7684\u5371\u9669\u63D0\u793A'
              }),
              t(e, {
                simple: '',
                type: 'warning',
                message: '\u7B80\u7EA6\u7684\u8B66\u544A\u63D0\u793A'
              }),
              L,
              t(
                n,
                { style: { margin: '50px 0' } },
                {
                  default: y(() => [
                    t(
                      p,
                      { direction: 'left', url: '/component/skeleton' },
                      { default: y(() => [M]), _: 1 }
                    ),
                    t(
                      p,
                      { direction: 'right', url: '/component/rate' },
                      { default: y(() => [O]), _: 1 }
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
  X = {
    setup(f) {
      const a = r(!0),
        h = r(!0),
        d = r(!0),
        u = r(!0),
        e = r(!0)
      return (p, n) => {
        const l = c('coco-alert'),
          v = b('high')
        return (
          g(),
          _(
            $,
            null,
            [
              o(t(S(R), null, null, 512), [[v]]),
              o(
                t(
                  l,
                  {
                    close: '',
                    message: '\u70B9\u51FB\u5173\u95ED\u666E\u901A\u63D0\u793A',
                    onClose: n[0] || (n[0] = (m) => (a.value = !1))
                  },
                  null,
                  512
                ),
                [[i, a.value]]
              ),
              o(
                t(
                  l,
                  {
                    close: '',
                    type: 'primary',
                    message: '\u70B9\u51FB\u5173\u95ED\u4E3B\u8981\u63D0\u793A',
                    onClose: n[1] || (n[1] = (m) => (h.value = !1))
                  },
                  null,
                  512
                ),
                [[i, h.value]]
              ),
              o(
                t(
                  l,
                  {
                    close: '',
                    type: 'success',
                    message: '\u70B9\u51FB\u5173\u95ED\u6210\u529F\u63D0\u793A',
                    onClose: n[2] || (n[2] = (m) => (d.value = !1))
                  },
                  null,
                  512
                ),
                [[i, d.value]]
              ),
              o(
                t(
                  l,
                  {
                    close: '',
                    type: 'danger',
                    message: '\u70B9\u51FB\u5173\u95ED\u5371\u9669\u63D0\u793A',
                    onClose: n[3] || (n[3] = (m) => (u.value = !1))
                  },
                  null,
                  512
                ),
                [[i, u.value]]
              ),
              o(
                t(
                  l,
                  {
                    close: '',
                    type: 'warning',
                    message: '\u70B9\u51FB\u5173\u95ED\u8B66\u544A\u63D0\u793A',
                    onClose: n[4] || (n[4] = (m) => (e.value = !1))
                  },
                  null,
                  512
                ),
                [[i, e.value]]
              ),
              o(t(S(U), null, null, 512), [[v]])
            ],
            64
          )
        )
      }
    }
  }
export { X as default }
