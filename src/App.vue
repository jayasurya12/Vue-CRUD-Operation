<template>
  <div>
    <Spinner/>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fa fa-mobile"></i> Vue Contact Manager
      </router-link>
    </div>
  </nav>
  <router-view/>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
import Spinner from './components/Spinner.vue'
export default {
  name:'App',
  components:{
    Spinner
    // NavBar
  }
}
</script>

<style>

</style>