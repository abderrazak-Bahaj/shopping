<template>
   <div class="overflow-auto cls-height">
        <h4 class="h2"> List Categorais</h4>
        <div class="cls-table-carts">
            <div class="items row m-3 rounded" v-for="category in getAllCategorais" :key="category.id">
                <img :src="category.cat_img" alt="" class="col-3 img-fluid cls-img-cart">
                <div class="col-6">
                        <h4 class="h3 ">{{category.cat_name}}</h4>
                </div>
                <div class="col-3 cls-left-cart align-items-end row">
                    <router-link :to="`/category?edit=${category.id}`" class="btn-lg cls-btn-success col text-center" ><i class="fa-solid fa-pen-to-square"></i></router-link>
                    <button @click="deleteCategory(category.id)" class="btn-lg cls-btn-danger col"><i class="fa-solid fa-trash"></i></button>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getAllCategorais'])
    },
    methods:{
        deleteCategory:async function(id){
            await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't delete ti category!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                if (result.isConfirmed) {
                         this.$store.dispatch('destroyCategory',id)
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
        },
    }

}
</script>

<style scoped>
.cls-height{
    max-height: 90vh;
}

</style>