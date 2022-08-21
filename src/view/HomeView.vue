<template>
  <main>
    <button @click="handleClickFilter">
      Rating > 4.5 {{ isFilter ? "On " : "Off " }}
    </button>
    <GameList :is-actif="isFilter" />
  </main>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import GameList from "../components/GameList.vue";
import { ref } from "vue";

const isFilter = ref(false);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleClickFilter = () => (isFilter.value = !isFilter.value);
</script>

<style scoped lang="scss">
button {
  border-radius: 7px;
  color: rgba(122, 230, 129, 1);
  background-color: white;
  margin-top: 1rem;
  margin: auto;
  text-align: center;
  font-size: 2rem;
  transition: 0.6s 0s ease-in-out;
  border: 2px solid orange;
}
button:hover {
  background-color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
  border: 2px solid transparent;
  transform: scale(1.05);
}
</style>
