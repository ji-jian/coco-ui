# Container 布局容器

## 基本使用

用于布局的容器组件，方便快速搭建页面的基本结构：

`<coco-container>`：外层容器

`<coco-header>`：顶栏容器

`<coco-aside>`：侧边栏容器

`<coco-main>`：主要区域容器

`<coco-footer>`：底栏容器

常见页面布局

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-main>Main</coco-main>
  </coco-container>

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-main>Main</coco-main>
    <coco-footer>Footer</coco-footer>
  </coco-container>

  <coco-container>
    <coco-aside width="200px">Aside</coco-aside>
    <coco-main>Main</coco-main>
  </coco-container>

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-container>
      <coco-aside width="200px">Aside</coco-aside>
      <coco-main>Main</coco-main>
    </coco-container>
  </coco-container>

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-container>
      <coco-aside width="200px">Aside</coco-aside>
      <coco-container>
        <coco-main>Main</coco-main>
        <coco-footer>Footer</coco-footer>
      </coco-container>
    </coco-container>
  </coco-container>

  <coco-container>
    <coco-aside width="200px">Aside</coco-aside>
    <coco-container>
      <coco-header>Header</coco-header>
      <coco-main>Main</coco-main>
    </coco-container>
  </coco-container>

  <coco-container>
    <coco-aside width="200px">Aside</coco-aside>
    <coco-container>
      <coco-header>Header</coco-header>
      <coco-main>Main</coco-main>
      <coco-footer>Footer</coco-footer>
    </coco-container>
  </coco-container>

```html
<template>
  <coco-container>
    <coco-header>Header</coco-header>
    <coco-main>Main</coco-main>
  </coco-container>

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-main>Main</coco-main>
    <coco-footer>Footer</coco-footer>
  </coco-container>

  <coco-container>
    <coco-aside width="200px">Aside</coco-aside>
    <coco-main>Main</coco-main>
  </coco-container>

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-container>
      <coco-aside width="200px">Aside</coco-aside>
      <coco-main>Main</coco-main>
    </coco-container>
  </coco-container>

  <coco-container>
    <coco-header>Header</coco-header>
    <coco-container>
      <coco-aside width="200px">Aside</coco-aside>
      <coco-container>
        <coco-main>Main</coco-main>
        <coco-footer>Footer</coco-footer>
      </coco-container>
    </coco-container>
  </coco-container>

  <coco-container>
    <coco-aside width="200px">Aside</coco-aside>
    <coco-container>
      <coco-header>Header</coco-header>
      <coco-main>Main</coco-main>
    </coco-container>
  </coco-container>

  <coco-container>
    <coco-aside width="200px">Aside</coco-aside>
    <coco-container>
      <coco-header>Header</coco-header>
      <coco-main>Main</coco-main>
      <coco-footer>Footer</coco-footer>
    </coco-container>
  </coco-container>
</template>

<style scoped>
  .coco-header,
  .coco-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .coco-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .coco-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .coco-container {
    margin-bottom: 40px;
  }

  .coco-container:nth-child(5) .coco-aside,
  .coco-container:nth-child(6) .coco-aside {
    line-height: 260px;
  }

  .coco-container:nth-child(7) .coco-aside {
    line-height: 320px;
  }
</style>
```

## Attributes

coco-container

| 参数      | 说明             | 类型   | 可选值                | 默认值 |
| --------- | ---------------- | ------ | --------------------- | ------ |
| direction | 子元素的排列方向 | string | horizontal / vertical | ——     |

coco-header

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | ——     | 60px   |

coco-aside

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | ——     | 200px  |

coco-footer

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | ——     | 60px   |
