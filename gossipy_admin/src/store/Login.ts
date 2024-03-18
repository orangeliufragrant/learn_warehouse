import { defineStore } from 'pinia'

// export const useLoginStore = defineStore('Login', {

//     state() {
//         return {
//             name: "ces",
//             id: "1234568",
//             age: 56
//         }
//     },
//     //放置方法，响应组件中的动作
//     actions: {
//         change(value: string) {
//             console.log(value)
//             //this是state
//             this.name = value
//         }
//     },
//     getters: {
//         bigAge(state) {
//             return state.age * 10
//         },
//     },
// })
import { reactive, ref, computed } from 'vue'
export const useLoginStore = defineStore('Login', () => {
    const userInfo = reactive({
        name: "ces",
        id: "1234568",
        age: 56
    })
    let name = ref('ces')
    let id = ref('1234568')
    let age = ref(56)
    function change(value: string) {
        console.log(value)
        name.value = value
    }

    const bigAge = computed(() => age.value * 10)
    return { name, id, age, userInfo, bigAge, change }
})
