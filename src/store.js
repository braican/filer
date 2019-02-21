import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from '@/firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {},
  actions: {},
});

auth.onAuthStateChanged(user => {
  if (user) {
    // store.commit('setCurrentUser');
    // console.log(user);
  }
});
