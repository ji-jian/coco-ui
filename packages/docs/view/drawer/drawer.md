  <DrawerA />
  <coco-button type="primary" @click="open = true">点我打开</coco-button>

<coco-radio v-model="radio" label="right">从右面弹出</coco-radio>
<coco-radio v-model="radio" label="left">从左面弹出</coco-radio>
<coco-radio v-model="radio" label="bottom">从下面弹出</coco-radio>
<coco-radio v-model="radio" label="top">从上面弹出</coco-radio>

  <coco-drawer v-model="open" :direction="radio" title="这是标题">
    hello，欢迎使用 coco-ui!
  </coco-drawer>
  <DrawerB />
  <coco-button type="primary" @click="open2 = true">点我打开</coco-button>

  <coco-drawer v-model="open2" direction="right" :showHeader="false">
    hello，欢迎使用 coco-ui!
  </coco-drawer>
  <DrawerC />
  <coco-button type="primary" @click="open3 = true">点我打开</coco-button>

  <coco-drawer v-model="open3" direction="right" size="50%">
    <coco-button type="primary" @click="open4 = true">点我打开内层</coco-button>
    hello，欢迎使用 coco-ui!
    <coco-drawer v-model="open4" direction="right"> 这是内层的 </coco-drawer>
  </coco-drawer>
  <DrawerD />

<script setup>
  import DrawerA from './drawerA.md'
  import DrawerB from './drawerB.md'
  import DrawerC from './drawerC.md'
  import DrawerD from './drawerD.md'
  import { ref } from 'vue'
  const radio = ref('right')
  const open = ref(false)
  const open2 = ref(false)
  const open3 = ref(false)
  const open4 = ref(false)
</script>
