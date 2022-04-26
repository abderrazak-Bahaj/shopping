<template>
  <section class="bg-light">
    <div class="container pb-5">
      <div class="row" v-if="getProduct">
        <left-said :product="getProduct" />
        <right-said :product="getProduct" />
        <hr class="m-5">
        <h3 class="h3"> Author Products</h3>
        <div class="row ">
          <div
            class="col-12 col-md-3 mb-4"
            v-for="(product, index) in getAllProducts.slice(0, 4)"
            :key="index"
          >
            <card-item :product="product" />
          </div>
        </div>
      </div>
      <div
        v-else
        class="cls-height-loading justify-content-center align-items-center"
      >
        <loading-progress />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import LeftSaid from "../../components/Details/LeftSaid.vue";
import RightSaid from "../../components/Details/RightSaid.vue";
import LoadingProgress from "../../components/Global/loadingProgress.vue";
import CardItem from '../../components/shope/CardItem.vue';
export default {
  computed: {
    ...mapGetters(["getProduct","getAllProducts"]),
  },
  components: { LeftSaid, RightSaid, LoadingProgress,CardItem },
  methods: {
    findProduct: async function (id) {
      await this.$store.dispatch("getProduct", id);
    },
  },
  created() {
    this.findProduct(this.$route.params.id);
  },
  $route: function (val) {
    this.findProduct(val.query.params.id);
  },
};
</script>

<style>
</style>