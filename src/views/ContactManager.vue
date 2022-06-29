<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success text-bold">Contact Manager 
          <router-link to="/contacts/add" class="btn btn-success btn-sm ml-3"><i class="fa fa-plus-circle"></i>New</router-link>
        </p>
        <p class="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, libero. Exercitationem recusandae debitis saepe distinctio dolorum, corrupti eum inventore consequatur deleniti sed suscipit dignissimos. Veniam aspernatur dolore voluptas alias et?</p>
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Search Input">
            </div>
            <div class="col">
              <input type="submit" class="btn btn-outline-dark">
            </div>
          </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:"ContactManager"
}
</script>

<style>

</style>