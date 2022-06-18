<template>
  <div :class="['coco-card', { [`coco-card-shadow-${shadow}`]: shadow }]">
    <div v-if="$slots.title || $slots.subtitle" class="coco-card-header">
      <span v-if="$slots.title" class="coco-card-title">
        <slot name="title" />
      </span>
      <span v-if="$slots.subtitle" class="coco-card-subtitle">
        <slot name="subtitle" />
      </span>
    </div>
    <div class="coco-card-body" :style="bodyStyle"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
  import { cardProps } from './props.ts'
  defineProps(cardProps)
</script>
