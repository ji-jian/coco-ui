<InputA />
<coco-input v-model="text1" />
<InputB />
<coco-input type="text" v-model="text2" />
<coco-input type="password" v-model="text3" />
<InputC />
<coco-input size="large" v-model="text4" />
<coco-input size="medium" v-model="text5" />
<coco-input size="small" v-model="text6" />
<coco-input size="mini" v-model="text7" />
<InputD />
<coco-input v-model="text8" clear />
<InputE />
<coco-input v-model="text9" icon="coco-ui-electronics" />
<InputF />
<coco-input v-model="text10" disabled />
<InputG />
<coco-input v-model="text11" type="password" showPassword />
<InputH />

<script setup>
  import InputA from './inputA.md'
  import InputB from './inputB.md'
  import InputC from './inputC.md'
  import InputD from './inputD.md'
  import InputE from './inputE.md'
  import InputF from './inputF.md'
  import InputG from './inputG.md'
  import InputH from './inputH.md'
  import { ref } from 'vue'
  const text1 = ref('')
  const text2 = ref('')
  const text3 = ref('')
  const text4 = ref('')
  const text5 = ref('')
  const text6 = ref('')
  const text7 = ref('')
  const text8 = ref('')
  const text9 = ref('')
  const text10 = ref('')
  const text11 = ref('')
</script>
