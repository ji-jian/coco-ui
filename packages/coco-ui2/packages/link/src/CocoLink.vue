<template>
  <a
    :class="isClass"
    :style="{ textDecoration: underline ? 'none' : 'underline' }"
    :href="prohibit ? null : url"
    :target="target"
  >
    <i v-if="icon" :class="['coco-icon', `coco-icon-${type}`, icon]" />
    <slot />
  </a>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { linkProps } from './props.ts'

  const props = defineProps(linkProps)
  const isClass = computed((): (string | object)[] => {
    return [
      'coco-link',
      `coco-link-${props.type}`,
      { 'coco-link-prohibit': props.prohibit }
    ]
  })
</script>
