<template>
  <div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 mt-3 text-bold text-success">Edit Contects</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, odit. Ratione, eum deleniti explicabo mollitia est hic, soluta distinctio odit error officia ipsa rem voluptatibus autem quibusdam harum dolore. Totam.</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form action="">
          <div class="mb-2">
            <input type="text" placeholder="Name" class="form-control">
          </div>
          <div class="mb-2">
            <input type="text" placeholder="Photo URL" class="form-control">
          </div>
          <div class="mb-2">
            <input type="email" placeholder="Email" class="form-control">
          </div>
          <div class="mb-2">
            <input type="number" placeholder="Mobile" class="form-control">
          </div>
          <div class="mb-2">
            <input type="text" placeholder="Title" class="form-control">
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option value="">Select Group</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" value="Update" class="btn btn-success">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img 
        src="https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png" 
        class="contact-img" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name:"EditContact"
}
</script>

<style>

</style>