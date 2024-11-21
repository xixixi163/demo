<template>
    <div>
        start test
        <LlButton @click="handleTo('./list')">virtual list</LlButton>
        <LlButton @click="handleTo('./model')">v-model</LlButton>
        <LlButton type="primary">test</LlButton>
        <LlButton @click="handleDestoryForm">Form销毁</LlButton>
       <i>hello world</i>
       <em>hello world</em>
       <Form v-if="isShow"></Form>
       <CompAttrs/>
    </div>
</template>
<script lang="ts" setup>
import Form from "@/components/Form/Form.vue"
import CompAttrs from "@/components/CompAttrs/CompAttrs.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const isShow = ref(true)
const handleDestoryForm = () => {
    isShow.value = !isShow.value
}
const handleTo = (path: string) => {
    router.push(path)
}
</script>
<style lang="scss" scoped>

</style>