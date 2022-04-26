import { reject } from "lodash";

const category = {
    state:{
        categorais:[],
        categoryIsLoad:false
    },
    getters:{
        findCategory : state => id =>state.categorais.find(c => c.id == id),
        getCategoryError:state=>state.categoryError,
        isEditAction:state=>!!state.editCategory,
        getAllCategorais:state=>state.categorais,
        getCategoryIsLoad:state=>state.categoryIsLoad
    },
    mutations:{
        SET_CATEGORAIS(state,categorais){state.categorais = categorais.data;state.categoryIsLoad = true},
        ADD_CATEGORY(state,category){state.categorais.push(category.data);state.categoryIsLoad = true},
        UPDATE_CATEGORY(state,category){state.categorais[state.categorais.indexOf(c => c.id == category.data.id)] = category.data;state.categoryIsLoad = true},
        DESTROY_CATEGORY(state,id){state.categorais.splice(state.categorais.findIndex(e => e.id == id),1);state.categoryIsLoad = true}
    },
    actions:{
        // Get All Categorais 
        async getCategorais(context){
            this.state.category.categoryIsLoad = false
            await axios.get('/api/category').then(res =>{
                context.commit('SET_CATEGORAIS',res.data)
            }).catch(err=>{
                context.dispatch('showError',err.response.statusText)
            })
        },
        // Create Category 
        // TYPE category  {cat_name : STRING,cat_img : IMG}
        async addCategory(context,category){
            this.state.category.categoryIsLoad = false
            return await new Promise((resolve, reject)=>{
                let formData = new FormData()
                formData.append("cat_img", category.cat_img)
                formData.append("cat_name", category.cat_name)
                let userToken = this.getters['userToken']
                 axios.post(`/api/category`,formData,{headers:{
                    'Authorization':`Bearer ${userToken}`,
                    'Content-Type': 'multipart/form-data',
                     }}).then(res =>{
                        context.commit('ADD_CATEGORY',res.data)
                            resolve(true)
                    }).catch(err=>{
                        if(err.response.status == '422')
                            reject(err.response.data.errors)
                        else
                            context.dispatch('showError',err.response.statusText)
                    })
            })
        },
        // Update Category 
        // TYPE category {cat_name : STRING,cat_img : IMG}
         updateCategory(context,data){ 
            this.state.category.categoryIsLoad = false
            let userToken = this.getters['userToken']
            let headers = {'Authorization':`Bearer ${userToken}`,'Content-Type': 'multipart/form-data'}
            let formData = new FormData()
            formData.append("cat_img",data.cat_img)
            formData.append("cat_name",data.cat_name)
            return new Promise((resolve, reject) =>{
             axios.post(`/api/category/${data.id}`,formData,{headers})
             .then(res =>{
                context.commit('UPDATE_CATEGORY',res.data)
                resolve(res)
                }).catch(err=>{
                    context.dispatch('showError',err.response.statusText)
                    reject(err)
                })
            })       
        },
        // Delete Category
        // id Type INTEGER
        async destroyCategory(context,id){
            this.state.category.categoryIsLoad = false
            let userToken = this.getters['userToken']
            await axios.delete(`/api/category/${id}`,{headers:{
                'Authorization':`Bearer ${userToken}`
                 }}).then(res =>{
                context.commit('DESTROY_CATEGORY',id)
                }).catch(err=>{
                context.dispatch('showError',err.response.statusText)
                })
        },
    }
}
export default category;