
<template>
  <section class="games">
    <h1>Tic tac toe games</h1>
    <p>Welcome to the best game in the world.</p>
    <GamesToggle @toggle="toggleGames" ref="gameToggle"/>
    <Board v-if="showTicTacToe"/>
    <Board4inRow v-else/>
  </section>
</template>


<script>
import '@/styles/tic-tac-toe.scss';
import Board4inRow from './4-in-a-row/Board4inRow'
import Board from './tic-tac-toe/Board';
import GamesToggle from './GamesToggle';

export default {
  name: 'TicTacToe',
  components: {
    Board,
    Board4inRow,
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