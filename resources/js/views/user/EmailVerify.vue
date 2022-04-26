<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
      <div class="cls-card px-1 py-4">
        <h3 class="text-center wow fadeInDown" data-wow-delay="0.4s" data-wow-duration="2s" >
            on verify url 
        </h3>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        checkVerifyEmail:async function(){
             let id = this.$route.params.id
             let token = this.$route.fullPath.slice(this.$route.fullPath.indexOf(this.$route.params.token))
             await this.$store.dispatch('emailVerify',{id,token}).then(response =>{
                 console.log('Email Verify Response',response);
                 this.$helpers.showPopup('email has been Verify success,go to login ').then(()=> this.$router.push('/login'))
             }).catch(error => {
                 this.$helpers.showErrorsPopup(error)
             })
        }
    },
    created(){
    this.checkVerifyEmail()
    }
}
</script>

<style>

</style>