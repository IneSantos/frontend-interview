<template>
  <div class="board-4inRow">
    <div class="grid">
      <div v-for="(column, column_index) in 7" :key="column" class="col" @click="playMove(column_index)"  :ref="`col-${column_index}`">
        <div v-for="(row, row_index) in 6" :key="row">
            <div class="cell">
                <span v-if="!isDot(board[row_index][column_index])">{{board[row_index][column_index]}}</span>
                <span v-if="isDot(board[row_index][column_index])" class="dot" :class="[getDotColor(board[row_index][column_index])]"></span>
            </div>
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
import '@/styles/4-in-a-row/board4inRow.scss'
import Player from '../tic-tac-toe/Player';
import StopWatch from '../tic-tac-toe/StopWatch';

export default {
  name: 'Board4inRow',
  components: {
      Player,
      StopWatch
  },
  data() { 
    return {
      board: [
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
      ],
      player: "r",
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
      this.winner = this.player1 > this.player2 ? "P1" : "P2";
      this.$store.dispatch('setGameHistory', this.winner);
      
      setTimeout( () => {
        this.scrollToStats();
      }, 1000); 
    }
  },
  methods: {
        playMove(col) {            
            if (this.finished) {
                return;
            }

            this.updateBoard(col);
            this.$forceUpdate();

            if(!this.watchStarted){
                this.$refs.stopwatch.start();
                this.watchStarted = true;
                this.$store.dispatch('setGameStart', true);
            }
            
            if (this.checkFourConnected(this.player)) {
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
            this.player = this.player === "r" ? "g" : "r";
        },  
        checkStalemate: function() {
            return !this.finished && !this.board.flat().includes('');
        },  
        isDot: function(value) {
            return value !== '';
        },
        getDotColor: function (value) {
            return value === 'r' ? 'red' : 'green';
        },
        resetBoard: function() {
            this.board = [
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
            ];
            this.finished = false;
            this.stalemate = false;  
            this.watchStarted = false;
        },
        updateScore: function() {
            if(!this.finished) return;

            if(!this.stalemate) this.player === "r" ? ++this.player1 :  ++this.player2;

            this.$store.dispatch('setWinsPlayer1', this.player1);
            this.$store.dispatch('setWinsPlayer2', this.player2);
            this.$store.dispatch('incNumOfGames');

            this.$refs.stopwatch.stop();
            this.$refs.stopwatch.reset();

            setTimeout( () => {
                this.resetBoard();
            }, 1200); 
        },
        scrollToStats: function() {
            if(!this.finished5rounds) return; 

            let container = document.getElementById("statistics");
            container.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest'});
        },
        updateBoard: function(col) {
            for (let i = 0; i < 6; i++) {
                if(this.board[5-i][col] === '') {
                    this.board[5-i][col] = this.player;
                    break;
                }
            }
        },
        checkFourConnected: function (player) {
                // horizontalCheck 
                for (let j = 0; j < this.board[0].length-3 ; j++ ){
                    for (let i = 0; i < this.board.length ; i++){
                        if (this.board[i][j] == player && this.board[i][j+1] == player && this.board[i][j+2] == player && this.board[i][j+3] == player){
                            return true;
                        }           
                    }
                }
                // verticalCheck
                for (let i = 0; i < this.board.length -3 ; i++ ){
                    for (let j = 0; j < this.board[0].length; j++){
                        if (this.board[i][j] == player && this.board[i+1][j] == player && this.board[i+2][j] == player && this.board[i+3][j] == player){
                            return true;
                        }           
                    }
                }
                // ascendingDiagonalCheck 
                for (let i=3; i < this.board.length; i++){
                    for (let j=0; j < this.board[0].length-3; j++){
                        if (this.board[i][j] == player && this.board[i-1][j+1] == player && this.board[i-2][j+2] == player && this.board[i-3][j+3] == player)
                            return true;
                    }
                }
                // descendingDiagonalCheck
                for (let i=3; i < this.board.length; i++){
                    for (let j=3; j < this.board[0].length; j++){
                        if (this.board[i][j] == player && this.board[i-1][j-1] == player && this.board[i-2][j-2] == player && this.board[i-3][j-3] == player)
                            return true;
                    }
                }
            
            return false;
        }
  }

}
</script>