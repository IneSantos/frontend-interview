<template>
  <div class="tictactoe-board">
    <div class="grid">
      <div v-for="(row, row_index) in 3" :key="row">
        <div v-for="(column, column_index) in 3" :key="column">
          <cell :value="board[row_index][column_index]"  @click="playMove(row_index,column_index)"/>
        </div>
      </div>
    </div>

    <div class="score">
      <Player name="Player1" :score="player1"/>

      <Player name="Player2" :score="player2"/>
    </div>
  </div>
</template>

<script>
import '@/styles/tic-tac-toe/tictactoe.scss';
import Player from './Player';

export default {
  name: 'TicTacToe',
  components: {
    Player
  },
  data() { 
    return {
      board:  [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: "x",
      player1: 0,
      player2: 0,
      finished: false,
      stalemate: false
    }
  },
  methods: {
      playMove(x, y) {
        if (this.finished || this.board[x][y] !== '') {
          // Invalid move.
          return;
        }

        this.board[x][y] = this.player;
        this.$forceUpdate();

        this.finished = this.checkWinner();
        this.stalemate = this.checkStalemate();
        this.updateScore();
        this.nextPlayer();
        
      },
      nextPlayer: function() {
        this.player = this.player === "x" ? "o" : "x";
      },  
      checkStalemate: function() {
        return (
          !this.finished &&
          this.checkValuesPresent(this.board[0]) &&
          this.checkValuesPresent(this.board[1]) &&
          this.checkValuesPresent(this.board[2])
        );
      },
      checkWinner: function() {
        return (
          this.checkValues(this.board[0]) ||
          this.checkValues(this.board[1]) ||
          this.checkValues(this.board[2]) ||
          this.checkValues([this.board[0][0], this.board[1][0], this.board[2][0]]) ||
          this.checkValues([this.board[0][1], this.board[1][1], this.board[2][1]]) ||
          this.checkValues([this.board[0][2], this.board[1][2], this.board[2][2]]) ||
          this.checkValues([this.board[0][0], this.board[1][1], this.board[2][2]]) ||
          this.checkValues([this.board[0][2], this.board[1][1], this.board[2][0]])
        );
      },
      checkValues: function(values) {
        return this.checkValuesPresent(values) && this.checkValuesMatch(values);
      },
      checkValuesPresent: function(values) {
        return values[0] !== "" && values[1] !== "" && values[2] !== "";
      },
      checkValuesMatch: function(values) {
        return values[0] === values[1] && values[1] === values[2];
      },
      updateScore: function() {
        if(this.finished) return;
        this.player === "x" ? ++this.player1 : ++this.player2;
      }

  }

}
</script>