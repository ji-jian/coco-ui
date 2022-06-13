```html
<template>
  <coco-button type="primary" @click="open1">展示通知</coco-button>
</template>

<script setup>
  import { Notification } from 'coco-ui2'
  function open1() {
    Notification({
      title: '提示',
      message: '这里是提示的文案'
    })
  }
</script>
```

## 不同类型的

type 属性可以配置不同类型的通知
