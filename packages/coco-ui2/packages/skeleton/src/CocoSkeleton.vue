<template>
  <div
    :class="[
      'coco-skeleton',
      {
        'coco-skeleton-round': round,
        'coco-skeleton-animation': animation
      }
    ]"
    :style="{ width, height }"
  />
</template>

<script lang="ts" setup>
  import { skeletonProps } from './props.ts'
  defineProps(skeletonProps)
</script>
