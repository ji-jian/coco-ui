<template>
  <transition
    name="coco-drawer"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      :class="['coco-drawer-packing', { 'coco-drawer-modal': modal }]"
      :style="{ zIndex }"
      v-show="modelValue"
      @click.self="packingClose"
    >
      <div
        :class="['coco-drawer', `coco-drawer-${direction}`]"
        :style="isDirection ? `width: ${size}` : `height: ${size}`"
      >
        <div v-if="showHeader" class="coco-drawer-header">
          <span v-if="$slots.title" class="coco-drawer-title">
            <slot name="title" />
          </span>
          <span v-else class="coco-drawer-title">{{ title }}</span>
          <i
            v-if="showClose"
            class="coco-icon coco-ui-close"
            @click.stop="close"
          />
        </div>
        <div v-if="$slots.default" class="coco-drawer-body"><slot /></div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import {
    computed,
    getCurrentInstance,
    watch,
    ComponentInternalInstance
  } from 'vue'
  import { drawerProps } from './props.ts'

  const props = defineProps(drawerProps)
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

  const isDirection = computed((): boolean => {
    const p: string = props.direction
    return p === 'left' || p === 'right' || p === ''
  })

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
