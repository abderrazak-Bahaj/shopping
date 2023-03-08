  <template>
  <table class="table table-hover " >
            <thead>
                <tr>
                <th scope="col th-sm">Id</th>
                <th scope="col th-sm">Image</th>
                <th scope="col th-sm">Name </th>
                <th scope="col th-sm">Category</th>
                <th scope="col th-sm">Color</th>
                <th scope="col th-sm">Price</th>
                <th scope="col th-sm">Action</th>
                </tr>
             </thead>
            <tbody>
                <tr v-for="product in getAllProducts" :key="product.id" >
                <th scope="row"> {{product.id}}</th>
                <th > <img :src="product?.p_image_1" alt="img" class="cls-img-product" v-if="product.p_image_1"></th>
                <th > {{product.p_name}}</th>
                <td >
                    <router-link to='/category' class="link-secondary">
                        {{findCategory(product.category_id).cat_name}}
                    </router-link>
                </td>
                <td> {{product.p_color}}</td>
                <td> {{product.p_price | moneyFilter}}</td>
                <td class="row">
                    <router-link  class="btn-lg cls-btn-success col m-1 "  :to="`shope/${product.id}`"><i class="far fa-eye"></i></router-link>
                    <router-link :to="`product/edit/${product.id}`"   class="btn-lg cls-btn-success col m-1" ><i class="fa-solid fa-pen-to-square"></i></router-link>
                    <button @click="deleteProduct(product.id)" class="btn-lg cls-btn-danger col m-1"><i class="fa-solid fa-trash"></i></button> 
                </td>
                </tr >
        
            </tbody>
        </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getAllProducts','findCategory'])
    },
    filters:{
        moneyFilter:val => val+' $' 
    },
    methods:{
        
        deleteProduct:async function(id){
            await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't to delete this Product!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yess'
                    }).then((result) => {
                if (result.isConfirmed) {
                        this.$store.dispatch('destroyProduct',id)
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
        },
        editProduct:async function(product){

        }
    }

}
</script>

<style>
.cls-img-product{
    max-height: 5em ;
}
</style>