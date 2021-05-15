
<template>
  <div class="">
    <button
        class=""
        @click="toggle"
        :class="[showTicTacToe ? 'active' : '']"
    >Tic tac toe</button>
    <button
        class=""
        @click="toggle"
        :class="[!showTicTacToe ? 'active' : '']"
    >4-in-a-row</button>
</div>
</template>


<script>
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