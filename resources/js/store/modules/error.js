const error = {
    state:{
        show:false,
        message:[],
    },
    getters:{
        hasError: state => state.show,
        getErrors:state => state.message
    },
    mutations:{
        setError(state,message){
            state.show = true 
            state.message = message
        }
    },
    actions:{
        showError(context,message){
            context.commit('setError',message)
        }
    }

}
export default error;