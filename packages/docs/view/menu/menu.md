<MenuA />

<coco-switch v-model="isCollapse" />
<br />
<coco-menu theme="dark" mode="vertical" :collapse="isCollapse">
  <coco-menu-item>
    <coco-icon icon="coco-ui-shouye-xianxing" />
    <span>首页</span>
  </coco-menu-item>
  <coco-menu-item>
    <coco-icon icon="coco-ui-pdf" />
    <span>内容</span>
  </coco-menu-item>
  <coco-menu-item>
    <coco-icon icon="coco-ui-setting" />
    <span>设置</span>
  </coco-menu-item>
  <coco-menu-item>
    <coco-icon icon="coco-ui-ashbin" />
    <span>回收站</span>
  </coco-menu-item>
</coco-menu>
<br />
<coco-menu theme="light" mode="vertical" :collapse="isCollapse">
  <coco-menu-item>
    <coco-icon icon="coco-ui-shouye-xianxing" />
    <span>首页</span>
  </coco-menu-item>
  <coco-menu-item>
    <coco-icon icon="coco-ui-pdf" />
    <span>内容</span>
  </coco-menu-item>
  <coco-menu-item>
    <coco-icon icon="coco-ui-setting" />
    <span>设置</span>
  </coco-menu-item>
  <coco-menu-item>
    <coco-icon icon="coco-ui-ashbin" />
    <span>回收站</span>
  </coco-menu-item>
</coco-menu>

<MenuB />

<script setup>
  import MenuA from './menuA.md'
  import MenuB from './menuB.md'
  import { ref } from 'vue'
  const isCollapse = ref(false)
</script>
