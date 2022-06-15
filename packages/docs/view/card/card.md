# Card 卡片

## 基本使用

卡片的基础用法

title 自定义卡片的主标题

subtitle 自定义卡片的副标题

<coco-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</coco-card>

```html
<coco-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</coco-card>
```

## 简约卡片

<coco-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</coco-card>

```html
<coco-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</coco-card>
```

## 阴影显示时机

shadow 属性可以配置阴影显示时机

<coco-card class="coco-card-item" shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</coco-card>

<coco-card class="coco-card-item" shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</coco-card>

<coco-card class="coco-card-item">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</coco-card>

```html
<coco-card shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</coco-card>

<coco-card shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</coco-card>

<coco-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</coco-card>
```

## Attributes

| 参数       | 说明             | 类型   | 可选值         | 默认值         |
| ---------- | ---------------- | ------ | -------------- | -------------- |
| shadow     | 阴影显示时机     | string | always / hover | ——             |
| body-style | 自定义 body 样式 | object | ——             | {padding:20px} |

## Slots

| 插槽名称 | 说明说明           |
| -------- | ------------------ |
| title    | 自定义卡片的主标题 |
| subtitle | 自定义卡片的副标题 |
