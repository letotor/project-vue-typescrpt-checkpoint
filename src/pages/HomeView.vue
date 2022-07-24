<script setup>


import {ref} from 'vue'

import productList from '../components/ProductList.vue' 
  const a = ref("test setup deport");
  console.log("homebiew form ", a);

</script>

<template>
  <main>
    <!-- <Suspense> -->

      <productList />
    <!-- </Suspense> -->
  </main>
</template>
