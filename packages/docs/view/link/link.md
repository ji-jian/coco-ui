# Link 链接

## 基本使用

链接的基本使用

<coco-link url="">链接一</coco-link>
<coco-link url="" type="primary">链接二</coco-link>
<coco-link url="" type="success">链接三</coco-link>
<coco-link url="" type="danger">链接四</coco-link>
<coco-link url="" type="warning">链接五</coco-link>

```html
<coco-link url="">链接一</coco-link>
<coco-link url="" type="primary">链接二</coco-link>
<coco-link url="" type="success">链接三</coco-link>
<coco-link url="" type="danger">链接四</coco-link>
<coco-link url="" type="warning">链接五</coco-link>
```

## 带有下划线

underline 属性可以配置带有下划线

<coco-link :underline="false">链接一</coco-link>
<coco-link :underline="false" type="primary">链接二</coco-link>
<coco-link :underline="false" type="success">链接三</coco-link>
<coco-link :underline="false" type="danger">链接四</coco-link>
<coco-link :underline="false" type="warning">链接五</coco-link>

```html
<coco-link :underline="false">链接一</coco-link>
<coco-link :underline="false" type="primary">链接二</coco-link>
<coco-link :underline="false" type="success">链接三</coco-link>
<coco-link :underline="false" type="danger">链接四</coco-link>
<coco-link :underline="false" type="warning">链接五</coco-link>
```

## 禁用链接

prohibit 属性可以禁用链接标签

<coco-link url="" prohibit>禁用链接一</coco-link>
<coco-link url="" prohibit type="primary">禁用链接二</coco-link>
<coco-link url="" prohibit type="success">禁用链接三</coco-link>
<coco-link url="" prohibit type="danger">禁用链接四</coco-link>
<coco-link url="" prohibit type="warning">禁用链接五</coco-link>

```html
<coco-link url="" prohibit>禁用链接一</coco-link>
<coco-link url="" prohibit type="primary">禁用链接二</coco-link>
<coco-link url="" prohibit type="success">禁用链接三</coco-link>
<coco-link url="" prohibit type="danger">禁用链接四</coco-link>
<coco-link url="" prohibit type="warning">禁用链接五</coco-link>
```

## 带有 Icon

icon 属性可以配置 icon

<coco-link url="" icon="coco-ui-favorite-filling">链接一</coco-link>
<coco-link url="" icon="coco-ui-attachment" type="primary">链接二</coco-link>
<coco-link url="" icon="coco-ui-customer-service" type="success">链接三</coco-link>
<coco-link url="" icon="coco-ui-filter" type="danger">链接四</coco-link>
<coco-link url="" icon="coco-ui-good" type="warning">链接五</coco-link>

```html
<coco-link url="" icon="coco-ui-favorite-filling">链接一</coco-link>
<coco-link url="" icon="coco-ui-attachment" type="primary">链接二</coco-link>
<coco-link url="" icon="coco-ui-customer-service" type="success"
  >链接三</coco-link
>
<coco-link url="" icon="coco-ui-filter" type="danger">链接四</coco-link>
<coco-link url="" icon="coco-ui-good" type="warning">链接五</coco-link>
```

## Attributes

| 参数      | 说明           | 类型    | 可选值                               | 默认值 |
| --------- | -------------- | ------- | ------------------------------------ | ------ |
| url       | 跳转的路径     | string  | ——                                   | ——     |
| type      | 链接的类型     | string  | primary / success / danger / warning | ——     |
| underline | 无下划线       | boolean | ——                                   | true   |
| target    | 以新的窗口打开 | string  | 同原生 target 属性 \_blank           | ——     |
| icon      | icon           | string  | ——                                   | ——     |
| prohibit  | 禁用状态       | boolean | ——                                   | false  |
