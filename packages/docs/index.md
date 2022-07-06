# Button 按钮

## 基本使用

按钮基础用法

type 属性配置不同的按钮类型 

<coco-button>默认按钮</coco-button>
<coco-button type="primary">主要按钮</coco-button>
<coco-button type="success">成功按钮</coco-button>
<coco-button type="danger">危险按钮</coco-button>
<coco-button type="warning">警告按钮</coco-button>

```html
<coco-button>默认按钮</coco-button>
<coco-button type="primary">主要按钮</coco-button>
<coco-button type="success">成功按钮</coco-button>
<coco-button type="danger">危险按钮</coco-button>
<coco-button type="warning">警告按钮</coco-button>
```

## 简约按钮

simple 属性可以配置简约按钮

<coco-button simple>默认按钮</coco-button>
<coco-button simple type="primary">主要按钮</coco-button>
<coco-button simple type="success">成功按钮</coco-button>
<coco-button simple type="danger">危险按钮</coco-button>
<coco-button simple type="warning">警告按钮</coco-button>

```html
<coco-button simple>默认按钮</coco-button>
<coco-button simple type="primary">主要按钮</coco-button>
<coco-button simple type="success">成功按钮</coco-button>
<coco-button simple type="danger">危险按钮</coco-button>
<coco-button simple type="warning">警告按钮</coco-button>
```

## 图标按钮

icon 属性可以配置图标按钮

<coco-button icon="coco-ui-setting-filling">设置</coco-button>
<coco-button icon="coco-ui-cocoui" type="primary">coco-ui</coco-button>
<coco-button icon="coco-ui-fabulous" type="success"></coco-button>
<coco-button icon="coco-ui-discount" type="danger"></coco-button>
<coco-button icon="coco-ui-chart-bar" type="warning"></coco-button>

<coco-button simple icon="coco-ui-setting-filling">设置</coco-button>
<coco-button simple icon="coco-ui-cocoui" type="primary">coco-ui</coco-button>
<coco-button simple icon="coco-ui-fabulous" type="success"></coco-button>
<coco-button simple icon="coco-ui-discount" type="danger"></coco-button>
<coco-button simple icon="coco-ui-chart-bar" type="warning"></coco-button>

```html
<coco-button icon="coco-ui-setting-filling">设置</coco-button>
<coco-button icon="coco-ui-cocoui" type="primary">coco-ui</coco-button>
<coco-button icon="coco-ui-fabulous" type="success"></coco-button>
<coco-button icon="coco-ui-discount" type="danger"></coco-button>
<coco-button icon="coco-ui-chart-bar" type="warning"></coco-button>

<coco-button simple icon="coco-ui-setting-filling">设置</coco-button>
<coco-button simple icon="coco-ui-cocoui" type="primary">coco-ui</coco-button>
<coco-button simple icon="coco-ui-fabulous" type="success"></coco-button>
<coco-button simple icon="coco-ui-discount" type="danger"></coco-button>
<coco-button simple icon="coco-ui-chart-bar" type="warning"></coco-button>
```

## 禁用状态

disabled 属性可以配置禁用状态

<coco-button disabled>默认按钮</coco-button>
<coco-button disabled type="primary">主要按钮</coco-button>
<coco-button disabled type="success">成功按钮</coco-button>
<coco-button disabled type="danger">危险按钮</coco-button>
<coco-button disabled type="warning">警告按钮</coco-button>

<coco-button simple disabled>默认按钮</coco-button>
<coco-button simple disabled type="primary">主要按钮</coco-button>
<coco-button simple disabled type="success">成功按钮</coco-button>
<coco-button simple disabled type="danger">危险按钮</coco-button>
<coco-button simple disabled type="warning">警告按钮</coco-button>

```html
<coco-button disabled>默认按钮</coco-button>
<coco-button disabled type="primary">主要按钮</coco-button>
<coco-button disabled type="success">成功按钮</coco-button>
<coco-button disabled type="danger">危险按钮</coco-button>
<coco-button disabled type="warning">警告按钮</coco-button>

<coco-button simple disabled>默认按钮</coco-button>
<coco-button simple disabled type="primary">主要按钮</coco-button>
<coco-button simple disabled type="success">成功按钮</coco-button>
<coco-button simple disabled type="danger">危险按钮</coco-button>
<coco-button simple disabled type="warning">警告按钮</coco-button>
```

## 圆角按钮

round 属性可以配置圆角按钮

square 属性可以配置方形按钮

<coco-button round>默认按钮</coco-button>
<coco-button round type="primary">主要按钮</coco-button>
<coco-button round type="success">成功按钮</coco-button>
<coco-button round type="danger">危险按钮</coco-button>
<coco-button round type="warning">警告按钮</coco-button>

<coco-button square>默认按钮</coco-button>
<coco-button square type="primary">主要按钮</coco-button>
<coco-button square type="success">成功按钮</coco-button>
<coco-button square type="danger">危险按钮</coco-button>
<coco-button square type="warning">警告按钮</coco-button>

```html
<coco-button round>默认按钮</coco-button>
<coco-button round type="primary">主要按钮</coco-button>
<coco-button round type="success">成功按钮</coco-button>
<coco-button round type="danger">危险按钮</coco-button>
<coco-button round type="warning">警告按钮</coco-button>

<coco-button square>默认按钮</coco-button>
<coco-button square type="primary">主要按钮</coco-button>
<coco-button square type="success">成功按钮</coco-button>
<coco-button square type="danger">危险按钮</coco-button>
<coco-button square type="warning">警告按钮</coco-button>
```

## 按钮组

使用 `coco-button-group` 标签来嵌套按钮

<coco-button-group>
<coco-button type="primary">上一页</coco-button>
<coco-button type="primary">下一页</coco-button>
</coco-button-group>

<coco-button-group>
  <coco-button simple type="primary">左</coco-button>
  <coco-button simple type="success">右</coco-button>
</coco-button-group>

<coco-button-group>
  <coco-button icon="coco-ui-arrow-left-filling" type="primary"></coco-button>
  <coco-button icon="coco-ui-arrow-right-filling" type="success"></coco-button>
</coco-button-group>

<coco-button-group>
  <coco-button type="primary">左</coco-button>
  <coco-button type="success">中</coco-button>
  <coco-button type="primary">右</coco-button>
</coco-button-group>

```html
<coco-button-group>
  <coco-button type="primary">上一页</coco-button>
  <coco-button type="primary">下一页</coco-button>
</coco-button-group>

<coco-button-group>
  <coco-button simple type="primary">左</coco-button>
  <coco-button simple type="success">右</coco-button>
</coco-button-group>

<coco-button-group>
  <coco-button icon="coco-ui-arrow-left-filling" type="primary"></coco-button>
  <coco-button icon="coco-ui-arrow-right-filling" type="success"></coco-button>
</coco-button-group>

<coco-button-group>
  <coco-button type="primary">左</coco-button>
  <coco-button type="success">中</coco-button>
  <coco-button type="primary">右</coco-button>
</coco-button-group>
```

## 不同尺寸

size 属性可以配置按钮尺寸

<coco-button size="mini" type="primary">小型按钮</coco-button>
<coco-button size="small" type="primary">中等按钮</coco-button>
<coco-button type="primary">正常大小</coco-button>
<coco-button size="large" type="primary">大号按钮</coco-button>

<coco-button simple size="mini" type="primary">小型按钮</coco-button>
<coco-button simple size="small" type="primary">中等按钮</coco-button>
<coco-button simple type="primary">正常大小</coco-button>
<coco-button simple size="large" type="primary">大号按钮</coco-button>

```html
<coco-button size="mini" type="primary">小型按钮</coco-button>
<coco-button size="small" type="primary">中等按钮</coco-button>
<coco-button type="primary">正常大小</coco-button>
<coco-button size="large" type="primary">大号按钮</coco-button>

<coco-button simple size="mini" type="primary">小型按钮</coco-button>
<coco-button simple size="small" type="primary">中等按钮</coco-button>
<coco-button simple type="primary">正常大小</coco-button>
<coco-button simple size="large" type="primary">大号按钮</coco-button>
```

## loading 状态

loading 属性可以配置 loading 状态下的按钮

<coco-button loading>默认按钮</coco-button>
<coco-button loading type="primary">主要按钮</coco-button>
<coco-button loading type="success">成功按钮</coco-button>
<coco-button loading type="danger">危险按钮</coco-button>
<coco-button loading type="warning">警告按钮</coco-button>

```html
<coco-button loading>默认按钮</coco-button>
<coco-button loading type="primary">主要按钮</coco-button>
<coco-button loading type="success">成功按钮</coco-button>
<coco-button loading type="danger">危险按钮</coco-button>
<coco-button loading type="warning">警告按钮</coco-button>
```

## Attributes

| 参数     | 说明           | 类型    | 可选值                                         | 默认值  |
| -------- | -------------- | ------- | ---------------------------------------------- | ------- |
| type     | 按钮的类型     | string  | default / primary / success / danger / warning | default |
| round    | 是否为圆角按钮 | boolean | ——                                             | false   |
| simple   | 简约按钮       | boolean | ——                                             | false   |
| disabled | 按钮是否禁用   | boolean | ——                                             | false   |
| icon     | 按钮上的 icon  | string  | ——                                             | ——      |
| size     | 按钮尺寸       | string  | large / small / mini                           | ——      |
| square   | 方形按钮       | boolean | ——                                             | false   |
| loading  | loading 状态   | boolean | ——                                             | false   |

<coco-turn-page style="margin: 50px 0">
  <coco-turn-page-item direction="left" url="/component/container">
    Container 布局容器
  </coco-turn-page-item>
  <coco-turn-page-item direction="right" url="/component/list">
    List 列表
  </coco-turn-page-item>
</coco-turn-page>
