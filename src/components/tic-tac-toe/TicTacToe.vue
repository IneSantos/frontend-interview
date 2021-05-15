
<template>
  <div>
    <h1>Tic tac toe games</h1>
    <p>Welcome to the best game in the world.</p>
    <Board/>
  </div>
</template>


<script>
import '@/styles/header.scss';
import Board from './Board';

export default {
  name: 'TicTacToe',
  components: {
    Board
  }
}
</script>