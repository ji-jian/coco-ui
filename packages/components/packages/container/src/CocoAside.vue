<template>
  <aside class="coco-aside" :style="{ width }"><slot /></aside>
</template>

<script lang="ts">
  export default { name: 'CocoAside' }
</script>

<script lang="ts" setup>
  defineProps({
    width: {
      type: String,
      default: () => '200px'
    }
  } as const)
</script>
