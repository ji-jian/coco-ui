import { _ as h } from './index.9fffb230.js'
import {
  o as s,
  f as e,
  j as t,
  F as d,
  k as i,
  t as l,
  M as _,
  N as n,
  P as p
} from './vendor.69ad1cd2.js'
const u = (a) => (_('data-v-5b539dc6'), (a = a()), n(), a),
  b = { id: 'Footer' },
  v = { class: 'foot-box' },
  m = u(() => t('h3', { class: 'title-footer' }, '\u5408\u4F5C\u8005', -1)),
  g = ['href'],
  f = { class: 'userBox' },
  y = ['src'],
  k = { class: 'userName' },
  x = p(
    '<h3 class="title-footer" data-v-5b539dc6>\u94FE\u63A5</h3><ul class="link-ul" data-v-5b539dc6><li data-v-5b539dc6><a target="_blank" href="https://github.com/Coco2001/coco-ui" data-v-5b539dc6> Github </a></li><li data-v-5b539dc6><a target="_blank" href="https://www.npmjs.com/package/coco-ui2" data-v-5b539dc6> NPM </a></li><li data-v-5b539dc6><a target="_blank" href="https://github.com/Coco2001/coco-ui/blob/master/CHANGELOG.md" data-v-5b539dc6> \u66F4\u65B0\u65E5\u5FD7 </a></li><li data-v-5b539dc6><a target="_blank" href="https://tianyuhao.cn" data-v-5b539dc6> \u5173\u4E8E\u6211 </a></li></ul>',
    2
  ),
  F = {
    setup(a) {
      const c = [
        {
          name: '\u7530\u540C\u5B66',
          photo: 'https://avatars.githubusercontent.com/u/73180970?v=4',
          url: 'https://github.com/Coco2001'
        },
        {
          name: '\u8BDD\u6885\u6854',
          photo: 'https://avatars.githubusercontent.com/u/46716525?v=4',
          url: 'https://github.com/Givenchy-Coisini'
        }
      ]
      return (N, S) => (
        s(),
        e('div', b, [
          t('div', v, [
            m,
            (s(),
            e(
              d,
              null,
              i(c, (o, r) =>
                t(
                  'a',
                  { target: '_blank', href: o.url, key: r },
                  [
                    t('div', f, [
                      t(
                        'img',
                        {
                          draggable: 'false',
                          class: 'myPhoto',
                          src: o.photo,
                          alt: 'photo'
                        },
                        null,
                        8,
                        y
                      ),
                      t('span', k, l(o.name), 1)
                    ])
                  ],
                  8,
                  g
                )
              ),
              64
            )),
            x
          ])
        ])
      )
    }
  }
var G = h(F, [['__scopeId', 'data-v-5b539dc6']])
export { G as F }
