<template>
  <div v-if="isShow">father
    {{ number }}
    <!-- 这里触发销毁父组件，不是真的销毁，只是把Form组件的这个节点删除，Form还在，要真正销毁From，需要在使用Form的地方v-if -->
    <LlButton @click="handleUnmount">父触发销毁</LlButton>
    <FormItem v-for="item in list" :key="item.id" :name="item.name" @updateItem="updateItem" @destoryItem="destoryItem"></FormItem>
    <!-- keep-alive test -->
     <label><input type="radio" v-model="current" :value="CompA">A</label>
     <label><input type="radio" v-model="current" :value="CompB">B</label>
    <KeepAlive>
        <component :is="current" />
    </KeepAlive>
  </div>
</template>
<script setup lang="ts">
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, reactive, Ref, ref, shallowRef } from 'vue';
import FormItem from "../FormItem/FormItem.vue";
import CompA from '../CompA/CompA.vue';
import CompB from '../CompB/CompB.vue';

// shallowRef 浅层响应：只关心动态组件的引用，不监听内部的属性变化。组件或对象比较复杂，避免深层响应式提高性能
const current = shallowRef(CompA)


const list = reactive([{
    id:1,
    name: 'one'
}])

console.log("parent setup")

onMounted(() => {
    console.log("parent onMounted")
})
onBeforeMount(() => {
    console.log("parent onBeforeMount")
})
onBeforeUnmount(() => {
    console.log("parent onBeforeUnmount")
})
onUnmounted(() => {
    console.log("parent onUnmounted")
})
onBeforeUpdate(() => {
  console.log("parent onBeforeUpdate")
});
onUpdated(() => {
    console.log("parent onUpdated")
})
onActivated(() => {
    console.log("parent onActivated")
})
onDeactivated(() => {
    console.log("parent onDeactivated")
})

let number = ref(0)
const updateItem = (count: Ref<number>) => {
    number.value = count.value
    list.push({
        id: number.value,
        name: number.value + "new"
    })
}

let isShow = ref(true)
const destoryItem = () => {
    isShow.value = !isShow.value
}
const handleUnmount = () => {
    isShow.value = !isShow.value
}
</script>