<template>
  <div class="coco-avatar">
    <div v-if="isError" :class="errorClass" :style="isSize">
      <slot name="error">
        <i :class="['coco-icon', errorIcon || 'coco-ui-user']" />
      </slot>
    </div>
    <img
      v-else
      :draggable="draggable"
      :class="successClass"
      :style="isSize"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { avatarProps } from './props.ts'

  const props = defineProps(avatarProps)
  const emit = defineEmits(['error', 'load'])

  const isError = ref<boolean>(false)

  const onError = (): void => {
    emit('error')
    isError.value = true
  }

  const isSize = computed((): object[] => {
    return [
      {
        width: `${props.size * 10}px`,
        height: `${props.size * 10}px`
      }
    ]
  })

  const errorClass = computed((): (string | object)[] => {
    return ['coco-avatar-error', { 'coco-avatar-round': props.round }]
  })

  const successClass = computed((): object[] => {
    return [
      {
        [`coco-avatar-${props.fit}`]: props.fit,
        'coco-avatar-round': props.round,
        'coco-avatar-border': props.border,
        'coco-avatar-select': props.select
      }
    ]
  })
</script>
