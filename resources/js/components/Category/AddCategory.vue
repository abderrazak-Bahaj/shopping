<template>
  <div class="container  p-5 ">
           <h4 class="h3 text-center text-uppercase">Add Category</h4>
            <hr > 
           <div class="form-floating mt-3 col">
            <input type="text" v-model="data.cat_name" class="form-control cls-txt-input" id="cat_name" placeholder="Name Category"/>
            <label for="cat_name" class="cls-margin">Name Category</label>
            <div v-if="errors.cat_name">
                <span class="text-danger" v-text="errors.cat_name[0]"></span>
            </div>
          </div>

            <div class="mb-3">
                <label for="#file" class="form-label">Image Category </label>
                <input type="file" class="form-control" id="file" @change="processFile($event)">
                <div v-if="errors.cat_img">
                    <span class="text-danger" v-text="errors.cat_img[0]"></span>
                </div>
            </div>
            <button class="btn-lg btn-success" @click="addAction"> ADD Category</button>
            
       </div>
</template>

<script>
export default {
    data(){
        return{
            data:{cat_name : '',cat_img : ''},
            errors:{cat_name:'',cat_img:''}
        }
    },
    methods:{
        processFile(e) {
            this.data.cat_img =  e.target.files[0];
        },
        addAction: function(){
             this.$store.dispatch('addCategory',{cat_img:this.data.cat_img,cat_name: this.data.cat_name})
            .then(res =>{
                this.$helpers.showToast('Category has been Added')
                this.data = {cat_name : '',cat_img : ''}
                this.errors = {cat_name : '',cat_img : ''}
            }).catch(err =>{
                this.errors = err
            })
        },
    }

}
</script>

<style>

</style>