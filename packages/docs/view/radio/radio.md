<RadioA />
<coco-radio v-model="radio1" label="备选项1">备选项1</coco-radio>
<coco-radio v-model="radio1" label="备选项2">备选项2</coco-radio>
<coco-radio v-model="radio1" label="备选项3">备选项3</coco-radio>
<br /><br />
<RadioB />
<coco-radio v-model="radio2" disabled label="备选项1">备选项1</coco-radio>
<coco-radio v-model="radio2" label="备选项2">备选项2</coco-radio>
<coco-radio v-model="radio2" label="备选项3">备选项3</coco-radio>
<br /><br />
<RadioC />
<coco-radio v-model="radio3" label="备选项1" border>备选项1</coco-radio>
<coco-radio v-model="radio3" label="备选项2" border>备选项2</coco-radio>
<coco-radio v-model="radio3" label="备选项3" border>备选项3</coco-radio>
<br /><br />
<RadioD />
<coco-radio v-model="radio4" label="备选项1" border size="large">
  备选项1
</coco-radio>
<coco-radio v-model="radio4" label="备选项2" border size="large">
  备选项2
</coco-radio>
<coco-radio v-model="radio4" label="备选项3" border size="large">
  备选项3
</coco-radio>
<br />
<br />
<coco-radio v-model="radio4" label="备选项1" border size="medium">
  备选项1
</coco-radio>
<coco-radio v-model="radio4" label="备选项2" border size="medium">
  备选项2
</coco-radio>
<coco-radio v-model="radio4" label="备选项3" border size="medium">
  备选项3
</coco-radio>
<br />
<br />
<coco-radio v-model="radio4" label="备选项1" border size="small">
  备选项1
</coco-radio>
<coco-radio v-model="radio4" label="备选项2" border size="small">
  备选项2
</coco-radio>
<coco-radio v-model="radio4" label="备选项3" border size="small">
  备选项3
</coco-radio>
<br />
<br />
<coco-radio v-model="radio4" label="备选项1" border size="mini">
  备选项1
</coco-radio>
<coco-radio v-model="radio4" label="备选项2" border size="mini">
  备选项2
</coco-radio>
<coco-radio v-model="radio4" label="备选项3" border size="mini">
  备选项3
</coco-radio>
<br />
<br />
<RadioE />

<script setup>
  import RadioA from './radioA.md'
  import RadioB from './radioB.md'
  import RadioC from './radioC.md'
  import RadioD from './radioD.md'
  import RadioE from './radioE.md'
  import { ref } from 'vue'
  const radio1 = ref('备选项1')
  const radio2 = ref('备选项2')
  const radio3 = ref('备选项3')
  const radio4 = ref('备选项1')
</script>
