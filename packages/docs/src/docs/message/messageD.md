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
