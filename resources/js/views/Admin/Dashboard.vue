<template>
  <div>
    <cart-item-dashboard  :countProduct="countProduct" :countUser="countUser[0].Count+countUser[1].Count"  :countOrder="countOrder[0].Count+countOrder[1].Count+countOrder[2].Count"/>
    <charts-bar :orders="countOrder" :users="countUser" />
  </div>
</template>

<script>
import CartItemDashboard from "../../components/Global/CartItemDashboard.vue";
import ChartsBar from '../../components/Global/ChartsBar.vue';
export default {
  components: { CartItemDashboard, ChartsBar },
  data(){
    return{
      countProduct:0,
      countOrder:[{Count:0},{Count:0},{Count:0}],
      countUser:[{Count:0},{Count:0}]
    }
  },
   methods:{
      getCountProduct:async function(){
        await this.$store.dispatch('CountProduct').then(res => this.countProduct = res)
      },
      getCountOrder:async function(){
        await this.$store.dispatch('CountOrder').then(res => this.countOrder = res)
      },
      getCountUser:async function(){
        await this.$store.dispatch('CountUser').then(res => this.countUser = res)
      }
  },created(){
    this.getCountProduct();
    this.getCountOrder();
    this.getCountUser();
  }
};
</script>

<style>
</style>