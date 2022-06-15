# Icon 图标

## 基本使用

icon 的基本使用

通过 icon 属性来给 icon 添加类名，来显示不同的图标

<coco-icon icon="coco-ui-cocoui" />
<coco-icon icon="coco-ui-ashbin" />
<coco-icon icon="coco-ui-data-view" />

```html
<coco-icon icon="coco-ui-cocoui" />
<coco-icon icon="coco-ui-ashbin" />
<coco-icon icon="coco-ui-data-view" />
```

## 配置颜色

color 属性改变 icon 的颜色

<coco-icon color="skyblue" icon="coco-ui-favorite" />
<coco-icon color="red" icon="coco-ui-fabulous" />
<coco-icon color="pink" icon="coco-ui-good" />

```html
<coco-icon color="skyblue" icon="coco-ui-favorite" />
<coco-icon color="red" icon="coco-ui-fabulous" />
<coco-icon color="pink" icon="coco-ui-good" />
```

## 配置大小

size 属性可以改变 icon 的大小

这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位

<coco-icon size="50" icon="coco-ui-hide" />
<coco-icon size="40" icon="coco-ui-shouye-xianxing" />
<coco-icon size="30" icon="coco-ui-huojian" />

```html
<coco-icon size="50" icon="coco-ui-hide" />
<coco-icon size="40" icon="coco-ui-shouye-xianxing" />
<coco-icon size="30" icon="coco-ui-huojian" />
```

## Attributes

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| icon  | 类名     | string | ——     | ——     |
| color | 颜色     | string | ——     | ——     |
| size  | 字体大小 | string | ——     | 16     |

## Icon 集合

点击即可复制代码
