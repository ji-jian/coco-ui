<ListA />
<coco-list :content="arr" keys="name" />
<ListB />
<coco-list :content="arr" keys="name" header="这是头部" footer="这是页脚" />
<ListC />
<coco-list
  zebra
  num
  :content="arr"
  keys="name"
  header="这是头部"
  footer="这是页脚"
/>
<ListD />
<coco-list hoverShow :content="arr" keys="name" />
<ListE />

<script setup>
  import ListA from './listA.md'
  import ListB from './listB.md'
  import ListC from './listC.md'
  import ListD from './listD.md'
  import ListE from './listE.md'
  const arr = [
    { name: '小明1', age: 11 },
    { name: '小明2', age: 12 },
    { name: '小明3', age: 13 },
    { name: '小明4', age: 14 },
    { name: '小明5', age: 15 },
    { name: '小明6', age: 16 },
    { name: '小明7', age: 17 },
    { name: '小明8', age: 18 }
  ]
</script>
