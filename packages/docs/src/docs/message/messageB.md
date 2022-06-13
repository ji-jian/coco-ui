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
