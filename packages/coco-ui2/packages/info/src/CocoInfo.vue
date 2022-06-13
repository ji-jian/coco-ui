<template>
  <div class="coco-info">
    <div class="coco-info-header">
      <div class="coco-info-left">
        <div v-if="$slots.photo" class="coco-info-photo">
          <slot name="photo" />
        </div>
        <div class="coco-info-data">
          <coco-link v-if="linkUrl" :url="linkUrl">
            <span class="coco-info-userInfo">{{ userInfo }}</span>
          </coco-link>
          <span v-else class="coco-info-userInfo">{{ userInfo }}</span>
          <span class="coco-info-describe">{{ describe }}</span>
        </div>
      </div>
      <div v-if="$slots.right" class="coco-info-right">
        <slot name="right" />
      </div>
    </div>
    <div v-if="$slots.body" class="coco-info-body">
      <slot name="body" />
    </div>
    <div v-if="$slots.footer" class="coco-info-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { infoProps } from './props.ts'
  defineProps(infoProps)
</script>
