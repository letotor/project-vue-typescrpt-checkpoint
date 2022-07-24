<!--  ESLINT disabled -->
<template>
  <h1>Bienvenu sur l'API WIlder sous VUE3 composition</h1>
  <!-- <pre >{{ JSON.stringify(dataCar,null,2)}}</pre> -->
  <div class="container">
    <div :style="cssvar" class="card" v-for="item in dataCar" :key="item.id">
      <br />
      <h2 class="card__title">{{ item.name }}</h2>
      <img class="card__img" :src="item.background_image" :alt="item.name" />
      <div class="card__data">
        <p>id : {{ item.id }}</p>
        <p>slug : {{ item.slug }}</p>
        <p>released : {{ item.released }}</p>
        <button @click="handleClick($emit)">DEL</button>
      </div>

      <!-- {{ `${item.id} ${item.background_image} ${item.slug} ${item.released}` }} -->
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  onMounted,
  onUpdated,
  computed,
  //   onBeforeMount,
  //   onBeforeUpdate,
  //   watchEffect,
} from "vue";
import axios from "axios";
export default {
  setup() {
    const URL = "https://apis.wilders.dev/wild-games/games/";
    const data = ref("API ");
    const characters = reactive("");
    const cssvar = ref("");
    const dataCar = ref([]);

    // const result = await axios.get(URL).data
    // characters = result;

    computed(() => {
      const cssvar = () => {
        return {
          "--primary-color": "red",
          "--border-color ": "yellow",
        };
      };
      return (css.value = cssvar);
    });

    const handleClick = (e) => {
      console.log(e);
    };

    // onMounted((characters)=>{
    //     axios.get(URL).then(res => {
    //        characters = res.data
    //        console.log("caracters",characters)
    //     })
    // })
    onUpdated(() => {
      // return characters = JSONS.stringify(getData())
      console.log("onUpdateed");
    });

    onMounted(() => {
      console.log("onMounted");
      let d = getData();
      console.log("d", dataCar.value);
      return d;
    });

    const getData = () => {
      console.log("getDAta fct");
      axios.get(URL).then((res) => {
        console.log(res.data);
        dataCar.value = res.data;
        //    return  res.data
      });
    };

    return {
      data,
      characters,
      getData,
      handleClick,
      dataCar,
      cssvar,
    };
  },
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
  paddng-right: 1rem;
}
.card button:hover {
  cursor: pointer;
  color: white;
}
</style>
