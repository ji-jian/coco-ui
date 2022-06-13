<template>
  <div :class="['coco-input', { 'coco-input-disabled': disabled }]">
    <i
      v-if="icon"
      :class="['coco-icon', 'coco-input-icon', `coco-input-icon-${size}`, icon]"
      :style="{ cursor: disabled ? 'not-allowed' : 'Default' }"
    />
    <input
      :class="isClass"
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="max"
      :disabled="disabled"
      :autofocus="autofocus"
      :name="name"
      @input="input"
      @keyup.enter="emit('enter')"
      @blur="emit('onblur')"
      @focus="emit('onfocus')"
    />
    <i
      v-if="clear || showPassword"
      :class="[
        'coco-icon',
        'coco-input-clear',
        `coco-input-icon-${size}`,
        rightIcon
      ]"
      :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
      @click="rightIconClick"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { inputProps } from './props.ts'

  const props = defineProps(inputProps)
  const emit = defineEmits([
    'update:modelValue',
    'clear',
    'enter',
    'onblur',
    'onfocus'
  ])

  const inputType = ref<string>(props.type)
  const isPass = ref<boolean>(false)

  const input = (e: Event): void => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }

  const clearText = (): void => {
    if (props.disabled) return
    emit('update:modelValue', '')
    emit('clear')
  }

  const isClass = computed((): (string | object)[] => {
    return [
      'coco-input-input',
      `coco-input-input-${props.size}`,
      {
        'coco-input-icon-padding': props.icon,
        'coco-input-clear-padding': props.clear,
        'coco-input-disabled': props.disabled
      }
    ]
  })

  const showPasswordClick = (): void => {
    isPass.value = !isPass.value
    inputType.value = isPass.value ? 'text' : 'password'
  }

  const isIcon = computed((): boolean => {
    return props.clear ? (props.showPassword ? true : false) : true
  })

  const rightIcon = computed((): string => {
    return isIcon.value
      ? isPass.value
        ? 'coco-ui-browse'
        : 'coco-ui-eye-close'
      : 'coco-ui-guanbi'
  })

  const rightIconClick = (): void => {
    isIcon.value ? showPasswordClick() : clearText()
  }
</script>
