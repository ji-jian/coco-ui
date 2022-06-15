<DialogA />
<coco-button simple @click="open1 = true">点我打开</coco-button>
<coco-dialog v-model="open1" title="这是标题">
  欢迎使用 coco-ui 的 dialog 对话框！
  <template v-slot:footer>
    <coco-button type="primary" style="margin-right: 20px">确定</coco-button>
    <coco-button type="primary" simple @click="open1 = false"
      >取消</coco-button
    >
  </template>
</coco-dialog>
<DialogB />
<coco-button simple @click="open2 = true">点我打开</coco-button>

<coco-dialog v-model="open2" title="这是标题" :showHeader="false">
  欢迎使用 coco-ui 的 dialog 对话框！
  <template v-slot:footer>
    <coco-button type="primary" style="margin-right: 20px">确定</coco-button>
    <coco-button type="primary" simple @click="open2 = false"
      >取消</coco-button
    >
  </template>
</coco-dialog>
<DialogC />
<coco-button simple @click="open3 = true">点我打开第一层</coco-button>

<coco-dialog v-model="open3" title="这是标题" width="50%">
  欢迎使用 coco-ui 的 dialog 对话框！
  <coco-button type="success" @click="open4 = true">打开第二层</coco-button>
  <coco-dialog v-model="open4" title="这是标题" top="10vh">
    hi～我是第二层的 dialog 对话框
  </coco-dialog>
</coco-dialog>
<DialogD />

<script setup>
  import DialogA from './dialogA.md'
  import DialogB from './dialogB.md'
  import DialogC from './dialogC.md'
  import DialogD from './dialogD.md'
  import { ref } from 'vue'
  const open1 = ref(false)
  const open2 = ref(false)
  const open3 = ref(false)
  const open4 = ref(false)
</script>
