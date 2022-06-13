<template>
  <div class="coco-page-header">
    <div class="coco-page-header-title-box" @click="emits('back')">
      <coco-icon :icon="icon" size="14" />
      <span class="coco-page-header-title">{{ title }}</span>
    </div>
    <div class="coco-page-header-content">{{ content }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { pageHeaderProps } from './props.ts'
  defineProps(pageHeaderProps)
  const emits = defineEmits(['back'])
</script>
