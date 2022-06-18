<template>
  <span
    :class="[
      'coco-text',
      {
        [`coco-text-${type}`]: type,
        'coco-text-block': block
      }
    ]"
    :style="{ color, fontSize: `${size}px` }"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
  import { textProps } from './props.ts'
  defineProps(textProps)
</script>
