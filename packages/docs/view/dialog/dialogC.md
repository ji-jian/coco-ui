```html
<template>
  <coco-button simple @click="open2 = true">点我打开</coco-button>

  <coco-dialog v-model="open2" title="这是标题" :showHeader="false">
    欢迎使用 coco-ui 的 dialog 对话框！
    <template v-slot:footer>
      <coco-button type="primary" style="margin-right: 20px">确定</coco-button>
      <coco-button type="primary" simple @click="open2 = false">取消</coco-button>
    </template>
  </coco-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
</script>
```

## 多层嵌套

width 属性可以配置宽度

top 属性可以配置距离顶部的距离
