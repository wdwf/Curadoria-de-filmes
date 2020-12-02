import { api } from '@/methods/index.js';

import Modal from '@/components/Modal/Modal.vue';

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
        currentFilm () {
            return this.movies[this.pageNumber]; 
        }
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
    },

    mounted (){
        this.created(this.reqPage++)
    }

    
}
