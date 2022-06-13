import { S as x } from './Sidebar.70caa9a7.js'
import {
  K as L,
  s as V,
  z as b,
  r as s,
  o as h,
  f as y,
  B as a,
  C as _,
  j as n,
  u as m,
  L as B,
  F as f,
  k as C,
  c as I,
  l as z,
  t as N,
  g as $,
  M as F,
  N as R
} from './vendor.69ad1cd2.js'
import { _ as T } from './index.9fffb230.js'
const g = (r) => (F('data-v-963b4082'), (r = r()), R(), r),
  U = g(() =>
    n(
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
  j = g(() => n('span', { class: 'name' }, 'Coco UI', -1)),
  A = [U, j],
  D = { class: 'menu-list' },
  E = { id: 'content' },
  K = {
    setup(r) {
      const { highLightStyle: v, drawer: l, layoutList: w } = S()
      function S() {
        const c = [
            { title: '\u9996\u9875', url: '/' },
            { title: '\u7EC4\u4EF6', url: '/component' },
            { title: '\u5173\u4E8E', url: '/about' }
          ],
          t = L(),
          p = (i) => {
            const o = t.path
            if (o === '/') return { color: i === o ? '#3a6ff4' : '#000' }
            const d = o.match(/\/[a-zA-Z]+/gi)[0]
            return { color: i === d ? '#3a6ff4' : '#000' }
          },
          u = V(!1)
        return (
          b(
            () => t.path,
            () => {
              u.value = !1
            }
          ),
          { highLightStyle: p, drawer: u, layoutList: c }
        )
      }
      return (c, t) => {
        const p = s('coco-icon'),
          u = s('coco-menu-item'),
          i = s('coco-menu'),
          o = s('router-view'),
          d = s('coco-drawer')
        return (
          h(),
          y(
            f,
            null,
            [
              a(
                i,
                { theme: 'light' },
                {
                  left: _(() => [
                    n(
                      'div',
                      {
                        class: 'logoLink',
                        url: '/',
                        onClick: t[0] || (t[0] = (e) => c.$router.push('/'))
                      },
                      A
                    )
                  ]),
                  right: _(() => [
                    a(p, {
                      icon: 'coco-ui-menu',
                      onClick: t[1] || (t[1] = (e) => (l.value = !0))
                    }),
                    n('div', D, [
                      (h(!0),
                      y(
                        f,
                        null,
                        C(
                          m(w),
                          (e, k) => (
                            h(),
                            I(
                              u,
                              { style: $(m(v)(e.url)), key: k, route: e.url },
                              { default: _(() => [z(N(e.title), 1)]), _: 2 },
                              1032,
                              ['style', 'route']
                            )
                          )
                        ),
                        128
                      ))
                    ])
                  ]),
                  _: 1
                }
              ),
              n('div', E, [a(o)]),
              a(
                d,
                {
                  modelValue: m(l),
                  'onUpdate:modelValue':
                    t[2] || (t[2] = (e) => (B(l) ? (l.value = e) : null)),
                  direction: 'right',
                  size: '200px'
                },
                { default: _(() => [a(x, { phone: '' })]), _: 1 },
                8,
                ['modelValue']
              )
            ],
            64
          )
        )
      }
    }
  }
var q = T(K, [['__scopeId', 'data-v-963b4082']])
export { q as default }
