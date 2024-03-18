
import { ref } from "vue";
export default function () {
    let sum = ref(0);
    //https://dog.ceo/api/breed/pembroke/images/random
    function add() {
        sum.value += 1;
    }
    return {sum,add}
}
