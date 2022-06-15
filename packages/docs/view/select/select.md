<SelectA />
<coco-select v-model="value" placeholder="请选择">
  <coco-option
    v-for="(item, index) in options"
    :key="index"
    :value="item.value"
  >
    {{ item.label }}
  </coco-option>
</coco-select>
<SelectB />

<script setup>
  import SelectA from './selectA.md'
  import SelectB from './selectB.md'
  import { ref } from 'vue'
  const value = ref('选项2')
  const options = [
    {
      value: '选项1',
      label: '上海'
    },
    {
      value: '选项2',
      label: '北京'
    },
    {
      value: '选项3',
      label: '杭州'
    },
    {
      value: '选项4',
      label: '天津'
    },
    {
      value: '选项5',
      label: '大连'
    }
  ]
</script>
