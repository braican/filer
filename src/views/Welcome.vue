<template>
  <div class="login">
    <h2>Login with Gmail</h2>
    <button @click="login">
      Sign in
    </button>
  </div>
</template>

<script>
import { auth, authProvider } from '@/firebase';

export default {
  name: 'Welcome',
  data() {
    return {};
  },
  methods: {
    login() {
      auth.signInWithPopup(authProvider).then(
        user => {
          /* eslint-disable */
          console.log(user);

          // this.$store.commit('setCurrentUser', user.user);
          // this.$store.dispatch('fetchUserProfile', user.user);
          this.$router.replace('dashboard');
        },
        error => {
          console.error(error);
        }
      );
    },
  },
};
</script>
