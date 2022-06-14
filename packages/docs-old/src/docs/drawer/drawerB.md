```html
<template>
  <coco-button type="primary" @click="open = true">点我打开</coco-button>

  <coco-radio v-model="radio" label="right">从右面弹出</coco-radio>
  <coco-radio v-model="radio" label="left">从左面弹出</coco-radio>
  <coco-radio v-model="radio" label="bottom">从下面弹出</coco-radio>
  <coco-radio v-model="radio" label="top">从上面弹出</coco-radio>

  <coco-drawer v-model="open" :direction="radio" title="这是标题">
    hello，欢迎使用 coco-ui!
  </coco-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const radio = ref('right')
  const open = ref(false)
</script>
```

## 不带头部信息

不带有 title 和关闭按钮

showHeader 属性可以配置不带头部信息
