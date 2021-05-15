<template>
    <div class="player">
      <h1>{{name}}</h1>
      <p>{{score}}</p>
    </div>
</template>

<script>
  export default {
    name:'Player',
    props: {
        name: String,
        score: Number
    }
  }
</script>

<style lang="scss">
  .player {
    p {
        font-size: 50px;
        margin: 22px 0;
      }
  }
</style>