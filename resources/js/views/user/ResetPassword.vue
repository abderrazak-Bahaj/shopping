<template>
 <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="cls-card px-1 py-4">
        <div class="card-body">
            <!-- Email Header -->
           <div class="text-primary text-center">
                <span  style="font-size:5em"><i class="fa fa-user"></i></span>
                <h3 class="card-title mb-3 wow fadeInUp" data-wow-delay="0.2s">Reset password</h3>
           </div>
            <!-- Email input -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group mt-2 wow fadeInUp" data-wow-delay="0.4s">
                     <input v-model="data.email" class="form-control" type="email" placeholder="Email" required> 
                     </div>
                </div>
            </div>
            <!-- password input -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group mt-2 wow fadeInUp" data-wow-delay="0.6s">
                     <input v-model="data.password" class="form-control" type="password" placeholder="Password" required> 
                     </div>
                </div>
            </div>
            <!-- password confirm input -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group mt-2 wow fadeInUp" data-wow-delay="0.6s">
                     <input v-model="data.password_confirmation" class="form-control" type="password" placeholder="Confirm password" required> 
                     </div>
                </div>
            </div>
            <!-- button  Rest -->
            <div class="text-center wow fadeInUp" data-wow-delay="0.6s">
                <button class="btn-lg btn-block cls-confirm-button m-3" @click="resetPassword">Reset</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            data:{
                  token:'',
                  email:'',
                  password:'',
                  password_confirmation:''
                  },
        }
    },
    methods:{
        validation : async function(){
            return true;
        },
        resetPassword:async function(){
            this.data.token  = this.$route.query.token
            let isValid = await this.validation()
            if(isValid){
                await this.$store.dispatch('resetPassword',this.data)
                .then(response=>{
                         this.$helpers.showPopup('password has been edit success')
                         this.$router.push('/login')
                }).catch(error=>this.$helpers.showErrorsPopup(error))
            }
        }

    }
}
</script>

<style>
</style>