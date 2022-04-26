<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="cls-card px-1 py-4" v-if="!tokenIsSent">
        <div class="card-body">
           <div class="text-primary text-center wow fadeInLeft" data-wow-delay="0.3s">
                <span  style="font-size:5em"><i class="fa fa-user"></i></span>
                <h3 class="card-title mb-3">Enter email to reserve message reset password</h3>
           </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                     <input v-model="email" class="form-control wow fadeInLeft" data-wow-delay="0.6s" type="email" placeholder="Email" required> </div>
                </div>
            </div>

            <div class="text-center wow fadeInLeft" data-wow-delay="0.9s">
                <button class="btn-lg btn-block cls-confirm-button m-3" @click="forgotPassword">forgot Password</button>
            </div>
        </div>
    </div>
    <div class="cls-card px-1 py-4 wow fadeInLeft" data-wow-delay="1.2s" v-else>
        <h3 class="text-center">
            the request Rest Password ,has been sent to the email,pleas check you inbox
        </h3>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            tokenIsSent:false
        }
    },
    methods:{
        validation:async function(){
            return true
        },
        forgotPassword:async function(){
            let isValid = this.validation()
            if(isValid){
                await this.$store.dispatch('forgotPassword',{email:this.email})
                .then(()=>{this.tokenIsSent=true})
                .catch(error=> this.$helpers.showErrorsPopup(error))
            }
        }
    }
}
</script>