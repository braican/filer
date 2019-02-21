import Vue from 'vue';
import Router from 'vue-router';

import firebase from 'firebase/app';
import 'firebase/auth';

import Welcome from '@/views/Welcome.vue';
import Dashboard from '@/views/Dashboard.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Welcome,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAnonymous = to.matched.some(record => record.meta.requiresAnonymous);

  if (!currentUser && requiresAuth) {
    next('home');
  } else if (currentUser && requiresAnonymous) {
    next('dashboard');
  } else {
    next();
  }
});

export default router;
