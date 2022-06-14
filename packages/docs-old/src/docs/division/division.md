# Division 分割线

## 基本使用

分割线的基本使用

<coco-division></coco-division>

<p>这是一段文字</p>
<coco-division></coco-division>

```html
<coco-division></coco-division>
<p>这是一段文字</p>
<coco-division></coco-division>
```

## 文字位置

position 属性可以配置文字的位置

<coco-division position="left">这是左边文字</coco-division>

<p>这是一段文字</p>
<coco-division position="center">这是中间文字</coco-division>
<p>这是一段文字</p>
<coco-division position="right">这是右边文字</coco-division>

```html
<coco-division position="left">这是左边文字</coco-division>
<p>这是一段文字</p>
<coco-division position="center">这是中间文字</coco-division>
<p>这是一段文字</p>
<coco-division position="right">这是右边文字</coco-division>
```

## 文字颜色

color 属性可以配置文字的颜色
<coco-division position="left" color="red">这是左边文字</coco-division>

<p>这是一段文字</p>
<coco-division position="center" color="blue">这是中间文字</coco-division>
<p>这是一段文字</p>
<coco-division position="right" color="green">这是右边文字</coco-division>

```html
<coco-division position="left" color="red">这是左边文字</coco-division>
<p>这是一段文字</p>
<coco-division position="center" color="blue">这是中间文字</coco-division>
<p>这是一段文字</p>
<coco-division position="right" color="green">这是右边文字</coco-division>
```

## 上下的边距

margin 属性可以配置上下的边距

<coco-division position="left" margin="0px">这是左边文字</coco-division>

<p>这是一段文字</p>
<coco-division position="center" margin="20px">这是中间文字</coco-division>
<p>这是一段文字</p>
<coco-division position="right">这是右边文字</coco-division>

```html
<coco-division position="left" margin="0px">这是左边文字</coco-division>
<p>这是一段文字</p>
<coco-division position="center" margin="20px">这是中间文字</coco-division>
<p>这是一段文字</p>
<coco-division position="right">这是右边文字</coco-division>
```

## 带有 Icon

icon 属性可以配置 icon

icon 的优先级大于描述文字

<coco-division position="left" color="red" icon="coco-ui-githublogo" />
<p>这是一段文字</p>
<coco-division position="center" color="blue" icon="coco-ui-notification-filling"/>
<p>这是一段文字</p>
<coco-division position="right" color="black" icon="coco-ui-cry"/>

```html
<coco-division position="left" color="red" icon="coco-ui-githublogo" />
<p>这是一段文字</p>
<coco-division
  position="center"
  color="blue"
  icon="coco-ui-notification-filling"
/>
<p>这是一段文字</p>
<coco-division position="right" color="black" icon="coco-ui-cry" />
```

## Attributes

| 参数     | 说明       | 类型   | 可选值                | 默认值  |
| -------- | ---------- | ------ | --------------------- | ------- |
| position | 文字位置   | string | left / center / right | left    |
| color    | 文字颜色   | string | ——                    | #515a6e |
| margin   | 上下的边距 | string | ——                    | 25px    |
| icon     | 配置 icon  | string | ——                    | ——      |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/menu">
    Menu 导航栏
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/icon">
    Icon 图标
  </coco-turn-page-item>
</coco-turn-page>
