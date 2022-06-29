<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fa fa-mobile"></i> Vue Contact Manager
      </router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
// import NavBar from './components/NavBar.vue'
export default {
  name:'App',
  components:{
    // NavBar
  }
}
</script>

<style>

</style>