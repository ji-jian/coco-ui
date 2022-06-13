<template>
  <div class="coco-list">
    <div v-if="header || $slots.header" class="coco-list-header">
      <slot v-if="$slots.header" name="header" />
      <span v-else>{{ header }}</span>
    </div>
    <div v-if="content.length" class="coco-list-content">
      <ul class="coco-list-ul">
        <li :class="liClass" v-for="(item, index) in content" :key="index">
          <span v-if="num" class="coco-list-num">
            {{ index + 1 }}
          </span>
          {{ keys ? item[keys] : item }}
        </li>
      </ul>
    </div>
    <div v-else class="coco-list-not">暂无内容...</div>
    <div v-if="footer || $slots.footer" class="coco-list-footer">
      <slot v-if="$slots.footer" name="footer" />
      <span v-else>{{ footer }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { listProps } from './props.ts'

  const props = defineProps(listProps)
  const liClass = computed((): (string | object)[] => {
    return [
      'coco-list-li',
      {
        'coco-list-zebra': props.zebra,
        'coco-list-hoverShow': props.hoverShow
      }
    ]
  })
</script>
