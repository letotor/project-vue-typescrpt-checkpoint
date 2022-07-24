<!--  ESLINT disabled -->
<template>
  <h1>Bienvenu sur l'API WIlder sous VUE3 composition</h1>
  <!-- <pre >{{ JSON.stringify(dataCar,null,2)}}</pre> -->
  <div class="container">
    <div v-for="item in dataCar" :key="item.id">
      <br />
      <NavLink @click="navigate">
        <Game
          :id="item.id"
          :slug="item.slug"
          :released="item.released"
          :image="item.background_image"
          :genres="item.genres"
          :name="item.name"
          @click="navigateToDetail"
          @send-id-card="gestionnaire"
        />
      </NavLink>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, computed } from "vue";

// import {router} from 'vue-router'
import axios from "axios";
import Game from "./Game.vue";

export default {
  setup() {
    const URL = "https://apis.wilders.dev/wild-games/games/";
    const  dataCar = ref([]);
    const  dataCarFilter = ref([]);
    const idLink = ref(0);

    // const result = await axios.get(URL).data
    // characters = result;
    computed(() => {
      const cssvar = () => {
        return {
          "--primary-color": "red",
          "--border-color ": "yellow",
        };
      };
      return (cssvar.value = cssvar);
    });



    const gestionnaire = (id) => {
      idLink.value = id;
      console.log("receive id", idLink);
      filterCharacter(idLink);
      console.log(dataCarFilter.value);
    };

    const navigate = () => {
      console.log("detal de la card redirection");
    };

    const filterCharacter = (id) => {
      console.log('datacar',dataCar.value);

      const  dataIn = dataCarFilter.value ;
      console.log('datain',dataIn)
      dataCarFilter.value =dataCar.value.filter(elt =>{
          
          console.log('eltttttttttt',elt)

        return elt.id !== id
      } )
    };

    const handleClick = (event) => {
      console.log(event.target);
      console.log("hadnelclik ------", idLink.value);
      return idLink.value += 1;
    };
    const handleChange = (event) => {
      console.log(event.target);
    };

    onUpdated(() => {


    });

    onMounted(() => {
      console.log("onMounted");
      return getData();
    });
    const getData = () => {
      console.log("getDAta fct");
      axios.get(URL).then((res) => {
          dataCar.value = res.data;
        console.log("getDAta", dataCar);
      });
    };

    return {
      dataCar,
      dataCarFilter,
      idLink,
      getData,
      handleClick,
      handleChange,
      navigate,
      filterCharacter,
      gestionnaire,
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
