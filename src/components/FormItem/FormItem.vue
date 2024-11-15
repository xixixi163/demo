<template>
    <div>
        <div>item
            child:
            {{ count }}
            {{ props.name }}
            <button @click="handleUpdateItem">更新</button>
            <button @click="handleDestory">子触发销毁</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, Ref, ref } from 'vue';
interface Props {
    name?: string
}
const props = withDefaults(defineProps<Props>(), {
    name: 'default'
})

console.log("child setup")

onMounted(() => {
    console.log("child onMounted")
})
onBeforeMount(() => {
    console.log("child onBeforeMount")
})
onBeforeUnmount(() => {
    console.log("child onBeforeUnmount")
})
onUnmounted(() => {
    console.log("child onUnmounted")
})
onBeforeUpdate(() => {
  console.log("child onBeforeUpdate")
});
onUpdated(() => {
    console.log("child onUpdated")
})
onActivated(() => {
    console.log("child onActivated")
})
onDeactivated(() => {
    console.log("child onDeactivated")
})

let count = ref(1)
const emit = defineEmits<{
    (e: 'update-item', count: Ref<number>): void,
    (e: 'destory-item'): void
}>()

const handleUpdateItem = () => {
    count.value++;
    emit('update-item', count);
}
const handleDestory = () => {
    emit('destory-item');
}
</script>