<!--  ESLINT disabled -->
<template>
  <h1>Bienvenu sur l'API Wilder sous VUE3 composition</h1>
  <!-- <pre >{{ JSON.stringify(dataCar,null,2)}}</pre> -->
  <div class="container">
    <div v-for="item in dataCarFilter" :key="item.id">
      <br />
      <!-- <NavLink @click="navigate"> -->

      <Game v-if="isActif && item.rating>4.2" :id="item.id" :slug="item.slug" :released="item.released"
        :image="item.background_image" :rating="item.rating" :genres="item.genres" :name="item.name"
        @click="navigateToDetail" @send-id-card="suppCaractereFct" />

        <Game v-if="!isActif"  :id="item.id" :slug="item.slug" :released="item.released" :image="item.background_image"
          :rating="item.rating" :genres="item.genres" :name="item.name" @click="navigateToDetail"
          @send-id-card="suppCaractereFct" />
      <!-- </NavLink> -->
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from "vue";
// import Navlink from 'vue-router';

// import {router} from 'vue-router'
import axios from "axios";
import Game from "./Game.vue";

export default {
  props: {
    isActif: Boolean,
  },

  setup(props) {
    console.log("----------->", props.isActif);
    const URL = "https://apis.wilders.dev/wild-games/games/";
    let dataCar = reactive([
      {
        id: 0,
        slug: "mon-slug",
        background_image: "https://place-hold.it/300x500/666/fff.png/000",
        genres: [{ name: "Action" }, { name: "public" }],
        name: "Mon titre",
        rating: 3.5,
        released: "2022",
      },
    ]);

    let dataCarFilter = reactive([
      {
        id: 0,
        slug: "mon-slug",
        background_image: "https://place-hold.it/300x500/666/fff.png/000",
        genres: [{ name: "Action" }, { name: "public" }],
        name: "Mon titre",
        rating: 3.5,
        released: "2022",
      },
    ]);
    const idLink = ref(0);

    computed(() => {
      const cssvar = () => {
        return {
          "--primary-color": "red",
          "--border-color ": "yellow",
        };
      };
      return (cssvar.value = cssvar);
    });

    const suppCaractereFct = (id) => {
      idLink.value = id;
      let idx = dataCarFilter.findIndex((elt) => elt.id == id);
      console.log("receive id", idLink.value, idx);
      dataCarFilter.splice(idx, 1);
    };

    const handleClick = (event) => {
      console.log(event.target);
      console.log("hadnelclik ------", idLink.value);
      return (idLink.value += 1);
    };
    const handleChange = (event) => {
      console.log(event.target);
    };

    onMounted(() => {
      console.log("onMounted");
      return getData();
    });

    const getData = () => {
      console.log("getDAta fct");
      axios.get(URL).then((res) => {
        console.log(dataCar[1]);
        res.data.map((elt, index) => (dataCar[index] = elt));
        res.data.map((elt, index) => (dataCarFilter[index] = elt));
        return dataCar;
      });
    };

    // console.log('--------------->',dataCarFilter)
    return {
      props,
      dataCar,
      dataCarFilter,
      idLink,
      getData,
      handleClick,
      handleChange,

      suppCaractereFct,
    };
  },
  components: { Game },
};
</script>

<style scoped>
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
