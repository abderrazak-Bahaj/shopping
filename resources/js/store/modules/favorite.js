const favorite = {
    state:{
        favorites:[]
    },
    getters:{
        findFavorite: state => product_id =>state.favorites.find(f => f.product_id == product_id),
        hasFavorite: state => product_id =>!!state.favorites.find(f => f.product_id == product_id),
        getAllFavorites:state=>state.favorites
    },
    mutations:{
        SET_FAVORITES(state,favorites){state.favorites = favorites.data;},
        ADD_FAVORITE(state,favorite){state.favorites.push(favorite.data)},
        DELETE_ALL_FAVORITES(state){state.favorites=[]},
        DESTROY_FAVORITE(state,id){state.favorites.splice(state.favorites.findIndex(f => f.id == id),1)}
    },
    actions:{
        // Get All FAVORITE 
        async getFavorites(context){
            let userToken = this.getters['userToken']
            if(userToken){
                await axios.get(`/api/favorite`,{headers:{'Authorization':`Bearer ${userToken}`}}).then(res =>{  
                    context.commit('SET_FAVORITES',res.data)
                }).catch(err=>{
                    context.dispatch('showError',err.response.statusText+',error load favorite')
                })
            }
        },
        ///delete all favorites local 
        async DeleteAllFavorites(context){
            context.commit('DELETE_ALL_FAVORITES')
        },
        // Create FAVORITE 
        // TYPE DATA {product_id : INTEGER}
        async addFavorite(context,data){
            let userToken = this.getters['userToken']
            await axios.post(`/api/favorite`,data,{headers:{'Authorization':`Bearer ${userToken}`}})
            .then(res =>{
                context.commit('ADD_FAVORITE',res.data)
                })
            .catch(err=>{
                context.dispatch('showError',err.response.statusText)
                })
        },
        // Delete FAVORITE
        // id Type INTEGER
        async destroyFavorite(context,id){
            let userToken = this.getters['userToken']
            await axios.delete(`/api/favorite/${id}`,{headers:{
                'Authorization':`Bearer ${userToken}`
                 }}).then(res =>{
                context.commit('DESTROY_FAVORITE',id)
                }).catch(err=>{
                context.dispatch('showError',err.response.statusText)
                })
        }

    }
    
}

export default favorite;