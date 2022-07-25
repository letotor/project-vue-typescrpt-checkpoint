<template>
  <main>
    <!-- <Suspense> -->

    <GameList />
    <!-- </Suspense> -->
  </main>
</template>

<script>
import GameList from "../components/GameList.vue";

export default {
  name: "HomeView",
  setup() {},
  components: { GameList },
};
</script>
