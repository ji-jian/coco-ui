<template>
  <ul :class="[...isClass, ...isCollapseClass]" :style="{ backgroundColor }">
    <div v-if="$slots.left" :class="['coco-menu-left', isFlex]">
      <slot name="left" />
    </div>
    <div v-if="$slots.default" :class="['coco-menu-default', isFlex]">
      <slot />
    </div>
    <div v-if="$slots.right" :class="['coco-menu-right', isFlex]">
      <slot name="right" />
    </div>
  </ul>
</template>

<script lang="ts" setup>
  import { computed, provide } from 'vue'
  import { menuProps } from './props.ts'

  const props = defineProps(menuProps)
  provide('theme', props.theme)
  provide('mode', props.mode)
  provide('textColor', props.textColor)

  const isFlex = computed(() => props.mode === 'horizontal' && 'coco-menu-flex')

  const isClass = computed(() => {
    return [
      'coco-menu',
      isFlex.value,
      {
        'coco-menu-shadow': props.shadow,
        [`coco-menu-${props.theme}`]: props.theme
      }
    ]
  })

  const isCollapseClass = computed(() => {
    return [
      { 'coco-menu-collapse': props.collapse && props.mode === 'vertical' }
    ]
  })
</script>
