const rate = {
    state: {
        rates: []
    },
    getters: {
        findRate: state => product_id => state.rates.find(r => r.product_id == product_id),
    },
    mutations: {
        SET_RATES(state, rates) {
            state.rates = rates.data.map(r => {
                let total = Number.parseInt(r.total_point) / Number.parseFloat(r.count_point)
                return { point_rate: total.toFixed(1), product_id: r.product_id }
            })
        },
        ADD_RATE(state, rate) {
            let el = state.rates.indexOf(e => e.product_id == rate.data.product_id)
            state.rates[el].count_point++
            state.rates[el].total_point += rate.data.rate_Point
        },
    },
    actions: {
        // Get All rates 
        async getRates(context) {
            await axios.get(`/api/rate`).then(res => {
                context.commit('SET_RATES', res.data)
            }).catch(err => {
                context.dispatch('showError', err.response.statusText)
            })
        },
        // Create rate 
        // TYPE DATA {product_id : INTEGER ,rate_Point : INTEGER}
        async addRate(context, data) {
            let userToken = this.getters['userToken']
            let headers = {'Authorization': `Bearer ${userToken}`}
            return await new Promise((resolve, reject) => {
                axios.post(`/api/rate`, data, {headers}).then(res => {
                    context.commit('SET_RATES', res.data)
                    resolve()
                }).catch(err => {
                    context.dispatch('showError', err.response.statusText)
                    reject()
                })
            })
        },
        // Delete rate
        // id Type INTEGER
        async destroyRate(context, id) {
            let userToken = this.getters['userToken']
            await axios.delete(`/api/rate/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then(res => {
                console.log('delete')
            }).catch(err => {
                context.dispatch('showError', err.response.statusText)
            })
        }

    }

}

export default rate;