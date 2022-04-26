<template>
    <div class="container p-3">
        <div class="row">
            <div class="col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
                <categorais-said-bar :categorais='getAllCategorais' />
            </div>
            <div class="col-md-9" v-if="loading">
                 <div class="text-center wow fadeInRight" data-wow-delay="1s">
                    <pagination :links="getLinksProducts('')"/>
                </div> 
                <div class="row">
                    <div class="col-md-4 col-lg-3"
                        v-for="product in getAllProducts"
                        :key="product.id">
                        <card-item :product="product" />
                    </div>
                </div>
            </div>
            <loading-progress v-else/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingProgress from '../../components/Global/loadingProgress.vue';
import Pagination from '../../components/Product/Pagination.vue';
import CardItem from "../../components/shope/CardItem.vue";
import CategoraisSaidBar from "../../components/shope/CategoraisSaidBar.vue";

export default {
    data: () => ({
        loading: true,
    }),
    components: { CardItem, CategoraisSaidBar, LoadingProgress, Pagination },
    computed: {
        ...mapGetters(["productIsLoaded","getAllProducts","getAllCategorais",'getLinksProducts'])
    },
    methods: {
         fetchData:async function(query=''){
        this.loading = false
        this.$store.dispatch('getProductByCategory',this.$route.params.id+query)
        this.loading = true
        }
    },
    created(){
            this.$watch(
                () => this.$route.params,() => {
                    if(this.$route.query.page != undefined)
                        this.fetchData('?page='+this.$route.query.page)
                    else 
                        this.fetchData()
                },
                { immediate: true }
            )
    }
};
</script>

<style></style>
