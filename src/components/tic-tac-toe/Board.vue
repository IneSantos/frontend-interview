<template>
  <div class="tictactoe-board">
    <div class="grid">
      <div v-for="(row, row_index) in 3" :key="row">
        <div v-for="(column, column_index) in 3" :key="column">
          <Cell :value="board[row_index][column_index]"  @click="playMove(row_index,column_index)"/>
        </div>
      </div>
    </div>

    <div class="score">
      <Player name="Player 1" :score="player1"/>
      <StopWatch ref="stopwatch"/>
      <Player name="Player 2" :score="player2"/>
    </div>
  </div>
</template>

<script>
import '@/styles/tic-tac-toe/board.scss';
import Player from './Player';
import Cell from './Cell';
import StopWatch from './StopWatch'

export default {
  name: 'TicTacToe',
  components: {
    Player,
    Cell,
    StopWatch
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
      stalemate: false,
      watchStarted: false
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
        if(!this.watchStarted){
          this.$refs.stopwatch.start();
          this.watchStarted = true;
        }

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
      resetBoard: function() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
          ];
        this.finished = false;
        this.stalemate = false;  
        this.watchStarted = false;
      },
      updateScore: function() {
        if(!this.finished) return;
        this.player === "x" ? ++this.player1 : ++this.player2;
        this.$refs.stopwatch.stop();
        this.$refs.stopwatch.reset();
        this.resetBoard();
      }

  }

}
</script>