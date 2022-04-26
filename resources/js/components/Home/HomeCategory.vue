<template>
  <div class="container py-5">
    <div class="row text-center pt-3">
      <div class="col-lg-6 m-auto">
        <h1 class="h1 wow fadeInDown" data-wow-delay="0.4s">Categories of The Month</h1>
        <p class="wow fadeInDown" data-wow-delay="5s">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-4 p-5 mt-3 text-center wow fadeInUp" data-wow-delay="0.5" data-wow-duration="1s"
        v-for="category in getAllCategorais.slice(0, 3)"
        :key="category.id"
      >
        <img
          :src="category.cat_img"
          class="rounded-circle img-fluid border cls-imgs-category"
        />
        <router-link :to="`shope/category/${category.id}`" class="text-center mt-3 mb-3 btn btn-secondary"  v-text="category.cat_name"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllCategorais"]),
  },
};
</script>

<style >
.cls-imgs-category {
  width: 13em ;
  height: 13em ;
}
</style>