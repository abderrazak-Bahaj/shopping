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
            <input type="text" v-model="data.p_name" class="form-control cls-txt-input" id="p_name" placeholder="product name" />
            <label for="p_name" class="cls-margin">Product name</label>
          </div>
          <div class="m-1 col">
            <select class="form-select form-select-lg mb-3" aria-label="Default select example" v-model="data.category_id">
              <option selected value="0">Open this and select Category</option>
              <option v-for="category in getAllCategorais" :value="category.id" :key="category.id" >
                {{ category.cat_name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="form-floating m-1 col">
            <input type="number" v-model="data.p_price"  class="form-control cls-txt-input" id="p_price" placeholder="Price" />
            <label for="p_price" class="cls-margin">Price</label>
          </div>
          <div class="form-floating m-1 col">
            <input type="text" v-model="data.p_color" class="form-control cls-txt-input" id="p_color" placeholder="Color"/>
            <label for="p_color" class="cls-margin">Color</label>
          </div>
        </div>
        <div class="form-floating m-1 col">
          <textarea cols="30" rows="10" v-model="data.p_description" class="form-control cls-txt-input" placeholder="Description" ></textarea>
          <label for="p_description" class="cls-margin">Description</label>
        </div>
        <div class="card p-md-4 p-sm-1 m-2">
          <h4 class="h3">Images</h4>
          <div class="row">
            <div class="mb-3 col">
              <label for="formFile1" class="form-label" >Product Image 1 :</label >
              <input class="form-control" type="file" id="formFile1" @change="processFile1" />
              <img :src="imgs.img1"  class="m-1" alt="" width="160" height="160">
            </div>
            <div class="mb-3 col">
              <label for="formFile2" class="form-label" >Product Image 2 :</label >
              <input class="form-control" type="file" id="formFile2" @change="processFile2" />
              <img :src="imgs.img2"  class="m-1" alt="" width="160" height="160">
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col">
              <label for="formFile3" class="form-label">Product Image 3 :</label >
              <input class="form-control" type="file" id="formFile3" @change="processFile3" />
               <img :src="imgs.img3"  class="m-1" alt="" width="160" height="160">
            </div>
            <div class="mb-3 col">
              <label for="formFile4" class="form-label" >Product Image 4 :</label >
              <input class="form-control" type="file" id="formFile4" @change="processFile4" />
              <img :src="imgs.img4" class="m-1"  alt="" width="160" height="160">
            </div>
          </div>
        </div>
        <div class="container row m-3">
          <button @click="addProduct" class="btn-lg cls-btn-success col-md m-2">
            <i class="fa-solid fa-circle-plus"></i> Add Product
          </button>
          <button @click="clear" class="btn-lg btn-success col-md m-2">
            <i class="fa-solid fa-broom"></i> clear
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
      data: {
        p_description: "",
        category_id: "0",
        p_name: "",
        p_color: "",
        p_price: "",
        p_image_1: "",
        p_image_2: "",
        p_image_3: "",
        p_image_4: "",
      },
      imgs:{img1:'/images/logo.png',img2:'/images/logo.png',img3:'/images/logo.png',img4:'/images/logo.png'},
      error: "",
      errorBackEnd:{}
    };
  },
  computed: {
    ...mapGetters(["getAllCategorais"]),
  },
  methods: {
    validator: function () {
      this.error = "";
      if (this.data.p_name == "" ||this.data.p_color ==''||this.data.p_price == "0" ||this.data.category_id == 0 ||
        this.data.p_description == "" ||this.data.p_image_4 == "" ||this.data.p_image_3 == "" ||
        this.data.p_image_2 == "" ||this.data.p_image_1 == "") {this.error = "- all Chomp Required";
        return false;
      }
      return true;
    },
    addProduct: async function () {
      this.hasErrorBack = false
      if (await this.validator()) {
        let formData = new FormData();
        formData.append("p_image_1", this.data.p_image_1);
        formData.append("p_image_2", this.data.p_image_2);
        formData.append("p_image_3", this.data.p_image_3);
        formData.append("p_image_4", this.data.p_image_4);
        formData.append("p_description", this.data.p_description);
        formData.append("p_price", this.data.p_price);
        formData.append("p_color", this.data.p_color);
        formData.append("p_name", this.data.p_name);
        formData.append("category_id", parseInt(this.data.category_id));
        this.$store.dispatch("createProduct", formData).then(response=>{
          this.$helpers.showToast('product has add successfully')
        }).catch(errors =>{
          this.hasErrorBack = true
          this.errorBackEnd =  errors
        })
      }
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