<template>
    <input type="text" v-model="model">
</template>
<script setup lang="ts">
/**
 * 3.4
 * defineModel() 返回的值是一个 ref。它可以像其他 ref 一样被访问以及修改，不过它能起到在父组件和当前变量之间的双向绑定的作用：
 * 它的 .value 和父组件的 v-model 的值同步；
 * 当它被子组件变更了，会触发父组件绑定的值一起更新。
 * 这意味着你也可以用 v-model 把这个 ref 绑定到一个原生 input 元素上，在提供相同的 v-model 用法的同时轻松包装原生 input 元素：
 * 底层机制​
 * defineModel 是一个便利宏。编译器将其展开为以下内容：
 * 一个名为 modelValue 的 prop，本地 ref 的值与其同步；
 * 一个名为 update:modelValue 的事件，当本地 ref 的值发生变更时触发。
 * 在 3.4 版本之前，你一般会按照如下的方式来实现上述相同的子组件：
 * :value="modelValue"
 * @input="emit('update:modelValue', $event.target.value)"
 */
const model = defineModel()
</script>
<style lang="scss" scoped></style>