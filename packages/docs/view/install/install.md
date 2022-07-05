# 快速上手

## 安装

推荐使用 npm 的方式安装

```shell
npm i @cocoui/coco-ui
```

## 完整引入

在 main.js 中引入下面内容

```js
import { createApp } from 'vue'
import App from './App.vue'
import cocoUI from '@cocoui/coco-ui'
import '@cocoui/coco-ui/theme-chalk/index.css'

createApp(App).use(cocoUI).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```js
import { createApp } from 'vue'
import App from './App.vue'
import CocoButton from '@cocoui/coco-ui/lib/button.js'
import '@cocoui/coco-ui/theme-chalk/button.css'

createApp(App).use(CocoButton).use(CocoCard).mount('#app')
```
