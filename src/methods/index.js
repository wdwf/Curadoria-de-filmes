import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

//cria uma conexão com a api pelo axios
// const api = axios.create({
//     //link para fazer as requisiçoes - link de conexão
//     baseURL: 'https://api.themoviedb.org/4/list',
//     params: {
//         api_key:'ed48ea034a175c8c4c97597ab1f5d0e9'
//     }
// }),

// export default api

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        counter: 10
    },
    mutations: {
        decrement: state => state.counter--,
        increment: (state, num) => state.counter = num
    },
    //getters são como computers
    getters: {
        counter: state => state.counter
    },
    //fAZEM CHAMADAS que resultam em commits 
    actions: {
        // decrement: context => context.commit('decrement')
        //Descontruindo o objeto
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => commit('increment'),
        // increment: ({ commit }) => {
        //     setTimeout(() => {
        //         commit('increment', 5)
        //     },2000)
        // }

    }
})

const api = axios.create({
    baseURL: `https://api.themoviedb.org/4/list/`,
    params: {
        api_key: 'ed48ea034a175c8c4c97597ab1f5d0e9'
    }
})

export {store, api};