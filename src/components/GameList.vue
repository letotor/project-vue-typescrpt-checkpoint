<template>
  <h1>Bienvenu sur l'API Wilder sous VUE3 composition</h1>
  <!-- <pre >{{ JSON.stringify(dataCar,null,2)}}</pre> -->
  <div class="container">
    <div v-for="item in state.gameCustom" :key="item.id">
      <br />
      <!-- <router-link to="card-detail/3346"> -->
      {{ item.rating }}
      <Game
        v-if="isActif && item.rating > 4.2"
        :game="item"
        @remove-game="removeGame"
      />
      <Game v-if="!isActif" :game="item" @remove-game="removeGame" />
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
// import Navlink from 'vue-router';
import { useRoute } from "vue-router";

// import {router} from 'vue-router'
import axios from "axios";
import type { GameInterface } from "../interfaces/index";
import Game from "../components/Game.vue";

defineProps<{
  isActif?: boolean;
}>();

// const emit = defineEmits<{
//   (e: 'removeGame', gameId: number): void;
// }>();

// console.warn("----------->", isActif);
const URL = "https://apis.wilders.dev/wild-games/games/";

type stateInterface = {
  gamesList: GameInterface[];
  gameCustom: GameInterface[];
  idSelected?: number;
};
const dataGames = reactive<GameInterface[]>([]);
const state = reactive<stateInterface>({
  gamesList: [],
  gameCustom: [
    // {
    //   id: 0,
    //   slug: "/test",
    //   name: "mon titre",
    //   released: "2020-01-01",
    //   rating: 0,
    //   background_image:
    //     "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    // },
  ],
  idSelected: 0,
});

// const suppCaractereFct = (id) => {
//   idLink.value = id;
//   let idx = dataCarFilter.findIndex((elt) => elt.id == id);
//   console.log("receive id", idLink.value, idx);
//   dataCarFilter.splice(idx, 1);
// };
const removeGame = (gameId: number): void => {
  console.log("receive id", gameId);
  state.gameCustom = state.gameCustom.filter((gameDelete) => gameDelete.id !== gameId);
};

const navigateToDetail = () => {
  // console.log(event.target);
  console.log("hadnelclik ------");
  return state.idSelected == 10;
};

watchEffect(async () => {
  try {
    const res = await (await axios.get(URL)).data;
    state.gameCustom.push(...res);
    dataGames.push(...res);
    console.log(dataGames);
  } catch (error: Error) {
    console.log(error.message);
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
  /* display: flex;
  flex-flow: column wrap; */
  color: var(--primary-color);
  /* background-color: var(--bg-color); */
}

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
  color: white;
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
