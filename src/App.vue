<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">

//Variaveis
@import "./scss/resetStyle";

#app {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* position: fixed;
  top: 0;
  left: 0; */
}
</style>

