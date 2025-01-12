<template>
  <table>
    <tbody>
      <tr v-for="(test, i) in testSequence.tests" :key="i">
        <td>{{ test.type }}</td>
        <td>{{ test.description() }}</td>
        <td><button @click="console.log('modify')">Modify</button></td>
        <td><button @click="testSequence.dropTest(i)">Delete</button></td>
      </tr>
      <tr>
        <td><button @click="console.log('add')">Add</button></td>
      </tr>
    </tbody>
  </table>
  <div id="steps">
    <CycleStep @update:step="(step) => testSequence.tests.push(step)"></CycleStep>
  </div>
  <div>
    <button @click="console.log(testSequence)">Save</button>
  </div>
</template>

<script setup lang="ts">
import TestSequence from '@/model/TestSequence'
import { ref } from 'vue'
import CycleStep from './steps/CycleStep.vue'

const testSequence = ref(new TestSequence())
</script>
