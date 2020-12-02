import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const store = new Vuex.Store({

    state: {
        counter: 10
    },

    mutations: {
        decrement: state => state.counter--,
        increment: (state, num) => state.counter = num
    },
    
    getters: {
        counter: state => state.counter
    },
    
    actions: {
        
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => commit('increment'),
        
    }
})

const api = axios.create({
    baseURL: `https://api.themoviedb.org/4/list/`,
    params: {
        api_key: 'ed48ea034a175c8c4c97597ab1f5d0e9'
    }
})

export {store, api};