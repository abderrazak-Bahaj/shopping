<template>
     <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo">App Shop</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="tel:+212-678-714-069">+212-678-714-069</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:bahajabde0@gmail.com">bahajabde0@gmail.com</a>
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            Tinghir Morocco
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Categorais</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li v-for="category in getAllCategorais.slice(0, 6)" :key="category.id">
                            <router-link :to="'/shope/category/'+category.id" class="text-decoration-none" >{{category.cat_name}}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Pages</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                         <li><router-link to="/" class="text-decoration-none">Home</router-link></li>
                         <li><router-link to="/shope" class="text-decoration-none">Shop</router-link></li>
                         <li><router-link to="/contact" class="text-decoration-none">Contact us</router-link></li>
                         <li><router-link to="/about" class="text-decoration-none">About Us</router-link></li>
                         <li><router-link to="/login" class="text-decoration-none">Login</router-link></li>
                         <li><router-link to="/register" class="text-decoration-none">Register</router-link></li>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto ">
                    <ul class="list-inline text-left footer-icons ">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/bahaj.abde"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://github.com/abderrazak-Bahaj"><i class="fab fa-github fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="mailto:bahajabde0@gmail.com"><i class="fab fa-google fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/in/abderrazak-bahaj/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="tel:+212-678-714-069"><i class="fab fa-whatsapp fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/bahaj.abde/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>

        <div class="w-100 bg-black py-5">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2022
                            | Designed by Bahaj abderrazak
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(["getAllCategorais"])
    }
}
</script>

<style scoped>
#tempaltemo_footer a { color: #dcdde1;}
#tempaltemo_footer a:hover { color: #68bb7d;}
#tempaltemo_footer ul.footer-link-list li { padding-top: 10px;}
#tempaltemo_footer ul.footer-icons li {
  width: 2.6em;
  height: 2.6em;
  line-height: 2.6em;
}
#tempaltemo_footer ul.footer-icons li:hover {
  background-color: #cfd6e1;
  transition: .5s;
}
#tempaltemo_footer ul.footer-icons li:hover i {
  color: #212934;
  transition: .5s;
}
#tempaltemo_footer .border-light { border-color: #2d343f !important;}
</style>