<template>
    <div class="cell" @click="$emit('click')">
      <span v-if="value !== ''">{{ value }}</span>
    </div>
</template>

<script>
  export default {
    name:'Cell',
    props: {
      value: String
    }
  }
</script>

<style lang="scss">
  .cell {
    width: 64px;
    height: 64px;
    border: 2px solid #D8D8D8;
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

     @media only screen and (min-width: 768px) {
        width: 132px;
        height: 132px;
     }

  }
</style>