<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h2 class="card__title">{{name}}</h2>
    <img class="card__img" :src="image" :alt="name" />
    <div class="card__data">
      <p>id : {{ id }}</p>
      <p>slug : /{{ slug }}</p>
      <p>released : {{ released }}</p>
      <p> Genres:
        <span :key="index" v-for="(genre,index) in genres"> {{ genre.name }}, </span>
      </p>
      <input v-on:input="handleChange" :value="valText" />
      <p :value="valText">{{ valText }}</p>
      <!-- <button @click="emitCustomEvent">Cliquer</button> -->
      <button :key="id" v-on:click="handleClick">DEL</button>
    </div>
  </div>
</template>

<script>

import { ref, reactive, onUpdated, computed } from "vue";

export default {
  props: {
    id: Number,
    name:String,
    slug: String,
    released:String,
    image: String,
    genres:Array
  },
  
  setup(props,context) {
    
     console.log(props.genres,context);
    const valText = ref("VALtEXT");
    const dataCar = ref([]);
    let idClick = reactive(0);


 
    computed(() => {
      const cssvar = () => {
        return {
          "--primary-color": "red",
          "--border-color ": "yellow",
        };
      };
      return (cssvar.value = cssvar);
    });

    const handleClick = (event) => {
      console.log(event.target,'id supp--->',props.id);
      idClick = props.id;
      context.emit('sendIdCard', idClick);
    };

    const handleChange = (event) => {
      // console.log(event.target.value);
      console.log(event.target);
      return (valText.value = event.target.value);
    };

    onUpdated(() => {
      console.log("onUpdateed game");
    });


    return {
      dataCar,
      idClick,
      valText,
      handleClick,
      handleChange,
      props,
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
</style>
