<template>
    <div>
        start test
        <LlButton type="primary">test</LlButton>
        <LlButton>test2</LlButton>
        <LlButton @click="handleDestoryForm">Form销毁</LlButton>
       <i>hello world</i>
       <em>hello world</em>
       <Form v-if="isShow"></Form>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Form from "./src/components/Form/Form.vue"
const isShow = ref(true)
const handleDestoryForm = () => {
    isShow.value = !isShow.value
}
</script>