<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/shared/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  
.chatHeaderWrapper {
    height: 90px;
    color: rgb(39, 39, 39);
    z-index: 2;
}
.chatRoom {
    height: 100%;
    display: flex;
    flex-direction: column;
}

router-outlet {
    height:0;
}
</style>
