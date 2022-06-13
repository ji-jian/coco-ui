<template>
  <span
    :class="['coco-crumbs-item', { 'coco-crumbs-item__to': to }]"
    @click="link"
  >
    <span class="coco-crumbs-item-text"><slot /></span>
    <i :class="['coco-icon', icon]" />
  </span>
</template>

<script lang="ts" setup>
  import {
    ref,
    inject,
    ComponentInternalInstance,
    getCurrentInstance
  } from 'vue'
  import { crumbsItemProps } from './props.ts'

  const props = defineProps(crumbsItemProps)

  const icon = ref<string | undefined>('')
  const { proxy }: any = getCurrentInstance() as ComponentInternalInstance
  icon.value = inject('Crumbs-separator')
  const link = (): void => {
    if (!props.to) return
    try {
      proxy.$router.push(props.to)
    } catch (e: any) {
      console.log(e)
    }
  }
</script>
