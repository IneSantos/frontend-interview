
<template>
  <section class="statistics">
    <h1>Awesome statistics</h1>
    <p>All statistics in on place!</p>
    <div>
        <h1>Game victories %</h1>
        <div>
            <div class="stats-container">
                <p>Player 1</p>
                <div class="victory-loss">
                    <div class="stats">
                        <div class="statsCircle"> {{winsPlayer1}} </div>
                        <p>V</p>
                    </div> 
                    <div class="stats">
                        <div class="statsCircle"> {{lossPlayer1}} </div>
                        <p>L</p>
                    </div> 
                </div> 
            </div> 

            <div class="stats-container">
                <p>Player 2</p>
                <div class="victory-loss">
                    <div class="stats">
                        <div class="statsCircle"> {{winsPlayer2}} </div>
                        <p>V</p>
                    </div> 
                    <div class="stats">
                        <div class="statsCircle"> {{lossPlayer2}} </div>
                        <p>L</p>
                    </div>
                </div> 
            </div> 
        </div>
        <div>
            <h1>Played matchs</h1>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div>
            <h1>Game history</h1>
            <div class="history"> 
                <div v-for="(winner, index) in gameHistory" :key="index" class="winner">
                    {{winner}}
                </div>
            </div>
            
        </div>
        <div>
            <h1>Total time</h1>
            <StopWatch ref="stopwatch"/>
        </div>
    </div>
  </section>
</template>


<script>
import '@/styles/statistics.scss';
import StopWatch from './tic-tac-toe//StopWatch';

export default {
  name: 'Statistics',
  components: {
      StopWatch
  },
  computed: {
    winsPlayer1 () {
        const wins = +this.$store.getters.getWinsPlayer1;
        return (wins/5) * 100;
    },
    lossPlayer1 () {
        const loss = +this.$store.getters.getLossPlayer1;
        return (loss/5) * 100;
    },
    winsPlayer2 () {
        const wins = +this.$store.getters.getWinsPlayer2;
        return (wins/5) * 100;
    },
    lossPlayer2 () {
        const loss = +this.$store.getters.getLossPlayer2;
        return (loss/5) * 100;
    },
    hasGameStarted () {
        return this.$store.getters.getHasGameStarted;
    },
    gameHistory () {
        return this.$store.getters.getGameHistory;       
    }
  },
  watch: {
    hasGameStarted: function () {
       this.$refs.stopwatch.start();
    }
  }
}
</script>