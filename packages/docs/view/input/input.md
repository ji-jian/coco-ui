# Input 输入框

## 基本使用

输入框的基本用法

```html
<template>
  <coco-input v-model="text1" />
</template>

<script setup>
  import { ref } from 'vue'
  const text1 = ref('')
</script>
```

## 输入框类型

type 属性可以规定文本框类型

```html
<template>
  <coco-input type="text" v-model="text2" />
  <coco-input type="password" v-model="text3" />
</template>

<script setup>
  import { ref } from 'vue'
  const text2 = ref('')
  const text3 = ref('')
</script>
```

## 不同尺寸

size 属性可以配置文本框尺寸

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

```html
<template>
  <coco-input v-model="text8" clear />
</template>

<script setup>
  import { ref } from 'vue'
  const text8 = ref('')
</script>
```

## 带有 icon

icon 属性可以配置文本框带有其他图标，直接传递 icon 的名字传递即可

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

```html
<template>
  <coco-input v-model="text10" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text10 = ref('')
</script>
```

## 查看密码

showPassword 属性可以配置查看密码按钮，showPassword 优先级大于 clear

```html
<template>
  <coco-input v-model="text11" type="password" showPassword />
</template>

<script setup>
  import { ref } from 'vue'
  const text11 = ref('')
</script>
```

## Attributes

| 参数        | 说明               | 类型    | 可选值                        | 默认值 |
| ----------- | ------------------ | ------- | ----------------------------- | ------ |
| v-model     | 绑定值             | string  | ——                            | ——     |
| type        | 类型               | string  | text / password               | text   |
| placeholder | 输入框占位文本     | string  | ——                            | ——     |
| size        | 文本框尺寸         | string  | large / medium / small / mini | medium |
| max         | 最大输入上限       | string  | ——                            | ——     |
| clear       | 是否可以清空文本框 | boolean | ——                            | false  |
| icon        | 左侧显示的图标     | string  | ——                            | ——     |
| disabled    | 是否禁用           | boolean | ——                            | false  |
| autofocus   | 是否自动获取焦点   | boolean | ——                            | false  |
| name        | 原生 name 属性     | string  | ——                            | ——     |

## Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| clear    | 点击清空按钮触发的回调 | ——       |
| enter    | 按下回车触发的回调     | ——       |
| onblur   | 失去焦点触发的回调     | ——       |
| onfocus  | 获取焦点触发的回调     | ——       |
