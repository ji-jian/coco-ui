<TableA />
<coco-table :data="tableData" :columns="columns" />
<TableB />
<coco-table :data="tableData" :columns="columns" trHeight="50px" />
<TableC />
<coco-table :data="tableData" :columns="columns" align="center" />
<TableD />
<coco-table
  :data="tableData"
  :columns="columns"
  align="center"
  border
  zebra
/>
<TableE />
<coco-table
  :data="tableData"
  :columns="columns"
  align="center"
  width="500px"
  height="200px"
/>
<TableF />
<coco-table :data="tableData" :columns="columns" align="center" num />
<TableG />
<coco-table
  :data="tableData"
  :columns="columns"
  align="center"
  num
  :important="[2, 4]"
/>
<TableH />
<coco-table :data="tableData" :columns="columns2" align="center" />
<TableI />

<script setup>
  import TableA from './tableA.md'
  import TableB from './tableB.md'
  import TableC from './tableC.md'
  import TableD from './tableD.md'
  import TableE from './tableE.md'
  import TableF from './tableF.md'
  import TableG from './tableG.md'
  import TableH from './tableH.md'
  import TableI from './tableI.md'
  const columns = [
    {
      title: '日期',
      key: 'date'
    },
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '地址',
      key: 'address'
    }
  ]
  const columns2 = [
    {
      title: '日期',
      key: 'date',
      width: '100px'
    },
    {
      title: '姓名',
      key: 'name',
      width: '100px'
    },
    {
      title: '地址',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '张三',
      address: '浙江省杭州市上城区 231 号'
    },
    {
      date: '2021-12-04',
      name: '李四',
      address: '浙江省杭州市西湖区 12 号'
    },
    {
      date: '2021-10-01',
      name: '王英',
      address: '浙江省杭州市临平区 2 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    }
  ]
</script>
