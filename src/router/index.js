import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import GameDetailView from "../view/GameDetailsView.vue";

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
      component: GameDetailView,
    },
   
  ],
});

export default router;
