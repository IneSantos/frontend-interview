<template>
  <div class="tictactoe-board">
    <div class="grid">
      <div v-for="(row, row_index) in 3" :key="row">
        <div v-for="(column, column_index) in 3" :key="column">
          <Cell :value="board[row_index][column_index]"  @click="playMove(row_index,column_index)" :ref="`cell-${row_index}-${column_index}`"/>
        </div>
      </div>
    </div>

    <div class="score">
      <Player name="Player 1" :score="player1" class="score-info"/>
      <StopWatch ref="stopwatch" class="score-info"/>
      <Player name="Player 2" :score="player2" class="score-info"/>
    </div>

    <div v-if="finished5rounds" class="status">
      <div v-if="stalemate" class="result stale">It's a draw!<br>Stalemate!</div>
      <div v-else class="result"><span class="winner">{{winner}}</span> wins!</div>
    </div>
    
  </div>
</template>

<script>
import '@/styles/tic-tac-toe/board.scss';
import Player from './Player';
import Cell from './Cell';
import StopWatch from './StopWatch';

export default {
  name: 'Board',
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
      this.finished5rounds =  this.numOfgames === 5 || this.player1 === 3 || this.player2 === 3;
      this.winner = this.player1 >  this.player2 ? "P1" : "P2";
      this.$store.dispatch('setGameHistory', this.winner);
      
      setTimeout( () => {
        this.scrollToStats();
      }, 1000); 
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

        if (this.checkWinner()) {
          this.finished = true;
        }
        else if (this.checkStalemate()) {
          this.stalemate = true;
          this.finished = true;
        } 
        
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

        if(!this.stalemate) this.player === "x" ? ++this.player1 :  ++this.player2;

        this.$store.dispatch('setWinsPlayer1', this.player1);
        this.$store.dispatch('setWinsPlayer2', this.player2);
        this.$store.dispatch('incNumOfGames');
        this.highLightWinner();

        this.$refs.stopwatch.stop();
        this.$refs.stopwatch.reset();

        setTimeout( () => {
          this.resetBoard();
        }, 1500); 
      },
      scrollToStats: function() {
        if(!this.finished5rounds) return; 

        let container = document.getElementById("statistics");
        container.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest'});
      },
      highLightWinner: function () {
       const index = [
          this.checkValues(this.board[0]), 
          this.checkValues(this.board[1]),
          this.checkValues(this.board[2]),
          this.checkValues([this.board[0][0], this.board[1][0], this.board[2][0]]),
          this.checkValues([this.board[0][1], this.board[1][1], this.board[2][1]]),
          this.checkValues([this.board[0][2], this.board[1][2], this.board[2][2]]),
          this.checkValues([this.board[0][0], this.board[1][1], this.board[2][2]]),
          this.checkValues([this.board[0][2], this.board[1][1], this.board[2][0]])
        ].indexOf(true);

        if(index === -1) return;

        const cases =  [
          [{row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2}],
          [{row: 1, col: 0}, {row: 1, col: 1}, {row: 1, col: 2}],
          [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
          [{row: 0, col: 0}, {row: 1, col: 0}, {row: 2, col: 0}],
          [{row: 0, col: 1}, {row: 1, col: 1}, {row: 2, col: 1}],
          [{row: 0, col: 2}, {row: 1, col: 2}, {row: 2, col: 2}],
          [{row: 0, col: 0}, {row: 1, col: 1}, {row: 2, col: 2}],
          [{row: 0, col: 2}, {row: 1, col: 1}, {row: 2, col: 0}],
        ]

        cases[index].forEach(elem => {
          this.$refs[`cell-${elem.row}-${elem.col}`][0].$el.style.color = '#00DCA4';

           setTimeout( () => {
              this.$refs[`cell-${elem.row}-${elem.col}`][0].$el.style.color = 'inherit';
            }, 1500); 
        })

        
      }
  }

}
</script>