<template>
 <div class="carousel-inner wow fadeInUp" data-wow-delay="0.4s">
            <div :class="(index == 0)?'carousel-item active':'carousel-item'" v-for="(CoverInfo,index) in CoversInfo" :key="index">
                <div class="container">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" :src="CoverInfo.img" alt="">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                                <h1 class="h1 text-success"> {{CoverInfo.title}}</h1>
                                <h3 class="h2"> {{CoverInfo.scendTitle}}</h3>
                                <p>{{CoverInfo.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
let description  = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi inventore dolore, quam earum, vitae, nulla explicabo illum dicta impedit reprehenderit mollitia ad eum non esse minima perspiciatis eius soluta ipsam!'
let CoversInfo = [
    {img:'/images/cover-jeshoots.png',title:'eCommerce',scendTitle:'Perfect eCommerce web site',description},
    {img:'/images/cover-casque.png',title:'eCommerce',scendTitle:'Perfect eCommerce web site',description},
    {img:'/images/cover-PDX.png',title:'eCommerce',scendTitle:'Perfect eCommerce web site',description},
]
export default {
    data(){
        return{
            CoversInfo
        }
    }
}
</script>

<style>

</style>