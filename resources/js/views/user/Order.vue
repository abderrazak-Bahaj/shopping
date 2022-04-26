<template>
  <div class="container text-center">
    <h2 class="h1 wow fadeInLeft" data-wow-delay="0.2s">History</h2>
    <hr class="m-md-3 m-sm-2" />
    <div v-if="getOrderIsLoaded">
      <div class="container float-right wow fadeInLeft" data-wow-delay="0.4s">
        <ul class="pagination pagination-lg justify-content-center wrapper">
          <li class="page-item" v-for="link in getLinksOrders" :key="link.url">
            <router-link class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" :to="link.url" tabindex="-1" >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
      <table class="table table-hover wow fadeInLeft" data-wow-delay="0.8s" id="printMe">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price Uniter</th>
            <th scope="col">Price Total</th>
            <th scope="col">State</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in getAllOrders" :key="order.id">
            <th scope="row">{{ order.id }}</th>
            <td>
              <router-link :to="'/shope/'+order.product_id" class="link-secondary">{{ order.name }}</router-link>
            </td>
            <th>{{ order.quantity_product }}</th>
            <td>{{ order.price_uniter | moneyFilter }}</td>
            <td>{{ order.price_total | moneyFilter }}</td>
            <td :class="(order.State == 'reversion')?'text-danger':'text-success'">{{ order.State }}</td>
            <td>
              <button class="btn-lg btn-outline-danger rounded" @click="deleteOrder(order.id)"> <i class="fa-solid fa-trash"></i> </button>
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
import { mapGetters } from "vuex";
import loadingProgress from "../../components/Global/loadingProgress.vue";
export default {
   data () {
    return {
      output: null
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.query.page != undefined)
          this.getOrders(this.$route.query.page);
        else this.getOrders();
      },
      { immediate: true }
    );
  },
  components: { loadingProgress },
  computed: {
    ...mapGetters(["getAllOrders", "getOrderIsLoaded", "getLinksOrders"]),
  },
  methods: {
    getOrders: async function (id = "") {
      this.$store.dispatch("getOrders", id, { root: true });
    },
    print: async function () {
      await this.$htmlToPaper('printMe');
    },
    deleteOrder: async function (id) {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("deleteOrder", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
  filters: {
    moneyFilter: (val) => val + " $",
  },
};
</script>

<style >
.disabled {
  opacity: 0.4;
}
.cls-float {
  margin: auto;
}
</style>