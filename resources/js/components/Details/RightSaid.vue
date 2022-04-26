<template>
  <div class="col-lg-6 mt-5">
    <div class="card">
      <div class="card-body wow fadeInRight" data-wow-delay="0.4">
        <h1 class="h2">{{ product.p_name }}</h1>
        <p class="h3 py-2">{{ product.p_price }}$</p>
        <hr />
        <div class="py-2">
          <span class="list-inline-item text-dark row"
            >Rating
            <div class="col-md">
              <span v-if="findRate(product.id)">{{
                findRate(product.id).point_rate
              }}</span>
              <span v-else>not found</span>
            </div>
            <div class="stars col-md" v-if="userHasAuth">
              <form class="row" >
                <input
                  class="star star-5 col"
                  id="star-5"
                  type="radio"
                  name="star"
                />
                <label class="star star-5  col" for="star-5" @click="rateProduct(product.id, 5)"></label>
                <input
                  class="star star-4 col"
                  id="star-4"
                  type="radio"
                  name="star"
                />
                <label class="star star-4 col" for="star-4" @click="rateProduct(product.id, 4)"></label>
                <input
                  class="star star-3"
                  id="star-3"
                  type="radio"
                  name="star"
                />
                <label class="star star-3 col" for="star-3" @click="rateProduct(product.id, 3)"></label>
                <input
                  class="star star-2"
                  id="star-2"
                  type="radio"
                  name="star"
                />
                <label class="star star-2 col" for="star-2" @click="rateProduct(product.id, 2)"></label>
                <input
                  class="star star-1"
                  id="star-1"
                  type="radio"
                  name="star"
                />
                <label class="star star-1 col" for="star-1" @click="rateProduct(product.id, 1)"></label>
              </form>
            </div>
          </span>
          <hr />
        </div>
        <h6>Description:</h6>
        <p>{{ product.p_description }}</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <h6>Available Color :</h6>
          </li>
          <li class="list-inline-item">
            <p class="text-muted">
              <strong>{{ product.p_color }}</strong>
            </p>
          </li>
        </ul>
        <div class="row" v-if="userHasAuth">
          <div class="col-auto">
            <ul class="list-inline pb-3">
              <li class="list-inline-item text-right">
                Quantity
                <input
                  type="hidden"
                  name="product-quantity"
                  id="product-quantity"
                  value="1"
                />
              </li>
              <li class="list-inline-item" @click="(quantity != 1)?quantity--:''">
                <span class="btn btn-success" id="btn-minus">-</span>
              </li>
              <li class="list-inline-item">
                <span class="badge bg-secondary" id="var-value">{{
                  quantity
                }}</span>
              </li>
              <li class="list-inline-item" @click="quantity++">
                <span class="btn btn-success" id="btn-plus">+</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="row pb-3" v-if="userHasAuth">
          <div class="col d-grid">
            <button @click="by(product.id)" class="btn btn-success btn-lg">
              Buy
            </button>
          </div>
          <div class="col d-grid">
            <button @click="addCart" class="btn btn-outline-success btn-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["product"],
  data: () => ({
    quantity: 1,
  }),
  computed: {
    ...mapGetters(["findRate", "getAllCards", "userHasAuth","getAllCarts"]),
  },
  methods: {
    rateProduct:async function(product_id,rate_Point){
         await this.$store.dispatch('addRate',{product_id,rate_Point}).then(()=>{
             this.$helpers.showToast("Rate success Thank you for you rate")
         }).catch(error=>{
            this.$helpers.showErrors(error)
         })
    },
    by: async function (product_id) {
      //Check is have a card
      if (!this.getAllCards.length) {
        await Swal.fire({
          title: "Question",
          text: "You must add card if you want to by it",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to add Card",
        }).then((result) => {
          if (result.isConfirmed) {
             this.$router.push(`/card`)
          }
        });
        return;
      }
      //First Add  pop Model to select Card
      var options = {};
      this.getAllCards.map((o) => (options[o.id] = o.card_number.slice(0,5)+"********"));
      const { value: card_id } = await Swal.fire({
        title: "Select a Card to Pay",
        input: "select",
        inputOptions: options,
        inputPlaceholder: "Select a card",
        showCancelButton: true,
      });
      if (card_id) {
        let formData = new FormData();
        formData.append("product_id", product_id);
        formData.append("card_id", card_id);
        formData.append("quantity", this.quantity);
        await this.$store.dispatch("createOrder", formData).then(response =>{
          this.$helpers.showToast("opertion has been completed successfully");
        }).catch(error => {
          this.$helpers.showErrors(error);
        });
      }
    },
    addCart: async function () {
      await Swal.fire({
        title: " Add to Cart",
        text: "are you sur to add tih product to your cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Add",
      }).then((result) => {
        if (result.isConfirmed) {
          let res = this.getAllCarts.find(c => c.product_id == this.product.id)
          if(res == undefined){
            let formData = new FormData();
            formData.append("product_id", this.product.id);
            formData.append("quantity", this.quantity);
            this.$store.dispatch("addCartForUser", formData);
          }else{
               let quantityFin = parseInt(res.quantity) + parseInt(this.quantity)
               let data = {id:parseInt(res.id),quantity:quantityFin}
               this.$store.dispatch("UpdateCartForUser",data).then( ()=>{}).catch(()=>{})
          }
          this.$helpers.showToast("product Add to cart success");
        }
      });
    },
  },
};
</script>

<style>
div.stars {
  width: 270px;
  display: inline-block;
}

input.star {
  display: none;
}

label.star {
  float: right;
  padding: 10px;
  font-size: 36px;
  color: #f62;
  transition: all 0.2s;
}

input.star:checked ~ label.star:before {
  content: "\f005";
  color: #f62;
  transition: all 0.25s;
}

input.star-5:checked ~ label.star:before {
  color: rgb(238, 210, 0);
  text-shadow: 0 0 20px #f62;
}

input.star-1:checked ~ label.star:before {
  color: #f62;
}

label.star:hover {
  transform: scale(1.3);
}

label.star:before {
  content: "\f006";
  font-family: FontAwesome;
}
</style>
