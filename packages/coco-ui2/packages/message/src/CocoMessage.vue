<template>
  <transition name="coco-message-fade" @after-leave="leave" appear>
    <div v-show="isShow" :class="isClass" :style="{ top: `${offset}px` }">
      <div class="coco-message-content">
        <i
          v-if="icon"
          :class="['coco-icon', 'lef-icon', icon, `coco-message-${type}`]"
        />
        <span>{{ message }}</span>
        <i
          v-if="showClose"
          :class="['coco-icon', 'coco-ui-close', `coco-message-${type}`]"
          @click="close"
        />
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
  import { messageProps } from './props.ts'

  const props = defineProps(messageProps)
  const isShow = ref<boolean>(true)
  let timer: any
  ;(function (): void {
    if (props.time > 0) {
      timer = setTimeout(() => {
        close()
      }, props.time)
    }
  })()

  const close = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const instance = getCurrentInstance() as ComponentInternalInstance
  const leave = (): void => {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
  }

  const isClass = computed((): (string | object)[] => {
    return [
      'coco-message',
      `coco-message-${props.type}`,
      { 'coco-message-round': props.round }
    ]
  })
</script>
