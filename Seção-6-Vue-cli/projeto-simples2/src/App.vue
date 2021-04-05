<template>
  <div id="app">
      {{ titulo }}
      <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            titulo: 'Teste Data usando Vue JS!!'
        }
    }
}
</script>

<style>
    #app {
        background-color: rgb(30, 210, 210);
        color: rgb(54, 10, 10);
    }
</style>
