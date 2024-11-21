<template>
    3.4{{ msg }}
    <Child v-model="msg" />
    3.4以下{{ value }}
    <!-- <ChildLow v-model="value" /> -->
     <!-- 展开 -->
    <ChildLow :modelValue="value" @update:modelValue="$event => (value = $event)"/>
    <!-- 多个model -->
     <h1>name:{{ name }}</h1>
     <h2>title:{{ title }}</h2>
     <!-- 自定义修饰符 capitalize-->
    <ChildMutiModel v-model:name.capitalize="name" v-model:title="title"></ChildMutiModel>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Child from './child/child.vue'
import ChildLow from './child/child3.4low.vue'
import ChildMutiModel from './child/childMutiModel.vue';
const msg = ref('Hello')
const value = ref('')
const name = ref('')
const title = ref()// 设为''，model 的default会失效
</script>
<style lang="scss" scoped>
</style>