<script setup>
import { RouterLink, RouterView } from "vue-router";





const handleClick = (e)=>{
console.log('test')

}

</script>

<template>
  <header>
    <div class="wrapper">


      <nav>
        <RouterLink to="/">Home ></RouterLink>
        <RouterLink to="/card-filter">Card Filter ></RouterLink>
      </nav>
    </div>

    <!-- <button @click="handleClick" >Ok</button> -->
  </header>

  <RouterView />
</template>

<style scoped>
nav{
  font-size:2rem;
}
</style>
