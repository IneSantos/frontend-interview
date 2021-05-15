<template>
    <div>
      <h1>{{name}}</h1>
      <h1>{{score}}</h1>
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