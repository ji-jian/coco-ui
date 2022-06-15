<TextareaA />
<coco-textarea v-model="value1" placeholder="请输入内容..." />
<TextareaB />
<coco-textarea v-model="value7" />
<br />
<coco-textarea v-model="value8" resize="vertical" />
<br />
<coco-textarea v-model="value9" resize="horizontal" />
<br />
<coco-textarea v-model="value10" resize="none" />
<TextareaC />
<coco-textarea v-model="value3" rows="5" />
<coco-textarea v-model="value4" cols="10" />
<TextareaD />
<coco-textarea v-model="value5" disabled />
<TextareaE />
<coco-textarea v-model="value6" max="10" />
<TextareaF />

<script setup>
  import TextareaA from './textareaA.md'
  import TextareaB from './textareaB.md'
  import TextareaC from './textareaC.md'
  import TextareaD from './textareaD.md'
  import TextareaE from './textareaE.md'
  import TextareaF from './textareaF.md'
  import { ref } from 'vue'
  const value1 = ref('')
  const value3 = ref('')
  const value4 = ref('')
  const value5 = ref('禁用状态')
  const value6 = ref('')
  const value7 = ref('随意拉伸')
  const value8 = ref('只能纵向拉伸')
  const value9 = ref('只能横向拉伸')
  const value10 = ref('禁止拉伸')
</script>
