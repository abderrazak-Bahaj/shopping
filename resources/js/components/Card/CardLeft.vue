<template>
 
    <div class="card rounded-0 border-0 card1 bg-dark" id="bill">
      <h3 class="text-center heading1 ">List Card</h3>
      <div class="row" v-for="card in getAllCards" :key="card.id">
        <div class="col-10 mt-4 line ">
          <div class="row">
            <div class="col-6">
              <h2 class="bill-head">{{card.card_number|numberCardFilter}}</h2>
              <small class="bill-date">{{card.card_date_expr}}</small>
            </div>
            <div class="col-6">
              <h2 class="bill-head px-xl-5 px-lg-4">{{card.type}}</h2>
            </div>
          </div>
          
        </div>
        <div class="col-2 mt-4">
           <button @click="deleteCard(card.id)" class="btn-lg btn-outline-danger m-2" style="background-color:transparent"><i class="fa-solid fa-trash"></i></button>
           
        </div>
      </div>
    </div>
 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(["getAllCards"])
    },
    filters:{
      numberCardFilter: (val) => val.slice(0,5)+"********"
    },
    methods:{
      deleteCard:async function(id){
        await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't  remove this card!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                if (result.isConfirmed) {
                         this.$store.dispatch('destroyCardForUser',id)
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
      }
    }
};
</script>

<style>
</style>