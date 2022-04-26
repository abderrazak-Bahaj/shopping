<template>
  <div class="container  p-5 cls-container-cat">
           <h4 class="h3 text-center text-uppercase">Edit Category</h4>
           <div class="mb-3">
                <label for="#txtName" class="form-label" >Name Category </label>
                <input type="text" class="form-control" id="txtName" v-model="category.cat_name">
                <div class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="#file" class="form-label">Image Category </label>
                <input type="file" class="form-control" id="file" @change="processFile">
                <div class="form-text"></div>
            </div>
            <div class="row">
                <button class="btn-lg btn-success col m-2" @click="editAction" > Edit Category</button>
                <router-link class="btn-lg btn-success col m-2 text-center  text-decoration-none" to="/category" > Cancel</router-link>
            </div>
    </div>
</template>

<script>
export default {
    props:['category'],
    data(){
        return{
                categoryError : '',
        }
    },
    methods:{
        validation:async function(){
            if(this.category.cat_name == ""){
                this.categoryError = '- category name incorrect'
                return false
            }
            if(this.category.cat_img == "" ){
                this.categoryError = '- category image incorrect'
                return false
            }
            return true
        },
        editAction:async function(){
            if(! await this.validation()) return
            await this.$store.dispatch('updateCategory',this.category)
            .then(response => {
                Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Edit category has been success',
                showConfirmButton: false,
                timer: 1500
                })
                console.log('response',response)
            })
            .catch(error =>{
                console.log('error',error)
            })
            
        },  
        processFile(e) {
            this.category.cat_img =  e.target.files[0];
        },
    },
}
</script>

<style>

</style>