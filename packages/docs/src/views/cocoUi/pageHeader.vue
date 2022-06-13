<template>
  <pageHeader-a v-high />
  <coco-page-header title="返回上一层" content="详情页面" @back="goBack" />
  <pageHeader-b v-high />
</template>

<script setup>
  import pageHeaderA from '@/docs/pageHeader/pageHeaderA.md'
  import pageHeaderB from '@/docs/pageHeader/pageHeaderB.md'
  const goBack = () => console.log('goBack')
</script>
