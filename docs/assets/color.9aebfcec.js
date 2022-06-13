import {
  o as r,
  f as l,
  j as o,
  r as k,
  Q as B,
  x as b,
  B as n,
  u as v,
  F as y,
  k as $,
  C as g,
  g as x,
  t as i,
  l as C
} from './vendor.69ad1cd2.js'
import { C as D } from './clipboard.562872b6.js'
import { _ as N } from './index.9fffb230.js'
import { M as V } from './index.c18f09c7.js'
import './tips.f775595e.js'
const F = { class: 'coco-markdown-body' },
  M = o('h1', null, 'Color \u8272\u5F69', -1),
  S = o('h2', null, '\u5185\u90E8\u989C\u8272', -1),
  j = o(
    'p',
    null,
    'coco-ui \u5728\u8FD9\u91CC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u6BD4\u8F83\u9C9C\u8273\u3001\u53CB\u597D\u7684\u989C\u8272\u63D0\u4F9B\u4F7F\u7528',
    -1
  ),
  z = o(
    'p',
    null,
    '\u4E0B\u9762\u662F coco-ui \u5185\u90E8\u4F7F\u7528\u7684\u989C\u8272\u8272\u53F7\uFF0C\u91C7\u7528\u7684\u6BD4\u8F83\u9C9C\u4EAE\u7684\u989C\u8272',
    -1
  ),
  E = [M, S, j, z],
  I = {
    setup(u, { expose: c }) {
      return c({ frontmatter: {} }), (_, s) => (r(), l('div', F, E))
    }
  },
  Q = { class: 'coco-markdown-body' },
  T = o('h2', null, '\u5B57\u4F53\u8FB9\u6846', -1),
  q = o(
    'p',
    null,
    '\u4E0B\u9762\u662F coco-ui \u5185\u90E8\u4F7F\u7528\u7684\u5B57\u4F53\u8FB9\u6846\u8272\u53F7',
    -1
  ),
  A = [T, q],
  G = {
    setup(u, { expose: c }) {
      return c({ frontmatter: {} }), (_, s) => (r(), l('div', Q, A))
    }
  },
  H = { class: 'coco-markdown-body' },
  J = o('h2', null, '\u5176\u4ED6\u63A8\u8350', -1),
  K = o(
    'p',
    null,
    '\u4E0B\u9762\u662F coco-ui \u63A8\u8350\u7684\u4E00\u4E9B\u5176\u5B83\u8272\u5F69',
    -1
  ),
  O = [J, K],
  P = {
    setup(u, { expose: c }) {
      return c({ frontmatter: {} }), (_, s) => (r(), l('div', H, O))
    }
  }
const R = { id: 'colorList' },
  U = ['data-clipboard-text'],
  W = { id: 'colorList' },
  X = ['data-clipboard-text'],
  Y = { id: 'colorList' },
  Z = ['data-clipboard-text'],
  oo = C(' \u5FEB\u901F\u4E0A\u624B '),
  to = C(' Container \u5E03\u5C40\u5BB9\u5668 '),
  eo = {
    setup(u) {
      const c = [
          { color: '#3a6ff4', type: 'primary' },
          { color: '#54c600', type: 'success' },
          { color: '#d10f1b', type: 'danger' },
          { color: '#fbcc30', type: 'warning' }
        ],
        a = [
          { color: '#333333', type: '\u4E3B\u6807\u9898' },
          { color: '#3f536e', type: '\u526F\u6807\u9898' },
          { color: '#515a6e', type: '\u5E38\u89C4\u5B57\u4F53' },
          { color: '#dcdfe6', type: '\u8FB9\u6846' }
        ],
        _ = [
          { color: '#0f1423', type: '\u94A2\u84DD' },
          { color: '#481e1c', type: '\u8C46\u6C99' },
          { color: '#33141e', type: '\u706B\u9E45\u7D2B' },
          { color: '#393733', type: '\u6CB3\u8C5A\u7070' },
          { color: '#732e12', type: '\u7B4D\u76AE\u68D5' },
          { color: '#503e2a', type: '\u6A44\u6984\u7070' },
          { color: '#5e665b', type: '\u7530\u87BA\u7EFF' },
          { color: '#73575c', type: '\u9F20\u80CC\u7070' },
          { color: '#8b2671', type: '\u9752\u83B2' },
          { color: '#f04b22', type: '\u5927\u7EA2' },
          { color: '#ef475d', type: '\u8349\u8309\u8389\u7EA2' },
          { color: '#e16c96', type: '\u521D\u8377\u7EA2' },
          { color: '#134857', type: '\u82CD\u84DD' },
          { color: '#346c9c', type: '\u6D77\u519B\u84DD' },
          { color: '#2177b8', type: '\u8679\u84DD' },
          { color: '#8abcd1', type: '\u79CB\u6CE2\u84DD' },
          { color: '#1491a8', type: '\u6A2B\u9E1F\u84DD' },
          { color: '#51c4d3', type: '\u7011\u5E03\u84DD' },
          { color: '#428675', type: '\u4E9A\u4E01\u7EFF' },
          { color: '#2c9678', type: '\u9752\u77FE\u7EFF' },
          { color: '#bec936', type: '\u6A44\u6984\u9EC4\u7EFF' },
          { color: '#61ac85', type: '\u6DE1\u7EFF' },
          { color: '#579572', type: '\u86CB\u767D\u77F3\u7EFF' },
          { color: '#c6dfc8', type: '\u6DE1\u7FE0\u7EFF' },
          { color: '#f19790', type: '\u820C\u7EA2' },
          { color: '#eea2a4', type: '\u7261\u4E39\u7C89\u7EA2' },
          { color: '#eea6b7', type: '\u6676\u7EA2' },
          { color: '#e4dfd7', type: '\u73CD\u73E0\u7070' },
          { color: '#fed71a', type: '\u4F5B\u624B\u9EC4' },
          { color: '#f2ce2b', type: '\u786B\u534E\u9EC4' },
          { color: '#f9d367', type: '\u6DE1\u5BC6\u9EC4' },
          { color: '#ddc871', type: '\u8292\u679C\u9EC4' },
          { color: '#9a8878', type: '\u6D77\u9E25\u7070' },
          { color: '#bbb5ac', type: '\u94C5\u7070' },
          { color: '#f9e9cd', type: '\u7C73\u8272' },
          { color: '#e2e1e4', type: '\u82A1\u98DF\u767D' }
        ],
        s = (d) => {
          const e = new D(d)
          e.on('success', (h) => {
            V({
              message: '\u590D\u5236\u6210\u529F',
              type: 'success',
              round: !0
            }),
              e.destroy()
          })
        },
        m = (d) => ({ background: `${d.color}` })
      return (d, e) => {
        const h = k('coco-turn-page-item'),
          w = k('coco-turn-page'),
          f = B('high')
        return (
          r(),
          l(
            y,
            null,
            [
              b(n(v(I), null, null, 512), [[f]]),
              o('div', R, [
                (r(),
                l(
                  y,
                  null,
                  $(c, (t, p) =>
                    o(
                      'div',
                      {
                        class: 'colorList-item colorList-item1',
                        style: x(m(t)),
                        key: p,
                        'data-clipboard-text': t.color,
                        onClick: e[0] || (e[0] = (L) => s('.colorList-item1'))
                      },
                      [
                        o('p', null, '\u7C7B\u578B\uFF1A' + i(t.type), 1),
                        o('p', null, i(t.color), 1)
                      ],
                      12,
                      U
                    )
                  ),
                  64
                ))
              ]),
              b(n(v(G), null, null, 512), [[f]]),
              o('div', W, [
                (r(),
                l(
                  y,
                  null,
                  $(a, (t, p) =>
                    o(
                      'div',
                      {
                        class: 'colorList-item colorList-item2',
                        style: x(m(t)),
                        key: p,
                        'data-clipboard-text': t.color,
                        onClick: e[1] || (e[1] = (L) => s('.colorList-item2'))
                      },
                      [
                        o('p', null, '\u7C7B\u578B\uFF1A' + i(t.type), 1),
                        o('p', null, i(t.color), 1)
                      ],
                      12,
                      X
                    )
                  ),
                  64
                ))
              ]),
              b(n(v(P), null, null, 512), [[f]]),
              o('div', Y, [
                (r(),
                l(
                  y,
                  null,
                  $(_, (t, p) =>
                    o(
                      'div',
                      {
                        class: 'colorList-item colorList-item3',
                        style: x(m(t)),
                        key: p,
                        'data-clipboard-text': t.color,
                        onClick: e[2] || (e[2] = (L) => s('.colorList-item3'))
                      },
                      [
                        o('p', null, '\u7C7B\u578B\uFF1A' + i(t.type), 1),
                        o('p', null, i(t.color), 1)
                      ],
                      12,
                      Z
                    )
                  ),
                  64
                ))
              ]),
              n(
                w,
                { style: { margin: '50px 0' } },
                {
                  default: g(() => [
                    n(
                      h,
                      { direction: 'left', url: '/component/install' },
                      { default: g(() => [oo]), _: 1 }
                    ),
                    n(
                      h,
                      { direction: 'right', url: '/component/container' },
                      { default: g(() => [to]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ],
            64
          )
        )
      }
    }
  }
var io = N(eo, [['__scopeId', 'data-v-659d84c6']])
export { io as default }
