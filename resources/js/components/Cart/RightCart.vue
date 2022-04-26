<template>
        <div class="container ">
                <h5 class="h3"><span>Quantity :</span> You have {{getAllCarts.length}} items in your cart</h5>
                <p><span>Total Price :</span> {{getPriceCart}} $</p>
                <div v-if="!!getAllCards.length">
                    <span>select cards : </span>
                    <select   v-model="card_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option v-for="card in getAllCards" :key="card.id" :value="card.id">{{card.card_number|numberCard}}</option>
                    </select>
                    <div v-if="cardSelected">
                        <p ><span>Your Sold :</span> {{cardSelected.card_sold}} $</p>
                        <p ><span>Date expire :</span> {{cardSelected.card_date_expr}}</p>
                        <p class="text-danger small" v-if="calculDeferent">
                            the Price total great then sold cart you can keep bay this pleas remove some item or change the card </p>
                    </div>
                    <div class="row">
                         <router-link to="/" class="col-md btn btn-outline-secondary m-2">Return to page hom</router-link>
                          <button @click="bay" class="col-md btn btn-outline-success m-2" :disabled="calculDeferent">bay</button>
                    </div>
                </div>
                <div v-else class="text-center">
                     <router-link to="/card" class="btn btn-outline-secondary" >Add Card</router-link>
                </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            card_id:'',
            cardSelected:''
        }
    },
     filters: {
        numberCard: (val) => val.slice(0,5) + "*******",
    },
    computed:{
        ...mapGetters(['getAllCarts','getPriceCart','getAllCards','findCard']),
        calculDeferent:function(){
            return (parseFloat(this.cardSelected.card_sold) < this.getPriceCart)||this.cardSelected == ""
        }
    },
    methods:{
        bay:async function(){
            //appel function order  
            await this.$store.dispatch('createOrders',{card_id:parseInt(this.card_id)})
        }
    },
    watch:{
        card_id:function(val){
            this.cardSelected  = this.findCard(val)
        }
    }
}
</script>

<style>
.small{
    font-size: 0.6em;
}
</style>