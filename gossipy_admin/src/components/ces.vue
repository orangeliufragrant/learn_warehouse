<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr />
    <img v-for="dog in dogList" :src="dog" :key="dog" alt="" />
    <button @click="getDog">再来一只修狗</button>
  </div>
</template>

<script lang="ts" setup name="ces">
import { type CesInter } from "@/types";
import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";

const { sum, add } = useSum();
const { dogList, getDog } = useDog();
</script>

<style scoped>
img {
  height: 100px;
  margin-right: 20px;
}
</style>