```html
<template>
  <coco-input v-model="text9" icon="coco-ui-electronics" />
</template>

<script setup>
  import { ref } from 'vue'
  const text9 = ref('')
</script>
```

## 禁用状态

disabled 属性可以配置文本框禁用状态
