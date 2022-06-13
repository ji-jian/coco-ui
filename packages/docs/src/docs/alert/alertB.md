```html
<template>
  <coco-alert
    v-show="isShow1"
    close
    message="点击关闭普通提示"
    @close="isShow1 = false"
  />
  <coco-alert
    v-show="isShow2"
    close
    type="primary"
    message="点击关闭主要提示"
    @close="isShow2 = false"
  />
  <coco-alert
    v-show="isShow3"
    close
    type="success"
    message="点击关闭成功提示"
    @close="isShow3 = false"
  />
  <coco-alert
    v-show="isShow4"
    close
    type="danger"
    message="点击关闭危险提示"
    @close="isShow4 = false"
  />
  <coco-alert
    v-show="isShow5"
    close
    type="warning"
    message="点击关闭警告提示"
    @close="isShow5 = false"
  />
</template>

<script setup>
  import { ref } from 'vue'
  const isShow1 = ref(true)
  const isShow2 = ref(true)
  const isShow3 = ref(true)
  const isShow4 = ref(true)
  const isShow5 = ref(true)
</script>
```

## 文字居中

center 属性可以配置文字居中

<coco-alert center message="这是一个普通提示" />
<coco-alert center type="primary" message="这是一个主要提示" />
<coco-alert center type="success" message="这是一个成功提示" />
<coco-alert center type="danger" message="这是一个危险提示" />
<coco-alert center type="warning" message="这是一个警告提示" />

```html
<coco-alert center message="这是一个普通提示" />
<coco-alert center type="primary" message="这是一个主要提示" />
<coco-alert center type="success" message="这是一个成功提示" />
<coco-alert center type="danger" message="这是一个危险提示" />
<coco-alert center type="warning" message="这是一个警告提示" />
```

## 简约提示

simple 属性可以配置简约提示

<coco-alert simple message="简约的普通提示" />
<coco-alert simple type="primary" message="简约的主要提示" />
<coco-alert simple type="success" message="简约的成功提示" />
<coco-alert simple type="danger" message="简约的危险提示" />
<coco-alert simple type="warning" message="简约的警告提示" />

```html
<coco-alert simple message="简约的普通提示" />
<coco-alert simple type="primary" message="简约的主要提示" />
<coco-alert simple type="success" message="简约的成功提示" />
<coco-alert simple type="danger" message="简约的危险提示" />
<coco-alert simple type="warning" message="简约的警告提示" />
```

## Attributes

| 参数    | 说明             | 类型    | 可选值                               | 默认值 |
| ------- | ---------------- | ------- | ------------------------------------ | ------ |
| message | 提示的文字       | string  | ——                                   | ——     |
| type    | 提示类型         | string  | primary / success / danger / warning | ——     |
| icon    | icon 类名        | string  | ——                                   | ——     |
| close   | 是否展示关闭按钮 | boolean | ——                                   | false  |
| center  | 是否文字居中对齐 | boolean | ——                                   | false  |
| simple  | 简约的提示       | boolean | ——                                   | false  |

## Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 Alert 时触发的回调 |          |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/skeleton">
    Skeleton 骨架
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/rate">
    Rate 评分
  </coco-turn-page-item>
</coco-turn-page>
