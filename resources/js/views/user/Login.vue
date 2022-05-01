<template>
 
  <div class="container m-5 cls-main " >
    <loading-progress v-show="isBusy"/>
      <div class="row">
        <div class="col-md-6">
              <div class="col-md-9 col-lg-8 mx-auto wow fadeInLeft" data-wow-delay="0.5s">
              <h3 class="mb-4 h2 text-center">Login </h3>
              <h3 class="small mb-5 text-center">welcome back</h3>
              <div class="alert alert-danger" role="alert" v-if="userLoginError">
               {{userLoginError }}
              </div>
                <div class="form-floating m-3">
                  <input type="email" class="form-control" v-model="user.email" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating m-3">
                  <input type="password"  class="form-control" v-model="user.password" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <button class="btn btn-outline-primary cls-btn-login m-2" @click="logInUser">Login</button>
                  <div class="text-center">
                     You don't have account,create now <a href="/register" class="small">click her</a>
                  </div>
                  <div class="text-center">
                      <router-link to="/forgot-password" class="small">Forgot password?</router-link>
                  </div>
                </div>
            </div>

          </div>
          <div class="col-md-6  p-3 d-flex justify-content-center cls-display">
            <img class="img-fluid wow fadeInLeft" data-wow-delay="1s" src="/images/login.svg" alt="">
          </div>
      </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import loadingProgress from '../../components/Global/loadingProgress.vue'
export default {
  components: { loadingProgress },
  data:()=>({
      isBusy:false,
      user :{ email:'',password:''}
  }),
  methods:{
    async logInUser(){
      this.isBusy = true
      await this.$store.dispatch('Login',this.user)
                .then(response => {
                  if(response == true){
                    this.$router.push('/dashboard')
                  }
                  if(response == false){
                    this.$router.push('/')
                  }

                  else{
                    this.$router.push(`/email/resend/${response.token}`)
                  }
                })
                .catch(error => {}).finally(()=>{
                  this.isBusy = false
                })
      }
      
  },
  computed:{
    ...mapGetters(['userLoginError','userHasAuth'])
  },
   created(){
  }
} 
</script>

<style> 
.cls-main{
    height: 70vh;
}
.cls-btn-login {
  letter-spacing: 0.05rem;
}

@media (max-width: 576px){
.cls-display{
  display: none !important;
}
}
</style>