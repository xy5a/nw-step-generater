<template>
  <form @submit="$emit('update:step', step)" onsubmit="return false">
    <h3>Cycle</h3>
    <input type="number" v-model="step.CRates" placeholder="CRate" />
    <input type="number" v-model="step.cycles" placeholder="Cycle number" />
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import type { batteryInfo } from '@/model/TestSequence'
import TestStep from '@/model/TestStep'
import { ref } from 'vue'

const props = defineProps<{
  step?: CycleStep
}>()

defineEmits<{
  'update:step': [step: TestStep]
}>()

class CycleStep extends TestStep {
  type = 'cycle'
  CRates: number = 0
  cycles: number = 0

  constructor() {
    super()
  }

  generateXml: (batteryInfo: batteryInfo) => Element = (info) => {
    const cycleStep = document.createElement('cycleStep')

    cycleStep.setAttribute('CRates', this.CRates.toString())
    cycleStep.setAttribute('cycles', this.cycles.toString())

    return cycleStep
  }
}

const step = ref(props.step ?? new CycleStep())
</script>
