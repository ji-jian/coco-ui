```html
<template>
  <coco-button type="primary" @click="open6">上左</coco-button>
  <coco-button type="primary" @click="open7">上右</coco-button>
  <coco-button type="primary" @click="open8">下左</coco-button>
  <coco-button type="primary" @click="open9">下右</coco-button>
</template>

<script setup>
  import { Notification } from 'coco-ui2'
  function open6() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-left'
    })
  }
  function open7() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-right'
    })
  }
  function open8() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-left'
    })
  }
  function open9() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-right'
    })
  }
</script>
```

## 自定义时长

time 属性可以自定义通知展示的时长
