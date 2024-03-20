<template>
    <div>
        <button @click="Login">登录</button>
        {{ name }}
        {{ age }}
        {{ id }}
        {{ bigAge }}
        {{ userInfo.id }}
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLoginStore } from '@/store/Login'
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import Per from '@/types/classPerson'

const router = useRouter();
const loginStore = useLoginStore()
console.log(loginStore)
console.log(Per)

let ces = ref('小天')
//可以使用storeToRefs来获取store里面的响应式数据
let { name, age, id, bigAge, userInfo } = storeToRefs(loginStore)
console.log(userInfo)
loginStore.$subscribe((mutate, state) => {
    //实现页面刷新数据不丢失，配合localStorages
    console.log(mutate, state)
})
function Login() {
    //pinia修改数据的第一种中方式
    // loginStore.name = 'hahah'

    //pinia修改数据的第二种中方式
    loginStore.$patch({
        name: "hahah",
        id: '123',
        age: 26,
        userInfo: {
            name: '123',
            age: 67,
            id: "wsadas"
        }
    })

    //pinia修改数据的第三种中方式
    // loginStore.change(ces.value)
    router.replace("/main/home?name=ces&id=123&age=19")
}
</script>

<style scoped></style>