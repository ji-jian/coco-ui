# Message 提示框

## 使用前

使用前，你必须先引入它

```js
import { Message } from 'coco-ui2'
```

## 基本使用

提示框的基本使用 通过引入 message 方法，接收一个对象，可以使用 message
定义内容 type 属性可以定义提示框类型 round 属性可以配置圆角

```html
<template>
  <coco-button @click="change1">默认提示</coco-button>
  <coco-button type="primary" @click="change2">主要提示</coco-button>
  <coco-button type="success" @click="change3">成功提示</coco-button>
  <coco-button type="danger" @click="change4">危险提示</coco-button>
  <coco-button type="warning" @click="change5">警告提示</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
  function change1() {
    Message({ message: '默认提示', type: 'default', round: true })
  }
  function change2() {
    Message({ message: '主要提示', type: 'primary', round: true })
  }
  function change3() {
    Message({ message: '成功提示', type: 'success', round: true })
  }
  function change4() {
    Message({ message: '危险提示', type: 'danger', round: true })
  }
  function change5() {
    Message({ message: '警告提示', type: 'warning', round: true })
  }
</script>
```

## 显示时长

time 属性可以配置提示框的显示时长，并在 xxxx 毫秒后消失

```html
<template>
  <coco-button type="primary" @click="change6">展示5000毫秒</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
  function change6() {
    Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
  }
</script>
```

## 带有 icon

icon 属性可以配置 icon 的类名进行配置

```html
<template>
  <coco-button type="primary" @click="change7">点击提示</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
  function change7() {
    Message({ message: '主要提示', type: 'primary', icon: 'coco-ui-smile' })
  }
</script>
```

## 可关闭

showClose 属性可以配置代码关闭按钮

```html
<template>
  <coco-button type="primary" @click="change8">点击提示</coco-button>
</template>

<script setup>
  import { Message } from 'coco-ui2'
  function change8() {
    Message({
      message: '主要提示',
      type: 'primary',
      icon: 'coco-ui-smile',
      showClose: true
    })
  }
</script>
```

## Attributes

| 参数      | 说明             | 类型    | 可选值                                         | 默认值  |
| --------- | ---------------- | ------- | ---------------------------------------------- | ------- |
| message   | 显示文字         | string  | ——                                             | ——      |
| type      | 提示框的类型     | string  | default / primary / success / danger / warning | default |
| time      | 展示的时间       | number  | ——                                             | 2000    |
| icon      | 展示的 icon      | string  | ——                                             | ——      |
| showClose | 是否展示关闭按钮 | boolean | ——                                             | false   |
| offset    | 距离顶部的距离   | number  | ——                                             | 20      |
| round     | 配置圆角         | boolean | ——                                             | false   |
