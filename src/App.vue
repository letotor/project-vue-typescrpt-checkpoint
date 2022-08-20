<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home ></RouterLink>
        <RouterLink to="/card-detail"> Card Details ></RouterLink>
      </nav>
    </div>

    <!-- <button @click="handleClick" >Ok</button> -->
  </header>
  <RouterView />
</template>

<style scoped lag="scss">
nav {
  font-size: 2rem;
}
</style>
