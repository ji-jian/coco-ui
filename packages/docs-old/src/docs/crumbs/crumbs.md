# Crumbs 面包屑

## 基本使用

面包屑的基本用法

<coco-crumbs>
  <coco-crumbs-item to="/">首页</coco-crumbs-item>
  <coco-crumbs-item>学员管理</coco-crumbs-item>
  <coco-crumbs-item>文章管理</coco-crumbs-item>
  <coco-crumbs-item>设置</coco-crumbs-item>
</coco-crumbs>

```html
<coco-crumbs>
  <coco-crumbs-item to="/">首页</coco-crumbs-item>
  <coco-crumbs-item>学员管理</coco-crumbs-item>
  <coco-crumbs-item>文章管理</coco-crumbs-item>
  <coco-crumbs-item>设置</coco-crumbs-item>
</coco-crumbs>
```

## 不同的分隔符

通过给父组件 separator 属性可以配置不同的分隔符，使用 icon 类名

<coco-crumbs separator="coco-ui-link">
  <coco-crumbs-item to="/">首页</coco-crumbs-item>
  <coco-crumbs-item>学员管理</coco-crumbs-item>
  <coco-crumbs-item>文章管理</coco-crumbs-item>
  <coco-crumbs-item>设置</coco-crumbs-item>
</coco-crumbs>

```html
<coco-crumbs separator="coco-ui-link">
  <coco-crumbs-item to="/">首页</coco-crumbs-item>
  <coco-crumbs-item>学员管理</coco-crumbs-item>
  <coco-crumbs-item>文章管理</coco-crumbs-item>
  <coco-crumbs-item>设置</coco-crumbs-item>
</coco-crumbs>
```

## 跳转路由

通过给子组件 to 属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示

<coco-crumbs>
<coco-crumbs-item to="/">首页</coco-crumbs-item>
<coco-crumbs-item to="/student">学员管理</coco-crumbs-item>
<coco-crumbs-item>文章管理</coco-crumbs-item>
<coco-crumbs-item>设置</coco-crumbs-item>
</coco-crumbs>

```html
<coco-crumbs>
  <coco-crumbs-item to="/">首页</coco-crumbs-item>
  <coco-crumbs-item to="/student">学员管理</coco-crumbs-item>
  <coco-crumbs-item>文章管理</coco-crumbs-item>
  <coco-crumbs-item>设置</coco-crumbs-item>
</coco-crumbs>
```

## Attributes

coco-crumbs

| 参数      | 说明                | 类型   | 可选值 | 默认值            |
| --------- | ------------------- | ------ | ------ | ----------------- |
| separator | 分隔符，icon 的类名 | string | ——     | coco-ui-xiexian-01 |

coco-crumbs-item

| 参数 | 说明       | 类型   | 可选值 | 默认值 |
| ---- | ---------- | ------ | ------ | ------ |
| to   | 跳转的路径 | string | ——     | ——     |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/icon">
    Icon 图标
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/turnpage">
    TurnPage 翻页
  </coco-turn-page-item>
</coco-turn-page>
