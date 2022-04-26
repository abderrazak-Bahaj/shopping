<template>
  <div class="container">
      <h3 class="h2 text-center">Edit Password</h3>
      <br>
      <div class="container">
          <!-- Form Group (current Password)-->
          <div class="row">
              <div class="offset-md-3 col-md-6">
                    <label class="small mb-1" for="currentPassword">Current Password</label>
                    <input class="form-control" v-model="data.currentPassword" id="currentPassword" type="password" placeholder="Enter your current password" >
                     <span v-if="allErrors.currentPassword">
                         <span class="text-danger small"   v-for="error in allErrors.currentPassword" :key="error">
                          - {{error}} 
                         </span>
                     </span>
                </div>
          </div>
          <!-- Form Group (New Password)-->
          <div class="row">
              <div class="offset-md-3 col-md-6">
                    <label class="small mb-1" for="newPassword">New Password</label>
                    <input class="form-control" v-model="data.newPassword" id="newPassword" type="password" placeholder="Enter your New Password" >
                    <span v-if="allErrors.newPassword">
                         <span class="text-danger small"   v-for="error in allErrors.newPassword" :key="error">
                          - {{error}} 
                         </span>
                     </span>
                </div>
          </div>
          <!-- Form Group (Confirm Password)-->
          <div class="row">
              <div class="offset-md-3 col-md-6">
                    <label class="small mb-1" for="confirmPassword">Confirm Password</label>
                    <input class="form-control" v-model="data.newPassword_confirmation" id="confirmPassword" type="password" placeholder="Enter your confirm new password" >
                </div>
          </div>
          <!-- Button edit-->
          <div class="text-center m-3">
               <button class="btn-lg btn-primary " @click="editPassword" >Edit Password</button>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            data:{
                currentPassword:'',
                newPassword:'',
                newPassword_confirmation:'',
            },
            allErrors:''
        }
    },
    methods:{
        validation:async function(){
            return true
        },
        editPassword:async function(){
            this.allErrors = ''
            let isValid = await this.validation()
            if(isValid){
                let data = {currentPassword:this.data.currentPassword,
                              newPassword:this.data.newPassword,
                              newPassword_confirmation:this.data.newPassword_confirmation}
               await this.$store.dispatch('editPassword',data).
               then(response =>{
                   this.allErrors = ''
                  this.$helpers.showToast('password has been edit success')
               }).catch(error=>{
                   if(error == false)
                    {
                        this.$helpers.showErrorsPopup("current password Incorrect")
                        return
                    }
                    this.allErrors = error
               })
            }
        }
    }
}
</script>

<style>

</style>