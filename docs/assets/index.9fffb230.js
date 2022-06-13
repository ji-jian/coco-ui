var Ue = Object.defineProperty,
  je = Object.defineProperties
var Ge = Object.getOwnPropertyDescriptors
var Me = Object.getOwnPropertySymbols
var Ke = Object.prototype.hasOwnProperty,
  Ye = Object.prototype.propertyIsEnumerable
var He = (e, t, o) =>
    t in e
      ? Ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  N = (e, t) => {
    for (var o in t || (t = {})) Ke.call(t, o) && He(e, o, t[o])
    if (Me) for (var o of Me(t)) Ye.call(t, o) && He(e, o, t[o])
    return e
  },
  q = (e, t) => je(e, Ge(t))
import {
  r as D,
  o as r,
  c as j,
  a as Je,
  b as Qe,
  d as f,
  e as v,
  f as l,
  n as p,
  g as m,
  u as h,
  h as g,
  i as y,
  j as d,
  t as b,
  F as T,
  k as C,
  l as Ne,
  p as z,
  m as A,
  q as O,
  s as w,
  w as Xe,
  v as Ze,
  x as B,
  y as R,
  z as W,
  A as xe,
  B as P,
  C as M,
  D as et,
  T as Re,
  E as tt,
  G as U,
  H as ot,
  I as nt,
  J as st
} from './vendor.69ad1cd2.js'
const rt = function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a)
  new MutationObserver((a) => {
    for (const s of a)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && n(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function o(a) {
    const s = {}
    return (
      a.integrity && (s.integrity = a.integrity),
      a.referrerpolicy && (s.referrerPolicy = a.referrerpolicy),
      a.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : a.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function n(a) {
    if (a.ep) return
    a.ep = !0
    const s = o(a)
    fetch(a.href, s)
  }
}
rt()
var G = (e, t) => {
  const o = e.__vccOpts || e
  for (const [n, a] of t) o[n] = a
  return o
}
const lt = {}
function at(e, t) {
  const o = D('router-view')
  return r(), j(o)
}
var it = G(lt, [['render', at]])
const ut = 'modulepreload',
  Fe = {},
  ct = './',
  _ = function (t, o) {
    return !o || o.length === 0
      ? t()
      : Promise.all(
          o.map((n) => {
            if (((n = `${ct}${n}`), n in Fe)) return
            Fe[n] = !0
            const a = n.endsWith('.css'),
              s = a ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${n}"]${s}`)) return
            const i = document.createElement('link')
            if (
              ((i.rel = a ? 'stylesheet' : ut),
              a || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = n),
              document.head.appendChild(i),
              a)
            )
              return new Promise((u, c) => {
                i.addEventListener('load', u),
                  i.addEventListener('error', () =>
                    c(new Error(`Unable to preload CSS for ${n}`))
                  )
              })
          })
        ).then(() => t())
  },
  dt = [
    {
      path: '/',
      component: () =>
        _(
          () => import('./layout.11fb6c23.js'),
          [
            'assets/layout.11fb6c23.js',
            'assets/layout.5a6bb1bf.css',
            'assets/Sidebar.70caa9a7.js',
            'assets/Sidebar.d63ea76c.css',
            'assets/vendor.69ad1cd2.js'
          ]
        ),
      children: [
        {
          path: '',
          component: () =>
            _(
              () => import('./home.8d5683db.js'),
              [
                'assets/home.8d5683db.js',
                'assets/home.74055988.css',
                'assets/Footer.a489dd26.js',
                'assets/Footer.1b47d446.css',
                'assets/vendor.69ad1cd2.js'
              ]
            )
        },
        {
          path: '/about',
          component: () =>
            _(
              () => import('./about.38eca971.js'),
              [
                'assets/about.38eca971.js',
                'assets/Footer.a489dd26.js',
                'assets/Footer.1b47d446.css',
                'assets/vendor.69ad1cd2.js'
              ]
            )
        },
        {
          path: '/component',
          redirect: '/component/install',
          component: () =>
            _(
              () => import('./component.be76b12e.js'),
              [
                'assets/component.be76b12e.js',
                'assets/component.cf89a8b5.css',
                'assets/vendor.69ad1cd2.js',
                'assets/Sidebar.70caa9a7.js',
                'assets/Sidebar.d63ea76c.css'
              ]
            ),
          children: [
            {
              path: '/component/install',
              component: () =>
                _(
                  () => import('./install.dcbb99c0.js'),
                  ['assets/install.dcbb99c0.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/color',
              component: () =>
                _(
                  () => import('./color.9aebfcec.js'),
                  [
                    'assets/color.9aebfcec.js',
                    'assets/color.be043c46.css',
                    'assets/vendor.69ad1cd2.js',
                    'assets/clipboard.562872b6.js',
                    'assets/index.c18f09c7.js',
                    'assets/tips.f775595e.js'
                  ]
                )
            },
            {
              path: '/component/container',
              component: () =>
                _(
                  () => import('./container.e380df85.js'),
                  ['assets/container.e380df85.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/button',
              component: () =>
                _(
                  () => import('./button.bb0fe6a6.js'),
                  ['assets/button.bb0fe6a6.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/list',
              component: () =>
                _(
                  () => import('./list.d7e6f018.js'),
                  ['assets/list.d7e6f018.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/card',
              component: () =>
                _(
                  () => import('./card.14527b98.js'),
                  ['assets/card.14527b98.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/tag',
              component: () =>
                _(
                  () => import('./tag.b9c1421a.js'),
                  ['assets/tag.b9c1421a.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/link',
              component: () =>
                _(
                  () => import('./link.c54f423d.js'),
                  ['assets/link.c54f423d.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/input',
              component: () =>
                _(
                  () => import('./input.35ef77ad.js'),
                  ['assets/input.35ef77ad.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/menu',
              component: () =>
                _(
                  () => import('./menu.09286188.js'),
                  ['assets/menu.09286188.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/division',
              component: () =>
                _(
                  () => import('./division.03bc41cb.js'),
                  ['assets/division.03bc41cb.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/icon',
              component: () =>
                _(
                  () => import('./icon.689dc7e4.js'),
                  [
                    'assets/icon.689dc7e4.js',
                    'assets/clipboard.562872b6.js',
                    'assets/index.c18f09c7.js',
                    'assets/vendor.69ad1cd2.js',
                    'assets/tips.f775595e.js'
                  ]
                )
            },
            {
              path: '/component/crumbs',
              component: () =>
                _(
                  () => import('./crumbs.39b9fa7d.js'),
                  ['assets/crumbs.39b9fa7d.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/turnPage',
              component: () =>
                _(
                  () => import('./turnPage.e383d919.js'),
                  ['assets/turnPage.e383d919.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/backTop',
              component: () =>
                _(
                  () => import('./backTop.ef72235f.js'),
                  ['assets/backTop.ef72235f.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/message',
              component: () =>
                _(
                  () => import('./message.273f2b8e.js'),
                  [
                    'assets/message.273f2b8e.js',
                    'assets/vendor.69ad1cd2.js',
                    'assets/index.c18f09c7.js',
                    'assets/tips.f775595e.js'
                  ]
                )
            },
            {
              path: '/component/skeleton',
              component: () =>
                _(
                  () => import('./skeleton.559796fe.js'),
                  ['assets/skeleton.559796fe.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/alert',
              component: () =>
                _(
                  () => import('./alert.2796bf6b.js'),
                  ['assets/alert.2796bf6b.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/rate',
              component: () =>
                _(
                  () => import('./rate.9d8655e0.js'),
                  ['assets/rate.9d8655e0.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/image',
              component: () =>
                _(
                  () => import('./image.65a750a3.js'),
                  ['assets/image.65a750a3.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/avatar',
              component: () =>
                _(
                  () => import('./avatar.bb9d7871.js'),
                  ['assets/avatar.bb9d7871.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/text',
              component: () =>
                _(
                  () => import('./text.a1eb22bc.js'),
                  ['assets/text.a1eb22bc.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/table',
              component: () =>
                _(
                  () => import('./table.df78ba9b.js'),
                  ['assets/table.df78ba9b.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/switch',
              component: () =>
                _(
                  () => import('./switch.66216941.js'),
                  ['assets/switch.66216941.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/calendar',
              component: () =>
                _(
                  () => import('./calendar.af605788.js'),
                  ['assets/calendar.af605788.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/radio',
              component: () =>
                _(
                  () => import('./radio.b53fa9c5.js'),
                  ['assets/radio.b53fa9c5.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/tree',
              component: () =>
                _(
                  () => import('./tree.67df28d6.js'),
                  ['assets/tree.67df28d6.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/pageHeader',
              component: () =>
                _(
                  () => import('./pageHeader.b84ced9f.js'),
                  ['assets/pageHeader.b84ced9f.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/info',
              component: () =>
                _(
                  () => import('./info.8544d9eb.js'),
                  ['assets/info.8544d9eb.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/textarea',
              component: () =>
                _(
                  () => import('./textarea.5de1c870.js'),
                  ['assets/textarea.5de1c870.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/select',
              component: () =>
                _(
                  () => import('./select.2fe3fc9e.js'),
                  ['assets/select.2fe3fc9e.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/tagging',
              component: () =>
                _(
                  () => import('./tagging.9f62dde1.js'),
                  ['assets/tagging.9f62dde1.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/notification',
              component: () =>
                _(
                  () => import('./notification.225e0a0d.js'),
                  [
                    'assets/notification.225e0a0d.js',
                    'assets/vendor.69ad1cd2.js',
                    'assets/tips.f775595e.js'
                  ]
                )
            },
            {
              path: '/component/drawer',
              component: () =>
                _(
                  () => import('./drawer.58dbb46b.js'),
                  ['assets/drawer.58dbb46b.js', 'assets/vendor.69ad1cd2.js']
                )
            },
            {
              path: '/component/dialog',
              component: () =>
                _(
                  () => import('./dialog.8287e8bb.js'),
                  ['assets/dialog.8287e8bb.js', 'assets/vendor.69ad1cd2.js']
                )
            }
          ]
        }
      ]
    }
  ],
  pt = Je({
    history: Qe(),
    routes: dt,
    scrollBehavior(e, t, o) {
      return o || { top: 0 }
    }
  }),
  ht = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          ''
        ].includes(e)
      }
    },
    round: Boolean,
    disabled: Boolean,
    icon: String,
    size: {
      type: String,
      validator(e) {
        return ['large', 'small', 'mini', ''].includes(e)
      }
    },
    square: Boolean,
    simple: Boolean,
    loading: Boolean
  },
  yt = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#3f536e'
  },
  mt = ['disabled'],
  ft = d('div', null, '12322', -1),
  Y = f({
    props: ht,
    setup(e) {
      const t = e,
        o = v(() =>
          t.simple
            ? yt[t.type]
            : t.type === 'default' || !t.type
            ? '#333'
            : '#fff'
        ),
        n = v(() => [
          'coco-button',
          {
            [`coco-button-size-${t.size}`]: t.size,
            'coco-button-round': t.round,
            'coco-button-square': t.square
          }
        ]),
        a = v(() => [
          t.simple
            ? t.disabled || t.loading
              ? `coco-button-simple-disabled-${t.type}`
              : `coco-button-simple-${t.type}`
            : t.disabled || t.loading
            ? `coco-button-disabled-${t.type}`
            : `coco-button-${t.type}`
        ])
      return (s, i) => (
        r(),
        l(
          'button',
          { class: p([...h(n), ...h(a)]), disabled: s.disabled || s.loading },
          [
            s.loading || s.icon
              ? (r(),
                l(
                  'i',
                  {
                    key: 0,
                    class: p([
                      'coco-icon',
                      s.loading ? 'coco-ui-loading' : s.icon
                    ]),
                    style: m({ color: h(o) })
                  },
                  null,
                  6
                ))
              : g('', !0),
            ft,
            s.$slots.default
              ? (r(),
                l(
                  'span',
                  { key: 1, style: m({ color: h(o) }) },
                  [y(s.$slots, 'default')],
                  4
                ))
              : g('', !0)
          ],
          10,
          mt
        )
      )
    }
  })
Y.install = (e) => {
  e.component('CocoButton', Y)
}
const _t = {
    header: String,
    content: { type: Array, default: () => [] },
    keys: String,
    footer: String,
    zebra: Boolean,
    num: Boolean,
    hoverShow: Boolean
  },
  gt = { class: 'coco-list' },
  vt = { key: 0, class: 'coco-list-header' },
  $t = { key: 1 },
  bt = { key: 1, class: 'coco-list-content' },
  kt = { class: 'coco-list-ul' },
  St = { key: 0, class: 'coco-list-num' },
  wt = { key: 2, class: 'coco-list-not' },
  Tt = { key: 3, class: 'coco-list-footer' },
  Ct = { key: 1 },
  J = f({
    props: _t,
    setup(e) {
      const t = e,
        o = v(() => [
          'coco-list-li',
          { 'coco-list-zebra': t.zebra, 'coco-list-hoverShow': t.hoverShow }
        ])
      return (n, a) => (
        r(),
        l('div', gt, [
          n.header || n.$slots.header
            ? (r(),
              l('div', vt, [
                n.$slots.header
                  ? y(n.$slots, 'header', { key: 0 })
                  : (r(), l('span', $t, b(n.header), 1))
              ]))
            : g('', !0),
          n.content.length
            ? (r(),
              l('div', bt, [
                d('ul', kt, [
                  (r(!0),
                  l(
                    T,
                    null,
                    C(
                      n.content,
                      (s, i) => (
                        r(),
                        l(
                          'li',
                          { class: p(h(o)), key: i },
                          [
                            n.num
                              ? (r(), l('span', St, b(i + 1), 1))
                              : g('', !0),
                            Ne(' ' + b(n.keys ? s[n.keys] : s), 1)
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ]))
            : (r(), l('div', wt, '\u6682\u65E0\u5185\u5BB9...')),
          n.footer || n.$slots.footer
            ? (r(),
              l('div', Tt, [
                n.$slots.footer
                  ? y(n.$slots, 'footer', { key: 0 })
                  : (r(), l('span', Ct, b(n.footer), 1))
              ]))
            : g('', !0)
        ])
      )
    }
  })
J.install = (e) => {
  e.component('CocoList', J)
}
const Et = {
    shadow: {
      type: String,
      validator(e) {
        return ['always', 'hover', ''].includes(e)
      }
    },
    bodyStyle: { type: Object, default: () => null }
  },
  Vt = { key: 0, class: 'coco-card-header' },
  Pt = { key: 0, class: 'coco-card-title' },
  Bt = { key: 1, class: 'coco-card-subtitle' },
  Q = f({
    props: Et,
    setup(e) {
      return (t, o) => (
        r(),
        l(
          'div',
          {
            class: p([
              'coco-card',
              { [`coco-card-shadow-${t.shadow}`]: t.shadow }
            ])
          },
          [
            t.$slots.title || t.$slots.subtitle
              ? (r(),
                l('div', Vt, [
                  t.$slots.title
                    ? (r(), l('span', Pt, [y(t.$slots, 'title')]))
                    : g('', !0),
                  t.$slots.subtitle
                    ? (r(), l('span', Bt, [y(t.$slots, 'subtitle')]))
                    : g('', !0)
                ]))
              : g('', !0),
            d(
              'div',
              { class: 'coco-card-body', style: m(t.bodyStyle) },
              [y(t.$slots, 'default')],
              4
            )
          ],
          2
        )
      )
    }
  })
Q.install = (e) => {
  e.component('CocoCard', Q)
}
const It = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          ''
        ].includes(e)
      }
    },
    size: {
      type: String,
      validator(e) {
        return ['small', 'mini', ''].includes(e)
      }
    },
    round: Boolean,
    isClose: Boolean
  },
  X = f({
    props: It,
    emits: ['close'],
    setup(e, { emit: t }) {
      const o = e,
        n = v(() => [
          'coco-tag',
          `coco-tag-${o.type}`,
          { [`coco-tag-${o.size}`]: o.size, 'coco-tag-round': o.round }
        ])
      return (a, s) => (
        r(),
        l(
          'span',
          { class: p(h(n)) },
          [
            y(a.$slots, 'default'),
            a.isClose
              ? (r(),
                l('i', {
                  key: 0,
                  class: 'coco-icon coco-ui-close',
                  onClick: s[0] || (s[0] = (i) => t('close'))
                }))
              : g('', !0)
          ],
          2
        )
      )
    }
  })
X.install = (e) => {
  e.component('CocoTag', X)
}
const Dt = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          ''
        ].includes(e)
      }
    },
    prohibit: Boolean,
    url: String,
    underline: { type: Boolean, default: () => !0 },
    target: String,
    icon: String
  },
  zt = ['href', 'target'],
  Z = f({
    props: Dt,
    setup(e) {
      const t = e,
        o = v(() => [
          'coco-link',
          `coco-link-${t.type}`,
          { 'coco-link-prohibit': t.prohibit }
        ])
      return (n, a) => (
        r(),
        l(
          'a',
          {
            class: p(h(o)),
            style: m({ textDecoration: n.underline ? 'none' : 'underline' }),
            href: n.prohibit ? null : n.url,
            target: n.target
          },
          [
            n.icon
              ? (r(),
                l(
                  'i',
                  {
                    key: 0,
                    class: p(['coco-icon', `coco-icon-${n.type}`, n.icon])
                  },
                  null,
                  2
                ))
              : g('', !0),
            y(n.$slots, 'default')
          ],
          14,
          zt
        )
      )
    }
  })
Z.install = (e) => {
  e.component('CocoLink', Z)
}
const At = {
    theme: {
      type: String,
      default: () => 'dark',
      validator(e) {
        return ['dark', 'light', ''].includes(e)
      }
    },
    shadow: Boolean,
    mode: {
      type: String,
      default: () => 'horizontal',
      validator(e) {
        return ['horizontal', 'vertical', ''].includes(e)
      }
    },
    backgroundColor: String,
    textColor: String,
    collapse: Boolean
  },
  x = f({
    props: At,
    setup(e) {
      const t = e
      z('theme', t.theme), z('mode', t.mode), z('textColor', t.textColor)
      const o = v(() => t.mode === 'horizontal' && 'coco-menu-flex'),
        n = v(() => [
          'coco-menu',
          o.value,
          { 'coco-menu-shadow': t.shadow, [`coco-menu-${t.theme}`]: t.theme }
        ]),
        a = v(() => [
          { 'coco-menu-collapse': t.collapse && t.mode === 'vertical' }
        ])
      return (s, i) => (
        r(),
        l(
          'ul',
          {
            class: p([...h(n), ...h(a)]),
            style: m({ backgroundColor: s.backgroundColor })
          },
          [
            s.$slots.left
              ? (r(),
                l(
                  'div',
                  { key: 0, class: p(['coco-menu-left', h(o)]) },
                  [y(s.$slots, 'left')],
                  2
                ))
              : g('', !0),
            s.$slots.default
              ? (r(),
                l(
                  'div',
                  { key: 1, class: p(['coco-menu-default', h(o)]) },
                  [y(s.$slots, 'default')],
                  2
                ))
              : g('', !0),
            s.$slots.right
              ? (r(),
                l(
                  'div',
                  { key: 2, class: p(['coco-menu-right', h(o)]) },
                  [y(s.$slots, 'right')],
                  2
                ))
              : g('', !0)
          ],
          6
        )
      )
    }
  })
x.install = (e) => {
  e.component('CocoMenu', x)
}
const Lt = { route: String, title: String, prohibit: Boolean, link: String },
  Ot = { key: 1 },
  ee = f({
    props: Lt,
    setup(e) {
      const t = e,
        o = A('theme'),
        n = A('mode'),
        a = A('textColor'),
        s = v(() => [{ color: a || (o === 'dark' ? '#fff' : '#333') }]),
        { proxy: i } = O(),
        u = () => {
          if (!t.prohibit) {
            if (t.link) {
              window.open(t.link, 'link')
              return
            }
            if (t.route)
              try {
                i.$router.push(t.route)
              } catch ($) {
                console.log($)
              }
          }
        },
        c = v(() => [
          'coco-menu-item',
          `coco-menu-item-hover-${n}`,
          { 'coco-menu-item-prohibit': t.prohibit }
        ])
      return ($, V) => (
        r(),
        l(
          'li',
          { class: p(h(c)), style: m(h(s)), onClick: u },
          [
            $.$slots.default
              ? y($.$slots, 'default', { key: 0 })
              : (r(), l('span', Ot, b($.title), 1))
          ],
          6
        )
      )
    }
  })
ee.install = (e) => {
  e.component('CocoMenuItem', ee)
}
const Rt = {
    position: {
      type: String,
      default: () => 'left',
      validator(e) {
        return ['left', 'center', 'right', ''].includes(e)
      }
    },
    color: { type: String, default: () => '#515a6e' },
    margin: { type: String, default: () => '25px' },
    icon: String
  },
  te = f({
    props: Rt,
    setup(e) {
      return (t, o) => (
        r(),
        l(
          'div',
          { class: 'coco-division', style: m({ margin: `${t.margin} 0` }) },
          [
            d(
              'span',
              {
                class: p([
                  'coco-division-text',
                  `coco-division-text-${t.position}`
                ]),
                style: m({ color: t.color })
              },
              [
                t.icon
                  ? (r(),
                    l(
                      'i',
                      {
                        key: 0,
                        style: m({ color: t.color }),
                        class: p(['coco-icon', t.icon])
                      },
                      null,
                      6
                    ))
                  : y(t.$slots, 'default', { key: 1 })
              ],
              6
            )
          ],
          4
        )
      )
    }
  })
te.install = (e) => {
  e.component('CocoDivision', te)
}
const Mt = {
    icon: String,
    color: String,
    size: { type: String, default: () => '16' }
  },
  oe = f({
    props: Mt,
    setup(e) {
      return (t, o) => (
        r(),
        l(
          'i',
          {
            class: p(['coco-icon', t.icon]),
            style: m({ color: t.color, fontSize: `${t.size}px` })
          },
          null,
          6
        )
      )
    }
  })
oe.install = (e) => {
  e.component('CocoIcon', oe)
}
const Ht = { separator: { type: String, default: () => 'coco-ui-xiexian' } },
  Ft = { class: 'coco-crumbs' },
  ne = f({
    props: Ht,
    setup(e) {
      return (
        z('Crumbs-separator', e.separator),
        (o, n) => (r(), l('div', Ft, [y(o.$slots, 'default')]))
      )
    }
  })
ne.install = (e) => {
  e.component('CocoCrumbs', ne)
}
const Nt = { to: String },
  qt = { class: 'coco-crumbs-item-text' },
  se = f({
    props: Nt,
    setup(e) {
      const t = e,
        o = w(''),
        { proxy: n } = O()
      o.value = A('Crumbs-separator')
      const a = () => {
        if (!!t.to)
          try {
            n.$router.push(t.to)
          } catch (s) {
            console.log(s)
          }
      }
      return (s, i) => (
        r(),
        l(
          'span',
          {
            class: p(['coco-crumbs-item', { 'coco-crumbs-item__to': s.to }]),
            onClick: a
          },
          [
            d('span', qt, [y(s.$slots, 'default')]),
            d('i', { class: p(['coco-icon', o.value]) }, null, 2)
          ],
          2
        )
      )
    }
  })
se.install = (e) => {
  e.component('CocoCrumbsItem', se)
}
const Wt = {
    modelValue: {
      type: String,
      set() {
        return !0
      }
    },
    placeholder: String,
    type: {
      type: String,
      default: () => 'text',
      validator(e) {
        return ['text', 'password', ''].includes(e)
      }
    },
    size: {
      type: String,
      default: () => 'medium',
      validator(e) {
        return ['large', 'medium', 'small', 'mini', ''].includes(e)
      }
    },
    max: String,
    clear: Boolean,
    icon: String,
    disabled: Boolean,
    autofocus: Boolean,
    name: String,
    showPassword: Boolean,
    set() {
      return !0
    }
  },
  Ut = [
    'type',
    'value',
    'placeholder',
    'maxlength',
    'disabled',
    'autofocus',
    'name'
  ],
  re = f({
    props: Wt,
    emits: ['update:modelValue', 'clear', 'enter', 'onblur', 'onfocus'],
    setup(e, { emit: t }) {
      const o = e,
        n = w(o.type),
        a = w(!1),
        s = (k) => {
          t('update:modelValue', k.target.value)
        },
        i = () => {
          o.disabled || (t('update:modelValue', ''), t('clear'))
        },
        u = v(() => [
          'coco-input-input',
          `coco-input-input-${o.size}`,
          {
            'coco-input-icon-padding': o.icon,
            'coco-input-clear-padding': o.clear,
            'coco-input-disabled': o.disabled
          }
        ]),
        c = () => {
          ;(a.value = !a.value), (n.value = a.value ? 'text' : 'password')
        },
        $ = v(() => (o.clear ? !!o.showPassword : !0)),
        V = v(() =>
          $.value
            ? a.value
              ? 'coco-ui-browse'
              : 'coco-ui-eye-close'
            : 'coco-ui-guanbi'
        ),
        L = () => {
          $.value ? c() : i()
        }
      return (k, E) => (
        r(),
        l(
          'div',
          { class: p(['coco-input', { 'coco-input-disabled': k.disabled }]) },
          [
            k.icon
              ? (r(),
                l(
                  'i',
                  {
                    key: 0,
                    class: p([
                      'coco-icon',
                      'coco-input-icon',
                      `coco-input-icon-${k.size}`,
                      k.icon
                    ]),
                    style: m({ cursor: k.disabled ? 'not-allowed' : 'Default' })
                  },
                  null,
                  6
                ))
              : g('', !0),
            d(
              'input',
              {
                class: p(h(u)),
                type: n.value,
                value: k.modelValue,
                placeholder: k.placeholder,
                maxlength: k.max,
                disabled: k.disabled,
                autofocus: k.autofocus,
                name: k.name,
                onInput: s,
                onKeyup: E[0] || (E[0] = Xe((S) => t('enter'), ['enter'])),
                onBlur: E[1] || (E[1] = (S) => t('onblur')),
                onFocus: E[2] || (E[2] = (S) => t('onfocus'))
              },
              null,
              42,
              Ut
            ),
            k.clear || k.showPassword
              ? (r(),
                l(
                  'i',
                  {
                    key: 1,
                    class: p([
                      'coco-icon',
                      'coco-input-clear',
                      `coco-input-icon-${k.size}`,
                      h(V)
                    ]),
                    style: m({
                      cursor: k.disabled ? 'not-allowed' : 'pointer'
                    }),
                    onClick: L
                  },
                  null,
                  6
                ))
              : g('', !0)
          ],
          2
        )
      )
    }
  })
re.install = (e) => {
  e.component('CocoInput', re)
}
const jt = { center: Boolean },
  Gt = { class: 'coco-turn-page' },
  le = f({
    props: jt,
    setup(e) {
      return (
        z('is-center', e.center),
        (o, n) => (r(), l('div', Gt, [y(o.$slots, 'default')]))
      )
    }
  })
le.install = (e) => {
  e.component('CocoTurnPage', le)
}
const Kt = {
    direction: {
      type: String,
      required: !0,
      validator(e) {
        return ['left', 'right'].includes(e)
      }
    },
    url: String,
    icon: String,
    prohibit: Boolean
  },
  Yt = ['align'],
  ae = f({
    props: Kt,
    setup(e) {
      const t = e,
        o = A('is-center'),
        { proxy: n } = O(),
        a = () => {
          if (!t.prohibit)
            try {
              n.$router.push(t.url)
            } catch (s) {
              console.log(s)
            }
        }
      return (s, i) => (
        r(),
        l(
          'div',
          {
            class: 'coco-turn-page-item',
            align: h(o) ? 'center' : s.direction
          },
          [
            d(
              'div',
              {
                class: p([
                  'coco-turn-page-item-link',
                  { 'coco-turn-page-item-prohibit': s.prohibit }
                ]),
                onClick: a
              },
              [
                s.direction === 'left'
                  ? (r(),
                    l(
                      'i',
                      {
                        key: 0,
                        class: p([
                          'coco-icon',
                          s.icon || 'coco-ui-arrow-left-bold'
                        ])
                      },
                      null,
                      2
                    ))
                  : g('', !0),
                y(s.$slots, 'default'),
                s.direction === 'right'
                  ? (r(),
                    l(
                      'i',
                      {
                        key: 1,
                        class: p([
                          'coco-icon',
                          s.icon || 'coco-ui-arrow-right-bold'
                        ])
                      },
                      null,
                      2
                    ))
                  : g('', !0)
              ],
              2
            )
          ],
          8,
          Yt
        )
      )
    }
  })
ae.install = (e) => {
  e.component('CocoTurnPageItem', ae)
}
const Jt = {
    bottom: { type: String, default: () => '50px' },
    right: { type: String, default: () => '50px' },
    action: {
      type: String,
      default: () => 'smooth',
      validator(e) {
        return ['smooth', 'instant', ''].includes(e)
      }
    },
    beyond: { type: Number, default: () => 100 }
  },
  ie = f({
    props: Jt,
    setup(e) {
      const t = e,
        o = w(!1),
        n = () => {
          let s = null
          return () => {
            s !== null && clearTimeout(s),
              (s = setTimeout(() => {
                document.documentElement.scrollTop > t.beyond
                  ? (o.value = !0)
                  : (o.value = !1)
              }, 188))
          }
        },
        a = () => {
          window.scrollTo({ top: 0, behavior: t.action })
        }
      return (
        Ze(() => addEventListener('scroll', n())),
        (s, i) =>
          B(
            (r(),
            l(
              'div',
              {
                class: 'coco-back-top',
                style: m({ bottom: s.bottom, right: s.right }),
                onClick: a
              },
              [y(s.$slots, 'default')],
              4
            )),
            [[R, o.value]]
          )
      )
    }
  })
ie.install = (e) => {
  e.component('CocoBackTop', ie)
}
const Qt = {
    round: Boolean,
    width: String,
    height: String,
    animation: Boolean
  },
  ue = f({
    props: Qt,
    setup(e) {
      return (t, o) => (
        r(),
        l(
          'div',
          {
            class: p([
              'coco-skeleton',
              {
                'coco-skeleton-round': t.round,
                'coco-skeleton-animation': t.animation
              }
            ]),
            style: m({ width: t.width, height: t.height })
          },
          null,
          6
        )
      )
    }
  })
ue.install = (e) => {
  e.component('CocoSkeleton', ue)
}
const Xt = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          ''
        ].includes(e)
      }
    },
    message: String,
    icon: String,
    close: Boolean,
    center: Boolean,
    simple: Boolean
  },
  Zt = { class: 'coco-alert-message' },
  ce = f({
    props: Xt,
    emits: ['close'],
    setup(e, { emit: t }) {
      const o = e,
        n = v(() => [
          'coco-alert',
          `coco-alert-${o.type}`,
          {
            'coco-alert-center': o.center,
            [`coco-alert-bac-${o.type}`]: !o.simple
          }
        ]),
        a = () => t('close')
      return (s, i) => (
        r(),
        l(
          'div',
          { class: p(h(n)) },
          [
            d('div', Zt, [
              s.icon
                ? (r(),
                  l(
                    'i',
                    {
                      key: 0,
                      class: p(['coco-icon', 'coco-message-icon', s.icon])
                    },
                    null,
                    2
                  ))
                : g('', !0),
              Ne(' ' + b(s.message), 1)
            ]),
            a
              ? (r(),
                l('i', {
                  key: 0,
                  class: 'coco-icon coco-ui-guanbi',
                  onClick: a
                }))
              : g('', !0)
          ],
          2
        )
      )
    }
  })
ce.install = (e) => {
  e.component('CocoAlert', ce)
}
const xt = {
    modelValue: Number,
    color: { type: String, default: () => '#fbcc30' },
    voidColor: { type: String, default: () => '#C6D1DE' },
    showText: Boolean,
    sayText: {
      type: Array,
      default: () => [
        '\u6781\u5DEE',
        '\u5931\u671B',
        '\u4E00\u822C',
        '\u60CA\u559C',
        '\u6EE1\u610F'
      ]
    }
  },
  eo = { class: 'coco-rate' },
  to = ['onMouseover'],
  oo = ['onMouseover'],
  no = { key: 0, class: 'show-text' },
  de = f({
    props: xt,
    emits: ['update:modelValue', 'change'],
    setup(e, { emit: t }) {
      const o = e,
        n = w(o.modelValue)
      W(
        () => o.modelValue,
        (i) => (n.value = i)
      )
      const a = () => {
          t('update:modelValue', n.value),
            n.value !== o.modelValue && t('change')
        },
        s = v(() => {
          if (!o.showText) return
          const i = w(null)
          return (
            W(
              () => n.value,
              () => {
                switch (n.value) {
                  case 1:
                    i.value = o.sayText[0]
                    break
                  case 2:
                    i.value = o.sayText[1]
                    break
                  case 3:
                    i.value = o.sayText[2]
                    break
                  case 4:
                    i.value = o.sayText[3]
                    break
                  case 5:
                    i.value = o.sayText[4]
                    break
                  default:
                    i.value = ''
                }
              },
              { immediate: !0 }
            ),
            i.value
          )
        })
      return (i, u) => (
        r(),
        l('div', eo, [
          d(
            'div',
            {
              class: 'coco-rate-mouseout',
              onMouseout: u[0] || (u[0] = (c) => (n.value = i.modelValue))
            },
            [
              (r(),
              l(
                T,
                null,
                C(5, (c) =>
                  d(
                    'i',
                    {
                      class: 'coco-icon coco-ui-favorite',
                      key: c,
                      onMouseover: ($) => (n.value = c)
                    },
                    null,
                    40,
                    to
                  )
                ),
                64
              )),
              d(
                'span',
                { class: 'solid', style: m(`width:${n.value * 18}px;`) },
                [
                  (r(),
                  l(
                    T,
                    null,
                    C(5, (c) =>
                      d(
                        'i',
                        {
                          class: 'coco-icon coco-ui-favorite-filling',
                          key: c,
                          style: m({ color: i.color }),
                          onMouseover: ($) => (n.value = c),
                          onClick: a
                        },
                        null,
                        44,
                        oo
                      )
                    ),
                    64
                  ))
                ],
                4
              )
            ],
            32
          ),
          i.showText ? (r(), l('div', no, b(h(s)), 1)) : g('', !0)
        ])
      )
    }
  })
de.install = (e) => {
  e.component('CocoRate', de)
}
const so = {
    src: String,
    alt: String,
    fit: {
      type: String,
      validator(e) {
        return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(
          e
        )
      }
    },
    width: String,
    height: String,
    select: Boolean,
    draggable: Boolean
  },
  ro = { class: 'coco-image' },
  lo = { key: 0, class: 'coco-image-error' },
  ao = d(
    'span',
    { class: 'coco-image-error-text' },
    '\u52A0\u8F7D\u5931\u8D25',
    -1
  ),
  io = ['draggable', 'src', 'alt'],
  pe = f({
    props: so,
    emits: ['error', 'load'],
    setup(e, { emit: t }) {
      const o = w(!1),
        n = () => {
          t('error'), (o.value = !0)
        }
      return (a, s) => (
        r(),
        l('div', ro, [
          o.value
            ? (r(), l('div', lo, [y(a.$slots, 'error', {}, () => [ao])]))
            : (r(),
              l(
                'img',
                {
                  key: 1,
                  draggable: a.draggable,
                  class: p([
                    `coco-image-${a.fit}`,
                    { 'coco-image-select': a.select }
                  ]),
                  style: m({ width: a.width, height: a.height }),
                  src: a.src,
                  alt: a.alt,
                  onError: n,
                  onLoad: s[0] || (s[0] = (i) => t('load'))
                },
                null,
                46,
                io
              ))
        ])
      )
    }
  })
pe.install = (e) => {
  e.component('CocoImage', pe)
}
const uo = {
    src: String,
    alt: String,
    size: { type: Number, default: () => 8 },
    fit: {
      type: String,
      validator(e) {
        return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(
          e
        )
      }
    },
    round: Boolean,
    border: Boolean,
    select: Boolean,
    draggable: Boolean,
    errorIcon: String
  },
  co = { class: 'coco-avatar' },
  po = ['draggable', 'src', 'alt'],
  he = f({
    props: uo,
    emits: ['error', 'load'],
    setup(e, { emit: t }) {
      const o = e,
        n = w(!1),
        a = () => {
          t('error'), (n.value = !0)
        },
        s = v(() => [
          { width: `${o.size * 10}px`, height: `${o.size * 10}px` }
        ]),
        i = v(() => ['coco-avatar-error', { 'coco-avatar-round': o.round }]),
        u = v(() => [
          {
            [`coco-avatar-${o.fit}`]: o.fit,
            'coco-avatar-round': o.round,
            'coco-avatar-border': o.border,
            'coco-avatar-select': o.select
          }
        ])
      return (c, $) => (
        r(),
        l('div', co, [
          n.value
            ? (r(),
              l(
                'div',
                { key: 0, class: p(h(i)), style: m(h(s)) },
                [
                  y(c.$slots, 'error', {}, () => [
                    d(
                      'i',
                      {
                        class: p(['coco-icon', c.errorIcon || 'coco-ui-user'])
                      },
                      null,
                      2
                    )
                  ])
                ],
                6
              ))
            : (r(),
              l(
                'img',
                {
                  key: 1,
                  draggable: c.draggable,
                  class: p(h(u)),
                  style: m(h(s)),
                  src: c.src,
                  alt: c.alt,
                  onError: a,
                  onLoad: $[0] || ($[0] = (V) => t('load'))
                },
                null,
                46,
                po
              ))
        ])
      )
    }
  })
he.install = (e) => {
  e.component('CocoAvatar', he)
}
const ho = { name: 'CocoAside' },
  ye = f(
    q(N({}, ho), {
      props: { width: { type: String, default: () => '200px' } },
      setup(e) {
        return (t, o) => (
          r(),
          l(
            'aside',
            { class: 'coco-aside', style: m({ width: t.width }) },
            [y(t.$slots, 'default')],
            4
          )
        )
      }
    })
  )
ye.install = (e) => {
  e.component('CocoAside', ye)
}
const me = f({
  props: {
    direction: {
      type: String,
      validator(e) {
        return ['horizontal', 'vertical', ''].includes(e)
      }
    }
  },
  setup(e) {
    const t = e,
      { isClass: o } = n()
    function n() {
      const a = xe(),
        s = v(() =>
          t.direction === 'vertical'
            ? !0
            : t.direction === 'horizontal'
            ? !1
            : a && a.default
            ? a.default().some((u) => {
                const c = u.type && u.type.name
                return c === 'CocoHeader' || c === 'CocoFooter'
              })
            : !1
        )
      return {
        isClass: v(() => [
          'coco-container',
          s.value ? 'coco-container-horizontal' : 'coco-container-vertical'
        ])
      }
    }
    return (a, s) => (
      r(), l('section', { class: p(h(o)) }, [y(a.$slots, 'default')], 2)
    )
  }
})
me.install = (e) => {
  e.component('CocoContainer', me)
}
const yo = { name: 'CocoFooter' },
  fe = f(
    q(N({}, yo), {
      props: { height: { type: String, default: () => '60px' } },
      setup(e) {
        return (t, o) => (
          r(),
          l(
            'footer',
            { class: 'coco-footer', style: m({ height: t.height }) },
            [y(t.$slots, 'default')],
            4
          )
        )
      }
    })
  )
fe.install = (e) => {
  e.component('CocoFooter', fe)
}
const mo = { name: 'CocoHeader' },
  _e = f(
    q(N({}, mo), {
      props: { height: { type: String, default: () => '60px' } },
      setup(e) {
        return (t, o) => (
          r(),
          l(
            'header',
            { class: 'coco-header', style: m({ height: t.height }) },
            [y(t.$slots, 'default')],
            4
          )
        )
      }
    })
  )
_e.install = (e) => {
  e.component('CocoHeader', _e)
}
const fo = { name: 'CocoMain' },
  _o = { class: 'coco-main' }
function go(e, t, o, n, a, s) {
  return r(), l('main', _o, [y(e.$slots, 'default')])
}
var ge = G(fo, [['render', go]])
ge.install = (e) => {
  e.component('CocoMain', ge)
}
const vo = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          ''
        ].includes(e)
      }
    },
    size: { type: String, default: () => '16' },
    block: Boolean,
    color: String
  },
  ve = f({
    props: vo,
    setup(e) {
      return (t, o) => (
        r(),
        l(
          'span',
          {
            class: p([
              'coco-text',
              { [`coco-text-${t.type}`]: t.type, 'coco-text-block': t.block }
            ]),
            style: m({ color: t.color, fontSize: `${t.size}px` })
          },
          [y(t.$slots, 'default')],
          6
        )
      )
    }
  })
ve.install = (e) => {
  e.component('CocoText', ve)
}
const $o = {
  data: { type: Array, default: () => [] },
  columns: { type: Array, default: () => [] },
  trHeight: { type: String, default: () => '40px' },
  align: {
    type: String,
    default: () => 'left',
    validator(e) {
      return ['left', 'right', 'center', ''].includes(e)
    }
  },
  zebra: Boolean,
  border: Boolean,
  width: { type: String, default: () => '100%' },
  height: { type: String, default: () => 'auto' },
  num: Boolean,
  important: { type: Array, default: () => [] },
  importantColor: { type: String, default: () => '#fdf5e6' }
}
const bo = ['width'],
  ko = { class: 'coco-thead' },
  So = ['height'],
  wo = ['align'],
  To = ['width', 'align'],
  Co = { class: 'coco-tbody' },
  Eo = ['height'],
  Vo = ['align'],
  Po = ['align'],
  Bo = f({
    props: $o,
    setup(e) {
      const t = e,
        o = (a) => {
          const s = t.important
          for (const i of s)
            if (i === a + 1) return `background: ${t.importantColor}`
        },
        n = (a) => [`coco-${a}-td`, { 'coco-table-border': t.border }]
      return (a, s) => (
        r(),
        l(
          'div',
          { class: 'coco-table', style: m({ height: a.height }) },
          [
            d(
              'table',
              {
                class: 'coco-table-table',
                border: '0',
                cellspacing: '0',
                cellpadding: '0',
                width: a.width
              },
              [
                d('thead', ko, [
                  d(
                    'tr',
                    { class: 'coco-thead-th', height: a.trHeight },
                    [
                      a.num
                        ? (r(),
                          l(
                            'th',
                            {
                              key: 0,
                              class: p(n('thead')),
                              align: a.align || 'left'
                            },
                            null,
                            10,
                            wo
                          ))
                        : g('', !0),
                      (r(!0),
                      l(
                        T,
                        null,
                        C(
                          a.columns,
                          (i, u) => (
                            r(),
                            l(
                              'th',
                              {
                                class: p(n('thead')),
                                width: i.width,
                                key: u,
                                align: a.align || 'left'
                              },
                              b(i.title),
                              11,
                              To
                            )
                          )
                        ),
                        128
                      ))
                    ],
                    8,
                    So
                  )
                ]),
                d('tbody', Co, [
                  (r(!0),
                  l(
                    T,
                    null,
                    C(
                      a.data,
                      (i, u) => (
                        r(),
                        l(
                          'tr',
                          {
                            class: p([
                              'coco-tbody-tr',
                              { 'coco-tbody-tr-zebra': a.zebra }
                            ]),
                            height: a.trHeight,
                            style: m(o(u)),
                            key: u
                          },
                          [
                            a.num
                              ? (r(),
                                l(
                                  'td',
                                  {
                                    key: 0,
                                    class: p(n('tbody')),
                                    align: a.align || 'left'
                                  },
                                  b(u + 1),
                                  11,
                                  Vo
                                ))
                              : g('', !0),
                            (r(!0),
                            l(
                              T,
                              null,
                              C(
                                a.columns,
                                (c, $) => (
                                  r(),
                                  l(
                                    'td',
                                    {
                                      class: p(n('tbody')),
                                      key: $,
                                      align: a.align || 'left'
                                    },
                                    b(i[c.key]),
                                    11,
                                    Po
                                  )
                                )
                              ),
                              128
                            ))
                          ],
                          14,
                          Eo
                        )
                      )
                    ),
                    128
                  ))
                ])
              ],
              8,
              bo
            )
          ],
          4
        )
      )
    }
  })
var $e = G(Bo, [['__scopeId', 'data-v-468502dd']])
$e.install = (e) => {
  e.component('CocoTable', $e)
}
const Io = {},
  Do = { class: 'coco-button-group' }
function zo(e, t) {
  return r(), l('div', Do, [y(e.$slots, 'default')])
}
var be = G(Io, [['render', zo]])
be.install = (e) => {
  e.component('CocoButtonGroup', be)
}
const Ao = {
    modelValue: { type: Object, required: !0 },
    cellWidth: { type: Number, default: () => 50 }
  },
  Lo = { class: 'coco-calendar' },
  Oo = { class: 'coco-calendar-header' },
  Ro = { class: 'coco-calendar-isDay' },
  Mo = { class: 'coco-calendar-week' },
  Ho = { class: 'coco-calendar-month' },
  ke = f({
    props: Ao,
    setup(e) {
      const t = e,
        o = w(t.modelValue.getMonth()),
        n = w(t.modelValue.getFullYear()),
        a = t.modelValue.getDate(),
        s = v(() => {
          const S = new Date(`${n.value}/${o.value + 1}/1`).getDay()
          return S === 0 ? 7 - 1 : S - 1
        }),
        i = (S = o.value, H) =>
          S !== 1
            ? [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][S]
            : (H % 4 == 0 && H % 100 != 0) || H % 400 == 0
            ? 29
            : 28,
        u = () => {
          if (o.value > 0) {
            o.value--
            return
          }
          n.value--, (o.value = 11)
        },
        c = () => {
          if (o.value < 11) {
            o.value++
            return
          }
          n.value++, (o.value = 0)
        },
        $ = () => {
          ;(o.value = t.modelValue.getMonth()),
            (n.value = t.modelValue.getFullYear())
        },
        V = (S) =>
          [
            '\u4E00',
            '\u4E8C',
            '\u4E09',
            '\u56DB',
            '\u4E94',
            '\u516D',
            '\u65E5'
          ][S - 1],
        L = (S) => {
          if (S + 1 === t.modelValue.getDate())
            return [{ backgroundColor: '#3a6ff4', color: '#fff' }]
        },
        k = v(() => [
          { width: `${((t.cellWidth < 28 ? 28 : t.cellWidth) + 2) * 7}px` }
        ]),
        E = v(() => {
          const S = t.cellWidth < 28 ? 28 : t.cellWidth
          return [{ width: `${S}px`, height: `${S}px` }]
        })
      return (S, H) => {
        const F = D('coco-button'),
          We = D('coco-button-group')
        return (
          r(),
          l('span', Lo, [
            d(
              'div',
              { class: 'coco-calendar-container', style: m(h(k)) },
              [
                d('div', Oo, [
                  d(
                    'span',
                    Ro,
                    b(n.value) +
                      '\u5E74 ' +
                      b(o.value + 1) +
                      '\u6708 ' +
                      b(h(a)) +
                      '\u65E5 ',
                    1
                  ),
                  P(We, null, {
                    default: M(() => [
                      P(F, {
                        size: 'mini',
                        icon: 'coco-ui-arrow-left-bold',
                        onClick: u
                      }),
                      P(F, {
                        size: 'mini',
                        simple: '',
                        type: 'primary',
                        icon: 'coco-ui-time',
                        onClick: $
                      }),
                      P(F, {
                        size: 'mini',
                        icon: 'coco-ui-arrow-right',
                        onClick: c
                      })
                    ]),
                    _: 1
                  })
                ]),
                d('tr', Mo, [
                  (r(),
                  l(
                    T,
                    null,
                    C(7, (K, I) =>
                      d(
                        'td',
                        {
                          class: 'coco-calendar-week-item',
                          key: I,
                          style: m({
                            width: `${S.cellWidth < 28 ? 28 : S.cellWidth}px`
                          })
                        },
                        b(V(K)),
                        5
                      )
                    ),
                    64
                  ))
                ]),
                d('tr', Ho, [
                  (r(!0),
                  l(
                    T,
                    null,
                    C(
                      h(s),
                      (K, I) => (
                        r(),
                        l(
                          'td',
                          {
                            class: 'coco-calendar-day',
                            key: I,
                            style: m([h(E)])
                          },
                          null,
                          4
                        )
                      )
                    ),
                    128
                  )),
                  (r(!0),
                  l(
                    T,
                    null,
                    C(
                      i(o.value, n.value),
                      (K, I) => (
                        r(),
                        l(
                          'td',
                          {
                            class: 'coco-calendar-day',
                            key: I,
                            style: m([L(I), h(E)])
                          },
                          b(I + 1),
                          5
                        )
                      )
                    ),
                    128
                  ))
                ])
              ],
              4
            )
          ])
        )
      }
    }
  })
ke.install = (e) => {
  e.component('CocoCalendar', ke)
}
const Fo = {
    modelValue: Boolean,
    closeColor: { type: String, default: () => '#dcdfe6' },
    openColor: { type: String, default: () => '#3a6ff4' },
    closeText: String,
    openText: String,
    disabled: Boolean,
    width: { type: Number, default: () => 40 }
  },
  Se = f({
    props: Fo,
    emits: ['update:modelValue', 'change'],
    setup(e, { emit: t }) {
      const o = e,
        n = w(o.modelValue),
        a = () => {
          o.disabled ||
            ((n.value = !n.value),
            t('update:modelValue', n.value),
            t('change', n.value))
        },
        s = v(() => (o.modelValue ? o.openColor : o.closeColor)),
        i = v(() => {
          const c = w(o.width)
          return (
            c.value < 20 && (c.value = 20),
            [
              {
                width: `${c.value}px`,
                height: `${c.value / 2}px`,
                backgroundColor: s.value
              }
            ]
          )
        }),
        u = v(() => {
          const c = w(o.width)
          return (
            c.value < 20 && (c.value = 20),
            [
              {
                width: `${c.value / 2 - 4}px`,
                height: `${c.value / 2 - 4}px`,
                left: o.modelValue ? `${c.value / 2}px` : '0px'
              },
              `border:2px solid  ${s.value}`
            ]
          )
        })
      return (c, $) => (
        r(),
        l(
          T,
          null,
          [
            c.closeText
              ? (r(),
                l(
                  'span',
                  {
                    key: 0,
                    class: 'coco-switch-closeText',
                    style: m([`color:${n.value ? '#333' : '#3a6ff4'}`])
                  },
                  b(c.closeText),
                  5
                ))
              : g('', !0),
            d(
              'span',
              {
                class: p([
                  'coco-switch',
                  { 'coco-switch-disabled': c.disabled }
                ]),
                style: m(h(i)),
                onClick: a
              },
              [
                d(
                  'span',
                  { class: 'coco-switch-roll', style: m(h(u)) },
                  null,
                  4
                )
              ],
              6
            ),
            c.openText
              ? (r(),
                l(
                  'span',
                  {
                    key: 1,
                    class: 'coco-switch-openText',
                    style: m([`color:${c.modelValue ? '#3a6ff4' : '#333'}`])
                  },
                  b(c.openText),
                  5
                ))
              : g('', !0)
          ],
          64
        )
      )
    }
  })
Se.install = (e) => {
  e.component('CocoSwitch', Se)
}
const No = {
    modelValue: String,
    label: String,
    name: String,
    disabled: Boolean,
    border: Boolean,
    size: {
      type: String,
      default: () => 'large',
      validator(e) {
        return ['large', 'medium', 'small', 'mini', ''].includes(e)
      }
    }
  },
  qo = ['name', 'value', 'disabled'],
  we = f({
    props: No,
    emits: ['update:modelValue', 'change'],
    setup(e, { emit: t }) {
      const o = e,
        n = new Proxy(o, {
          set() {
            return !0
          }
        }),
        a = ($) => {
          t('update:modelValue', $.target.value), t('change', $.target.value)
        },
        s = v(() => o.modelValue === o.label),
        i = v(() => [
          'coco-radio-o',
          s.value ? (o.disabled ? 'coco-radio-disabled' : 'coco-radio-hig') : ''
        ]),
        u = v(() => [
          {
            color: s.value
              ? o.disabled
                ? '#b6b5b5'
                : '#3a6ff4'
              : o.disabled
              ? '#b6b5b5'
              : '#333'
          }
        ]),
        c = v(() => [
          { cursor: o.disabled ? 'no-drop' : 'pointer' },
          o.border &&
            `border: 1px solid ${
              s.value ? (o.disabled ? '#b6b5b5' : '#3a6ff4') : '#b6b5b5'
            }`
        ])
      return ($, V) => (
        r(),
        l(
          'label',
          {
            class: p([
              'coco-radio',
              {
                [`coco-radio-${$.size}`]: $.border,
                'coco-radio-border': $.border
              }
            ]),
            style: m(h(c))
          },
          [
            d(
              'span',
              { class: p(h(i)) },
              [
                B(
                  d(
                    'input',
                    {
                      'onUpdate:modelValue':
                        V[0] || (V[0] = (L) => (h(n).modelValue = L)),
                      type: 'radio',
                      name: $.name,
                      value: $.label,
                      disabled: $.disabled,
                      onInput: a
                    },
                    null,
                    40,
                    qo
                  ),
                  [[et, h(n).modelValue]]
                )
              ],
              2
            ),
            d(
              'span',
              { class: 'coco-radio-text', style: m(h(u)) },
              [y($.$slots, 'default')],
              4
            )
          ],
          6
        )
      )
    }
  })
we.install = (e) => {
  e.component('CocoRadio', we)
}
const Wo = { data: { type: Array, default: () => [] } },
  Uo = { class: 'coco-three' },
  jo = ['onClick'],
  Go = { class: 'coco-three-label-text' },
  Ko = { key: 0, class: 'coco-three-children' },
  Te = f({
    props: Wo,
    setup(e) {
      const t = w(!1),
        o = (n) => {
          n.children && n.children.length && (t.value = !t.value)
        }
      return (n, a) => {
        const s = D('coco-icon'),
          i = D('coco-tree', !0)
        return (
          r(),
          l('div', Uo, [
            (r(!0),
            l(
              T,
              null,
              C(
                n.data,
                (u, c) => (
                  r(),
                  l('div', { class: 'coco-three-list', key: c }, [
                    d(
                      'div',
                      { class: 'coco-three-label', onClick: ($) => o(u) },
                      [
                        P(
                          s,
                          {
                            icon: 'coco-ui-arrow-right-filling',
                            color: '#c0c4cc',
                            class: p([{ 'coco-three-icon': t.value }])
                          },
                          null,
                          8,
                          ['class']
                        ),
                        d('span', Go, b(u.label), 1)
                      ],
                      8,
                      jo
                    ),
                    P(
                      Re,
                      { name: 'slide-fade' },
                      {
                        default: M(() => [
                          u.children
                            ? B(
                                (r(),
                                l(
                                  'div',
                                  Ko,
                                  [
                                    P(i, { data: u.children }, null, 8, [
                                      'data'
                                    ])
                                  ],
                                  512
                                )),
                                [[R, t.value]]
                              )
                            : g('', !0)
                        ]),
                        _: 2
                      },
                      1024
                    )
                  ])
                )
              ),
              128
            ))
          ])
        )
      }
    }
  })
Te.install = (e) => {
  e.component('CocoTree', Te)
}
const Yo = {
    title: { type: String, default: () => '\u8FD4\u56DE' },
    content: String,
    icon: { type: String, default: () => 'coco-ui-direction-left' }
  },
  Jo = { class: 'coco-page-header' },
  Qo = { class: 'coco-page-header-title' },
  Xo = { class: 'coco-page-header-content' },
  Ce = f({
    props: Yo,
    emits: ['back'],
    setup(e, { emit: t }) {
      return (o, n) => {
        const a = D('coco-icon')
        return (
          r(),
          l('div', Jo, [
            d(
              'div',
              {
                class: 'coco-page-header-title-box',
                onClick: n[0] || (n[0] = (s) => t('back'))
              },
              [
                P(a, { icon: o.icon, size: '14' }, null, 8, ['icon']),
                d('span', Qo, b(o.title), 1)
              ]
            ),
            d('div', Xo, b(o.content), 1)
          ])
        )
      }
    }
  })
Ce.install = (e) => {
  e.component('CocoPageHeader', Ce)
}
const Zo = { userInfo: String, describe: String, linkUrl: String },
  xo = { class: 'coco-info' },
  en = { class: 'coco-info-header' },
  tn = { class: 'coco-info-left' },
  on = { key: 0, class: 'coco-info-photo' },
  nn = { class: 'coco-info-data' },
  sn = { class: 'coco-info-userInfo' },
  rn = { key: 1, class: 'coco-info-userInfo' },
  ln = { class: 'coco-info-describe' },
  an = { key: 0, class: 'coco-info-right' },
  un = { key: 0, class: 'coco-info-body' },
  cn = { key: 1, class: 'coco-info-footer' },
  Ee = f({
    props: Zo,
    setup(e) {
      return (t, o) => {
        const n = D('coco-link')
        return (
          r(),
          l('div', xo, [
            d('div', en, [
              d('div', tn, [
                t.$slots.photo
                  ? (r(), l('div', on, [y(t.$slots, 'photo')]))
                  : g('', !0),
                d('div', nn, [
                  t.linkUrl
                    ? (r(),
                      j(
                        n,
                        { key: 0, url: t.linkUrl },
                        {
                          default: M(() => [d('span', sn, b(t.userInfo), 1)]),
                          _: 1
                        },
                        8,
                        ['url']
                      ))
                    : (r(), l('span', rn, b(t.userInfo), 1)),
                  d('span', ln, b(t.describe), 1)
                ])
              ]),
              t.$slots.right
                ? (r(), l('div', an, [y(t.$slots, 'right')]))
                : g('', !0)
            ]),
            t.$slots.body
              ? (r(), l('div', un, [y(t.$slots, 'body')]))
              : g('', !0),
            t.$slots.footer
              ? (r(), l('div', cn, [y(t.$slots, 'footer')]))
              : g('', !0)
          ])
        )
      }
    }
  })
Ee.install = (e) => {
  e.component('CocoInfo', Ee)
}
const dn = {
    modelValue: String,
    placeholder: String,
    max: [Number, String],
    rows: { type: String, default: () => '3' },
    cols: String,
    resize: {
      type: String,
      default: () => 'none',
      validator(e) {
        return ['vertical', 'horizontal', 'none', ''].includes(e)
      }
    },
    disabled: Boolean,
    autofocus: Boolean,
    name: String
  },
  pn = { class: 'coco-textarea' },
  hn = [
    'rows',
    'autofocus',
    'value',
    'placeholder',
    'disabled',
    'name',
    'maxlength'
  ],
  Ve = f({
    props: dn,
    emits: ['update:modelValue', 'onfocus', 'onblur'],
    setup(e, { emit: t }) {
      const o = e,
        n = (s) => t('update:modelValue', s.target.value),
        a = v(() => [
          'coco-textarea-textarea',
          { 'coco-textarea-disabled': o.disabled }
        ])
      return (s, i) => (
        r(),
        l('div', pn, [
          d(
            'textarea',
            {
              cols: '30',
              rows: s.rows,
              class: p(h(a)),
              autofocus: s.autofocus,
              value: s.modelValue,
              placeholder: s.placeholder,
              disabled: s.disabled,
              name: s.name,
              maxlength: s.max,
              style: m({ resize: s.resize }),
              onInput: n,
              onBlur: i[0] || (i[0] = (u) => t('onblur')),
              onFocus: i[1] || (i[1] = (u) => t('onfocus'))
            },
            null,
            46,
            hn
          )
        ])
      )
    }
  })
Ve.install = (e) => {
  e.component('CocoTextarea', Ve)
}
const yn = { modelValue: String, name: String },
  mn = ['name'],
  Pe = f({
    props: yn,
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const o = e,
        n = new Proxy(o, {
          set() {
            return !0
          }
        }),
        a = (s) => t('update:modelValue', s.target.value)
      return (s, i) =>
        s.$slots.default
          ? B(
              (r(),
              l(
                'select',
                {
                  key: 0,
                  class: 'coco-select',
                  'onUpdate:modelValue':
                    i[0] || (i[0] = (u) => (h(n).modelValue = u)),
                  name: s.name,
                  onInput: a
                },
                [y(s.$slots, 'default')],
                40,
                mn
              )),
              [[tt, h(n).modelValue]]
            )
          : g('', !0)
    }
  })
Pe.install = (e) => {
  e.component('CocoSelect', Pe)
}
const fn = { value: String, label: String },
  _n = ['value'],
  gn = { key: 0 },
  vn = { key: 1 },
  Be = f({
    props: fn,
    setup(e) {
      return (t, o) => (
        r(),
        l(
          'option',
          { value: t.value },
          [
            t.label
              ? (r(), l('span', gn, b(t.label), 1))
              : (r(), l('span', vn, [y(t.$slots, 'default')]))
          ],
          8,
          _n
        )
      )
    }
  })
Be.install = (e) => {
  e.component('CocoOption', Be)
}
const $n = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          ''
        ].includes(e)
      }
    },
    size: { type: String, default: () => '13' },
    color: String
  },
  Ie = f({
    props: $n,
    setup(e) {
      const t = e,
        o = v(() => ['coco-tagging', `coco-tagging-${t.type}`]),
        n = v(() => ({ fontSize: `${t.size}px`, color: t.color }))
      return (a, s) => (
        r(),
        l(
          'span',
          { class: p(h(o)), style: m(h(n)) },
          [y(a.$slots, 'default')],
          6
        )
      )
    }
  })
Ie.install = (e) => {
  e.component('CocoTagging', Ie)
}
const bn = {
    modelValue: Boolean,
    direction: {
      type: String,
      default: () => 'right',
      validator(e) {
        return ['top', 'left', 'bottom', 'right', ''].includes(e)
      }
    },
    size: { type: String, default: () => '30%' },
    title: String,
    appendToBody: Boolean,
    modal: { type: Boolean, default: () => !0 },
    modalClose: { type: Boolean, default: () => !0 },
    showClose: { type: Boolean, default: () => !0 },
    showHeader: { type: Boolean, default: () => !0 },
    zIndex: { type: Number, default: () => 3500 }
  },
  kn = ['onClick'],
  Sn = { key: 0, class: 'coco-drawer-header' },
  wn = { key: 0, class: 'coco-drawer-title' },
  Tn = { key: 1, class: 'coco-drawer-title' },
  Cn = ['onClick'],
  En = { key: 1, class: 'coco-drawer-body' },
  De = f({
    props: bn,
    emits: ['update:modelValue', 'open', 'close', 'onOpen', 'onClose'],
    setup(e, { emit: t }) {
      const o = e,
        n = () => {
          t('close'), t('update:modelValue', !1)
        },
        a = v(() => {
          const u = o.direction
          return u === 'left' || u === 'right' || u === ''
        }),
        s = () => {
          !o.modalClose || n()
        },
        i = O()
      return (
        W(
          () => o.modelValue,
          (u) => {
            u && t('open')
            const c = i.proxy.$el
            u && o.appendToBody && document.body.appendChild(c)
          }
        ),
        (u, c) => (
          r(),
          j(
            Re,
            {
              name: 'coco-drawer',
              onAfterEnter: c[0] || (c[0] = ($) => t('onOpen')),
              onAfterLeave: c[1] || (c[1] = ($) => t('onClose'))
            },
            {
              default: M(() => [
                B(
                  d(
                    'div',
                    {
                      class: p([
                        'coco-drawer-packing',
                        { 'coco-drawer-modal': u.modal }
                      ]),
                      style: m({ zIndex: u.zIndex }),
                      onClick: U(s, ['self'])
                    },
                    [
                      d(
                        'div',
                        {
                          class: p([
                            'coco-drawer',
                            `coco-drawer-${u.direction}`
                          ]),
                          style: m(
                            h(a) ? `width: ${u.size}` : `height: ${u.size}`
                          )
                        },
                        [
                          u.showHeader
                            ? (r(),
                              l('div', Sn, [
                                u.$slots.title
                                  ? (r(), l('span', wn, [y(u.$slots, 'title')]))
                                  : (r(), l('span', Tn, b(u.title), 1)),
                                u.showClose
                                  ? (r(),
                                    l(
                                      'i',
                                      {
                                        key: 2,
                                        class: 'coco-icon coco-ui-close',
                                        onClick: U(n, ['stop'])
                                      },
                                      null,
                                      8,
                                      Cn
                                    ))
                                  : g('', !0)
                              ]))
                            : g('', !0),
                          u.$slots.default
                            ? (r(), l('div', En, [y(u.$slots, 'default')]))
                            : g('', !0)
                        ],
                        6
                      )
                    ],
                    14,
                    kn
                  ),
                  [[R, u.modelValue]]
                )
              ]),
              _: 3
            }
          )
        )
      )
    }
  })
De.install = (e) => {
  e.component('CocoDrawer', De)
}
const Vn = {
    modelValue: Boolean,
    width: { type: String, default: () => '30%' },
    top: { type: String, default: () => '15vh' },
    title: String,
    appendToBody: Boolean,
    modal: { type: Boolean, default: () => !0 },
    modalClose: { type: Boolean, default: () => !0 },
    showClose: { type: Boolean, default: () => !0 },
    showHeader: { type: Boolean, default: () => !0 },
    zIndex: { type: Number, default: () => 3500 }
  },
  Pn = ['onClick'],
  Bn = { key: 0, class: 'coco-dialog-header' },
  In = { key: 0, class: 'coco-dialog-title' },
  Dn = { key: 1, class: 'coco-dialog-title' },
  zn = ['onClick'],
  An = { key: 1, class: 'coco-dialog-body' },
  Ln = { key: 2, class: 'coco-dialog-footer' },
  ze = f({
    props: Vn,
    emits: ['update:modelValue', 'open', 'close', 'onOpen', 'onClose'],
    setup(e, { emit: t }) {
      const o = e,
        n = () => {
          t('close'), t('update:modelValue', !1)
        },
        a = () => {
          !o.modalClose || n()
        },
        s = O()
      return (
        W(
          () => o.modelValue,
          (i) => {
            i && t('open')
            const u = s.proxy.$el
            i && o.appendToBody && document.body.appendChild(u)
          }
        ),
        (i, u) => (
          r(),
          j(
            Re,
            {
              name: 'coco-dialog',
              onAfterEnter: u[0] || (u[0] = (c) => t('onOpen')),
              onAfterLeave: u[1] || (u[1] = (c) => t('onClose'))
            },
            {
              default: M(() => [
                B(
                  d(
                    'div',
                    {
                      class: p([
                        'coco-dialog-packing',
                        { 'coco-dialog-modal': i.modal }
                      ]),
                      style: m({ zIndex: i.zIndex }),
                      onClick: U(a, ['self'])
                    },
                    [
                      d(
                        'div',
                        {
                          class: 'coco-dialog',
                          style: m({ width: i.width, marginTop: i.top })
                        },
                        [
                          i.showHeader
                            ? (r(),
                              l('div', Bn, [
                                i.$slots.title
                                  ? (r(), l('span', In, [y(i.$slots, 'title')]))
                                  : (r(), l('span', Dn, b(i.title), 1)),
                                i.showClose
                                  ? (r(),
                                    l(
                                      'i',
                                      {
                                        key: 2,
                                        class: 'coco-icon coco-ui-close',
                                        onClick: U(n, ['stop'])
                                      },
                                      null,
                                      8,
                                      zn
                                    ))
                                  : g('', !0)
                              ]))
                            : g('', !0),
                          i.$slots.default
                            ? (r(), l('div', An, [y(i.$slots, 'default')]))
                            : g('', !0),
                          i.$slots.footer
                            ? (r(), l('div', Ln, [y(i.$slots, 'footer')]))
                            : g('', !0)
                        ],
                        4
                      )
                    ],
                    14,
                    Pn
                  ),
                  [[R, i.modelValue]]
                )
              ]),
              _: 3
            }
          )
        )
      )
    }
  })
ze.install = (e) => {
  e.component('CocoDialog', ze)
}
const On = { modelValue: Array, label: String },
  Rn = ['value'],
  Ae = f({
    props: On,
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const o = e,
        n = new Proxy(o, {
          set() {
            return !0
          }
        }),
        a = (s) => {
          const i = w([])
          i.value.push(s.target.value), t('update:modelValue', i.value)
        }
      return (s, i) => (
        r(),
        l(
          T,
          null,
          [
            B(
              d(
                'input',
                {
                  'onUpdate:modelValue':
                    i[0] || (i[0] = (u) => (h(n).modelValue = u)),
                  type: 'checkbox',
                  value: s.label,
                  onInput: a
                },
                null,
                40,
                Rn
              ),
              [[ot, h(n).modelValue]]
            ),
            d('span', null, [y(s.$slots, 'default')])
          ],
          64
        )
      )
    }
  })
Ae.install = (e) => {
  e.component('CocoCheckbox', Ae)
}
const Mn = { modelValue: { type: Array, default: () => [] } },
  Hn = { class: 'coco-collapse' },
  Le = f({
    props: Mn,
    setup(e) {
      return (
        z('modelValue', e.modelValue),
        (o, n) => (r(), l('div', Hn, [y(o.$slots, 'default')]))
      )
    }
  })
Le.install = (e) => {
  e.component('CocoCollapse', Le)
}
const Fn = { title: String, name: String },
  Nn = { class: 'coco-collapse-item' },
  qn = { class: 'coco-collapse-item-content' },
  Oe = f({
    props: Fn,
    emits: ['onChange'],
    setup(e, { emit: t }) {
      const o = e,
        n = A('modelValue'),
        a = v(() => n.indexOf(o.name) > -1),
        s = () => {
          t('onChange', o.name)
        }
      return (i, u) => (
        r(),
        l('div', Nn, [
          d(
            'div',
            { class: 'coco-collapse-item-title', onClick: s },
            b(i.title),
            1
          ),
          B(d('div', qn, [y(i.$slots, 'default')], 512), [[R, h(a)]])
        ])
      )
    }
  })
Oe.install = (e) => {
  e.component('CocoCollapseItem', Oe)
}
const Wn = '3.5.0',
  Un = [
    Y,
    J,
    Q,
    X,
    Z,
    x,
    ee,
    te,
    oe,
    ne,
    se,
    re,
    le,
    ae,
    ie,
    ue,
    ce,
    de,
    pe,
    he,
    ye,
    me,
    fe,
    _e,
    ge,
    ve,
    $e,
    be,
    ke,
    Se,
    we,
    Te,
    Ce,
    Ee,
    Ve,
    Pe,
    Be,
    Ie,
    De,
    ze,
    Ae,
    Le,
    Oe
  ],
  jn = (e) => {
    Un.forEach((t) => {
      e.use(t)
    })
  },
  qe = { version: Wn, install: jn },
  Yn = qe.version
nt(it)
  .use(pt)
  .use(qe)
  .use((e) => {
    e.directive('high', {
      mounted(t) {
        const o = t.querySelectorAll('pre code')
        for (let n = 0; n < o.length; n++) st.highlightElement(o[n])
      }
    })
  })
  .mount('#app')
export { G as _, Yn as v }
