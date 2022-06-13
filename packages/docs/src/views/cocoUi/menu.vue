<template>
  <menu-a v-high />

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

  <menu-b v-high />
</template>

<script setup>
  import menuA from '@/docs/menu/menuA.md'
  import menuB from '@/docs/menu/menuB.md'
  import { ref } from 'vue'
  const isCollapse = ref(false)
</script>
