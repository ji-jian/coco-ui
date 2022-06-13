# 快速上手

## 安装

推荐使用 npm 的方式安装

```shell
npm i coco-ui2
```

## 完整引入

在 main.js 中引入下面内容

```js
import { createApp } from 'vue'
import App from './App.vue'
import cocoUi2 from 'coco-ui2'
import 'coco-ui2/style/index.css'

createApp(App).use(cocoUi2).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```js
import { createApp } from 'vue'
import App from './App.vue'
import {
  CocoButton,
  CocoCard
  // ...
} from 'coco-ui2'
import 'coco-ui2/style/index.css'

createApp(App).use(CocoButton).use(CocoCard).mount('#app')
```

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/" icon="coco-ui-shouye-xianxing">
    首页
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/color">
    Color 色彩
  </coco-turn-page-item>
</coco-turn-page>
