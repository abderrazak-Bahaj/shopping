<template>
      <div class="overflow-auto">
        <h3 class="h2 text-center mt-md-5 mt-sm-3">Add Product</h3>
        <h5 class="h6 text-center">All Chomp required</h5>
        <div class="alert alert-danger" role="alert" v-if="error">
          {{ error }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="hasErrorBack">
              <small v-for="(subErrors,index) in errorBackEnd" :key="index"  class="text-danger">
                  <span v-for="(error,index) in subErrors" :key="index">
                    - {{ error }}
                  </span>
                  <br>
              </small>
        </div>
        <div class="row">
          <div class="form-floating m-1 col">
            <input type="text" v-model="getProduct.p_name" class="form-control cls-txt-input" id="p_name" placeholder="product name" />
            <label for="p_name" class="cls-margin">Product name</label>
          </div>
          <div class="m-1 col">
            <select class="form-select form-select-lg mb-3" aria-label="Default select example" v-model="getProduct.category_id">
              <option selected value="0">Open this and select Category</option>
              <option v-for="category in getAllCategorais" :value="category.id" :key="category.id" >
                {{ category.cat_name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="form-floating m-1 col">
            <input type="number" v-model="getProduct.p_price"  class="form-control cls-txt-input" id="p_price" placeholder="Price" />
            <label for="p_price" class="cls-margin">Price</label>
          </div>
          <div class="form-floating m-1 col">
            <input type="text" v-model="getProduct.p_color" class="form-control cls-txt-input" id="p_color" placeholder="Color"/>
            <label for="p_color" class="cls-margin">Color</label>
          </div>
        </div>
        <div class="form-floating m-1 col">
          <textarea cols="30" rows="10" v-model="getProduct.p_description" class="form-control cls-txt-input" placeholder="Description" ></textarea>
          <label for="p_description" class="cls-margin">Description</label>
        </div>
        <div class="card p-md-4 p-sm-1 m-2">
          <h4 class="h3">Images</h4>
          <div class="row">
            <div class="mb-3 col">
              <label for="formFile1" class="form-label" >Product Image 1 :</label >
              <input class="form-control" type="file" id="formFile1" @change="processFile1" />
              <img :src="getProduct.p_image_1"  class="m-1" alt="" width="160" height="160">
            </div>
            <div class="mb-3 col">
              <label for="formFile2" class="form-label" >Product Image 2 :</label >
              <input class="form-control" type="file" id="formFile2" @change="processFile2" />
              <img :src="getProduct.p_image_2"  class="m-1" alt="" width="160" height="160">
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col">
              <label for="formFile3" class="form-label">Product Image 3 :</label >
              <input class="form-control" type="file" id="formFile3" @change="processFile3" />
               <img :src="getProduct.p_image_3"  class="m-1" alt="" width="160" height="160">
            </div>
            <div class="mb-3 col">
              <label for="formFile4" class="form-label" >Product Image 4 :</label >
              <input class="form-control" type="file" id="formFile4" @change="processFile4" />
              <img :src="getProduct.p_image_4" class="m-1"  alt="" width="160" height="160">
            </div>
          </div>
        </div>
        <div class="container row m-3">
          <button @click="editProduct" class="btn-lg cls-btn-success col-md m-2">
            <i class="fa-solid fa-edit"></i> Edit Product
          </button>
          <router-link
            to="/product"
            class="btn-lg btn-secondary col-md m-2 text-decoration-none text-center" >
              <i class="fa-solid fa-xmark"></i> Cancel
            </router-link >
        </div>
      </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
       hasErrorBack : false,
       error: "",
       errorBackEnd:{}
    };
  },
  computed: {
    ...mapGetters(["getAllCategorais","getProduct"]),
  },
  $route:function(val){
      this.findProduct(val.query.params.id)
    },
  created(){
      this.findProduct(this.$route.params.id)
    },
  methods: {
    validator: function () {
      this.error = "";
      if (this.getProduct.p_name == "" ||this.getProduct.p_color ==''||this.getProduct.p_price == "0" ||this.getProduct.category_id == 0 ||
        this.getProduct.p_description == "" ||this.getProduct.p_image_4 == "" ||this.getProduct.p_image_3 == "" ||
        this.getProduct.p_image_2 == "" ||this.getProduct.p_image_1 == "") {this.error = "- all Chomp Required";
        return false;
      }
      return true;
    },
    editProduct: async function () {
      this.hasErrorBack = false
      if (await this.validator()) {
        await this.$store.dispatch("updateProduct", this.getProduct)
        .then(res=>{
            console.log("sss");
            this.$helpers.showToast('product has add successfully')
            this.$router.push('/product')
        }).catch(error=>{
          this.hasErrorBack = true
          this.errorBackEnd = error
        })
      }
    },
    findProduct:async function(id){
           await this.$store.dispatch('getProduct',id)
     },
    clear: function () {

    },
    processFile1(e) {
      if(e.target.files[0] == undefined){
        this.data.p_image_1 = '';
        this.imgs.img1 = '/images/logo.png'
        return
      }
      this.data.p_image_1 = e.target.files[0];
      this.imgs.img1 = URL.createObjectURL(e.target.files[0])

    },
    processFile2(e) {
      if(e.target.files[0] == undefined){
        this.data.p_image_2 = '';
        this.imgs.img2 = '/images/logo.png'
        return
      }
      this.data.p_image_2 = e.target.files[0];
      this.imgs.img2 = URL.createObjectURL(e.target.files[0])
    },
    processFile3(e) {
      if(e.target.files[0] == undefined){
        this.data.p_image_3 = '';
        this.imgs.img3 = '/images/logo.png'
        return
      }
      this.data.p_image_3 = e.target.files[0];
      this.imgs.img3 = URL.createObjectURL(e.target.files[0])
    },
    processFile4(e) {
      if(e.target.files[0] == undefined){
        this.data.p_image_4 = '';
        this.imgs.img4 = '/images/logo.png'
        return
      }
      this.data.p_image_4 = e.target.files[0];
      this.imgs.img4 = URL.createObjectURL(e.target.files[0])
    },
  },
};
</script>

<style>
.cls-cls-margin {
  margin-left: 1em;
}

</style>