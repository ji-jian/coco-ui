<template>
  <footer class="coco-footer" :style="{ height }"><slot /></footer>
</template>

<script lang="ts">
  export default { name: 'CocoFooter' }
</script>

<script lang="ts" setup>
  defineProps({
    height: {
      type: String,
      default: () => '60px'
    }
  } as const)
</script>
