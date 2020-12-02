// import Vue from 'vue';
// import Vuex from 'vuex';
import { api } from '@/methods/index.js';

import Modal from '@/components/Modal/Modal.vue';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//         count: 0,
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })

//Commit mudança de fato do valor do state
//store.commit('incrementa');
//console.log(store.state.count);

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Home',
    components: {
        Modal
    },
    
    // store: new Vuex.Store({
    //     state: {
    //         count: 0,
    //     },
    //     mutations: {
    //       increment (state) {
    //         state.count++
    //       }
    //     }
    //   }),

    //state - os dados
    data: () => ({
            pageNumber: 0,
            movies: [],
            reqPage: 1,
            link: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
        }),

    //Usado para funçoes de pequeno porte onde não se tem um gatilho tipo um button
    //Fazer um filter para pegar a posição  da 
    computed: {
        count () {
            return this.$store.state.count;
        },
        currentFilm () {
            return this.movies[this.pageNumber]; 
        },
        //O que queremos mapear // ... - Seria o retorno
        ...mapGetters (['counter'])
    },

    
    // ação
    methods: {
        async created(pageNumber) {
            try {
                const response = await api.get(`${pageNumber}`)
                this.movies = response.data.results;
                console.log(response);
            } 
            catch (e) {
                this.errors.push(e);
            }
        },
        teste () {
            alert("funfa")
        },
        openModal () {
            let modal = document.querySelector(".componentModal");
            let menu = document.querySelector(".menu");
            menu.classList.add("display-N");
            modal.classList.remove("display-N");
            modal.classList.add("display-FJA");
        },
        nextFilms () {
            if (this.pageNumber < this.movies.length-1) {
                this.pageNumber++;
                console.log(this.pageNumber);
            }
            else {
                this.created(this.reqPage++);
                this.pageNumber = 0;
            }
        },
        ...mapActions (['decrement', 'increment']) 
    },

    mounted (){
        this.created(this.reqPage++);
    }

    
}


