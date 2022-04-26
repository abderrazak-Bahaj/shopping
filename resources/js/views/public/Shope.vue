<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md-3 wow fadeInLeft" data-wow-delay="0.4s">
        <categorais-said-bar :categorais="getAllCategorais" />
      </div>
      <div class="col-md-9" v-if="productIsLoaded">
        <div class="row m-md-4 m-sm-2">
          <div class="col-md-6 wow fadeInLeft" data-wow-delay="0.8s">
            <pagination :links="getLinksProducts('shope')"/>
          </div>
          <div class="col-md-6 wow fadeInRight" data-wow-delay="0.8s">
            <div class=" input-group mb-3">
              <input type="search" v-model="searchWord" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="searchProduct" id="button">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-4 col-lg-3"
            v-for="product in getAllProducts"
            :key="product.id"
          >
            <card-item :product="product"/>
          </div>
        </div>
        <div >
        </div>
      </div>
      <div v-else class="col-lg-9 d-flex justify-content-center align-items-center">
          <loading-progress  />
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingProgress from "../../components/Global/loadingProgress.vue";
import Pagination from '../../components/Product/Pagination.vue';
import CategoraisSaidBar from "../../components/shope/CategoraisSaidBar.vue";
import CardItem from '../../components/shope/CardItem.vue';

export default {
  data: () => ({
    searchWord: "",
    dataCategory: "",
    clsPagination:
      "page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark",
  }),
  components: { CategoraisSaidBar, LoadingProgress, Pagination,CardItem },
  computed:
    {
    ...mapGetters([
      "productIsLoaded",
      "getAllProducts",
      "getAllCategorais",
      "getLinksProducts",
    ]),
  },
  methods: {
    getProducts: function (index) {
      this.$store.dispatch("getProducts", index);
    },
    searchProduct: function () {
      if (this.searchWord) {
        this.$store.dispatch("searchProduct", this.searchWord);
      } else {
        this.$store.dispatch("getProducts", this.searchWord);
      }
    },
  },
  watch:{
    $route:function(val){
      this.getProducts(val.query.page);
    }
  },
   created(){
       this.$watch(
                () => this.$route.params,() => {
                    if(this.$route.query.page != undefined)
                        this.getProducts(this.$route.query.page)
                    else 
                        this.getProducts()
                },
                { immediate: true }
            )
  }
};
</script>

<style scoped>
.disabled {
  opacity: 0.4;
}
</style>
