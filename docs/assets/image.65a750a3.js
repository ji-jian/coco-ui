import {
  r as o,
  o as s,
  f as c,
  B as e,
  j as t,
  F as p,
  k as f,
  t as m,
  C as n,
  l as a,
  P as y,
  Q as b,
  x as v,
  c as q,
  u as x
} from './vendor.69ad1cd2.js'
const w = { class: 'coco-markdown-body' },
  j = t('h1', null, 'Image \u56FE\u7247', -1),
  k = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  B = t('p', null, '\u56FE\u7247\u7684\u57FA\u672C\u4F7F\u7528', -1),
  S = t(
    'p',
    null,
    'src \u5C5E\u6027\u53EF\u4EE5\u6DFB\u52A0\u56FE\u7247\u8DEF\u5F84',
    -1
  ),
  C = t(
    'p',
    null,
    'width\uFF0Cheight \u53EF\u4EE5\u914D\u7F6E\u56FE\u7247\u5BBD\u9AD8',
    -1
  ),
  N = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-image width="300px" src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg" />
`
      )
    ],
    -1
  ),
  V = t('h2', null, '\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846', -1),
  D = t(
    'p',
    null,
    [
      a(
        'fit \u5C5E\u6027\u914D\u7F6E\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5230\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F '
      ),
      t(
        'a',
        { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit' },
        'object-fit'
      )
    ],
    -1
  ),
  A = { class: 'fitBox' },
  E = { class: 'text' },
  F = y(
    `<pre><code class="language-html">&lt;div class=&quot;fitBox&quot;&gt;
  &lt;div
    class=&quot;item&quot;
    v-for=&quot;fit in [&#39;fill&#39;, &#39;contain&#39;, &#39;cover&#39;, &#39;none&#39;, &#39;scale-down&#39;]&quot;
    :key=&quot;fit&quot;
  &gt;
    &lt;span class=&quot;text&quot;&gt;{{ fit }}&lt;/span&gt;
    &lt;coco-image
      width=&quot;100px&quot;
      height=&quot;100px&quot;
      src=&quot;https://tianyuhao.cn/images/coco-ui/giraffe.jpg&quot;
      :fit=&quot;fit&quot;
    /&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>src</td><td>\u56FE\u7247\u8DEF\u5F84</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>width</td><td>\u56FE\u7247\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>height</td><td>\u56FE\u7247\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>fit</td><td>\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>alt</td><td>\u539F\u751F alt \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>select</td><td>\u662F\u5426\u53EF\u4EE5\u9009\u62E9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>draggable</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u52A8</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>load</td><td>\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1</td><td>\u2014\u2014</td></tr><tr><td>error</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1</td><td>\u2014\u2014</td></tr></tbody></table><h2>slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u5931\u8D25\u63D0\u793A</td></tr></tbody></table>`,
    7
  ),
  z = a(' Rate \u8BC4\u5206 '),
  I = a(' Avatar \u5934\u50CF '),
  L = {
    setup(u, { expose: r }) {
      return (
        r({ frontmatter: {} }),
        (i, P) => {
          const h = o('coco-image'),
            l = o('coco-turn-page-item'),
            g = o('coco-turn-page')
          return (
            s(),
            c('div', w, [
              j,
              k,
              B,
              S,
              C,
              e(h, {
                width: '300px',
                src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg'
              }),
              N,
              V,
              D,
              t('div', A, [
                (s(),
                c(
                  p,
                  null,
                  f(['fill', 'contain', 'cover', 'none', 'scale-down'], (d) =>
                    t('div', { class: 'item', key: d }, [
                      t('span', E, m(d), 1),
                      e(
                        h,
                        {
                          width: '100px',
                          height: '100px',
                          src: 'https://tianyuhao.cn/images/coco-ui/giraffe.jpg',
                          fit: d
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
              F,
              e(
                g,
                { style: { margin: '50px 0' } },
                {
                  default: n(() => [
                    e(
                      l,
                      { direction: 'left', url: '/component/rate' },
                      { default: n(() => [z]), _: 1 }
                    ),
                    e(
                      l,
                      { direction: 'right', url: '/component/avatar' },
                      { default: n(() => [I]), _: 1 }
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
  R = {
    setup(u) {
      return (r, _) => {
        const i = b('high')
        return v((s(), q(x(L), null, null, 512)), [[i]])
      }
    }
  }
export { R as default }
