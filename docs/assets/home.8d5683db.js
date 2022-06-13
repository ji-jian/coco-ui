import { _ as d, v as l } from './index.9fffb230.js'
import { F as u } from './Footer.a489dd26.js'
import {
  r as _,
  o as m,
  f as p,
  j as t,
  t as y,
  u as v,
  B as s,
  C as h,
  F as f,
  M as g,
  N as b,
  l as o
} from './vendor.69ad1cd2.js'
const a = (e) => (g('data-v-5e7acaf2'), (e = e()), b(), e),
  x = { id: 'home' },
  B = a(() =>
    t(
      'img',
      {
        draggable: 'false',
        class: 'logo',
        src: 'https://tianyuhao.cn/images/coco-ui/coco-ui-logo.svg',
        alt: 'logo'
      },
      null,
      -1
    )
  ),
  I = { class: 'MainTitle' },
  S = o(' Coco UI '),
  k = { class: 'version' },
  C = a(() =>
    t(
      'p',
      { class: 'Subtitle' },
      ' \u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7EC4\u4EF6\u5E93\uFF0C\u57FA\u4E8E vue3 + typescript\uFF0C\u5168\u9762\u62E5\u62B1 vue3 ',
      -1
    )
  ),
  F = { class: 'btnBox' },
  N = o(' \u5FEB\u901F\u5F00\u59CB '),
  T = { target: '_back', href: 'https://github.com/Coco2001/coco-ui' },
  V = o('Github'),
  j = { class: 'summary' },
  w = { class: 'summary-left' },
  z = { class: 'summary-title' },
  M = o(' \u7B80\u6D01\u81F3\u4E0A '),
  $ = a(() =>
    t(
      'p',
      { class: 'summary-content' },
      ' coco-ui \u6574\u4F53\u975E\u5E38\u7B80\u6D01\u660E\u4E86\uFF0C\u867D\u6CA1\u6709\u5F88\u591A\u9AD8\u7EA7\u7684\u7EC4\u4EF6\uFF0C\u4F46\u5B83\u662F\u4F7F\u7528\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u8FBE\u5230\u5B9E\u7528\u7684\u6548\u679C\u3002 ',
      -1
    )
  ),
  D = { class: 'summary-right' },
  E = { class: 'summary-title' },
  G = o(' \u8F7B\u91CF\u5BB9\u6613 '),
  U = a(() =>
    t(
      'p',
      { class: 'summary-content' },
      ' \u4F7F\u7528\u65B9\u4FBF\uFF0C\u914D\u7F6E\u7B80\u5355\uFF0C\u76EE\u5F55\u6E05\u6670\uFF0C\u7ED3\u6784\u7B80\u5355\uFF0C\u7EC4\u4EF6\u8F7B\u91CF\u7EA7\uFF0C\u4E0A\u624B\u7B80\u5355\uFF0C\u50CF\u590D\u5236\u7C98\u8D34\u4E00\u6837\u5BB9\u6613\u3002 ',
      -1
    )
  ),
  q = {
    setup(e) {
      return (r, c) => {
        const i = _('coco-button'),
          n = _('coco-icon')
        return (
          m(),
          p(
            f,
            null,
            [
              t('div', x, [
                B,
                t('h1', I, [S, t('span', k, 'v\xA0' + y(v(l)), 1)]),
                C,
                t('div', F, [
                  s(
                    i,
                    {
                      type: 'primary',
                      round: '',
                      onClick:
                        c[0] || (c[0] = (A) => r.$router.push('/component'))
                    },
                    { default: h(() => [N]), _: 1 }
                  ),
                  t('a', T, [
                    s(
                      i,
                      { round: '', icon: 'coco-ui-githublogo' },
                      { default: h(() => [V]), _: 1 }
                    )
                  ])
                ]),
                t('div', j, [
                  t('div', w, [
                    t('h2', z, [
                      s(n, {
                        icon: 'coco-ui-huojian-01',
                        size: '22',
                        color: '#67a1ff'
                      }),
                      M
                    ]),
                    $
                  ]),
                  t('div', D, [
                    t('h2', E, [
                      s(n, {
                        icon: 'coco-ui-channel-01',
                        size: '22',
                        color: '#bd34fe'
                      }),
                      G
                    ]),
                    U
                  ])
                ])
              ]),
              s(u)
            ],
            64
          )
        )
      }
    }
  }
var L = d(q, [['__scopeId', 'data-v-5e7acaf2']])
export { L as default }
