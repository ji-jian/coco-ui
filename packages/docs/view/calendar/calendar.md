<CalendarA />
<coco-calendar v-model="value" />
<CalendarB />
<coco-calendar v-model="value" :cellWidth="70" />
<br />
<br />
<coco-calendar v-model="value" :cellWidth="10" />
<CalendarC />

<script setup>
  import CalendarA from './calendarA.md'
  import CalendarB from './calendarB.md'
  import CalendarC from './calendarC.md'
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
