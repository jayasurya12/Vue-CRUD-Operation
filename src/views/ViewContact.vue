<template>
  <div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 mt-3 text-bold text-success">View Contects</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, odit. Ratione, eum deleniti explicabo mollitia est hic, soluta distinctio odit error officia ipsa rem voluptatibus autem quibusdam harum dolore. Totam.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img 
        src="https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png" 
        class="contact-img-big" alt="">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class="fw-bold">Surya</span></li>
          <li class="list-group-item">Email : <span class="fw-bold">jai12vj@gmail.com</span></li>
          <li class="list-group-item">Mobile : <span class="fw-bold">9080020109</span></li>
          <li class="list-group-item">Company : <span class="fw-bold">IORTA</span></li>
          <li class="list-group-item">Title : <span class="fw-bold">Software Developer</span></li>
          <li class="list-group-item">Group : <span class="fw-bold">IORTA Group</span></li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
    <div class="col">
      <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left mx-1"></i>Back</router-link>
    </div>
  </div>
  </div>
  
  </div>
</template>

<script>
export default {
    name:"ViewContact"
}
</script>

<style>

</style>