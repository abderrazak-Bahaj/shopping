<template>
  <div >
      <nav-bar-component v-if="!userIsAdmin"/>
      <router-view v-show="productIsLoaded"></router-view>
      <loading-progress v-show="!productIsLoaded"/>
      <footer-component  v-if="!userIsAdmin"/>

  </div>
</template>

<script>
import NavBarComponent from './components/Global/NavBarComponent.vue'
import FooterComponent from './components/Global/FooterComponent.vue'
import { mapGetters } from 'vuex'
import LoadingProgress from './components/Global/loadingProgress.vue'

export default { 
  components: { NavBarComponent, FooterComponent, LoadingProgress },
  computed:{
      ...mapGetters(['userHasAuth','productIsLoaded','userIsAdmin'])  
    },
   created(){
    
       this.$store.dispatch('getProducts',null,{root:true})
       this.$store.dispatch('getCategorais',null,{root:true})
       this.$store.dispatch('getRates',null,{root:true})
       if(this.userHasAuth)
        {
          this.$store.dispatch('getCardsUser')
          this.$store.dispatch('getCartsUser')
          this.$store.dispatch('getFavorites')
        } 
  },
  methods:{
    ShowErrors:async function(txt)
    {
      this.$helpers.showErrors(txt)
    },

  }
}
</script>

<style>


/** loading */
.router-link-is-active{
  background-color: #3d62db !important;
  color:#efefef !important
}
.cls-height-saidBar{
  min-height: 100vh !important;
}
 .nav-pills li .router-link-exact-active {
  color: #fff;
  background-color: #0d6efd !important;
  transition: 0.2s ease-in;
}
.cls-card {
    width: 400px;
    background-color: #fff;
    border: none;
    border-radius: 12px
}

.cls-form-control {
    margin-top: 10px !important;
    height: 48px;
    border: 2px solid #eee;
    border-radius: 10px
}

.cls-form-control:focus {
    box-shadow: none;
    border: 2px solid #039BE5
}

.cls-confirm-button:hover{
    color:  #eee;
    background-color: #039BE5;
}

.cls-confirm-button {
    transition: 0.3s ease-in-out;
    height: 50px;
    border: 2px solid #039BE5;
    color: #039BE5;
    background-color: #eee;
    border-radius: 10px
}





/** btn edit and btn delete  */ 
.cls-btn-danger{
    border: red solid 1px;
    color: red;
    background-color: transparent;
    outline: none;
    transition: 0.4s ease-in-out;
}
.cls-btn-danger:hover{
    background-color: red;
    color: #efefef;
}

.cls-btn-success{
    border: #23bf76 solid 1px;
    color:#23bf76;
    background-color: transparent;
    outline: none;
    transition: 0.4s ease-in-out;
}
.cls-btn-success:hover{
    background-color: #157347;
    color: #e7dcf3;
}

/* Typography */
body, ul, li, p, a, label, input, div {
  font-size: 18px !important;
  font-weight: 300 !important;
}
.h1 {
  font-size: 48px !important;
  font-weight: 200 !important;
}
.h2 {
  font-size: 30px !important;
  font-weight: 300;
}
.h3 {
  font-size: 22px !important;
}
/* General */
.logo { font-weight: 500 !important;}
.text-warning {  color: #ede861 !important;}
.text-muted { color: #bcbcbc !important;}
.text-success { color: #59ab6e !important;}
.text-light { color: #cfd6e1 !important;}
.bg-dark { background-color: #212934 !important;}
.bg-light { background-color: #e9eef5 !important;}
.bg-black { background-color: #1d242d !important;}
.bg-success { background-color: #59ab6e !important;}
.btn-success {
  background-color: #59ab6e !important;
  border-color: #56ae6c !important;
}
  .pagination .page-link:hover {color: #000;}
  .pagination .page-link:hover, .pagination .page-link.active {
    background-color: #69bb7e;
    color: #fff;
  }

/* Hero Carousel */
#template-mo-zay-hero-carousel { background: #efefef !important;}
/* Accordion */
.templatemo-accordion a { color: #000;}
.templatemo-accordion a:hover { color: #333d4a;}


/* Brand */
.brand-img {
  filter: grayscale(100%);
  opacity: 0.5;
  transition: .5s;
}
.brand-img:hover {
  filter: grayscale(0%);
  opacity: 1;
}
/* Carousel Hero */
#template-mo-zay-hero-carousel .carousel-indicators li {
  margin-top: -50px;
  background-color: #59ab6e;
}
#template-mo-zay-hero-carousel .carousel-control-next i,
#template-mo-zay-hero-carousel .carousel-control-prev i {
  color: #59ab6e !important;
  font-size: 2.8em !important;
}
/* Carousel Brand */
.tempaltemo-carousel .h1 {
  font-size: .5em !important;
  color: #000 !important;
}
/* Contact map */
.leaflet-control a, .leaflet-control { font-size: 10px !important;}
.form-control { border: 1px solid #e8e8e8;}
/* Footer */

/*
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap
*/
/* Small devices (landscape phones, 576px and up)*/
.product-wap .h3, .product-wap li, .product-wap i, .product-wap p {
  font-size: 12px !important;
}
.product-wap .product-color-dot {
  width: 6px;
  height: 6px;
}
.cls-height-loading{
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

@media (min-width: 576px) {
  .tempaltemo-carousel .h1 { font-size: 1em !important;}
}

/*// Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  #templatemo_main_nav .navbar-nav {max-width: 450px;}
 }

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  #templatemo_main_nav .navbar-nav {max-width: 550px;}
  #template-mo-zay-hero-carousel .carousel-item {min-height: 30rem !important;}
  .product-wap .h3, .product-wap li, .product-wap i, .product-wap p {font-size: 18px !important;}
  .product-wap .product-color-dot {
    width: 12px;
    height: 12px;
  }
}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {}
/** check box  Sheep*/
.cls-toggle-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 200px;
}

.cls-toggle {
  visibility: hidden;
}

.cls-label {
  position: relative;
  background-color: #d0d0d0;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 0;
  width: 80px;
  height: 40px;
}

.cls-toggle:checked + .label {
  background-color: #8e44ad;
}

.cls-ball {
  background: #fff;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  align-items: center;
  justify-content: center;
  animation: slideOff 0.3s linear forwards;
}
.cls-toggle:checked + .cls-label{
    background-color: #69707a;
}
.cls-toggle:checked + .cls-label .cls-ball {
  animation: slideOn 0.3s linear forwards;
}

@keyframes slideOn {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(40px) scale(1);
  }
}

@keyframes slideOff {
  0% {
    transform: translateX(40px) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>