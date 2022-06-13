```html
<template>
  <coco-input size="large" v-model="text4" />
  <coco-input size="medium" v-model="text5" />
  <coco-input size="small" v-model="text6" />
  <coco-input size="mini" v-model="text7" />
</template>

<script setup>
  import { ref } from 'vue'
  const text4 = ref('')
  const text5 = ref('')
  const text6 = ref('')
  const text7 = ref('')
</script>
```

## 可清空

clear 属性可以配置带有清空按钮的文本框
