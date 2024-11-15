<template>
  <div>
    CompAttrChildNext
    <button @click="handleClick">attrEmit</button>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

// attrs对象包含所有除组件声明props，emits之外的attributes
const attr = useAttrs()
console.log(attr)

const emit = defineEmits<{
    (e:'handle-btn', arg: string): void
}>()

const handleClick = () => {
    emit('handle-btn', 'attrs-name')
}

</script>

<style lang="scss" scoped>

</style>