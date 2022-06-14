```html
<template>
  <coco-radio v-model="radio2" disabled label="备选项1">备选项1</coco-radio>
  <coco-radio v-model="radio2" label="备选项2">备选项2</coco-radio>
  <coco-radio v-model="radio2" label="备选项3">备选项3</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio2 = ref('备选项2')
</script>
```

## 带有边框

border 属性可以配置边框
