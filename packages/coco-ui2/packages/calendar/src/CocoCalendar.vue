<template>
  <span class="coco-calendar">
    <div class="coco-calendar-container" :style="calendarWidth">
      <div class="coco-calendar-header">
        <span class="coco-calendar-isDay">
          {{ getYear }}年 {{ getMonth + 1 }}月 {{ getDate }}日
        </span>
        <coco-button-group>
          <coco-button
            size="mini"
            icon="coco-ui-arrow-left-bold"
            @click="prevMonth"
          />
          <coco-button
            size="mini"
            simple
            type="primary"
            icon="coco-ui-time"
            @click="goNow"
          />
          <coco-button
            size="mini"
            icon="coco-ui-arrow-right"
            @click="nextMonth"
          />
        </coco-button-group>
      </div>

      <tr class="coco-calendar-week">
        <td
          class="coco-calendar-week-item"
          v-for="(item, index) in 7"
          :key="index"
          :style="{ width: `${cellWidth < 28 ? 28 : cellWidth}px` }"
        >
          {{ changeWeek(item) }}
        </td>
      </tr>

      <tr class="coco-calendar-month">
        <td
          class="coco-calendar-day"
          v-for="(item, index) in fun_week"
          :key="index"
          :style="[calendarItemSize]"
        />
        <td
          class="coco-calendar-day"
          v-for="(m, index) in yearMonths(getMonth, getYear)"
          :key="index"
          :style="[nowDateStyle(index), calendarItemSize]"
        >
          {{ index + 1 }}
        </td>
      </tr>
    </div>
  </span>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { calendarProps } from './props.ts'

  const props = defineProps(calendarProps)

  const getMonth = ref<number>(props.modelValue.getMonth())
  const getYear = ref<number>(props.modelValue.getFullYear())
  const getDate: number = props.modelValue.getDate()

  const fun_week = computed((): number => {
    const week: number = new Date(
      `${getYear.value}/${getMonth.value + 1}/1`
    ).getDay()
    return week === 0 ? 7 - 1 : week - 1
  })

  const yearMonths = (month: number = getMonth.value, year: number): number => {
    if (month !== 1) {
      const months: number[] = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      return months[month]
    }
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
  }

  const prevMonth = (): void => {
    if (getMonth.value > 0) {
      getMonth.value--
      return
    }
    getYear.value--
    getMonth.value = 11
  }

  const nextMonth = (): void => {
    if (getMonth.value < 11) {
      getMonth.value++
      return
    }
    getYear.value++
    getMonth.value = 0
  }

  const goNow = (): void => {
    getMonth.value = props.modelValue.getMonth()
    getYear.value = props.modelValue.getFullYear()
  }

  const changeWeek = (num: number): string => {
    return ['一', '二', '三', '四', '五', '六', '日'][num - 1]
  }

  const nowDateStyle = (date: number) => {
    if (date + 1 === props.modelValue.getDate()) {
      return [
        {
          backgroundColor: '#3a6ff4',
          color: '#fff'
        }
      ]
    }
  }

  const calendarWidth = computed((): object[] => {
    const size: number = props.cellWidth < 28 ? 28 : props.cellWidth
    return [{ width: `${(size + 2) * 7}px` }]
  })

  const calendarItemSize = computed((): object[] => {
    const size: number = props.cellWidth < 28 ? 28 : props.cellWidth
    return [{ width: `${size}px`, height: `${size}px` }]
  })
</script>
