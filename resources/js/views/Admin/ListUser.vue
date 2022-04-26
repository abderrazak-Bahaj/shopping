<template>
    <div class="container text-center">
    <h2 class="h1">Users rGrey</h2>
    <hr class="m-md-3 m-sm-2" />
    <div >
      <table class="table table-hover" >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">name</th>
             <th scope="col">email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <th>{{ user.first_name + ' ' +user.last_name }}</th>
            <th>{{ user.email }}</th>
            <td class="row">
              <p v-show="user.isAdmin==1" class="h6 text-uppercase">Is Admin</p>
              <button class="col btn btn-outline-success m-1" :disabled="IsBusy" @click="TransformUserToAdmin(user.id)" v-show="user.isAdmin==0"> <i class="fa-solid fa-rotate"></i> <small>Set Admin</small></button>
              <button class="col btn btn-outline-danger m-1" :disabled="IsBusy" @click="DeleteUser(user.id)" v-show="user.isAdmin==0"> <i class="fa-solid fa-ban"></i> <small>Delete</small> </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-show="IsBusy" class="cls-height-loading justify-content-center align-items-center" >
      <loading-progress />
    </div>
  </div>
</template>

<script>
import LoadingProgress from '../../components/Global/loadingProgress.vue'
export default {
    components:{LoadingProgress},
    data(){
        return{
          IsBusy:false,
          users:[]
            }
    },
    methods:{
        TransformUserToAdmin:async function(id){
          let res = await Swal.fire({
                    title: 'Login Form',
                    html: `<input type="password" id="password" class="swal2-input" placeholder="Password">`,
                    confirmButtonText: 'Enter Password',
                    focusConfirm: false,
                    preConfirm: () => {
                      const password = Swal.getPopup().querySelector('#password').value
                      if (!password) {
                        Swal.showValidationMessage(`Please enter password`)
                      }
                      return { password}
                    }
                  }).then(result => result.value.password).catch(()=> null)
            if(res == null)
                return
              this.IsBusy = true
             let action = {id,password:res,isAdmin:1}
           await this.$store.dispatch('SetAdmin',action).then(response =>{
               this.users.find(user => user.id == response.data.id).isAdmin = 1
               this.$helpers.showToast("Operation has been completed success")
           }).catch(error =>{
                this.$helpers.showErrors(error)
           }).finally(()=>{
              this.IsBusy = false
           })
           this.IsBusy = false
        },
        DeleteUser:async function(id){
          let res = await Swal.fire({
                    title: 'Login Form',
                    html: `<input type="password" id="password" class="swal2-input" placeholder="Password">`,
                    confirmButtonText: 'Enter Password',
                    focusConfirm: false,
                    preConfirm: () => {
                      const password = Swal.getPopup().querySelector('#password').value
                      if (!password) {
                        Swal.showValidationMessage(`Please enter password`)
                      }
                      return { password}
                    }
                  }).then(result => result.value.password).catch(()=> null)
            if(res == null)
                return
              this.IsLoaded = true
            let action = {id,password:res}
            await this.$store.dispatch('deleteUser',action).then(response =>{
                this.users.splice(this.users.findIndex(item => item.id == response),1)
                    this.$helpers.showToast("Operation has been completed success")
           }).catch(error =>{
               this.$helpers.showErrors(error)
           })
        },
        getUsers:async function(page="1"){
            await this.$store.dispatch('getUsers').then(response =>{
                this.users = response;
                this.IsLoaded = true;
           }).catch(error =>{
               this.$helpers.showErrors(error)
           })
        }
    },created(){
        this.getUsers();
    } ,
}
</script>

<style>

</style>