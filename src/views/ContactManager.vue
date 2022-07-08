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
    <!-----Spinner Loading-->
    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <Spinner/>
          </div>
        </div>
      </div>
    </div>
    <!------Error Message-->
    <div v-if="!loading && errorMessage">
      <div class="container mt-3">
        <div class="row">
          <div class="col bg-white">
            <p class="h3 text-danger text-center">Error : {{errorMessage}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-3" v-if="contacts.length > 0">
      <div class="row">
        <div class="col-md-6" v-for="contact of contacts" :key="contact">
          <div class="card my-2 list-group-item-success shadow-lg ">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img 
                  :src="contact.photo_url" 
                  class="contact-img"
                  alt="">
                </div>
                <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">Name : <span class="fw-bold">{{contact.name}}</span></li>
                    <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
                    <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>
                  </ul>
                </div>
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                  <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1">
                    <i class="fa fa-eye"></i>
                  </router-link>
                  <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1">
                    <i class="fa fa-pen"></i>
                  </router-link>
                  <button class="btn btn-danger my-1" @click="contactDelectContact(contact.id)"><i class="fa fa-trash"></i></button>
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
import { ContactService } from '@/services/ContactService';
import Spinner from '@/components/Spinner'
export default {
  name:"ContactManager",
  data:function(){
    return{
      loading:false,
      errorMessage:null,
      contacts:[]
    }
  },
  components:{Spinner},
  created:async function(){
    try {
      this.loading=true;
      let {data}=await ContactService.getAllContacts();
      this.contacts=data;
      this.loading=false;
    } catch (error) {
      this.errorMessage=error.message;
      this.loading=false;
    }
  },
  methods:{
    contactDelectContact:async function(contactId){
      try {
        // this.loading=true;
        let {data}=await ContactService.deleteContact(contactId);
        if(data){
          let {data}=await ContactService.getAllContacts();
          this.contacts=data;
          this.loading=false;
        }
      } catch (error) {
        this.errorMessage=error.message;
        this.loading=false;
      }
    }
  }
}
</script>

<style>

</style>