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
        <form action="" @submit.prevent="updateSubmit()">
          <div class="mb-2">
            <input required v-model="contact.name" type="text" placeholder="Name" class="form-control">
          </div>
          <div class="mb-2">
            <input required v-model="contact.email" type="email" placeholder="Email" class="form-control">
          </div>
          <div class="mb-2">
            <input required v-model="contact.mobile" type="number" placeholder="Mobile" class="form-control">
          </div>
          <div class="mb-2">
            <input v-model="contact.title" type="text" placeholder="Title" class="form-control">
          </div>
          <div class="mb-2">
            <input required v-model="contact.company" type="text" placeholder="Company" class="form-control">
          </div>
          <div class="mb-2">
            <input required v-model="contact.photo_url" type="text" placeholder="Photo URL" class="form-control">
          </div>
          <div class="mb-2">
            <select class="form-control" required v-model="contact.groupId" v-if="groups.length > 0">
              <option value="">Select Group</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" value="Update" class="btn btn-success">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img 
        :src="contact.photo_url" 
        class="contact-img" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ContactService } from '@/services/ContactService'

export default {
  name:"EditContact",
  data:function(){
    return{
      contactId: this.$route.params.contactId,
      loading:false,
      contact:{
        name:"",
        email:"",
        mobile:"",
        photo_url:"",
        company:"",
        title:"",
        groupId:""
      },
      errorMessage:[],
      groups:[]
    }
  },
  created:async function(){
    try {
      this.loading=true;
      let {data}=await ContactService.getContact(this.contactId);
      let response=await ContactService.getAllGroups();
      this.contact=data;
      this.groups=response.data;
      this.loading=false;
    } catch (error) {
      this.errorMessage=error;
      this.loading=false;
    }
  },
  methods:{
    updateSubmit:async function(){
      try {
        let {data}=await ContactService.updatContact(this.contact,this.contactId);
        if(data){
          return this.$router.push('/');
        }else{
          return this.$router.push(`/contacts/edit/${this.contactId}`)
        }
      } catch (error) {
        this.errorMessage=error;
        this.loading=false;
      }
    }
  }
}
</script>

<style>

</style>