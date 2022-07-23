<!--  ESLINT disabled -->
<template >
    <div class="maClasse">
  <p>Ceci est un producList avec configuration du setup a l'interieur + {{data}}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const data =ref('test');
const name = ref("test")


const handleTest = () => {
}
 

</script>


<style scope>
    .maClasse{
        color:blueviolet
    }
</style>