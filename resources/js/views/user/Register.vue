<template>
 <div>
   <loading-progress v-if="isBusy"/>
   <div class=" m-5 cls-main " >
    
      <div class="row">
          <div class="col-md-6  p-3 d-flex justify-content-center cls-display ">
            <img class="img-fluid wow fadeInRight" data-wow-delay="0.5s" src="/images/shopping.svg" alt="">
          </div>
          <div class="col-md-6 wow fadeInLeft" data-wow-delay="1s">
              <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="mb-4 h2 text-center">Register </h3>
                <div class="row">
                  <div class="form-floating m-1 col-md">
                    <input type="text" v-model="data.first_name" class="form-control" id="first_name" placeholder="First name">
                    <label for="first_name">First name</label>
                    <error-partial word='first_name'/>
                  </div>
                  <div class="form-floating m-1 col-md">
                    <input type="text" v-model="data.last_name" class="form-control" id="last_name" placeholder="Last name">
                    <label for="last_name">Last name</label>
                    <error-partial word='last_name'/>
                  </div>
                </div>

                <div class="form-floating m-1">
                  <input type="text" v-model="data.address" class="form-control" id="Address" placeholder="Address">
                  <label for="Address"> address</label>
                  <error-partial word='Address'/>
                </div>

                <div class="form-floating m-1">
                  <input type="text" v-model="data.phone_number" class="form-control" id="phone_number" placeholder="phone number">
                  <label for="phone_number">phone number</label>
                  <error-partial word='phone_number'/>
                </div>

                <div class="form-floating m-1">
                  <input type="date" v-model="data.Date_birth" class="form-control" id="Date_birth" >
                  <label for="Date_birth">Date Birth</label>
                  <error-partial word='Date_birth'/>
                </div>

                <div class="form-floating m-1">
                  <input type="email"  v-model="data.email" class="form-control" id="email" placeholder="name@example.com">
                  <label for="email">Email address</label>
                  <error-partial word='email'/>
                </div>

                <div class="form-floating m-1">
                  <input type="password" v-model="data.password" class="form-control" id="password" placeholder="Password">
                  <label for="password">Password</label>
                  <error-partial word='password'/>
                </div>
                <div class="form-floating m-1">
                  <input  type="password" v-model="data.password_confirmation" class="form-control" id="password_confirmation " placeholder="Password confirmation">
                  <label for="password_confirmation">Password Confirmation</label>
                </div>

                <div class="d-grid">
                  <button class="btn-lg btn-outline-primary cls-btn-login m-2" @click="register">Register</button>
                  <div class="text-center">
                     You  have account,Login now <router-link to="/login" class="small">click her</router-link>
                  </div>
                </div>
            </div>

          </div>
      </div>
  </div>
 </div>
  
</template>

<script>
import ErrorPartial from '../../components/Global/ErrorPartial.vue'
import LoadingProgress from '../../components/Global/loadingProgress.vue'
export default {
  components: { ErrorPartial,LoadingProgress },
  data(){
    return{
        isBusy:false,
        data:{
          email:'',
          password:'',
          password_confirmation:'',
          Date_birth:'',
          phone_number:'',
          first_name:'',
          last_name:'',
          address:''
          },
          error:''
      }
    },
    methods:{
      validation:function(){
        return true
      },
      register:async function(){
        this.isBusy = true
        this.error = ''
        //Validation Front end
        if(await this.validation()){
           await this.$store.dispatch('register',this.data)
        .then(response => {this.$router.push(`email/resend/${response.access_Token}`)})
        .catch(()=>{})
        .finally(()=>{this.isBusy = false})
        }
       this.isBusy = false
      }
    },

}

</script>

<style> 
.cls-error{
  padding: 0;
  margin: 0;
}
@media (max-width: 576px){
.cls-display{
  display: none !important;
}
}

</style>