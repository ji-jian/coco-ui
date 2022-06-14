```html
<template>
  <coco-button simple @click="open1 = true">点我打开</coco-button>

  <coco-dialog v-model="open1" title="这是标题">
    欢迎使用 coco-ui 的 dialog 对话框！
    <template v-slot:footer>
      <coco-button type="primary" style="margin-right: 20px">确定</coco-button>
      <coco-button type="primary" simple @click="open1 = false">取消</coco-button>
    </template>
  </coco-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open1 = ref(false)
</script>
```

## 不带头部信息

不带有 title 和关闭按钮

showHeader 属性可以配置不带头部信息
