<template>
  <div class="coco-division" :style="{ margin: `${margin} 0` }">
    <span
      :class="['coco-division-text', `coco-division-text-${position}`]"
      :style="{ color }"
    >
      <i v-if="icon" :style="{ color }" :class="['coco-icon', icon]" />
      <slot v-else />
    </span>
  </div>
</template>

<script lang="ts" setup>
  import { divisionProps } from './props.ts'
  defineProps(divisionProps)
</script>
