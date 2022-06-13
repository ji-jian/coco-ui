```html
<template>
  <coco-calendar v-model="value" :cellWidth="70" />
  <coco-calendar v-model="value" :cellWidth="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
```

## Attributes

| 参数      | 说明       | 类型   | 可选值 | 默认值 |
| --------- | ---------- | ------ | ------ | ------ |
| v-model   | 绑定的日期 | object | ——     | ——     |
| cellWidth | 单元格宽度 | number | ——     | 50     |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/switch">
    Switch 开关
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/radio">
    Radio 单选
  </coco-turn-page-item>
</coco-turn-page>
