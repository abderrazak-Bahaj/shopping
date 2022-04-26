<template>
  <div class="overflow-auto cls-height">
    <h4 class="h2">Shopping cart</h4>
    <div class="cls-table-carts">
      <div
        class="items row m-3 rounded"
        v-for="cart in getAllCarts"
        :key="cart.id"
      >
        <img :src="cart.p_image" alt="" class="col-md-2 img-fluid cls-img-cart" />
        <div class="col-md-7">
          <h4 class="h4">{{ cart.p_name }}</h4>
          <div class="row">
            <label for="quantity" class="col-md col-sm-12">Quantity :</label>
              <div class="col-8 m-sm-2" style="width: 9em">
                <div class="input-group number-spinner">
                  <span class="input-group-btn">
                    <button class="btn btn-default" data-dir="dwn" @click="cart.quantity--">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </span>
                  <input
                    disabled
                    type="text"
                    class="form-control text-center"
                    v-model="cart.quantity"
                  />
                  <span class="input-group-btn" >
                    <button class="btn btn-default" data-dir="up" @click="cart.quantity++">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="col-4 m-sm-3">
                  <button class="btn btn-outline-primary"  @click="editCart(cart)"><i class="fa-solid fa-circle-check"></i></button>
              </div>
          </div>
        </div>
        <div class="col-md-3  cls-left-cart align-items-md-end">
          <button
            @click="deleteCart(cart.id)"
            class="cls-close-cart m-2"
            style="color: red"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <div class="m-3">{{ cart.p_price }} $</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllCarts"]),
  }, //
  methods: {
    deleteCart: async function (id) {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't  remove this cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("destroyCartForUser", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    editCart: async function (cart) {
       let data = {id:cart.id,quantity:cart.quantity}
            await  this.$store.dispatch("UpdateCartForUser",data).then(res =>{
                this.$helpers.showToast("edit cart success")
            }).catch(error =>{
                console.log(error);
                this.$helpers.showErrors("ss")
            }) 
    },
  },
};
</script>

<style scoped>
.small {
  font-size: 0.9em !important;
}
@media (max-width: 576px) {
  .cls-left-cart {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
     }
    .cls-img-cart {
    max-height: 8em;
}
}
</style>