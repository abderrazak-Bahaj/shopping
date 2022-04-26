import { reject } from "lodash";

const product = {
    state: {
        products: [],
        product: '',
        PaginationLinks: [],
        IsLoaded: false,
    },
    getters: {
        getProduct: state => state.product,
        getAllProducts: state => state.products,
        findProduct: state => id => state.products.find(p => p.id == id),
        productIsLoaded: state => state.IsLoaded,
        getLinksProducts: state => type => {let list = state.PaginationLinks.map(item => {return {url: type + item.url?.slice(item.url?.indexOf('?')) || '/',label: item.label, active: item.active}});list.shift();list.pop();return list},
    },
    mutations: {
        SET_PRODUCTS(state, products) { state.products = products.data; state.PaginationLinks = products.meta.links; state.IsLoaded = true; },
        SET_PRODUCT(state, product) { state.product = product.data; state.IsLoaded = true },
        UPDATE_PRODUCT(state, product) { state.products[state.products.indexOf(r => r.id == id)] = product.data },
        ADD_PRODUCT(state, product) { state.products.push(product.data); state.IsLoaded = true },
        DESTROY_PRODUCT(state, id) { state.products.splice(state.products.findIndex(p => p.id == id), 1); state.IsLoaded = true },
    },
    actions: {
        // get all  Products 
        // index type INTEGER
        async getProducts(context, id = '') {
            this.state.product.IsLoaded = false
            let url = '/api/product'
            if (id != '')
                url += `?page=${id}`
            await axios.get(url).then(res => {
                context.commit('SET_PRODUCTS', res.data)
            }).catch(err => {
                context.dispatch('showError', err)
            })

        },
        // get Products
        // id type int
        async getProduct(context, id) {
            this.state.product.IsLoaded = false
            await axios.get(`/api/product/${id}`).then(res => {
                context.commit('SET_PRODUCT', res.data)
            }).catch(err => {
                context.dispatch('showError', err)
            })
        },
        // search Products
        // data type string
        async searchProduct(context, data) {
            this.state.product.IsLoaded = false
            await axios.get(`/api/product/search/${data}`).then(res => {
                context.commit('SET_PRODUCTS', res.data)
            }).catch(err => {
                context.dispatch('showError', err)
            })
        },
        //get Product By Category
        // data type INTEGER
        async getProductByCategory(context, data) {
            this.state.product.IsLoaded = false
            await axios.get(`/api/category/${data}`).then(res => {
                context.commit('SET_PRODUCTS', res.data)
            }).catch(err => {
                context.dispatch('showError', err)
            })
        },
        // create Product
        /* product type {  category_id;INTEGER,p_name;STRING,p_description;TEXT,p_color;STRING,p_price:FLOAT,
                        p_image_1;IMAGE,p_image_2;IMAGE,p_image_3;IMAGE,p_image_4;IMAGE,}
        */
        async createProduct(context, product) {
            this.state.product.IsLoaded = false
            let userToken = this.getters['userToken']
            let headers = {'Authorization': `Bearer ${userToken}`,'Content-Type': 'multipart/form-data'}
            
            return await new Promise((resolve,reject)=>{
                axios.post(`/api/product`, product, {headers})
                .then(res =>{   
                    context.commit('ADD_PRODUCT', res.data)
                    resolve()
                })
                .catch(err =>{
                    this.state.product.IsLoaded = true
                    if (err.response.status == '422')
                        reject(err.response.data.errors)
                    else
                    context.dispatch('showError', err.response.statusText)
                })
            })
        },

        // Update Product
        /* product type {  category_id;INTEGER,p_name;STRING,p_description;TEXT,p_color;STRING,p_price:FLOAT,
                        p_image_1;IMAGE,p_image_2;IMAGE,p_image_3;IMAGE,p_image_4;IMAGE,}
        */
        async updateProduct(context, product) {
            let userToken = this.getters['userToken']
            let headers = {'Authorization': `Bearer ${userToken}`,'Content-Type': 'multipart/form-data'}
            return await new Promise((resolve, reject) => {
                axios.post(`/api/product/update/${product.id}`, product, {headers})
                .then(res => {
                    context.commit('UPDATE_PRODUCT', res.data)
                    resolve()})
                .catch(err => {
                    this.state.product.IsLoaded = true
                    if (err.response.status == '422')
                        reject(err.response.data.errors)
                    else
                        context.dispatch('showError', err.response.statusText)
                })
            })
        },
        // Update Product
        // id type INTEGER
        async destroyProduct(context, id) {
            this.state.product.IsLoaded = false
            let userToken = this.getters['userToken']
            await axios.delete(`/api/product/${id}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then(res => {
                context.commit('DESTROY_PRODUCT', id)
            }).catch(err => {
                context.dispatch('showError', err.response.statusText)
            })
        },
        // Count Product
        async CountProduct(context) {
            let userToken = this.getters['userToken']
            let headers = { 'Authorization': `Bearer ${userToken}` }
            return await new Promise((resolve, reject) => {
                axios.get(`/api/product/admin/statistic`, { headers }).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    context.dispatch('showError', err.response.statusText)
                })
            })
        },

    }

}

export default product;