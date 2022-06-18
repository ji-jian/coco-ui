<template>
  <div class="coco-three">
    <div class="coco-three-list" v-for="(dataItem, index) in data" :key="index">
      <div class="coco-three-label" @click="onOpen(dataItem, index)">
        <coco-icon
          icon="coco-ui-arrow-right-filling"
          color="#c0c4cc"
          :class="[{ 'coco-three-icon': isClose }]"
        />
        <span class="coco-three-label-text">{{ dataItem.label }}</span>
      </div>

      <transition name="slide-fade">
        <div
          class="coco-three-children"
          v-if="dataItem.children"
          v-show="isClose"
        >
          <coco-tree :data="dataItem.children" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { treeProps } from './props.ts'

  defineProps(treeProps)
  const isClose = ref<boolean>(false)

  const onOpen = (item: any): void => {
    if (item.children && item.children.length) {
      isClose.value = !isClose.value
    }
  }
</script>
