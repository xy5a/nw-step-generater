<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const stores = useCounterStore()
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p>{{ stores.count }}</p>
    <p>{{ stores.doubleCount }}</p>
    <button @click="stores.increment">Increment</button>
    <button @click="stores.clear">Clear</button>
    <button @click="stores.generateXml">Xml</button>
  </div>
</template>

<style scoped></style>
