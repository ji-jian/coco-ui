```html
<template>
  <coco-switch v-model="isCollapse" />

  <coco-menu theme="dark" mode="vertical" :collapse="isCollapse">
    <coco-menu-item>
      <coco-icon icon="coco-ui-shouye-xianxing" />
      <span>首页</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-pdf" />
      <span>内容</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-setting" />
      <span>设置</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-ashbin" />
      <span>回收站</span>
    </coco-menu-item>
  </coco-menu>

  <coco-menu theme="light" mode="vertical" :collapse="isCollapse">
    <coco-menu-item>
      <coco-icon icon="coco-ui-shouye-xianxing" />
      <span>首页</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-pdf" />
      <span>内容</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-setting" />
      <span>设置</span>
    </coco-menu-item>
    <coco-menu-item>
      <coco-icon icon="coco-ui-ashbin" />
      <span>回收站</span>
    </coco-menu-item>
  </coco-menu>
</template>

<script setup>
  import { ref } from 'vue'
  const isCollapse = ref(false)
</script>
```

## 左右插槽

left 插槽可以定制左侧自定义内容

right 插槽可以定制右侧自定义内容

<coco-menu>
  <template v-slot:left>
    <coco-avatar
      :size="5"
      round
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <coco-menu-item>首页</coco-menu-item>
  <coco-menu-item>内容</coco-menu-item>
  <coco-menu-item>设置</coco-menu-item>
  <coco-menu-item>回收站</coco-menu-item>
  <template v-slot:right>
    <coco-button style="margin:0" simple>右侧插槽</coco-button>
  </template>
</coco-menu>

```html
<coco-menu>
  <template v-slot:left>
    <coco-avatar
      :size="5"
      round
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <coco-menu-item>首页</coco-menu-item>
  <coco-menu-item>内容</coco-menu-item>
  <coco-menu-item>设置</coco-menu-item>
  <coco-menu-item>回收站</coco-menu-item>
  <template v-slot:right>
    <coco-button simple>右侧插槽</coco-button>
  </template>
</coco-menu>
```

## Attributes

coco-menu

| 参数            | 说明             | 类型    | 可选值                | 默认值     |
| --------------- | ---------------- | ------- | --------------------- | ---------- |
| theme           | 主题颜色         | string  | dark / light          | dark       |
| shadow          | 底部是否显示阴影 | boolean | ——                    | false      |
| mode            | 排列方式         | string  | horizontal / vertical | horizontal |
| backgroundColor | 自定义背景色     | string  | ——                    | ——         |
| textColor       | 自定义主题颜色   | string  | ——                    | ——         |
| collapse        | 是否折叠         | boolean | ——                    | false      |

coco-menu-item

| 参数     | 说明                           | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------ | ------- | ------ | ------ |
| route    | 跳转的路径                     | string  | ——     | ——     |
| prohibit | 是否禁用                       | boolean | ——     | ——     |
| title    | 标题文字（插槽优先级大于属性） | string  | ——     | ——     |
| link     | 跳转的链接（权重高于 router）  | string  | ——     | ——     |

## Slots

| 插槽名称 | 说明说明 |
| -------- | -------- |
| default  | 默认插槽 |
| left     | 左侧插槽 |
| right    | 右侧插槽 |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/input">
    Input 输入框
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/division">
    Division 分割线
  </coco-turn-page-item>
</coco-turn-page>
