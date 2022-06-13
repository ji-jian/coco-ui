import {
  O as b,
  K as v,
  r as p,
  o as u,
  f as m,
  F as s,
  B as a,
  C as i,
  h as C,
  k as S,
  j as n,
  t as y,
  g as x,
  M as P,
  N as T
} from './vendor.69ad1cd2.js'
import { _ as I } from './index.9fffb230.js'
const e = (o) => (P('data-v-541994df'), (o = o()), T(), o),
  B = e(() => n('p', { class: 'urlPush' }, '\u9996\u9875', -1)),
  w = e(() => n('p', { class: 'urlPush' }, '\u7EC4\u4EF6', -1)),
  L = e(() => n('p', { class: 'urlPush' }, '\u5173\u4E8E', -1)),
  N = ['onClick'],
  D = e(() => n('br', null, null, -1)),
  R = e(() => n('br', null, null, -1)),
  M = e(() => n('br', null, null, -1)),
  V = e(() => n('br', null, null, -1)),
  z = {
    props: { phone: Boolean },
    setup(o) {
      const r = [
          { name: '\u5FEB\u901F\u4E0A\u624B', url: '/component/install' },
          { name: 'Color \u8272\u5F69', url: '/component/color' },
          {
            name: 'Container \u5E03\u5C40\u5BB9\u5668',
            url: '/component/container'
          },
          { name: 'Button \u6309\u94AE', url: '/component/button' },
          { name: 'List \u5217\u8868', url: '/component/list' },
          { name: 'Card \u5361\u7247', url: '/component/card' },
          { name: 'Tag \u6807\u7B7E', url: '/component/tag' },
          { name: 'Link \u94FE\u63A5', url: '/component/link' },
          { name: 'Input \u8F93\u5165\u6846', url: '/component/input' },
          { name: 'Menu \u5BFC\u822A\u680F', url: '/component/menu' },
          { name: 'Division \u5206\u5272\u7EBF', url: '/component/division' },
          { name: 'Icon \u56FE\u6807', url: '/component/icon' },
          { name: 'Crumbs \u9762\u5305\u5C51', url: '/component/crumbs' },
          { name: 'TurnPage \u7FFB\u9875', url: '/component/turnPage' },
          {
            name: 'BackTop \u56DE\u5230\u9876\u90E8',
            url: '/component/backTop'
          },
          { name: 'Message \u63D0\u793A\u6846', url: '/component/message' },
          { name: 'Skeleton \u9AA8\u67B6', url: '/component/skeleton' },
          { name: 'Alert \u63D0\u793A', url: '/component/alert' },
          { name: 'Rate \u8BC4\u5206', url: '/component/rate' },
          { name: 'Image \u56FE\u7247', url: '/component/image' },
          { name: 'Avatar \u5934\u50CF', url: '/component/avatar' },
          { name: 'Text \u6587\u5B57', url: '/component/text' },
          { name: 'Table \u8868\u683C', url: '/component/table' },
          { name: 'Switch \u5F00\u5173', url: '/component/switch' },
          { name: 'Calendar \u65E5\u5386', url: '/component/calendar' },
          { name: 'Radio \u5355\u9009\u6846', url: '/component/radio' },
          { name: 'Tree \u6811\u5F62\u63A7\u4EF6', url: '/component/tree' },
          { name: 'PageHeader \u9875\u5934', url: '/component/pageHeader' },
          { name: 'Info \u4FE1\u606F\u680F', url: '/component/info' },
          { name: 'Textarea \u6587\u672C\u57DF', url: '/component/textarea' },
          { name: 'Select \u9009\u62E9\u5668', url: '/component/select' },
          { name: 'Tagging \u6807\u6CE8', url: '/component/tagging' },
          { name: 'Notification \u901A\u77E5', url: '/component/notification' },
          { name: 'Drawer \u62BD\u5C49', url: '/component/drawer' },
          { name: 'Dialog \u5BF9\u8BDD\u6846', url: '/component/dialog' }
        ],
        _ = b(),
        d = v()
      function h(t) {
        _.push(r[t].url)
      }
      function g(t) {
        if (r[t].url === d.path)
          return {
            color: '#3a6ff4',
            borderLeft: '4px solid #3a6ff4',
            fontWeight: 600,
            fontSize: '16px',
            backgroundColor: 'rgb(247, 247, 247)'
          }
      }
      return (t, A) => {
        const l = p('router-link'),
          f = p('coco-division')
        return (
          u(),
          m(
            s,
            null,
            [
              o.phone
                ? (u(),
                  m(
                    s,
                    { key: 0 },
                    [
                      a(l, { to: '/' }, { default: i(() => [B]), _: 1 }),
                      a(
                        l,
                        { to: '/component/install' },
                        { default: i(() => [w]), _: 1 }
                      ),
                      a(l, { to: '/about' }, { default: i(() => [L]), _: 1 }),
                      a(f)
                    ],
                    64
                  ))
                : C('', !0),
              (u(),
              m(
                s,
                null,
                S(r, (k, c) =>
                  n(
                    'p',
                    {
                      key: c,
                      class: 'urlPush list',
                      style: x(g(c)),
                      onClick: (F) => h(c)
                    },
                    y(k.name),
                    13,
                    N
                  )
                ),
                64
              )),
              D,
              R,
              M,
              V
            ],
            64
          )
        )
      }
    }
  }
var E = I(z, [['__scopeId', 'data-v-541994df']])
export { E as S }
