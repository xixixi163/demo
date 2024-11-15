<template>
<title>Comp B</title>
<p>{{msg}}</p>
<input type="text" v-model="msg">
</template>
<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue';

const msg = ref('')

onActivated(() => {
    console.log("Comp B onActivated")
})
onDeactivated(() => {
    console.log("Comp B  onDeactivated")
})
</script>