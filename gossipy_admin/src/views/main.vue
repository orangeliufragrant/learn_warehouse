<template>
    <div class="main">
        <h2>vue路由测试</h2>
        <div class="navigate">
            <RouterLink to="/main/home">首页</RouterLink>
            <RouterLink to="/main/news">新闻</RouterLink>
            <RouterLink to="/main/about">关于</RouterLink>
        </div>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" name="main" setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style  scoped>
.main {
    background-color: antiquewhite;
}

.navigate {
    background-color: aqua;
}
</style>