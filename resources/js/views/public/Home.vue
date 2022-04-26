<template>
    <div>   
            <home-header/>
            <home-category />
            <features-products/>
    </div>
</template>

<script>
import FeaturesProducts from '../../components/Home/FeaturesProducts.vue'
import HomeCategory from '../../components/Home/HomeCategory.vue'
import HomeHeader from '../../components/Home/HomeHeader.vue'
export default {
  data:()=>({
  }),
  components: { FeaturesProducts, HomeHeader, HomeCategory },
  async created(){
  },
}
</script>
<style>

</style>