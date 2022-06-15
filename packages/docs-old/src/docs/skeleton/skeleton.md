# Skeleton 骨架

## 基本使用

骨架的基本使用

<coco-skeleton />
<coco-skeleton />
<coco-skeleton />
    
```html
<coco-skeleton />
<coco-skeleton />
<coco-skeleton />
```

## 圆角的

round 属性可以配置圆角

<coco-skeleton round />
<coco-skeleton round />
<coco-skeleton round />

```html
<coco-skeleton round />
<coco-skeleton round />
<coco-skeleton round />
```

## 自定义宽高

width 属性可以配置宽度

height 属性可以配置高度

<coco-skeleton width="75%" />
<coco-skeleton width="150px" />
<coco-skeleton width="100px" height="100px" />

```html
<coco-skeleton width="75%" />
<coco-skeleton width="150px" />
<coco-skeleton width="100px" height="100px" />
```

## 启用动画

animation 属性可以配置显示动画

<coco-skeleton animation />
<coco-skeleton animation />
<coco-skeleton animation />

```html
<coco-skeleton animation />
<coco-skeleton animation />
<coco-skeleton animation />
```

## Attributes

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| round     | 圆角         | boolean | ——     | false  |
| width     | 宽度         | string  | ——     | 100%   |
| height    | 高度         | string  | ——     | 15px   |
| animation | 是否启用动画 | boolean | ——     | false  |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/message">
    Message 提示框
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/alert">
    Alert 提示
  </coco-turn-page-item>
</coco-turn-page>
