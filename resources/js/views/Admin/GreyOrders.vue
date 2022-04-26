<template>
    <div class="container text-center">
    <h2 class="h1">Order Grey</h2>
    <hr class="m-md-3 m-sm-2" />
    <div v-if="IsLoaded">
      <table class="table table-hover" id="printMe">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product name</th>
             <th scope="col">User name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price Uniter</th>
            <th scope="col">Price Total</th>
            <th scope="col">Accept or Not</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in allOrders" :key="order.id">
            <th scope="row">{{ order.id }}</th>
            <td>
              <router-link :to="'/shope/'+order.product_id" class="link-secondary">{{ order.name }}</router-link>
            </td>
            <th>{{ order.Username }}</th>
            <th>{{ order.quantity_product }}</th>
            <td>{{ order.price_uniter | moneyFilter }}</td>
            <td>{{ order.price_total | moneyFilter }}</td>
            <td>
              <button class="btn-lg btn-outline-success rounded" @click="AcceptOrder(order.id)"> <i class="fa-solid fa-circle-check"></i> </button>
              <button class="btn-lg btn-outline-danger rounded" @click="CancelOrder(order.id)"> <i class="fa-solid fa-ban"></i> </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-else
      class="cls-height-loading justify-content-center align-items-center"
    >
      <loading-progress />
    </div>
  </div>
</template>

<script>
import LoadingProgress from '../../components/Global/loadingProgress.vue'
export default {
    components:{LoadingProgress},
    data(){
        return{
          IsLoaded:false,
            allOrders:[]
        }
    },methods:{
        AcceptOrder:async function(id){
            let action = {id,State:"success"}
           await this.$store.dispatch('GreyOrderAction',action).then(response =>{
               this.allOrders.splice(this.allOrders.findIndex(item => item.id == response.data.id),1)
               this.$helpers.showToast("Operation has completed success")
           }).catch(error =>{
                this.$helpers.showErrors(error.response.statusText)
           })
        },
        CancelOrder:async function(id){
            let action = {id,State:"reversion"}
            await this.$store.dispatch('GreyOrderAction',action).then(response =>{
                this.allOrders.splice(this.allOrders.findIndex(item => item.id == response.data.id),1)
                    this.$helpers.showToast("Operation has completed success")
           }).catch(error =>{
               this.$helpers.showErrors(error.response.statusText)
           })
        },
        getOrder:async function(){
            await this.$store.dispatch('GreyOrderGetList').then(response =>{
                this.allOrders = response.data;
                this.IsLoaded = true;
           }).catch(error =>{
               this.$helpers.showErrors(error.response.statusText)
           })
        }
    },created(){
        this.getOrder();
    } ,
    filters: {
    moneyFilter: (val) => val + " $",
  }, 
}
</script>

<style>

</style>