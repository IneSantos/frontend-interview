<template>
  <div id="app">
    <Header/>
    <Profile/>
    <TicTacToe/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Profile from './components/Profile.vue';
import TicTacToe from './components/tic-tac-toe/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Profile,
    TicTacToe
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E30;
}
</style>
