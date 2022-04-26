<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
      <div class="cls-card px-1 py-4" v-if="!isSent">
        <h3 class="text-center wow fadeInDown" data-wow-delay="0.4s">
            withing to sent message verify
        </h3>
    </div>
    <div class="cls-card px-1 py-4" v-else>
        <h3 class="text-center wow fadeInUp" data-wow-delay="0.8s">
            the massage ,has been sent to the email,pleas check you inbox
        </h3>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isSent:false
    }
  },
  methods:{
    sentVerify:async function(){
      let token  = this.$route.params.token
      await this.$store.dispatch('emailResend',token)
      .then(response => {
        this.isSent = true
      }).catch(error =>{
        this.isSent = true
      })
    },
  },
  created(){
    this.sentVerify()
  }

}
</script>

<style>

</style>