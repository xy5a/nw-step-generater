import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    function clear() {
      count.value = 0
    }

    function generateXml() {
      const xmldoc = document.implementation.createDocument('', '', null)
      const serilizer = new XMLSerializer()

      // Create the root element
      const root = xmldoc.createElement('root')
      root.setAttribute('attr', `114514`)
      root.appendChild(xmldoc.createTextNode('This is a text node'))
      xmldoc.appendChild(root)

      console.log(serilizer.serializeToString(xmldoc))
    }

    return { count, doubleCount, increment, clear, generateXml }
  },
  {
    persist: true,
  },
)
