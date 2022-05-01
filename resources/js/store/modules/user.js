
const user = {
    state: {
        authenticated: false,
        loginError: '',
        registerErrors: [],
        user: '',
        token: '',
    },
    getters: {
        userHasAuth: state => state.authenticated,
        userIsAdmin: state => (state.user.isAdmin == 1) ? true : false,
        EmailIsVerified: state => (state.user.email_verified_at == null) ? false : true,
        userToken: state => state.token,
        userInfo: state => state.user,
        userLoginError: state => state.loginError,
        userRegisterError: state => state.registerErrors
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.authenticated = true;
            state.loginError = ''
        },
        SET_TOKEN(state, token) { state.token = token },
        SAVE_TOKEN_USER(state, data) { localStorage.setItem('token', data.access_Token) },
        SET_LOGIN_ERROR(state, data) { state.loginError = data.message; },
        SET_REGISTER_ERRORS(state, data) { state.registerErrors = data },
        LOGOUT_USER(state) {
            state.authenticated = false
            state.user = ''
            state.token = ''
            localStorage.clear()
        }
    },
    actions: {
        /**
         * @param {email:string,password:string,password_confirmation:string} user
         */
        Login(context, user) {
            return new Promise((resolve, reject) => {
                axios.post('/api/user/login', user)
                    .then(response => {
                        if (response.status == 200) {
                            if (response.data.user.email_verified_at != null) {
                                context.commit('SET_USER', response.data.user)
                                context.commit('SET_TOKEN', response.data.access_Token)
                                context.commit('SAVE_TOKEN_USER', response.data)
                                context.dispatch('getCardsUser')
                                context.dispatch('getCartsUser')
                                context.dispatch('getFavorites')

                                if(this.getters['userIsAdmin'])
                                    resolve(true)
                                else
                                    resolve(false)
                            }
                            else {
                                resolve({ token: response.data.access_Token })
                            }
                        }
                        else {
                            context.commit('SET_LOGIN_ERROR', response.data)
                            reject(false)
                        }
                    }).catch(error => {
                        context.dispatch('showError', error)
                        reject(false);
                    })
            })
        },
        /**
         * @param {phone_number=string,Date_birth:data,address:string,last_name:string,first_name:string,email:string,password:string} user
         */
        register(context, user) {
            return new Promise((resolve, reject) => {
                axios.post('/api/user/register', user)
                    .then(response => { resolve(response.data) })
                    .catch(errors => {
                        if (errors.response.status == '422')
                            context.commit('SET_REGISTER_ERRORS', errors.response.data.errors)
                        else
                            context.dispatch('showError', errors.response.statusText)
                        reject();
                    })
            })
        },
        /**
         * @param  non
         */
        logoutUser(context) {
            return new Promise((resolve, reject) => {
                let token = this.getters["userToken"];
                context.commit('LOGOUT_USER')
                context.dispatch('DeleteAllCarts')
                context.dispatch('DeleteAllCards')
                context.dispatch('DeleteAllFavorites')
                context.dispatch('DeleteAllOrders')
                axios.get('/api/logout', { headers: { 'Authorization': `Bearer ${token}` } })
                    .then(response => {
                        context.commit('LOGOUT_USER')
                        resolve(true)
                    })
                    .catch(errors => {
                        reject(errors)
                    })
            })
        },
        /**
         * @param  {phone_number=string,Date_birth:data,address:string,last_name:string,first_name:string,} user 
         */
        updateProfile(context, user) {
            const headers = { 'Authorization': `Bearer ${context.state.token}` }
            return new Promise((resolve, reject) => {
                axios.post('/api/user/update', user, { headers })
                    .then(response => {
                        if (response.status == 200) {
                            context.commit('SET_USER', response.data)
                            resolve(true)
                        }
                    }).catch(error => {
                        if (error.response.status == '422')
                            reject(error.response.data.errors)
                        else if (error.response.status == '401') {
                            reject(false)
                        }
                        else
                            context.dispatch('showError', error.response.statusText)
                    })
            })

        },
        /**
         * @param {currentPassword=string,newPassword:data,newPassword_confirmation:string} data 
         */
        editPassword(context, data) {
            const headers = { 'Authorization': `Bearer ${context.state.token}` }
            return new Promise((resolve, reject) => {
                axios.put('/api/user/editpassword', data, { headers })
                    .then(res => {
                        if (res.status == 200)
                            resolve(true)
                    }).catch(error => {
                        if (error.response.status == '422')
                            reject(error.response.data.errors)
                        else if (error.response.status == '401')
                            reject(false)
                        else
                            context.dispatch('showError', error.response.statusText)
                    })
            })

        },
        /**
         * @param {token=string,email:string,password:string,password_confirmation:string} data 
         */
        resetPassword(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/api/user/reset-password', data).then(response => {
                    resolve()
                }, error => {
                    if (error.response.status == '422')
                        reject(error.response.data.errors)
                    else if (error.response.status == '401')
                        reject(false)
                    else
                        context.dispatch('showError', error.response.statusText)
                })
            })
        },
        /**
         * @param {email:string} data 
         */
        forgotPassword(context, email) {
            return new Promise((resolve, reject) => {

                axios.post('/api/user/forgot-password', email).then(response => {
                    resolve()
                }, error => {
                    if (error.response.status == '422')
                        reject(error.response.data.errors)
                    else if (error.response.status == '401')
                        reject(false)
                    else
                        context.dispatch('showError', error.response.statusText)
                })
            })
        },
        /**
         * @param {token:string,id:int} data 
         */
        emailVerify(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`/api/email/verify/${data.id}/${data.token}`).then(response => {
                    if (response.status == 200)
                        resolve(response)
                    else
                        reject(response)
                }, error => {
                    if (error.response.status == '422')
                        reject(error.response.data.errors)
                    else if (error.response.status == '401')
                        reject(false)
                    else
                        context.dispatch('showError', error.response.statusText)
                })
            })
        },
        /**
         * @param {token:string} data 
         */
        emailResend(context, token) {
            const headers = { 'Authorization': `Bearer ${token}` }
            return new Promise((resolve, reject) => {
                axios.post('/api/email/resend', null, { headers }).then(response => {
                    if (response.status == 200) {
                        resolve(true)
                        console.log(response);
                    }
                    else
                        reject(response)
                }, error => {
                    if (error.response.status == '422')
                        reject(error.response.data.errors)
                    else if (error.response.status == '401')
                        reject(error.response.statusText)
                    else if (error.response.status == '500')
                        reject(error.response.statusText)
                    else
                        context.dispatch('showError', error.response.statusText)
                })
            })
        },
        /**
         * @param {page:number} page
         */
        async getUsers(context) {
            let userToken = this.getters['userToken']
            let headers = { 'Authorization': `Bearer ${userToken}` }
            return await new Promise((resolve, reject) => {
                axios.get('/api/users/admin', { headers }).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err.response.statusText)
                })
            })
        },
        /**
         * @param {id:number,password:string,isAdmin:[0,1]} user
         */
        SetAdmin(context, user) {
            let userToken = this.getters['userToken']
            let headers = { 'Authorization': `Bearer ${userToken}` }
            return new Promise((resolve, reject) => {
                axios.put(`/api/users/admin/${user.id}`, { password: user.password, isAdmin: 1 }, { headers })
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => { 
                        reject(error.response.statusText)
                     })
            })
        },
        /**
         * @param {id:number,password:string} user
         */
        async deleteUser(context, user) {
            let userToken = this.getters['userToken']
            let headers = { 'Authorization': `Bearer ${userToken}` }
            return await new Promise((resolve, reject) => {
                axios.delete(`/api/users/admin/${user.id}`,{headers,data:{password: user.password}})
                    .then(() => {  resolve(user.id) })
                    .catch(err => {reject(err.response.statusText) })
            })
        },

        // Count Product
        async CountUser(context) {
            let userToken = this.getters['userToken']
            let headers = { 'Authorization': `Bearer ${userToken}` }
            return await new Promise((resolve, reject) => {
                axios.get(`/api/user/admin/statistic`, {headers}).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    context.dispatch('showError', err.response.statusText)
                })
            })
        },
    }

}
export default user;