<template>
  <div class="coco-textarea">
    <textarea
      cols="30"
      :rows="rows"
      :class="isClass"
      :autofocus="autofocus"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :maxlength="max"
      :style="{ resize }"
      @input="input"
      @blur="emit('onblur')"
      @focus="emit('onfocus')"
    />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { textareaProps } from './props.ts'

  const props = defineProps(textareaProps)
  const emit = defineEmits(['update:modelValue', 'onfocus', 'onblur'])

  const input = (e: any): void => emit('update:modelValue', e.target.value)

  const isClass = computed((): (string | object)[] => {
    return [
      'coco-textarea-textarea',
      { 'coco-textarea-disabled': props.disabled }
    ]
  })
</script>
