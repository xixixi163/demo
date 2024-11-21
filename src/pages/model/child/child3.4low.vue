<template>
    <input type="text" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"/>
</template>
<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits<{
 (e: 'update:modelValue', value: string): void
}>()
</script>