import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name: 'Vue',
        list: [1,2,3,4,5]
    },
    actions:{
        addNewNumber({commit}, number){
            setTimeout(() =>{
                commit("updateNumber", number)
            }, 2000)
            console.log(number)
        }
    },
    mutations:{
        updateNumber(state, payload){
            state.list.push(payload)
        }
    },
    getters:{
        getName(state){
            return state.name
        },
        getList(state){
            return state.list
        }
    },
    modules:{}
})