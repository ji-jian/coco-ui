import { C as _ } from './clipboard.562872b6.js'
import './index.9fffb230.js'
import { M as b } from './index.c18f09c7.js'
import {
  r as s,
  o as l,
  f as y,
  B as u,
  j as t,
  P as w,
  C as r,
  l as p,
  Q as k,
  x as d,
  u as g,
  F as f,
  k as v,
  n as x,
  t as q
} from './vendor.69ad1cd2.js'
import './tips.f775595e.js'
const z = { class: 'coco-markdown-body' },
  $ = t('h1', null, 'Icon \u56FE\u6807', -1),
  C = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  j = t('p', null, 'icon \u7684\u57FA\u672C\u4F7F\u7528', -1),
  I = t(
    'p',
    null,
    '\u901A\u8FC7 icon \u5C5E\u6027\u6765\u7ED9 icon \u6DFB\u52A0\u7C7B\u540D\uFF0C\u6765\u663E\u793A\u4E0D\u540C\u7684\u56FE\u6807',
    -1
  ),
  B = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-icon icon="coco-ui-cocoui" />
<coco-icon icon="coco-ui-ashbin" />
<coco-icon icon="coco-ui-data-view" />
`
      )
    ],
    -1
  ),
  D = t('h2', null, '\u914D\u7F6E\u989C\u8272', -1),
  N = t(
    'p',
    null,
    'color \u5C5E\u6027\u6539\u53D8 icon \u7684\u989C\u8272',
    -1
  ),
  V = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<coco-icon color="skyblue" icon="coco-ui-favorite" />
<coco-icon color="red" icon="coco-ui-fabulous" />
<coco-icon color="pink" icon="coco-ui-good" />
`
      )
    ],
    -1
  ),
  F = t('h2', null, '\u914D\u7F6E\u5927\u5C0F', -1),
  L = t(
    'p',
    null,
    'size \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8 icon \u7684\u5927\u5C0F',
    -1
  ),
  M = t(
    'p',
    null,
    '\u8FD9\u91CC\u91C7\u7528\u7684\u662F\u5B57\u4F53\u5927\u5C0F\u5F62\u5F0F\uFF0C\u53EA\u9700\u8981\u4F20\u9012\u5177\u4F53\u6570\u503C\uFF0C\u5E76\u4E0D\u9700\u8981\u4F20\u9012\u5355\u4F4D',
    -1
  ),
  S = w(
    `<pre><code class="language-html">&lt;coco-icon size=&quot;50&quot; icon=&quot;coco-ui-hide&quot; /&gt;
&lt;coco-icon size=&quot;40&quot; icon=&quot;coco-ui-shouye-xianxing&quot; /&gt;
&lt;coco-icon size=&quot;30&quot; icon=&quot;coco-ui-huojian&quot; /&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>icon</td><td>\u7C7B\u540D</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>color</td><td>\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td>size</td><td>\u5B57\u4F53\u5927\u5C0F</td><td>string</td><td>\u2014\u2014</td><td>16</td></tr></tbody></table><h2>Icon \u96C6\u5408</h2><p>\u70B9\u51FB\u5373\u53EF\u590D\u5236\u4EE3\u7801</p>`,
    5
  ),
  T = {
    setup(a, { expose: o }) {
      return (
        o({ frontmatter: {} }),
        (e, n) => {
          const i = s('coco-icon')
          return (
            l(),
            y('div', z, [
              $,
              C,
              j,
              I,
              u(i, { icon: 'coco-ui-cocoui' }),
              u(i, { icon: 'coco-ui-ashbin' }),
              u(i, { icon: 'coco-ui-data-view' }),
              B,
              D,
              N,
              u(i, { color: 'skyblue', icon: 'coco-ui-favorite' }),
              u(i, { color: 'red', icon: 'coco-ui-fabulous' }),
              u(i, { color: 'pink', icon: 'coco-ui-good' }),
              V,
              F,
              L,
              M,
              u(i, { size: '50', icon: 'coco-ui-hide' }),
              u(i, { size: '40', icon: 'coco-ui-shouye-xianxing' }),
              u(i, { size: '30', icon: 'coco-ui-huojian' }),
              S
            ])
          )
        }
      )
    }
  },
  A = { class: 'coco-markdown-body' },
  E = p(' Division \u5206\u5272\u7EBF '),
  P = p(' Crumbs \u9762\u5305\u5C51 '),
  Q = {
    setup(a, { expose: o }) {
      return (
        o({ frontmatter: {} }),
        (e, n) => {
          const i = s('coco-turn-page-item'),
            h = s('coco-turn-page')
          return (
            l(),
            y('div', A, [
              u(
                h,
                { style: { margin: '50px 0' } },
                {
                  default: r(() => [
                    u(
                      i,
                      { direction: 'left', url: '/component/division' },
                      { default: r(() => [E]), _: 1 }
                    ),
                    u(
                      i,
                      { direction: 'right', url: '/component/crumbs' },
                      { default: r(() => [P]), _: 1 }
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
  G = { id: 'allIcon' },
  H = { class: 'allIcon-ui' },
  J = ['data-clipboard-text', 'onClick'],
  K = { class: 'iconTitle' },
  Z = {
    setup(a) {
      const o = [
          'coco-ui-cocoui',
          'coco-ui-githublogo',
          'coco-ui-arrow-up-filling',
          'coco-ui-arrow-down-filling',
          'coco-ui-arrow-left-filling',
          'coco-ui-arrow-right-filling',
          'coco-ui-caps-unlock-filling',
          'coco-ui-comment-filling',
          'coco-ui-check-item-filling',
          'coco-ui-clock-filling',
          'coco-ui-delete-filling',
          'coco-ui-decline-filling',
          'coco-ui-dynamic-filling',
          'coco-ui-intermediate-filling',
          'coco-ui-favorite-filling',
          'coco-ui-layout-filling',
          'coco-ui-help-filling',
          'coco-ui-history-filling',
          'coco-ui-filter-filling',
          'coco-ui-file-common-filling',
          'coco-ui-news-filling',
          'coco-ui-edit-filling',
          'coco-ui-fullscreen-expand-filling',
          'coco-ui-smile-filling',
          'coco-ui-rise-filling',
          'coco-ui-picture-filling',
          'coco-ui-notification-filling',
          'coco-ui-user-filling',
          'coco-ui-setting-filling',
          'coco-ui-switch-filling',
          'coco-ui-work-filling',
          'coco-ui-task-filling',
          'coco-ui-success-filling',
          'coco-ui-warning-filling',
          'coco-ui-folder-filling',
          'coco-ui-map-filling',
          'coco-ui-prompt-filling',
          'coco-ui-meh-filling',
          'coco-ui-cry-filling',
          'coco-ui-top-filling',
          'coco-ui-home-filling',
          'coco-ui-sorting',
          'coco-ui-3column',
          'coco-ui-column-4',
          'coco-ui-add',
          'coco-ui-add-circle',
          'coco-ui-adjust',
          'coco-ui-arrow-up-circle',
          'coco-ui-arrow-right-circle',
          'coco-ui-arrow-down',
          'coco-ui-ashbin',
          'coco-ui-arrow-right',
          'coco-ui-browse',
          'coco-ui-bottom',
          'coco-ui-back',
          'coco-ui-bad',
          'coco-ui-arrow-double-left',
          'coco-ui-arrow-left-circle',
          'coco-ui-arrow-double-right',
          'coco-ui-caps-lock',
          'coco-ui-camera',
          'coco-ui-chart-bar',
          'coco-ui-attachment',
          'coco-ui-code',
          'coco-ui-close',
          'coco-ui-check-item',
          'coco-ui-calendar',
          'coco-ui-calendar',
          'coco-ui-comment',
          'coco-ui-column-vertical',
          'coco-ui-column-horizontal',
          'coco-ui-complete',
          'coco-ui-chart-pie',
          'coco-ui-cry',
          'coco-ui-customer-service',
          'coco-ui-delete',
          'coco-ui-direction-down',
          'coco-ui-copy',
          'coco-ui-cut',
          'coco-ui-data-view',
          'coco-ui-direction-down-circle',
          'coco-ui-direction-right',
          'coco-ui-direction-up',
          'coco-ui-discount',
          'coco-ui-direction-left',
          'coco-ui-download',
          'coco-ui-electronics',
          'coco-ui-drag',
          'coco-ui-elipsis',
          'coco-ui-export',
          'coco-ui-explain',
          'coco-ui-edit',
          'coco-ui-eye-close',
          'coco-ui-email',
          'coco-ui-error',
          'coco-ui-favorite',
          'coco-ui-file-common',
          'coco-ui-file-delete',
          'coco-ui-file-add',
          'coco-ui-film',
          'coco-ui-fabulous',
          'coco-ui-file',
          'coco-ui-folder-close',
          'coco-ui-filter',
          'coco-ui-good',
          'coco-ui-hide',
          'coco-ui-xiexian',
          'coco-ui-guanbi',
          'coco-ui-shouye-xianxing',
          'coco-ui-huojian',
          'coco-ui-huojian1',
          'coco-ui-history',
          'coco-ui-file-open',
          'coco-ui-forward',
          'coco-ui-import',
          'coco-ui-image-text',
          'coco-ui-keyboard-26',
          'coco-ui-keyboard-26',
          'coco-ui-keyboard-9',
          'coco-ui-link',
          'coco-ui-layout',
          'coco-ui-fullscreen-shrink',
          'coco-ui-layers',
          'coco-ui-lock',
          'coco-ui-fullscreen-expand',
          'coco-ui-meh',
          'coco-ui-menu',
          'coco-ui-loading',
          'coco-ui-help',
          'coco-ui-minus-circle',
          'coco-ui-modular',
          'coco-ui-notification',
          'coco-ui-mic',
          'coco-ui-more',
          'coco-ui-pad',
          'coco-ui-operation',
          'coco-ui-play',
          'coco-ui-print',
          'coco-ui-mobile-phone',
          'coco-ui-minus',
          'coco-ui-navigation',
          'coco-ui-pdf',
          'coco-ui-prompt',
          'coco-ui-move',
          'coco-ui-refresh',
          'coco-ui-run-up',
          'coco-ui-picture',
          'coco-ui-run-in',
          'coco-ui-pin',
          'coco-ui-save',
          'coco-ui-search',
          'coco-ui-share',
          'coco-ui-scanning',
          'coco-ui-security',
          'coco-ui-sign-out',
          'coco-ui-select',
          'coco-ui-stop',
          'coco-ui-success',
          'coco-ui-smile',
          'coco-ui-switch',
          'coco-ui-setting',
          'coco-ui-survey',
          'coco-ui-task',
          'coco-ui-skip',
          'coco-ui-text',
          'coco-ui-time',
          'coco-ui-telephone-out',
          'coco-ui-toggle-left',
          'coco-ui-toggle-right',
          'coco-ui-telephone',
          'coco-ui-top',
          'coco-ui-unlock',
          'coco-ui-user',
          'coco-ui-upload',
          'coco-ui-work',
          'coco-ui-training',
          'coco-ui-warning',
          'coco-ui-zoom-in',
          'coco-ui-zoom-out',
          'coco-ui-add-bold',
          'coco-ui-arrow-left-bold',
          'coco-ui-arrow-up-bold',
          'coco-ui-close-bold',
          'coco-ui-arrow-down-bold',
          'coco-ui-minus-bold',
          'coco-ui-arrow-right-bold',
          'coco-ui-select-bold'
        ],
        c = (e) => {
          const n = new _('.allIcon-li')
          n.on('success', (i) => {
            b({
              message: `\u590D\u5236\u6210\u529F ${e}`,
              type: 'success',
              round: !0
            }),
              n.destroy()
          })
        }
      return (e, n) => {
        const i = k('high')
        return (
          l(),
          y(
            f,
            null,
            [
              d(u(g(T), null, null, 512), [[i]]),
              t('div', G, [
                t('ul', H, [
                  (l(),
                  y(
                    f,
                    null,
                    v(o, (h, m) =>
                      t(
                        'li',
                        {
                          class: 'allIcon-li',
                          key: m,
                          'data-clipboard-text': h,
                          onClick: (O) => c(h)
                        },
                        [
                          t('i', { class: x(['coco-icon', h]) }, null, 2),
                          t('p', K, q(h), 1)
                        ],
                        8,
                        J
                      )
                    ),
                    64
                  ))
                ])
              ]),
              d(u(g(Q), null, null, 512), [[i]])
            ],
            64
          )
        )
      }
    }
  }
export { Z as default }
