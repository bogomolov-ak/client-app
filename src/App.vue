<template>
  <div id="app">
    <NavBar></NavBar>
    <MyForm></MyForm>    
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'; 
  import MyForm from './components/example_form/ExampleForm.vue' 
  import NavBar from './components/nav_bar/ExampleNavBar.vue'

  export default Vue.extend({
    name: 'App',
    components: {
      MyForm,
      NavBar,
    }
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;     
  }
</style>