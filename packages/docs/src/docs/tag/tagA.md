# Tag 标签

## 基本使用

标签的基本使用

<coco-tag>标签一</coco-tag>
<coco-tag type="primary">标签二</coco-tag>
<coco-tag type="success">标签三</coco-tag>
<coco-tag type="danger">标签四</coco-tag>
<coco-tag type="warning">标签五</coco-tag>

```html
<coco-tag>标签一</coco-tag>
<coco-tag type="primary">标签二</coco-tag>
<coco-tag type="success">标签三</coco-tag>
<coco-tag type="danger">标签四</coco-tag>
<coco-tag type="warning">标签五</coco-tag>
```

## 不同尺寸

size 属性可以配置不同的尺寸

<coco-tag type="primary">标签</coco-tag>
<coco-tag size="small" type="primary">标签</coco-tag>
<coco-tag size="mini" type="primary">标签</coco-tag>

```html
<coco-tag type="primary">标签</coco-tag>
<coco-tag size="small" type="primary">标签</coco-tag>
<coco-tag size="mini" type="primary">标签</coco-tag>
```

## 圆角标签

round 属性可以配置圆角显示

<coco-tag round>标签一</coco-tag>
<coco-tag round type="primary">标签二</coco-tag>
<coco-tag round type="success">标签三</coco-tag>
<coco-tag round type="danger">标签四</coco-tag>
<coco-tag round type="warning">标签五</coco-tag>

```html
<coco-tag round>标签一</coco-tag>
<coco-tag round type="primary">标签二</coco-tag>
<coco-tag round type="success">标签三</coco-tag>
<coco-tag round type="danger">标签四</coco-tag>
<coco-tag round type="warning">标签五</coco-tag>
```

## 可关闭

设置 isclose 属性可以定义一个标签是否可移除

动态编辑标签可以通过点击标签关闭按钮后触发的 onClose 事件来实现
