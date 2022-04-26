<template>
  <div class="product-grid">
        <div class="product-image wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1.5s">
           <router-link :to="'shope/'+product.id" class="image">
              <img class="pic-1 img-fluid" :src="product.p_image_1" />
              <img class="pic-2 img-fluid" :src="product.p_image_2" />
            </router-link>

            <span class="product-sale-label" v-if="ProductIsNew(product.created_at)" >new</span>
            <button v-if="!hasFavorite(product.id)"  @click="addFavorite(product.id)" class="product-like-icon cls-btn-def" data-tip="Add to Favorite">
               <i class="far fa-heart" ></i>
            </button>
            <button v-else  @click="deleteFavorite(product.id)" class="product-like-icon cls-btn-def" data-tip="remove in Favorite">
            <i class="fa-solid fa-heart"></i>
            </button>     
          <ul class="product-links">              
            <li>
              <router-link :to="'/shope/'+product.id"><i class="far fa-eye"></i></router-link>
            </li>         
            <li>
                <button @click="addToCart(product.id)">
                        <i class="fas fa-shopping-cart"></i>
                </button>
            </li>           
          </ul>     
        </div>
        <div class="product-content">
          <h3 class=" h5 text-center wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">{{product.p_name}}</h3>
          <div class="price text-center wow fadeInDown" data-wow-delay="0.4s" data-wow-duration="1s">{{product.p_price | filterPrice}}</div>
        </div>
                
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:['product'],
  computed:{...mapGetters(['findFavorite','hasFavorite','userHasAuth','getAllCarts'])},
  filters:{filterPrice:(val) => val + " $"},
  methods:{
    addFavorite:async function(id){
      if(!this.userHasAuth){
        Swal.fire('you need be authenticated to add in favorite ')
        return;
      }
      let formData = new FormData()
      formData.append('product_id',id)
      this.$store.dispatch('addFavorite',formData)
      this.$helpers.showToast('Product has been Added to favorite','success') 
    },
    deleteFavorite:async function(id_product){
     let item =this.findFavorite(id_product)
      this.$store.dispatch('destroyFavorite',item.id)
      this.$helpers.showToast('Product has removed in favorite success','warning')
    },
    addToCart:async function(id){
       if(!this.userHasAuth){
        Swal.fire('you need be authenticated to add in your bag ')
        return;
      }
       let number = await Swal.fire({
                    title: "How much product you wan't?",
                    icon: 'question',
                    input: 'range',
                    inputLabel: 'Quantity Product',
                    inputValue:number,
                    inputAttributes: {min: 1,max: 30,step: 1},
                    inputValue: 2})
        if(number.isConfirmed)
        {
            /**  */
            let res = this.getAllCarts.find(c => c.product_id == id)
            if(res == undefined){
              let formData = new FormData()
              formData.append('product_id',parseInt(id))
              formData.append('quantity',number.value)
              await this.$store.dispatch('addCartForUser',formData)
            }else{
               let quantity = parseInt(res.quantity) + parseInt(number.value)
               let data = {id:parseInt(res.id),quantity}
               await  this.$store.dispatch("UpdateCartForUser",data).then( ()=>{}).catch(()=>{})
            }
            this.$helpers.showToast('Product has been Added to cart successfully','success')
        }
    },
    ProductIsNew: function(txtDate) {
        var date = new Date(Date.parse(txtDate));
        var t1 = date.getTime();
        var t2 = new Date().getTime();
        return Math.floor((t2-t1)/(24*3600*1000)) <= 8
    }

  },
  
}
</script>

<style>
.cls-btn-def{
  outline: none;
  border: none;
  background: transparent;
}
.product-grid{
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}
.product-grid .product-image{
overflow: hidden;
position: relative;
}
.product-grid .product-image a.image{
  display: block;
}
.product-grid .product-image img{
  width: 100%;
  height: auto;
}
.product-grid .product-image .pic-1{ 
  max-height: 17em;
  transition: all 0.5s ease 0s;
  }
.product-grid .product-image:hover .pic-1{
   transform: translateX(100%); 
   }
.product-grid .product-image .pic-2{
  width: 100%;
  height: 100%;
  transform: translateX(-101%);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease 0s;
}
.product-grid .product-image:hover .pic-2{ transform: translateX(0); }
.product-grid .product-sale-label{
    color: #fff;
    background: #5c3501;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 2px 8px;
    position: absolute;
    top: 15px;
    left: 15px;
}
.product-grid .product-like-icon{
    color: #696969;
    font-size: 22px;
    line-height: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
}
.product-grid .product-like-icon:hover{ color: #0a805e; }
.product-grid .product-like-icon:before, .product-grid .product-like-icon:after{
    content: attr(data-tip);
    color: #fff;
    background-color: #000;
    font-size: 12px;
    line-height: 18px;
    padding:7px 7px 5px;
    visibility:hidden;
    position:absolute;
    right:0;
    top:15px;
    transition:all 0.3s ease 0s;
}
.product-grid .product-like-icon:after{
    content:'';
    height:15px;
    width:15px;
    padding:0;
    transform:translateX(-50%) rotate(45deg);
    right: auto;
    left:50%;
    top: 15px;
    z-index: -1;
}
.product-grid .product-like-icon:hover:before,
.product-grid .product-like-icon:hover:after{
  visibility: visible;
  top:30px;
}
.product-grid .product-links{
    width: 170px;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateX(-50%);
    position: absolute;
    bottom: -50px;  
    left: 50%;
    transition: all 0.3s ease 0s;
}
.product-grid:hover .product-links{
    bottom: 40px;
    opacity: 1;
}
.product-grid .product-links li{
    display: inline-block;
    margin: 0 2px;
}
.product-grid .product-links li a,.product-grid .product-links li button{
    border: none;
    color: #fff;
    background: #000;
    font-size: 16px;
    line-height: 48px;
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: block;
    transition: all 0.3s ease 0s;
}
.product-grid:hover .product-links li a:hover,
.product-grid:hover .product-links li button:hover{ background: #333; }
.product-grid .product-content{
    text-align: left;
    padding: 15px 0 0;
}
.product-grid .price{
    color: #0f5f48;
    font-size: 16px;
    font-weight: 500;
}
@media screen and (max-width: 990px){
    .product-grid{ 
    margin: auto !important;
    max-width:15em !important; 
    }


}
</style>