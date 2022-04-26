import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import product from './modules/product'
import user from './modules/user'
import error from './modules/error'
import card from './modules/card'
import cart from './modules/cart'
import favorite from './modules/favorite'
import rate from './modules/rate'
import order from './modules/order'


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        error,
        cart,
        card,
        rate,
        favorite,
        user,
        category,
        order,
        product
    }
})