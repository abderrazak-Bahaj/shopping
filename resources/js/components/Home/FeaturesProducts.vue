<template>

    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1 wow fadeInUp" data-wow-delay="0.3s">The New Product</h1>
                    <p class="wow fadeInUp" data-wow-delay="4s">
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <div class="text-center mb-3 wow fadeInUp" data-wow-delay="0.5s">
             <router-link to="/shope" class="text-decoration-none text-secondary">See More</router-link>   
            </div>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 mb-4" v-for="(product,index) in getAllProducts.slice(0,8)" :key="index">
                   <card-item :product="product"/>
                </div>


            </div>
        </div>
    </section>

</template>

<script>
import { mapGetters } from 'vuex'
import CardItem from '../shope/CardItem.vue'
export default {
  components: { CardItem },
    data:()=>({
        categorais:[],
    }),
    computed:mapGetters(["getAllProducts"]),

}
</script>

<style>
.card-img-top{
    max-height: 20em;
}
</style>