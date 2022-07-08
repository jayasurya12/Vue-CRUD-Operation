<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 mt-3 text-bold text-success">Add Contects</p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam maiores suscipit praesentium! Vel quas fuga veritatis maxime ipsa eaque, aliquid eius saepe reiciendis. Corrupti sint adipisci temporibus veritatis eligendi ipsam!</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form action="" @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input required type="text" v-model="contact.name" placeholder="Name" class="form-control">
          </div>
          <div class="mb-2">
            <input required type="text" v-model="contact.photo_url" placeholder="Photo URL" class="form-control">
          </div>
          <div class="mb-2">
            <input required type="email" v-model="contact.email" placeholder="Email" class="form-control">
          </div>
          <div class="mb-2">
            <input required type="number" v-model="contact.mobile" placeholder="Mobile" class="form-control">
          </div>
          <div class="mb-2">
            <input required type="text" v-model="contact.company" placeholder="Company" class="form-control">
          </div>
          <div class="mb-2">
            <input type="text" v-model="contact.title" placeholder="Title" class="form-control">
          </div>
          <div class="mb-2">
            <select class="form-control" required v-if="groups.length>0" v-model="contact.groupId">
            <option value="">Select</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" value="Create" class="btn btn-success">
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
  name:"AddContact",
  data:function(){
    return{
      contact:{
        name:"",
        email:"",
        mobile:"",
        photo_url:"",
        company:"",
        title:"",
        groupId:""
      },
      groups:[]
    }
  },
  created: async function(){
    try {
      let{data}=await ContactService.getAllGroups();
      this.groups=data
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    submitCreate:async function(){
      try {
        let {data}=await ContactService.createContact(this.contact);
        if(data){
          return this.$router.push("/");
        }
        else{
          return this.$router.push('/contacts/add')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>