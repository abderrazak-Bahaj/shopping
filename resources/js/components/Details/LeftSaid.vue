<template>
    <div class="col-lg-6 mt-5 wow fadeInLeft" data-wow-delay="0.2">
        <div class="card mb-3">
            <img
                class="card-img img-fluid"
                :src="mainImg"
                alt="Card image cap"
                style="max-height:550px ;"
                id="product-detail"
            />
        </div>

        <div class="row">
            <div class="col-3 wow fadeInUp" data-wow-delay="0.3">
                <button @click="SwitchImg">
                    <img
                        class="card-img img-fluid"
                        :src="product.p_image_1"
                        alt="Product Image 1"
                    />
                </button>
            </div>
            <div class="col-3 wow fadeInUp" data-wow-delay="0.5">
                <button @click="SwitchImg">
                    <img
                        class="card-img img-fluid"
                        :src="product.p_image_2"
                        alt="Product Image 1"
                    />
                </button>
            </div>
            <div class="col-3 wow fadeInUp" data-wow-delay="0.6">
                <button @click="SwitchImg">
                    <img
                        class="card-img img-fluid"
                        :src="product.p_image_3"
                        alt="Product Image 1"
                    />
                </button>
            </div>
            <div class="col-3 wow fadeInUp" data-wow-delay="0.7">
                <button @click="SwitchImg">
                    <img
                        class="card-img img-fluid"
                        :src="product.p_image_4"
                        alt="Product Image 1"
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["product"],
    data(){
        return({
            mainImg:this.product.p_image_1,
        })
    },
    
    methods:{
        SwitchImg:function(event){
            this.mainImg = event.target.src
        }
    },
};
</script>

<style  scoped>
.col-3 button {
    outline: none;
    border: none;
}
button .card-img{
    max-height: 7em;
    padding: 0;
    margin: 0;
    width: 100%;
}
button{
    width: 100%;
}
</style>