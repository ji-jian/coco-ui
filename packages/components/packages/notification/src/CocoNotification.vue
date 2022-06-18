<template>
  <transition name="coco-notification-fade" @after-leave="leave" appear>
    <div
      v-show="isShow"
      :class="['coco-notification', `coco-notification-${position}`]"
    >
      <div class="coco-notification-body">
        <i v-if="type" :class="iconClass" />
        <div class="coco-notification-content">
          <h3 class="coco-notification-title">{{ title }}</h3>
          <div class="coco-notification-message">
            <p>{{ message }}</p>
          </div>
        </div>
        <i v-if="close" class="coco-icon coco-ui-close" @click="onClose" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import {
    getCurrentInstance,
    ref,
    computed,
    ComponentInternalInstance
  } from 'vue'
  import { notificationProps } from './props.ts'

  const props = defineProps(notificationProps)
  const isShow = ref<boolean>(true)
  let timer: any
  ;(function (): void {
    if (props.time > 0) {
      timer = setTimeout(() => {
        onClose()
      }, props.time)
    }
  })()

  const onClose = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const isIcon = computed((): string => {
    let icon: string = ''
    switch (props.type) {
      case 'primary':
        icon = 'coco-ui-smile'
        break
      case 'success':
        icon = 'coco-ui-success-filling'
        break
      case 'danger':
        icon = 'coco-ui-error'
        break
      case 'warning':
        icon = 'coco-ui-warning-filling'
        break
    }
    return icon
  })

  const iconClass = computed((): string[] => {
    return [
      'coco-icon',
      'coco-notification-icon',
      isIcon.value,
      `coco-notification-icon-${props.type}`
    ]
  })

  const instance = getCurrentInstance() as ComponentInternalInstance
  const leave = (): void => {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
  }
</script>
