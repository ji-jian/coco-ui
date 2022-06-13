<template>
  <button :class="[...isClass, ...typeClass]" :disabled="disabled || loading">
    <i
      v-if="loading || icon"
      :class="['coco-icon', loading ? 'coco-ui-loading' : icon]"
      :style="{ color }"
    />
    <span v-if="$slots.default" :style="{ color }"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { buttonProps } from './props'
  import { THEME } from '../../../utils/theme'

  const props = defineProps(buttonProps)

  const color = computed((): string => {
    if (props.simple) return THEME[props.type]
    return props.type === 'default' || !props.type ? '#333' : '#fff'
  })

  const isClass = computed((): (string | object)[] => {
    return [
      'coco-button',
      {
        [`coco-button-size-${props.size}`]: props.size,
        'coco-button-round': props.round,
        'coco-button-square': props.square
      }
    ]
  })

  const typeClass = computed((): string[] => {
    return [
      props.simple
        ? props.disabled || props.loading
          ? `coco-button-simple-disabled-${props.type}`
          : `coco-button-simple-${props.type}`
        : props.disabled || props.loading
        ? `coco-button-disabled-${props.type}`
        : `coco-button-${props.type}`
    ]
  })
</script>
