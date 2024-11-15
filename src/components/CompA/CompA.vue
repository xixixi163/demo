<template>
    <title>Comp A</title>
    <p>{{count}}</p>
    <button @click="count--">remove</button>
</template>
<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, ref } from 'vue';

const count = ref(0)

onMounted(() => {
    console.log("CompA onMounted")
})
onActivated(() => {
    console.log("Comp A onActivated")
})
onDeactivated(() => {
    console.log("Comp A onDeactivated")
})
</script>