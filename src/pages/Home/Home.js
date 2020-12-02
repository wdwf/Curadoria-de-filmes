import { api } from '@/methods/index.js';

import Modal from '@/components/Modal/Modal.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Home',
    components: {
        Modal
    },
    data: () => ({
            pageNumber: 0,
            movies: [],
            reqPage: 1,
            link: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
        }),

    computed: {
        count () {
            return this.$store.state.count;
        },
        currentFilm () {
            return this.movies[this.pageNumber]; 
        },
        ...mapGetters (['counter'])
    },

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
