import {
  r as o,
  o as d,
  f as r,
  B as e,
  j as t,
  l as c,
  C as h,
  P as m,
  Q as v,
  x as p,
  u as g,
  F as f,
  k as b,
  t as j
} from './vendor.69ad1cd2.js'
const x = { class: 'coco-markdown-body' },
  $ = t('h1', null, 'Avatar \u5934\u50CF', -1),
  k = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  q = t('p', null, '\u5934\u50CF\u7684\u57FA\u672C\u4F7F\u7528', -1),
  w = t(
    'p',
    null,
    'src \u5C5E\u6027\u53EF\u4EE5\u6DFB\u52A0\u56FE\u7247\u8DEF\u5F84',
    -1
  ),
  z = t('p', null, 'size \u53EF\u4EE5\u914D\u7F6E\u5934\u50CF\u5927\u5C0F', -1),
  B = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-avatar :size="10" src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg" />
`
      )
    ],
    -1
  ),
  I = t('h2', null, '\u914D\u7F6E\u5706\u89D2', -1),
  S = t(
    'p',
    null,
    'round \u5C5E\u6027\u914D\u7F6E\u5934\u50CF\u7684\u5706\u89D2',
    -1
  ),
  C = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-avatar round src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg" />
`
      )
    ],
    -1
  ),
  N = t('h2', null, '\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846', -1),
  V = t(
    'p',
    null,
    [
      c(
        'fit \u5C5E\u6027\u914D\u7F6E\u5934\u50CF\u5982\u4F55\u9002\u5E94\u5230\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F '
      ),
      t(
        'a',
        { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit' },
        'object-fit'
      )
    ],
    -1
  ),
  D = {
    setup(l, { expose: s }) {
      return (
        s({ frontmatter: {} }),
        (_, i) => {
          const a = o('coco-avatar')
          return (
            d(),
            r('div', x, [
              $,
              k,
              q,
              w,
              z,
              e(a, {
                size: 10,
                src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg'
              }),
              B,
              I,
              S,
              e(a, {
                round: '',
                src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg'
              }),
              C,
              N,
              V
            ])
          )
        }
      )
    }
  },
  A = { class: 'coco-markdown-body' },
  E = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <coco-avatar
        round
        src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script setup>
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
<\/script>
`
      )
    ],
    -1
  ),
  F = t('h2', null, '\u914D\u7F6E\u8FB9\u6846', -1),
  T = t(
    'p',
    null,
    'border \u5C5E\u6027\u914D\u7F6E\u5934\u50CF\u7684\u8FB9\u6846',
    -1
  ),
  L = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-avatar border src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg" />
<coco-avatar border round src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg" />
`
      )
    ],
    -1
  ),
  P = t('h2', null, '\u52A0\u8F7D\u5931\u8D25', -1),
  Q = t(
    'p',
    null,
    'errorIcon \u5C5E\u6027\u914D\u7F6E\u52A0\u8F7D\u5931\u8D25\u7684 icon',
    -1
  ),
  U = m(
    `<pre><code class="language-html">&lt;coco-avatar src=&quot;https://tianyuhao.cn2/v3/assets/giraffe.jpg&quot; /&gt;
&lt;coco-avatar
  errorIcon=&quot;coco-ui-githublogo&quot;
  src=&quot;https://tianyuhao.cn2/v3/assets/giraffe.jpg&quot;
/&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>src</td><td>\u56FE\u7247\u8DEF\u5F84</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>size</td><td>\u56FE\u7247\u5927\u5C0F</td><td>number</td><td>\u2014\u2014</td><td>8\uFF0C(\u8BA1\u7B97\u65B9\u5F0F\uFF1A(size*10)px)</td></tr><tr><td>round</td><td>\u5706\u89D2</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>border</td><td>\u8FB9\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>fit</td><td>\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>alt</td><td>\u539F\u751F alt \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>select</td><td>\u662F\u5426\u53EF\u4EE5\u9009\u62E9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>draggable</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u52A8</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>errorIcon</td><td>\u5931\u8D25\u65F6\u663E\u793A\u7684 icon</td><td>string</td><td>\u2014\u2014</td><td>coco-ui-user</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>load</td><td>\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1</td><td>\u2014\u2014</td></tr><tr><td>error</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1</td><td>\u2014\u2014</td></tr></tbody></table><h2>slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u5931\u8D25\u63D0\u793A</td></tr></tbody></table>`,
    7
  ),
  W = c(' Image \u5934\u50CF '),
  G = c(' Text \u6587\u5B57 '),
  H = {
    setup(l, { expose: s }) {
      return (
        s({ frontmatter: {} }),
        (_, i) => {
          const a = o('coco-avatar'),
            n = o('coco-turn-page-item'),
            y = o('coco-turn-page')
          return (
            d(),
            r('div', A, [
              E,
              F,
              T,
              e(a, {
                border: '',
                src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg'
              }),
              e(a, {
                border: '',
                round: '',
                src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg'
              }),
              L,
              P,
              Q,
              e(a, { src: 'https://tianyuhao.cn2/v3/assets/giraffe.jpg' }),
              e(a, {
                errorIcon: 'coco-ui-githublogo',
                src: 'https://tianyuhao.cn2/v3/assets/giraffe.jpg'
              }),
              U,
              e(
                y,
                { style: { margin: '50px 0' } },
                {
                  default: h(() => [
                    e(
                      n,
                      { direction: 'left', url: '/component/image' },
                      { default: h(() => [W]), _: 1 }
                    ),
                    e(
                      n,
                      { direction: 'right', url: '/component/text' },
                      { default: h(() => [G]), _: 1 }
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
  J = { class: 'fitBox' },
  K = { class: 'text' },
  O = {
    setup(l) {
      const s = ['fill', 'contain', 'cover', 'none', 'scale-down']
      return (u, _) => {
        const i = o('coco-avatar'),
          a = v('high')
        return (
          d(),
          r(
            f,
            null,
            [
              p(e(g(D), null, null, 512), [[a]]),
              t('div', J, [
                (d(),
                r(
                  f,
                  null,
                  b(s, (n) =>
                    t('div', { class: 'item', key: n }, [
                      t('span', K, j(n), 1),
                      e(
                        i,
                        {
                          round: '',
                          src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg',
                          fit: n
                        },
                        null,
                        8,
                        ['fit']
                      )
                    ])
                  ),
                  64
                ))
              ]),
              p(e(g(H), null, null, 512), [[a]])
            ],
            64
          )
        )
      }
    }
  }
export { O as default }