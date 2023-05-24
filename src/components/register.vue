<template>
    <div>
        <h1>基本类型</h1>
        <p>nub:{{ nub }}</p>
        <p>str:{{ num1 }}</p>
        <p>boo:{{ boo }}</p>
        <h1>引用类型</h1>
        <p>obj:{{ obj.name }}</p>
        <p>arr:{{ fullName }}</p>
        <button @click="nub++">++</button>
    </div>
</template>




<style scoped></style>
<script  lang="ts">
    import {ref,reactive,computed} from 'vue'
    export default {
        name: "register",
        setup(){
            // 基本类型
            const nub = ref(0)
            const str = ref('inline')
            const boo = ref(false)
            // 引用类型
            const obj = reactive({
                name: 'inline',
                age: '18'
            })
            const arr = reactive(['0', '6', '2'])
            const firstName = ref('hello')
            const lastName = ref('world')
            const fullName = computed(() => {
                return firstName.value + '-·-' + lastName.value
            })
            const num1=computed(()=>{
                return nub.value+5
            })

            return {
                nub,
                str,
                boo,
                obj,
                arr,
                fullName,
                num1
            }
        }

    }
</script>

<style scoped>

</style>