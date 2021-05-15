
<template>
  <div class="gamestoggle">
    <button
        class="toggle"
        @click="toggle"
        :class="[showTicTacToe ? 'active' : '']"
    >Tic tac toe</button>
    <button
        class="toggle"
        @click="toggle"
        :class="[!showTicTacToe ? 'active' : '']"
    >4-in-a-row</button>
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
        },
    }
}
</script>