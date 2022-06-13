<template>
  <transition
    name="coco-dialog"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      :class="['coco-dialog-packing', { 'coco-dialog-modal': modal }]"
      :style="{ zIndex }"
      v-show="modelValue"
      @click.self="packingClose"
    >
      <div class="coco-dialog" :style="{ width, marginTop: top }">
        <div v-if="showHeader" class="coco-dialog-header">
          <span v-if="$slots.title" class="coco-dialog-title">
            <slot name="title" />
          </span>
          <span v-else class="coco-dialog-title">{{ title }}</span>
          <i
            v-if="showClose"
            class="coco-icon coco-ui-close"
            @click.stop="close"
          />
        </div>
        <div v-if="$slots.default" class="coco-dialog-body"><slot /></div>
        <div v-if="$slots.footer" class="coco-dialog-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import { getCurrentInstance, watch, ComponentInternalInstance } from 'vue'
  import { dialogProps } from './props.ts'

  const props = defineProps(dialogProps)
  const emit = defineEmits([
    'update:modelValue',
    'open',
    'close',
    'onOpen',
    'onClose'
  ])

  const close = (): void => {
    emit('close')
    emit('update:modelValue', false)
  }

  const packingClose = (): void => {
    if (!props.modalClose) return
    close()
  }

  const self: any = getCurrentInstance() as ComponentInternalInstance
  watch(
    () => props.modelValue,
    (v: boolean): void => {
      if (v) emit('open')
      const el = self.proxy.$el
      if (v && props.appendToBody) {
        document.body.appendChild(el)
      }
    }
  )
</script>
