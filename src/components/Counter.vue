<script lang="ts">
import { useCounterStore } from '@/stores/counter';

let {count, doubleCount, increment } = useCounterStore();

</script>

<template>
    <div>
        <h1>Counter</h1>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <button @click="increment">Increment</button>
    </div>

</template>

<style scoped>
</style>
