<template>
  <div class=" mt-5 p-3 rounded cart ">
    <div class="row" v-if="!!getAllCarts.length">
        <div class="col-md-8 wow fadeInLeft" data-wow-delay="0.5s">
            <left-cart/>
        </div>
        <div class="col-md-4 wow fadeInRight" data-wow-delay="1s">
             <right-cart />
        </div>
    </div>
    <div class="cls-empty-cart mt-3" v-else>
        <i class="fa-solid fa-bag-shopping"></i>
        <p class="cls-empty-text-cart wow fadeInLeft" data-wow-delay="0.5s">empty items</p>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import LeftCart from '../../components/Cart/LeftCart.vue'
import RightCart from '../../components/Cart/RightCart.vue'
export default {
    computed:{
        ...mapGetters(['getAllCarts'])
    },
  components: { RightCart, LeftCart },
    methods:{
        
        validBay:function(){

        }
    }
}
</script>

<style >
.cls-height{
    max-height: 80vh;
}
.cls-empty-cart{
    font-size: 10em !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 50vh;
    color: rgba(0, 0, 0, 0.55);
    width: 100%;
}
.cls-empty-text-cart{
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-style: italic;
font-weight: bolder;
padding: 1.5em;
line-height: 2em;
text-transform: uppercase;
}
.cls-left-cart{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.items {
    -webkit-box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.25);
    box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.08)
}
.cls-img-cart{
    max-height: 6em;
}
.cls-close-cart{
    outline: none;
    background-color: transparent;
    border: none;
    padding: 10px;
    border-radius: 15%;
    transition:  0.3s ease-in-out;
}
.cls-close-cart:hover{
    -webkit-box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.25);
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1)
}

.cls-close-cart i{
    font-size: 1.7em;
}

</style>
