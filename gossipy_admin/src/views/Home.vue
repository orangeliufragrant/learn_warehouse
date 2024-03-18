<template>
    <div>
        首页
        <br>
        {{ name }}
        <br>
        {{ id }}
        <hr>
        {{ age }}
        <hr>
        <Ces></Ces>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Ces from '@/components/ces.vue'
defineProps(['name', 'id', 'age'])//接收参数
</script>

<style scoped></style>