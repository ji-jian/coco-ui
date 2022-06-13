```html
<template>
  <coco-radio v-model="radio1" label="备选项1">备选项1</coco-radio>
  <coco-radio v-model="radio1" label="备选项2">备选项2</coco-radio>
  <coco-radio v-model="radio1" label="备选项3">备选项3</coco-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('备选项1')
</script>
```

## 禁用状态

disabled 属性可以配置禁用状态
