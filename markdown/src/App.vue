<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index'
import Vue from 'vue'
export default {
  name: 'app',
   components: {
     index
  }
}
var demo = new Vue({
    el: '#app',
    
})
</script>

<style>
</style>
