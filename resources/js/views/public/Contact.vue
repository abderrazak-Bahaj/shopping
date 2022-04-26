<template>
  <div>
    <div class="container-fluid text-white pb-5 cls-contact">
            <div class="col-md-6 m-auto text-center cls-contact">
                <div class=" text-center wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1">
                    <img src="/images/logo.png" width="300" height="300" alt="shope app">
                </div>
                <h1 class="h1 wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="1">Contact Us</h1>
                <p class="wow fadeInDown" data-wow-delay="0.7s" data-wow-duration="1">
                    Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet.
                     Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
      <div class="container py-5">
        <div class="row py-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1">
            <div class="col-md-9 m-auto" method="post" role="form">
                <div class="row">
                    <div class="form-floating m-1 col wow fadeInUp" data-wow-delay="0.3s">
                        <input type="text"   v-model="name" class="form-control cls-txt-input2" id="Name" placeholder=" name" />
                        <label for="Name" class="cls-margin">Name</label>
                    </div>
                    <div class="form-floating m-1 col wow fadeInUp" data-wow-delay="0.4s">
                        <input type="text"   v-model="email" class="form-control cls-txt-input2" id="email" placeholder=" email" />
                        <label for="email" class="cls-margin">Email</label>
                    </div>
                </div>
                <div class="form-floating m-1 mb-3 wow fadeInUp" data-wow-delay="0.5s">
                        <input type="text"   v-model="subject" class="form-control cls-txt-input2" id="Subject" placeholder=" Subject" />
                        <label for="Subject" class="cls-margin">Subject</label>
                </div>

                <div class="form-floating m-1 mb-3 wow fadeInUp" data-wow-delay="0.6s">
                        <textarea type="text" rows="8"  v-model="message" class="form-control cls-txt-input2" style="height: 111px;" id="Message" placeholder=" Message" />
                        <label for="Message" class="cls-margin">Message</label>
                </div>

                <div class="row wow fadeInUp" data-wow-delay="0.7s">
                    <div class="col  mt-2">
                        <button @click="sentSubject" class="btn btn-success btn-lg px-3">Sent Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:"",
            email:"",
            subject:"",
            message:""
        }
    },
    methods:{
        sentSubject:function(){
            this.$helpers.showToast('TankYou for Feedback')
        }
    }
}
</script>

<style>
.cls-contact{
    min-height: 60vh;
    background-color: #198754;
}
.cls-margin {
  margin-left: 1em;
}
.cls-txt-input2{
    font-size: 1.1em;
    background-color: #f2f4f7;
}
</style>