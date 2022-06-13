import {
  o as l,
  f as o,
  j as t,
  r as p,
  B as e,
  C as h,
  P as g,
  l as y,
  Q as b,
  x as _,
  u as m,
  F as $
} from './vendor.69ad1cd2.js'
const f = { class: 'coco-markdown-body' },
  k = t('h1', null, 'Table \u8868\u683C', -1),
  x = t('h2', null, '\u57FA\u672C\u4F7F\u7528', -1),
  w = t('p', null, '\u8868\u683C\u7684\u57FA\u672C\u4F7F\u7528', -1),
  D = t(
    'p',
    null,
    'data \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8868\u683C\u7684\u6570\u636E\uFF0C\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4',
    -1
  ),
  v = t(
    'p',
    null,
    'columns \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8868\u683C\u7684\u6807\u9898\u548C\u952E\u503C\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\uFF0C\u91CC\u9762\u662F\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 title \u914D\u7F6E\u6807\u9898\uFF0Ckey \u914D\u7F6E\u952E\u503C\uFF0C\u540D\u5B57\u662F\u5FC5\u987B\u7684\uFF0C\u5426\u5219\u5C06\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF01\u8BE6\u60C5\u53C2\u8003\u6587\u6863',
    -1
  ),
  q = [k, x, w, D, v],
  z = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', f, q))
    }
  },
  B = { class: 'coco-markdown-body' },
  C = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table :data="tableData" :columns="columns" />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  H = t('h2', null, '\u914D\u7F6E\u884C\u9AD8', -1),
  N = t(
    'p',
    null,
    'trHeight \u5C5E\u6027\u53EF\u4EE5\u8868\u683C\u884C\u9AD8',
    -1
  ),
  V = [C, H, N],
  T = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', B, V))
    }
  },
  F = { class: 'coco-markdown-body' },
  S = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table :data="tableData" :columns="columns" trHeight="50px" />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  j = t('h2', null, '\u6587\u5B57\u653E\u7F6E\u65B9\u5411', -1),
  A = t(
    'p',
    null,
    'align \u5C5E\u6027\u53EF\u4EE5\u8868\u683C\u6587\u5B57\u5C45\u4E2D\u8FD8\u662F\u5C45\u4E24\u4FA7',
    -1
  ),
  E = [S, j, A],
  P = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', F, E))
    }
  },
  Q = { class: 'coco-markdown-body' },
  G = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table :data="tableData" :columns="columns" align="center" />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  I = t('h2', null, '\u6591\u9A6C\u7EB9\u548C\u8FB9\u6846', -1),
  J = t(
    'p',
    null,
    'zebra \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u6591\u9A6C\u7EB9',
    -1
  ),
  K = t(
    'p',
    null,
    'border \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8FB9\u6846',
    -1
  ),
  L = [G, I, J, K],
  M = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', Q, L))
    }
  },
  O = { class: 'coco-markdown-body' },
  R = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table :data="tableData" :columns="columns" align="center" border zebra />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  U = t('h2', null, '\u81EA\u5B9A\u4E49\u5BBD\u9AD8', -1),
  W = t(
    'p',
    null,
    'width \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8868\u683C\u5BBD\u5EA6',
    -1
  ),
  X = t(
    'p',
    null,
    'height \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u8868\u683C\u9AD8\u5EA6',
    -1
  ),
  Y = [R, U, W, X],
  Z = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', O, Y))
    }
  },
  tt = { class: 'coco-markdown-body' },
  nt = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table
    :data="tableData"
    :columns="columns"
    align="center"
    width="500px"
    height="200px"
  />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  et = t('h2', null, '\u5E26\u6709\u5E8F\u53F7', -1),
  at = t(
    'p',
    null,
    'num \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5E26\u6709\u5E8F\u53F7\u7684\u8868\u683C',
    -1
  ),
  st = [nt, et, at],
  dt = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', tt, st))
    }
  },
  lt = { class: 'coco-markdown-body' },
  ot = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table :data="tableData" :columns="columns" align="center" num />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  rt = t('h2', null, '\u91CD\u70B9\u884C\u6807\u6CE8', -1),
  ct = t(
    'p',
    null,
    'important \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u91CD\u70B9\u884C\u7740\u91CD\u6807\u6CE8\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\uFF0C\u91CC\u9762\u5305\u542B\u91CD\u70B9\u884C\u7684\u884C\u53F7',
    -1
  ),
  it = [ot, rt, ct],
  _t = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', lt, it))
    }
  },
  mt = { class: 'coco-markdown-body' },
  ut = t(
    'pre',
    null,
    [
      t(
        'code',
        { class: 'language-html' },
        `<template>
  <coco-table
    :data="tableData"
    :columns="columns"
    align="center"
    num
    :important="[2, 4]"
  />
</template>

<script setup>
  const columns = [
    {
      title: '\u65E5\u671F',
      key: 'date'
    },
    {
      title: '\u59D3\u540D',
      key: 'name'
    },
    {
      title: '\u5730\u5740',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '\u5F20\u4E09',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
    },
    {
      date: '2021-12-04',
      name: '\u674E\u56DB',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
    },
    {
      date: '2021-10-01',
      name: '\u738B\u82F1',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
    },
    {
      date: '2021-11-03',
      name: '\u674E\u9035',
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
    }
  ]
<\/script>
`
      )
    ],
    -1
  ),
  ht = t('h2', null, '\u5355\u72EC\u914D\u7F6E\u5217\u5EA6', -1),
  pt = t(
    'p',
    null,
    '\u6BCF\u4E00\u5217\u7684\u5BBD\u5EA6\u4E5F\u662F\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u7684\uFF0C\u53EF\u4EE5\u5728 columns \u6570\u7EC4\u5BF9\u8C61\u4E2D\u6DFB\u52A0 width \u952E\u503C\uFF0C\u6765\u914D\u7F6E\u5355\u72EC\u7684\u5217\u5BBD\uFF0C\u6BD4\u5982\u4E0B\u9762\u5C06\u7B2C\u4E00\u5217\u548C\u7B2C\u4E8C\u5217\u8BBE\u7F6E\u5BBD\u5EA6\u4E3A 100px',
    -1
  ),
  yt = [ut, ht, pt],
  gt = {
    setup(r, { expose: n }) {
      return n({ frontmatter: {} }), (a, c) => (l(), o('div', mt, yt))
    }
  },
  bt = { class: 'coco-markdown-body' },
  $t = g(
    `<pre><code class="language-html">&lt;template&gt;
  &lt;coco-table :data=&quot;tableData&quot; :columns=&quot;columns2&quot; align=&quot;center&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  const columns2 = [
    {
      title: &#39;\u65E5\u671F&#39;,
      key: &#39;date&#39;,
      width: &#39;100px&#39;
    },
    {
      title: &#39;\u59D3\u540D&#39;,
      key: &#39;name&#39;,
      width: &#39;100px&#39;
    },
    {
      title: &#39;\u5730\u5740&#39;,
      key: &#39;address&#39;
    }
  ]
  const tableData = [
    {
      date: &#39;2021-11-02&#39;,
      name: &#39;\u5F20\u4E09&#39;,
      address: &#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7&#39;
    },
    {
      date: &#39;2021-12-04&#39;,
      name: &#39;\u674E\u56DB&#39;,
      address: &#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7&#39;
    },
    {
      date: &#39;2021-10-01&#39;,
      name: &#39;\u738B\u82F1&#39;,
      address: &#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7&#39;
    },
    {
      date: &#39;2021-11-03&#39;,
      name: &#39;\u674E\u9035&#39;,
      address: &#39;\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7&#39;
    }
  ]
&lt;/script&gt;
</code></pre><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u8868\u5355\u7684\u5185\u5BB9\u6570\u636E</td><td>array</td><td>\u2014\u2014</td><td>[]</td></tr><tr><td>columns</td><td>\u8868\u5934\u548C\u952E\u503C</td><td>array</td><td>\u2014\u2014</td><td>[]</td></tr><tr><td>trHeight</td><td>\u884C\u9AD8</td><td>string</td><td>\u2014\u2014</td><td>40px</td></tr><tr><td>align</td><td>\u5185\u5BB9\u6392\u5411</td><td>string</td><td>left / right / center</td><td>left</td></tr><tr><td>zebra</td><td>\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>width</td><td>\u8868\u683C\u5BBD\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>100%</td></tr><tr><td>height</td><td>\u8868\u683C\u9AD8\u5EA6</td><td>string</td><td>\u2014\u2014</td><td>auto</td></tr><tr><td>num</td><td>\u662F\u5426\u663E\u793A\u5E8F\u53F7</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td>important</td><td>\u91CD\u70B9\u884C\u6807\u6CE8</td><td>array</td><td>\u2014\u2014</td><td>[]</td></tr><tr><td>importantColor</td><td>\u91CD\u70B9\u884C\u6807\u6CE8\u80CC\u666F\u8272</td><td>string</td><td>\u2014\u2014</td><td>#fdf5e6</td></tr></tbody></table>`,
    3
  ),
  ft = y(' Text \u6587\u5B57 '),
  kt = y(' Switch \u5F00\u5173 '),
  xt = {
    setup(r, { expose: n }) {
      return (
        n({ frontmatter: {} }),
        (a, c) => {
          const u = p('coco-turn-page-item'),
            d = p('coco-turn-page')
          return (
            l(),
            o('div', bt, [
              $t,
              e(
                d,
                { style: { margin: '50px 0' } },
                {
                  default: h(() => [
                    e(
                      u,
                      { direction: 'left', url: '/component/text' },
                      { default: h(() => [ft]), _: 1 }
                    ),
                    e(
                      u,
                      { direction: 'right', url: '/component/switch' },
                      { default: h(() => [kt]), _: 1 }
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
  Dt = {
    setup(r) {
      const n = [
          { title: '\u65E5\u671F', key: 'date' },
          { title: '\u59D3\u540D', key: 'name' },
          { title: '\u5730\u5740', key: 'address' }
        ],
        s = [
          { title: '\u65E5\u671F', key: 'date', width: '100px' },
          { title: '\u59D3\u540D', key: 'name', width: '100px' },
          { title: '\u5730\u5740', key: 'address' }
        ],
        a = [
          {
            date: '2021-11-02',
            name: '\u5F20\u4E09',
            address:
              '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E0A\u57CE\u533A 231 \u53F7'
          },
          {
            date: '2021-12-04',
            name: '\u674E\u56DB',
            address:
              '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A 12 \u53F7'
          },
          {
            date: '2021-10-01',
            name: '\u738B\u82F1',
            address:
              '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u4E34\u5E73\u533A 2 \u53F7'
          },
          {
            date: '2021-11-03',
            name: '\u674E\u9035',
            address:
              '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A 199 \u53F7'
          }
        ]
      return (c, u) => {
        const d = p('coco-table'),
          i = b('high')
        return (
          l(),
          o(
            $,
            null,
            [
              _(e(m(z), null, null, 512), [[i]]),
              e(d, { data: a, columns: n }),
              _(e(m(T), null, null, 512), [[i]]),
              e(d, { data: a, columns: n, trHeight: '50px' }),
              _(e(m(P), null, null, 512), [[i]]),
              e(d, { data: a, columns: n, align: 'center' }),
              _(e(m(M), null, null, 512), [[i]]),
              e(d, {
                data: a,
                columns: n,
                align: 'center',
                border: '',
                zebra: ''
              }),
              _(e(m(Z), null, null, 512), [[i]]),
              e(d, {
                data: a,
                columns: n,
                align: 'center',
                width: '500px',
                height: '200px'
              }),
              _(e(m(dt), null, null, 512), [[i]]),
              e(d, { data: a, columns: n, align: 'center', num: '' }),
              _(e(m(_t), null, null, 512), [[i]]),
              e(d, {
                data: a,
                columns: n,
                align: 'center',
                num: '',
                important: [2, 4]
              }),
              _(e(m(gt), null, null, 512), [[i]]),
              e(d, { data: a, columns: s, align: 'center' }),
              _(e(m(xt), null, null, 512), [[i]])
            ],
            64
          )
        )
      }
    }
  }
export { Dt as default }
