<template>
  <div class="coco-table" :style="{ height }">
    <table
      class="coco-table-table"
      border="0"
      cellspacing="0"
      cellpadding="0"
      :width="width"
    >
      <thead class="coco-thead">
        <tr class="coco-thead-th" :height="trHeight">
          <th
            v-if="num"
            :class="isTdThClass('thead')"
            :align="align || 'left'"
          />
          <th
            v-for="(item, i) in columns"
            :class="isTdThClass('thead')"
            :width="item.width"
            :key="i"
            :align="align || 'left'"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="coco-tbody">
        <tr
          v-for="(dataItem, ind) in data"
          :class="[
            'coco-tbody-tr',
            {
              'coco-tbody-tr-zebra': zebra
            }
          ]"
          :height="trHeight"
          :style="importantStyle(ind)"
          :key="ind"
        >
          <td v-if="num" :class="isTdThClass('tbody')" :align="align || 'left'">
            {{ ind + 1 }}
          </td>
          <td
            v-for="(colItem, index) in columns"
            :class="isTdThClass('tbody')"
            :key="index"
            :align="align || 'left'"
          >
            {{ dataItem[colItem.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { tableProps } from './props.ts'

  const props = defineProps(tableProps)
  const importantStyle = (i: number): string | void => {
    const importants: number[] = props.important
    for (const key of importants) {
      if (key === i + 1) {
        return `background: ${props.importantColor}`
      }
    }
  }

  const isTdThClass = (key: string): (string | object)[] => {
    return [`coco-${key}-td`, { 'coco-table-border': props.border }]
  }
</script>
