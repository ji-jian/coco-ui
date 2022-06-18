<template>
  <label
    :class="[
      'coco-radio',
      {
        [`coco-radio-${size}`]: border,
        'coco-radio-border': border
      }
    ]"
    :style="labelStyle"
  >
    <span :class="isClass">
      <input
        v-model="proxy.modelValue"
        type="radio"
        :name="name"
        :value="label"
        :disabled="disabled"
        @input="input"
      />
    </span>
    <span class="coco-radio-text" :style="isStyle">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { radioProps } from './props.ts'

  const props = defineProps(radioProps)
  const emits = defineEmits(['update:modelValue', 'change'])

  const proxy = new Proxy(props, {
    set() {
      return true
    }
  })

  const input = (e: any): void => {
    emits('update:modelValue', e.target.value)
    emits('change', e.target.value)
  }

  const isLabel = computed((): boolean => props.modelValue === props.label)

  const isClass = computed((): string[] => {
    return [
      'coco-radio-o',
      isLabel.value
        ? props.disabled
          ? 'coco-radio-disabled'
          : 'coco-radio-hig'
        : ''
    ]
  })

  const isStyle = computed((): object[] => {
    return [
      {
        color: isLabel.value
          ? props.disabled
            ? '#b6b5b5'
            : '#3a6ff4'
          : props.disabled
          ? '#b6b5b5'
          : '#333'
      }
    ]
  })

  const labelStyle = computed((): object | boolean[] => {
    return [
      { cursor: props.disabled ? 'no-drop' : 'pointer' },
      props.border &&
        `border: 1px solid ${
          isLabel.value ? (props.disabled ? '#b6b5b5' : '#3a6ff4') : '#b6b5b5'
        }`
    ]
  })
</script>
