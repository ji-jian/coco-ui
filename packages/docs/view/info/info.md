# Info 信息栏

## 基本使用

Info 的基本使用

userInfo 属性可以配置昵称

describe 属性可以配置描述信息

photo 插槽可以插入一个头像

right 插槽可以插入右侧内容

<coco-info userInfo="Coco2001" describe="hello world">
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <coco-button simple type="primary" size="mini">关注 TA</coco-button>
  </template>
</coco-info>

```html
<coco-info userInfo="Coco2001" describe="hello world">
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <coco-button simple type="primary" size="mini">关注 TA</coco-button>
  </template>
</coco-info>
```

## 更多扩展

body 和 footer 插槽可以进行插入身体和页脚的内容

<coco-info userInfo="Coco2001" describe="hello world">
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <coco-button simple type="primary" size="mini">关注 TA</coco-button>
  </template>

  <template v-slot:body>
    <coco-text block type="success">这是我今天拍的照片，好看吗？</coco-text>
    <coco-image
      width="300px"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <coco-text type="danger">2022-02-12</coco-text>
  </template>
</coco-info>

```html
<coco-info userInfo="Coco2001" describe="hello world">
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <coco-button simple type="primary" size="mini">关注 TA</coco-button>
  </template>

  <template v-slot:body>
    <coco-text block type="success">这是我今天拍的照片，好看吗？</coco-text>
    <coco-image
      width="300px"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <coco-text type="danger">2022-02-12</coco-text>
  </template>
</coco-info>
```

## 昵称超链接

使用 linkUrl 属性，传入一个 url 可以配置点击昵称的时候进行超链接跳转

<coco-info userInfo="Coco2001" describe="hello world" linkUrl="https://tianyuhao.cn">  
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
</coco-info>

```html
<coco-info
  userInfo="Coco2001"
  describe="hello world"
  linkUrl="https://tianyuhao.cn"
>
  <template v-slot:photo>
    <coco-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
    />
  </template>
</coco-info>
```

## Attributes

| 参数     | 说明               | 类型   | 可选值 | 默认值 |
| -------- | ------------------ | ------ | ------ | ------ |
| userInfo | 昵称               | string | ——     | ——     |
| describe | 描述信息           | string | ——     | ——     |
| linkUrl  | 点击昵称的跳转链接 | string | ——     | ——     |

## Slots

| 插槽名称 | 说明说明               |
| -------- | ---------------------- |
| photo    | 自定义信息栏的头像     |
| right    | 自定义信息栏的右侧内容 |
| body     | 自定义信息栏的主要部分 |
| footer   | 自定义信息栏的页脚部分 |
