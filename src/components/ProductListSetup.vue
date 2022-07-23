<template>
    <div>
       template base rendu dans productList Ancienne methode setup et a rendu
        {{a}}
    </div>
</template>



<script>
    import {ref} from 'vue'
   

   export default{
    name: "ProductListSetup",
    components: {},
    setup(){
    const a = ref(3);
        return {a}
            }
}

</script>