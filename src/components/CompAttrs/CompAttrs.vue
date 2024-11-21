<template>
  <CompAttrChild :name="'CompAttr'" :title="'test'" @handleBtn="handleBtn" />
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import CompAttrChild from '../CompAttrChild/CompAttrChild.vue';

const handleBtn = (arg) => {
    console.log("CompAttr:", arg)
}

const instance = getCurrentInstance()
console.log(instance,instance?.proxy.$root)
</script>

<style lang="scss" scoped>

</style>