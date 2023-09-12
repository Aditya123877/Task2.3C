
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue'; // Import your Home component
import About from './components/About.vue'; // Import your About component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
