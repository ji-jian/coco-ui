<template>
  <span :class="isClass">
    <slot />
    <i v-if="isClose" class="coco-icon coco-ui-close" @click="emit('close')" />
  </span>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { tagProps } from './props.ts'

  const props = defineProps(tagProps)
  const emit = defineEmits(['close'])

  const isClass = computed((): (string | object)[] => {
    return [
      'coco-tag',
      `coco-tag-${props.type}`,
      {
        [`coco-tag-${props.size}`]: props.size,
        'coco-tag-round': props.round
      }
    ]
  })
</script>
