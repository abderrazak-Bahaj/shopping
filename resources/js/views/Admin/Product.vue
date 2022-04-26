<template>
  <div class=" text-center">
    <div v-if="productIsLoaded">
      <div class="container">
        <pagination :links="getLinksProducts('/product')" />
      </div>
      <div class="table-responsive">
        <list-products />
      </div>
    </div>
    <div v-else class="cls-height-loading justify-content-center align-items-center">
      <loading-progress />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingProgress from "../../components/Global/loadingProgress.vue";
import ListProducts from "../../components/Product/ListProducts.vue";
import Pagination from "../../components/Product/Pagination.vue";
export default {
  components: { ListProducts, LoadingProgress, Pagination },
  computed: {
    ...mapGetters(["productIsLoaded", "getLinksProducts"]),
  },
  methods: {
    getProducts: async function (id = "") {
      await this.$store.dispatch("getProducts", id, { root: true });
    },
  },
  watch: {
    $route: function (val) {
      this.getProducts(val.query.page);
    },
  },
  async created() {
    if (this.$route.query) this.getProducts(this.$route.query.page);
    else this.getProducts();
  },
};
</script>

<style>
</style>