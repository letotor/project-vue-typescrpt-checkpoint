
<template>
  <div class="card">
    <h2 class="card__title">{{ game.name }}</h2>
    <img class="card__img" :src="game.background_image" :alt="game.name" />
    <div class="card__data">
      <p>id : {{ game.id }}</p>
      <p>slug : /{{ game.slug }}</p>
      <p>released : {{ game.released }}</p>
      <p>rating : {{ game.rating }}</p>
      <p>
        Genres:
        <span :key="index" v-for="(genre, index) in game.genres">
          {{ genre.name }}
          <span> , </span>
        </span>
      </p>
      <!--<button @click="emitCustomEvent">Cliquer</button> -->
      <button :key="game.id" @click="deleteGameById(game.id)">DEL</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameInterface } from "../interfaces/index";
import { ref } from "vue";


defineProps<{
  game: GameInterface;
}>();

const idClick = ref(0);
const emitGameDelete= defineEmits<{
   (e: 'removeGame', gameId: number): void;
 }>();

const deleteGameById = (id: number) => {
  idClick.value = id;
  console.log("idClick", id);
  emitGameDelete('removeGame', id);
};
</script>

<style scoped lang="scss">
.card {
  color: var(--primary-color);
  border-radius: 7px;
  background-color: var(--bg-color);
  width: 400px;
  height: 500px;
  border: 1px solid var(--border-color);
  margin: 1rem;
  transition: 0.6s 0s ease-in-out;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.08);
}

.card__title {
  text-align: center;
  margin-bottom: 1rem;
}

.card__img {
  width: 398px;
  height: 250px;
  object-fit: cover;
}

.card button {
  border-radius: 7px;
  color: orange;
  margin-top: 1rem;
  display: flex;
  margin: auto;
  text-align: center;
  font-size: 2rem;
}

.card__data p {
  padding-left: 1rem;
  padding-right: 1rem;
}

.card__data input {
  margin-left: 1rem;
  margin-right: 1rem;
}

.card button:hover {
  cursor: pointer;
  color: white;
}
</style>
