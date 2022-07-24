<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="card">
      <h2 class="card__title">{{ dataCar.name }}</h2>
      <img
        class="card__img"
        :src="dataCar.background_image"
        :alt="dataCar.name"
      />
      <div class="card__data">
        <p>id : {{ dataCar.id }}</p>
        <p>slug : /{{ dataCar.slug }}</p>
        <p>released : {{ dataCar.released }}</p>
        <p>
          Genres:
          <!-- <span :key="index" v-for="(dataCar.genre, index) in genres"> {{ genre.name }}, </span> -->
        </p>
        <!-- <input v-on:input="handleChange" :value="valText" /> -->
        <p :value="valText">{{ valText }}</p>
        <!-- <button :key="id" v-on:click="handleClick">DEL</button> -->
      </div>
    </div>

    <div class="card__video">
      <video autoplay="" controls="" loop="" :src="clip"></video>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
// import { } from 'vue-router'
export default {
  setup() {
    const URL = "https://apis.wilders.dev/wild-games/games";
    const idParam=3498;

    const valText = ref("VALtEXT");
    const dataCar = ref([]);
    const idClick = ref(0);
    const clip = ref("");

    console.log(clip);
    onMounted(() => {
      console.log("onMounted");
      return getData();
    }),
      () => {
        console.log("onMounted");
        return getData();
      };

    const getData = () => {
      console.log("getDAta fct");
        axios.get(`${URL}/${idParam}`).then((res) => {
        console.log(res.data);
        console.log('firest',res.data)
           clip.value = res.data.clip.clips.full;
        dataCar.value = res.data;

      }).then((da)=>{
        console.log('da',da)
       
      });
    };
    // computed(() => {
    //     const cssvar = () => {
    //         return {
    //             "--primary-color": "red",
    //             "--border-color ": "yellow",
    //         };
    //     };
    //     return (cssvar.value = cssvar);
    // });

    // const handleClick = (event) => {
    //     console.log(event.target, 'id supp--->', props.id);
    //     return (idClick.value = props.id);
    // };

    // const handleChange = (event) => {
    //     // console.log(event.target.value);
    //     console.log(event.target);
    //     return (valText.value = event.target.value);
    // };

    // onUpdated(() => {
    //     console.log("onUpdateed game");
    // });

    return {
      dataCar,
      idClick,
      valText,
      clip,

      // RouteParams
    };
  },
};
</script>

<style scoped>
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


.container{
    display:flex;
    align-content: space-around;
    justify-content:center;
    justify-items: center;
    flex-flow: row wrap;

}

.card__video{
    margin:auto;
}
.card__video video {
  margin: auto;
  width: 80%;
  border: 1px solid white;
  border-radius: 7px;
}
</style>
