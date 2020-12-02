import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Like from '@/pages/Like/Like.vue';
import Dislike from '@/pages/Dislike/Dislike.vue';
import PageNotFound from '@/pages/PageNotFound/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curtidos',
    name: 'Like',
    component: Like
  },
  {
    path: '/naocurtidos',
    name: 'Dislike',
    component: Dislike
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;