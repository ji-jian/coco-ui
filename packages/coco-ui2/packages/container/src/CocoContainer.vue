<template>
  <section :class="isClass"><slot /></section>
</template>

<script lang="ts" setup>
  import { computed, useSlots } from 'vue'
  const props = defineProps({
    direction: {
      type: String,
      validator(v: string): boolean {
        return ['horizontal', 'vertical', ''].includes(v)
      }
    }
  } as const)

  const { isClass } = CocoContainer()

  function CocoContainer() {
    const slots = useSlots()
    const isMode = computed((): boolean => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        return slots.default().some((n) => {
          const tag = n.type && n.type.name
          return tag === 'CocoHeader' || tag === 'CocoFooter'
        })
      }
      return false
    })

    const isClass = computed((): string[] => [
      'coco-container',
      !isMode.value ? 'coco-container-vertical' : 'coco-container-horizontal'
    ])

    return { isClass }
  }
</script>
