const cart = {
    state: {
        carts: []
    },
    getters: {
        findCarts: state => id => state.carts.find(c => c.id == id),
        getAllCarts: state => state.carts,
        getPriceCart: state => state.carts.reduce((a, b) => a + (parseFloat(b['p_price']) * parseInt(b['quantity']) || 0), 0)
    },
    mutations: {
        SET_CARTS(state, carts) { state.carts = carts.data; },
        ADD_CART(state, cart) { state.carts.push(cart.data) },
        UPDATE_CART(state, cart) { 
            let object = state.carts.find(c => c.id == cart.data.id)
            object.quantity  = cart.data.quantity; 
        },
        DESTROY_CART(state, id) { state.carts.splice(state.carts.findIndex(e => e.id == id), 1) },
        DELETE_ALL_CARTS(state) { state.carts = [] }
    },
    actions: {
        // Get All Carts 
        async getCartsUser(context) {
            if (this.getters['userToken']) {
                await axios.get(`/api/cart`, {
                    headers: {
                        'Authorization': `Bearer ${this.getters['userToken']}`
                    }
                }).then(res => {
                    context.commit('SET_CARTS', res.data)
                }).catch(err => {
                    context.dispatch('showError', err.response.statusText + ',error load cart')
                })
            }
            else
                context.dispatch('showError', 'Login first')
        },
        // Get All Carts in local temp 
        async DeleteAllCarts(context) {
            context.commit('DELETE_ALL_CARTS')
        },
        // Create Cart 
        // TYPE DATA {product_id : number,quantity : number}
        async addCartForUser(context, data) {
            let userToken = this.getters['userToken']
            await axios.post(`/api/cart`, data, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then(res => {
                context.commit('ADD_CART', res.data)
            }).catch(err => {
                context.dispatch('showError', err.response.statusText + ',error add cart')
            })
        },
        // Update Cart
        // id Type number
        // quantity number
        async UpdateCartForUser(context, data) {
            let userToken = this.getters['userToken']
            let headers = { 'Authorization': `Bearer ${userToken}` }
            return await new Promise((resolve, reject) => {
                axios.put(`/api/cart/${data.id}`, { quantity: data.quantity }, { headers }).then(res => {
                    context.commit('UPDATE_CART', res.data)
                    resolve()
                }).catch(err => {
                    if (err.response.status == '422')
                        reject(err.response.data.errors)
                    else
                        context.dispatch('showError', err.response.statusText)
                })
            })
        },
        // Delete Carte
        // id Type number
        async destroyCartForUser(context, id) {
            let userToken = this.getters['userToken']
            await axios.delete(`/api/cart/${id}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then(res => {
                context.commit('DESTROY_CART', id)
            }).catch(err => {
                context.dispatch('showError', err.response.statusText)
            })
        }

    }

}

export default cart;