<PageHeaderA />
<coco-page-header title="返回上一层" content="详情页面" @back="goBack" />
<PageHeaderB />

<script setup>
  import PageHeaderA from './pageHeaderA.md'
  import PageHeaderB from './pageHeaderB.md'
  const goBack = () => console.log('goBack')
</script>
