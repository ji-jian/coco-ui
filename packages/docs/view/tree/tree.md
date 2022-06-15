<TreeA />
<coco-tree :data="data" />
<TreeB />

<script setup>
  import TreeA from './treeA.md'
  import TreeB from './treeB.md'
  const data = [
    {
      label: '一级 1',
      children: [
        {
          label: '二级 1-1',
          children: [
            {
              label: '三级 1-1-1'
            }
          ]
        }
      ]
    },
    {
      label: '一级 2',
      children: [
        {
          label: '二级 2-1',
          children: [
            {
              label: '三级 2-1-1'
            }
          ]
        },
        {
          label: '二级 2-2',
          children: [
            {
              label: '三级 2-2-1'
            }
          ]
        }
      ]
    },
    {
      label: '一级 3',
      children: [
        {
          label: '二级 3-1',
          children: [
            {
              label: '三级 3-1-1'
            }
          ]
        },
        {
          label: '二级 3-2',
          children: [
            {
              label: '三级 3-2-1'
            }
          ]
        }
      ]
    }
  ]
</script>
