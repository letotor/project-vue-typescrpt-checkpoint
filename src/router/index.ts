import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import GameDetailsView from "../components/GameDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/card-detail/:id",
      name: "card-detail",
      component: GameDetailsView,
    },
   
  ],
});

export default router;
