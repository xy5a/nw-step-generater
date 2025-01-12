import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Step } from '@/steps/step'

export const useEnvStore = defineStore('env', () => {
  const name = ref('')

  const mass = ref('')

  const creater = ref('')

  const description = ref('')

  const steps = [] as Step[]

  return {
    name,
    mass,
    creater,
    description,
    steps,
  }
})
