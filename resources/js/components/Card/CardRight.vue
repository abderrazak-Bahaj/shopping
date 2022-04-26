<template>
  <div class="card rounded-0 border-0 card2" >
    <div class="form-card">
      <h2 id="heading2" class="text-danger">Payment Method</h2>
      <div class="radio-group">
        <div class="radio" data-value="paypal">
          <img src="/images/pay-autre.jpg" width="200px" height="60px" />
        </div>
        <br />
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <label class="pay">Type card</label>
          <select  v-model="type" class="form-select form-select-lg mb-3" aria-label="Default select example">
            <option value="VISA">VISA</option>
            <option value="MASTER CARD">MASTER CARD</option>
          </select>
          <error-partial-card word="cvv"/>
        </div>
      </div>

      <div class="row">
        <div class="col-8 col-md-6">
          <label class="pay">Card Number</label>
          <input type="text"  v-model="card_number" placeholder="0000-0000-0000" minlength="19"  maxlength="19" />
          <error-partial-card word="card_number"/>
        </div>
        <div class="col-4 col-md-6">
          <label class="pay">CVV</label>
          <input type="text" v-model="cvv" placeholder="cvv" minlength="3" maxlength="3"/>
          <error-partial-card word="cvv"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"><label class="pay">Expiration Date</label></div>
        <div class="col-md-12">
          <input type="text" v-model="card_date_expr"  placeholder="YYYY-MM-DD" minlength="10"  maxlength="10" />
          <error-partial-card word="card_date_expr"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <button @click="addCard" class="btn-lg btn-success" > MAKE A PAYMENT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorPartialCard from './ErrorPartialCard.vue';
export default {
  components: { ErrorPartialCard },
    data(){
        return{
            dataTypeCard:['VISA','MASTER CARD'],
            cvv:'',
            card_number:'',
            card_date_expr:'',
            type:'VISA',
        }
    },
    methods:{
        addCard:async function(){

            await Swal.fire({
            title: ' Add to Cart',
            text: 'are you sur to add this card',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes Add'
          }).then((result) => {
            if (result.isConfirmed) {
                let formData = new FormData()
                formData.append('card_date_expr',this.card_date_expr)
                formData.append('card_number',this.card_number)
                formData.append('cvv',this.cvv)
                formData.append('type',this.type)
                this.$store.dispatch('addCardForUser',formData)
                this.$helpers.showToast('Product has been Added to cart successfully','success')
                }
          })
        }
    }
};
</script>

<style>
</style>