
<template>
    <div class="gamestoggle">
        <div class="choice">
            <input type="radio" id="radio-one" name="switch-one" value="yes" checked @click="toggle" ref="tic-tac-toe"/>
            <label for="radio-one">Tic tac toe</label>

            <input type="radio" id="radio-two" name="switch-one" value="no" @click="toggle"/>
            <label for="radio-two">4-in-a-row</label>
        </div>
    </div>
</template>


<script>
import '@/styles/gamesToggle.scss';
export default {
  name: 'GamesToggle',
  data() {
        return {
            showTicTacToe: true
        };
    },
    methods: {
        toggle() {
            this.showTicTacToe = !this.showTicTacToe;
            this.$emit('toggle', this.showTicTacToe);
            this.$store.dispatch('resetGame');        
        }
    }
}
</script>