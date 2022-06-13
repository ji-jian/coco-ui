```html
<template>
  <coco-button type="primary" @click="open2 = true">点我打开</coco-button>

  <coco-drawer v-model="open2" direction="right" :showHeader="false">
    hello，欢迎使用 coco-ui!
  </coco-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const open2 = ref(false)
</script>
```

## 多层嵌套

size 属性可以配置宽度或者高度
