<template>
<div>
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
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img 
                src="https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png" 
                class="contact-img"
                alt="">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name : <span class="fw-bold">Surya</span></li>
                  <li class="list-group-item">Email : <span class="fw-bold">jai12vj@gmail.com</span></li>
                  <li class="list-group-item">Mobile : <span class="fw-bold">9080020109</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1"><i class="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
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