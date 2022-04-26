const card = {
    state:{
        cards:[],
        cardErrors:[]
    },
    getters:{
        findCard : state => id =>state.cards.find(c => c.id == id),
        getAllCards:state=>state.cards,
        getCardError:state=>state.cardErrors
    },
    mutations:{
        SET_CARDS(state,cards){state.cards = cards.data;state.cardErrors =[]},
        ADD_CARD(state,card){state.cards.push(card.data)},
        SET_ERRORS(state,errors){state.cardErrors = errors},
        DESTROY_CARD(state,id){state.cards.splice(state.cards.indexOf(e => e.id == id),1)},
        DELETE_ALL_CARDS(state){state.cards = []}
    },
    actions:{
        //delete all cards in local
        async DeleteAllCards(context){
            context.commit('DELETE_ALL_CARDS')
        },
        // Get All cards 
        async getCardsUser(context){
            if(this.getters['userToken']){
                await axios.get(`/api/card`,{headers:{
                'Authorization':`Bearer ${this.getters['userToken']}`
                 }}).then(res =>{  
                context.commit('SET_CARDS',res.data)
                }).catch(err=>{
                    context.dispatch('showError',err.response.statusText+',error load card')
                })
            }
            else
            context.dispatch('showError','Login first')
        },
        // Create card 
        // TYPE DATA {card_number : number, card_date_expr : date, card_sold : number,}
        async addCardForUser(context,data){
            let userToken = this.getters['userToken']
            await axios.post(`/api/card/add`,data,{headers:{
                'Authorization':`Bearer ${userToken}`
                 }}).then(res =>{
                context.commit('ADD_CARD',res.data)
                }).catch(err=>{
                    if(err.response.status == '422')
                        context.commit('SET_ERRORS',err.response.data.errors)
                    else
                        context.dispatch('showError',err.response.statusText)
                })
        },
        // Delete card
        // id Type number
        async destroyCardForUser(context,id){
            let userToken = this.getters['userToken']
            await axios.delete(`/api/card/${id}`,{headers:{
                'Authorization':`Bearer ${userToken}`
                 }}).then(res =>{
                context.commit('DESTROY_CARD',id)
                }).catch(err=>{
                context.dispatch('showError',err.response.statusText)
                })
        }

    }
    
}

export default card;