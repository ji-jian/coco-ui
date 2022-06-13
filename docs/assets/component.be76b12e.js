import {
  K as r,
  r as o,
  o as e,
  f as p,
  j as c,
  B as t,
  u as i,
  c as m,
  C as d,
  h as u
} from './vendor.69ad1cd2.js'
import { S as h } from './Sidebar.70caa9a7.js'
import { _ as l } from './index.9fffb230.js'
const f = { id: 'component' },
  v = { class: 'contentList' },
  y = { class: 'content' },
  k = {
    setup(x) {
      const n = r()
      return (b, B) => {
        const s = o('router-view'),
          _ = o('coco-icon'),
          a = o('coco-backTop')
        return (
          e(),
          p('div', f, [
            c('div', v, [t(h)]),
            c('div', y, [t(s)]),
            i(n).path !== '/component/backtop'
              ? (e(),
                m(
                  a,
                  { key: 0, bottom: '150px' },
                  {
                    default: d(() => [
                      t(_, { icon: 'coco-ui-top', color: '#409eff' })
                    ]),
                    _: 1
                  }
                ))
              : u('', !0)
          ])
        )
      }
    }
  }
var V = l(k, [['__scopeId', 'data-v-1026d456']])
export { V as default }
