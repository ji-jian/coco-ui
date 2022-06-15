<SwitchA />
<coco-switch v-model="value1" />
<br />
<coco-switch v-model="value1" />
<SwitchB />
<coco-switch v-model="value2" closeText="关闭" openText="开启" />
<SwitchC />
<coco-switch v-model="value3" disabled />
<br />
<coco-switch v-model="value4" disabled />
<SwitchD />
<coco-switch v-model="value5" closeColor="red" openColor="green" />
<br />
<coco-switch v-model="value6" closeColor="black" openColor="#eee" />
<SwitchE />
<coco-switch v-model="value7" :width="60" />
<SwitchF />

<script setup>
  import SwitchA from './switchA.md'
  import SwitchB from './switchB.md'
  import SwitchC from './switchC.md'
  import SwitchD from './switchD.md'
  import SwitchE from './switchE.md'
  import SwitchF from './switchF.md'
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(true)
  const value3 = ref(true)
  const value4 = ref(false)
  const value5 = ref(true)
  const value6 = ref(false)
  const value7 = ref(true)
</script>
