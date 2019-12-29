<template>
  <div id="app">
	 <!--  <nav-bar></nav-bar> -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/Common/NavBar'
  export default {
	name: 'glxt',
	components: { NavBar},
  }
</script>

<style>
  /* CSS */
</style>
