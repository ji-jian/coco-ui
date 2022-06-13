<template>
  <header class="coco-header" :style="{ height }"><slot /></header>
</template>

<script lang="ts">
  export default { name: 'CocoHeader' }
</script>

<script lang="ts" setup>
  defineProps({
    height: {
      type: String,
      default: () => '60px'
    }
  } as const)
</script>
