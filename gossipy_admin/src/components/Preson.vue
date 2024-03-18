<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>电话：{{ tel }}</h2>
    <button @click="add">点我</button>
    <button @click="change">修改</button>
    <h1>{{ form.name }}</h1>
  </div>
</template>

<script setup lang="ts" name="Preson">
import { reactive, ref ,toRefs,defineExpose} from "vue";
let name = ref("zhngs");//定义响应式数据
let age = ref("18");
let tel = ref("13288888888");
let form = reactive({
  name: "",
}); //定义响应式对象，reactive定义的响应式对象不能直接修改，可以使用Object.assign(要修改的对象,替换的数据1,替换的数据2,...)

let ces = reactive({
    cesname:"hah",
    cesage:12,
})
let {cesname,cesage} = toRefs(ces)//将解构出来的对象变为响应式数据，toRefs是将整个对象，toRef是将单个值解构为响应式
console.log(cesname)
console.log(cesage)
let add = () => {
  alert(name.value);
};

let change = () => {
  name.value = "ces";
  form.name = "111";
};

defineExpose({name,age})//将值传递给父组件的ref
</script>

<style>
</style>