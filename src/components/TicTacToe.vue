
<template>
  <section class="games">
    <h1>Tic tac toe games</h1>
    <p>Welcome to the best game in the world.</p>
    <GamesToggle @toggle="toggleGames"/>
    <Board/>
  </section>
</template>


<script>
import '@/styles/tic-tac-toe.scss'; 
import Board from './tic-tac-toe/Board';
import GamesToggle from './GamesToggle';

export default {
  name: 'TicTacToe',
  components: {
    Board,
    GamesToggle
  }, 
  data() {
    return {
      showTicTacToe: true,
    };
  },
  methods: {
      toggleGames(showTicTacToe) {
          this.showTicTacToe = showTicTacToe;
      },
  }
}
</script>