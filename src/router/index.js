import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import StartPage from "../components/StartPage1.vue";
import QuizPage from "../components/About.vue";
import StoryView from "../views/StoryView.vue";
import AboutView from "../views/AboutView.vue";
import QuizPage1 from "../components/QuizPage.vue";

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  { path: "/", component: StartPage },
  { path: "/quiz", component: QuizPage },
  { path: "/story", component: StoryView },
  { path: "/test", component: QuizPage1 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
