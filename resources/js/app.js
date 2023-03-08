require('./bootstrap');

window.Vue = require('vue').default;
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
import store from './store'; 
import Vue from 'vue';
import helpers from './helpers'
axios.defaults.baseURL = "https://shopeapp.alwaysdata.net";
window.Vue.publicPath = "https://shopeapp.alwaysdata.net";

//change base url to vue config file
const plugin = {
  install () {
    Vue.helpers = helpers
    Vue.prototype.$helpers = helpers
  }
}

Vue.use(plugin)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

////Check Token user Is Auth Or is Not
let token = localStorage.getItem('token')
if(token == null){
  new Vue({router,store,render: h => h(App)}).$mount("#app")
}
else
  axios.get('/api/user',{headers:{'Authorization':`Bearer ${token}`}})
  .then(res =>{
      store.commit('SET_USER',res.data)
      store.commit('SET_TOKEN',token)
  }).catch( err =>{
  /// if Token expected or server not work
  }).finally(()=>{
    
    new Vue({router,store,render: h => h(App)}).$mount("#app")
  })
