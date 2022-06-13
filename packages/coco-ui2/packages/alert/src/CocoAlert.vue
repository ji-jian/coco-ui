<template>
  <div :class="isClass">
    <div class="coco-alert-message">
      <i v-if="icon" :class="['coco-icon', 'coco-message-icon', icon]" />
      {{ message }}
    </div>
    <i v-if="close" class="coco-icon coco-ui-guanbi" @click="close" />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { alertProps } from './props.ts'

  const props = defineProps(alertProps)
  const emit = defineEmits(['close'])

  const isClass = computed((): (string | object)[] => {
    return [
      'coco-alert',
      `coco-alert-${props.type}`,
      {
        'coco-alert-center': props.center,
        [`coco-alert-bac-${props.type}`]: !props.simple
      }
    ]
  })

  const close = (): void => emit('close')
</script>
