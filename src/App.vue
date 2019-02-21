<template>
  <div id="app">
    <router-view />
    <footer>&copy; {{ new Date().getFullYear() }}. Nick Braica</footer>
  </div>
</template>

<script>
import '@/styles/global.scss';

export default {
  name: 'App',
};
</script>