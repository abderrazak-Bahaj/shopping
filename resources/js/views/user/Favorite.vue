<template>
  <div class="container">
      <div class="overflow-auto cls-height">
        <h4 class="h2 text-center">All favorite</h4>
        <hr>
        <div class="cls-table-carts wow fadeInLeft" data-wow-delay="0.5s">
            <div class="items row m-3 rounded" v-for="favorite in getAllFavorites" :key="favorite.id">
                <img :src="favorite.p_image" alt="" class="col-sm-12 col-md-2 col-lg-2 img-fluid cls-img-cart">
                <div class="col-sm-6 col-md-7 col-lg-7 ">
                    <router-link :to="`/shope/${favorite.product_id}`" class="h4 text-decoration-none">{{favorite.p_name}}</router-link>
                    <p class="small mt-md-4">color : {{favorite.p_color}}</p>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3   cls-left-cart align-items-end ">
                    <button @click="deleteFavorite(favorite.id)" class="btn-lg btn-outline-danger m-md-2 cls-btn-custom"><i class="fa-solid fa-trash"></i></button>
                    <div class="m-md-2">{{favorite.p_price }} $</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getAllFavorites'])
    },
    methods:{
        deleteFavorite:async function(id){
            await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't  remove this Product in favorite",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                if (result.isConfirmed) {
                        this.$store.dispatch('destroyFavorite',id)
                        Swal.fire(
                        'Deleted!',
                        'Your Product has been removed.',
                        'success'
                        )
                    }
                })
        }
    }
}
</script>

<style>
.cls-img-cart{
max-height:8em
}
.cls-height{
    max-height: 100vh;
}
.cls-btn-custom{
background-color:transparent

}
.cls-btn-custom:hover{
    color: #fff;
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