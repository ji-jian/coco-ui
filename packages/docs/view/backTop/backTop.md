# BackTop 回到顶部

## 基本使用

回到顶部的基础用法

<coco-back-top>Top</coco-back-top>

```html
<coco-back-top>Top</coco-back-top>
```

## 位置偏移

bottom 和 right 属性可以配置距离右边和下边的距离

<coco-backTop bottom="150px" right="120px">Go</coco-backTop>

```html
<coco-backTop bottom="150px" right="120px">Go</coco-backTop>
```

## 插入 Icon

<coco-backTop bottom="100px">
  <coco-icon icon="coco-ui-top" color="#409eff" />
</coco-backTop>

```html
<coco-backTop bottom="100px">
  <coco-icon icon="coco-ui-top" color="#409eff" />
</coco-backTop>
```

## Attributes

| 参数     | 说明             | 类型   | 可选值           | 默认值 |
| -------- | ---------------- | ------ | ---------------- | ------ |
| bottom   | 距离下面的距离   | string | ——               | 50px   |
| right    | 距离右面的距离   | string | ——               | 50px   |
| behavior | 滚动模式         | string | smooth / instant | smooth |
| beyond   | 超出 xx 范围显示 | number | ——               | 100    |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/crumbs">
    TurnPage 分页
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/message">
    Message 提示框
  </coco-turn-page-item>
</coco-turn-page>
