<template>
  <CompAttrChild :name="'CompAttr'" :title="'test'" @handleBtn="handleBtn" />
</template>

<script setup>
import CompAttrChild from '../CompAttrChild/CompAttrChild.vue';

const handleBtn = (arg) => {
    console.log("CompAttr:", arg)
}
</script>

<style lang="scss" scoped>

</style>