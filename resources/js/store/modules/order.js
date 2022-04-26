import { reject } from "lodash";

const order = {
    state:{
        orders:[],
        links:{prev:null,next:null,last:null,first:null},
        orderIsLoaded:false
    },
    getters:{
        findOrders : state => id =>state.orders.find(c => c.id == id),
        getAllOrders:state=>state.orders,
        getOrderIsLoaded:state=>state.orderIsLoaded,
        getLinksOrders:state => {
            let list = state.links.map(l =>{return {url:l.url?.slice(25)||'/',label:l.label,active:l.active}})
            list.shift();list.pop();return list}
    },
    mutations:{
        SET_ORDERS(state,orders){state.orders = orders.data;state.orderIsLoaded=true,state.links = orders.meta.links},
        DESTROY_ORDER(state,id){state.orders.splice(state.orders.findIndex(o => o.id == id),1);state.orderIsLoaded=true},
        ADD_ORDER(state,order){state.orders.unshift(order.data)},
        DELETE_ALL_ORDERS(state){state.orders = []}
    },
    actions:{
        // Get All orders 
        // id optional type int 
        async getOrders(context,id=''){
            let url ='/api/order'
            if(id != '')
                url += `?page=${id}`
            this.state.order.orderIsLoaded = false
            if(this.getters['userToken']){
                await axios.get(url,{headers:{
                'Authorization':`Bearer ${this.getters['userToken']}`
                 }}).then(res =>{  
                context.commit('SET_ORDERS',res.data)
                }).catch(err=>{
                    context.dispatch('showError',err.response.statusText)
                })
            }
            else
            context.dispatch('showError','Login first')
        },
        //delete all order local 
        async DeleteAllOrders(context){
            context.commit('DELETE_ALL_ORDERS')
        },
        // Create orders from carts
        // TYPE DATA {card_id : int}
        async createOrders(context,data){
            this.state.order.orderIsLoaded = false
            let userToken = this.getters['userToken']
            await axios.post(`/api/orders`,data,{headers:{
                'Authorization':`Bearer ${userToken}`
                 }}).then(res =>{
                    context.commit('SET_ORDERS',res.data)
                    context.dispatch('getCartsUser')
                }).catch(err=>{
                    context.dispatch('showError',err.response.statusText)
                })
        },
        // Create one order 
        // TYPE DATA {card_id : int,product_id : int,quantity : int}
        async createOrder(context,data){
            this.state.order.orderIsLoaded = false
            let userToken = this.getters['userToken']
            let headers = {'Authorization':`Bearer ${userToken}`}
            return new Promise((resolve,reject) => {
                axios.post(`/api/order`,data,{headers}).then(res =>{
                        context.commit('ADD_ORDER',res.data)
                        resolve()
                    }).catch(err=>{
                        context.dispatch('showError',err.response.statusText)
                        reject()
                    })
            })


        },
        // delete order 
        // TYPE  id : int
        async deleteOrder(context,id){
            this.state.order.orderIsLoaded = false
            let userToken = this.getters['userToken']
            await axios.delete(`/api/order/${id}`,{headers:{
                'Authorization':`Bearer ${userToken}`
                 }}).then(res =>{
                    context.commit('DESTROY_ORDER',id)
                }).catch(err=>{
                    context.dispatch('showError',err.response.statusText)
                })
        },
        ////
        // Count Order
        async CountOrder(context) {
            let userToken = this.getters['userToken']
            let headers = {'Authorization':`Bearer ${userToken}`}
            return await new Promise((resolve,reject)=>{
                axios.get(`/api/order/admin/statistic`,{headers}).then(res =>{
                        resolve(res.data)
                    }).catch(err=>{
                        context.dispatch('showError',err.response.statusText)
                })
            })
        },
        ////
        // Order Grey
        async GreyOrderGetList(context) {
            let userToken = this.getters['userToken']
            let headers = {'Authorization':`Bearer ${userToken}`}
            return await new Promise((resolve,reject)=>{
                axios.get(`/api/order/admin/list`,{headers}).then(res =>{
                        resolve(res.data)
                    }).catch(err=>{
                        reject(err)
                })
            })
        },
        ////
        // Order Grey Action
        async GreyOrderAction(context,action) {
            let userToken = this.getters['userToken']
            let headers = {'Authorization':`Bearer ${userToken}`}
            return await new Promise((resolve,reject)=>{
                axios.post(`/api/orders/admin/${action.id}/update`,{State:action.State},{headers}).then(res =>{
                        resolve(res.data)
                    }).catch(err=>{
                        reject(err)
                })
            })
        },
    }
    
}

export default order;