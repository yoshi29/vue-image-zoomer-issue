import "./assets/styles/index.css";
import "primeicons/primeicons.css";

import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import ZoomerView from "./views/ZoomerView.vue";

const routes = [{ path: "/", component: ZoomerView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(PrimeVue).mount("#app");
