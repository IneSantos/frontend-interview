<template>
  <div class="tictactoe-board">
    <div v-if="finished5rounds" class="status">
      <div v-if="stalemate" class="result stale">It's a draw!<br>Stalemate!</div>
      <div v-else class="result">Finished!<br><span class="winner">{{winner}}</span> wins!</div>
    </div>

    <div class="grid">
      <div v-for="(row, row_index) in 3" :key="row">
        <div v-for="(column, column_index) in 3" :key="column">
          <Cell :value="board[row_index][column_index]"  @click="playMove(row_index,column_index)"/>
        </div>
      </div>
    </div>

    <div class="score">
      <Player name="Player 1" :score="player1" class="score-info"/>
      <StopWatch ref="stopwatch" class="score-info"/>
      <Player name="Player 2" :score="player2" class="score-info"/>
    </div>
  </div>
</template>

<script>
import '@/styles/tic-tac-toe/board.scss';
import Player from './Player';
import Cell from './Cell';
import StopWatch from './StopWatch';

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
      watchStarted: false,
      finished5rounds: false,
      winner: ''
    }
  },
  computed: {
    numOfgames () {
      return this.$store.getters.getNumOfGames;
    }
  },
  watch: {
    numOfgames: function () {
      this.finished5rounds =  this.numOfgames === 4;
      this.winner = this.player1 >  this.player2 ? "P1" : "P2";
      this.$store.dispatch('setGameHistory', this.winner);
    }
  },
  methods: {
      playMove(x, y) {
        if (this.finished || this.board[x][y] !== '') {
          return;
        }

        this.board[x][y] = this.player;
        this.$forceUpdate();

        if(!this.watchStarted){
          this.$refs.stopwatch.start();
          this.watchStarted = true;
          this.$store.dispatch('setGameStart', true);
        }

        this.finished = this.checkWinner() || this.checkStalemate();
        this.stalemate = this.checkStalemate();
        console.log("finished", this.finished);
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

        this.player === "x" ? ++this.player1 :  ++this.player2;
        this.$store.dispatch('setWinsPlayer1', this.player1);
        this.$store.dispatch('setWinsPlayer2', this.player2);
        this.$store.dispatch('incNumOfGames');

        this.$refs.stopwatch.stop();
        this.$refs.stopwatch.reset();
        this.resetBoard();
      }

  }

}
</script>