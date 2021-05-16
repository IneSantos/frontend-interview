<template>
  <div id="app">
    <Header/>
    <Profile/>
    <TicTacToe/>
    <Statistics/>
    <Footer/>
  </div>
</template>

<script>
import '@/styles/main.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Profile from './components/Profile.vue';
import TicTacToe from './components/TicTacToe.vue';
import Statistics from './components/Statistics.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Profile,
    TicTacToe,
    Statistics
  },
  computed: {
    numOfgames () {
      return this.$store.getters.numOfgames;
    }
  },
  watch: {
    numOfgames: function () {
      console.log("numOfgames", this.numOfgames)
    }
  }
}
</script>

<style lang="scss">
  @font-face {
      font-family: "GlacialIndifferenceRegular";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("GlacialIndifferenceRegular"), url("./fonts/glacialindifference-regular-webfont.ttf") format('truetype');
      src: local("GlacialIndifferenceRegular"), url("./fonts/glacialindifference-regular-webfont.woff") format("woff");
  }

  @font-face {
      font-family: "GlacialIndifferenceBold";
      font-style: bold;
      font-weight: 400;
      font-display: swap;
      src: local("GlacialIndifferenceBold"), url("./fonts/glacialindifference-bold-webfont.ttf") format('truetype');
      src: local("GlacialIndifferenceBold"), url("./fonts/glacialindifference-bold-webfont.woff") format("woff");
  }

  @font-face {
      font-family: "GlacialIndifferenceItalic";
      font-style: italic;
      font-weight: 400;
      font-display: swap;
      src: local("GlacialIndifferenceItalic"), url("./fonts/glacialindifference-italic-webfont.woff") format("woff");
  }
</style>
