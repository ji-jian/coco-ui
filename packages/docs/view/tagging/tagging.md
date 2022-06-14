# Tagging 标注

## 基本使用

标注的基本用法，用于在文本之间标记重点信息

type 属性可以配置标注的类型

<coco-tagging>标注 1</coco-tagging>
<coco-tagging type="primary">标注 2</coco-tagging>
<coco-tagging type="success">标注 3</coco-tagging>
<coco-tagging type="danger">标注 4</coco-tagging>
<coco-tagging type="warning">标注 5</coco-tagging>

```html
<coco-tagging>标注1</coco-tagging>
<coco-tagging type="primary">标注2</coco-tagging>
<coco-tagging type="success">标注3</coco-tagging>
<coco-tagging type="danger">标注4</coco-tagging>
<coco-tagging type="warning">标注5</coco-tagging>
```

## 文字配置

size 属性可以配置标注的文字大小

<coco-tagging size="14">
  使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
</coco-tagging>

```html
<coco-tagging size="14">
  使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
</coco-tagging>
```

## Attributes

| 参数  | 说明     | 类型   | 可选值                                         | 默认值  |
| ----- | -------- | ------ | ---------------------------------------------- | ------- |
| type  | 类型     | string | default / primary / success / danger / warning | default |
| size  | 文字大小 | string | ——                                             | 13      |
| color | 文字颜色 | string | ——                                             | ——      |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/select">
    Select 选择器
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/notification">
    Notification 通知
  </coco-turn-page-item>
</coco-turn-page>
