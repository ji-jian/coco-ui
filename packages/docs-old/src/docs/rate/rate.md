<RateA />
<coco-rate v-model="value1" />
<RateB />
<coco-rate v-model="value2" />
<br />
<coco-rate v-model="value2" color="red" voidColor="#eee" />
<RateC />
<coco-rate v-model="value3" showText />
<br />
<coco-rate
  v-model="value3"
  showText
  :sayText="['1星', '2星', '3星', '4星', '5星']"
/>
<RateD />

<script setup>
  import RateA from './rateA.md'
  import RateB from './rateB.md'
  import RateC from './rateC.md'
  import RateD from './rateD.md'
  import { ref } from 'vue'
  const value1 = ref(2)
  const value2 = ref(2)
  const value3 = ref(2)
</script>
