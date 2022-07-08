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
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner/>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="!loading && isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img 
        :src="contact.photo_url" 
        class="contact-img-big" alt="">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class="fw-bold">{{contact.name}}</span></li>
          <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
          <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>
          <li class="list-group-item">Company : <span class="fw-bold">{{contact.company}}</span></li>
          <li class="list-group-item">Title : <span class="fw-bold">{{contact.title}}</span></li>
          <li class="list-group-item">Group : <span class="fw-bold">{{group.name}}</span></li>
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
import { ContactService } from '@/services/ContactService'
import Spinner from '@/components/Spinner'
export default {
    name:"ViewContact",
    components:{Spinner},
    data:function(){
      return{
        contactId:this.$route.params.contactId,
        loading:false,
        contact:'',
        errorMessage:null,
        group:{}
      }
    },
    created:async function(){
      try {
        this.loading=true;
        let {data}=await ContactService.getContact(this.contactId);
        let res=await ContactService.getGroup(data);
        this.contact=data;
        this.group=res.data;
        this.loading=false;
      } catch (error) {
        this.errorMessage=error.message;
        this.loading=false;
      }
    },
    methods:{
       isDone(){
        return Object.keys(this.contact).length > 0 &&  Object.keys(this.group).length > 0
      }
    }
}
</script>

<style>

</style>