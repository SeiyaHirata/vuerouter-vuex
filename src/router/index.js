import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Event from "@/views/Event.vue"; // 新しく作成したEvent.vueをインポート

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/event/:eventNo", // 動的URL
    name: "Event",
    component: Event
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
