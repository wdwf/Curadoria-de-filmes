import { mapGetters } from 'vuex';

export default { 
    name: 'Modal',
    computed: {
        yearMovie () {
            return this.movies[0].release_date.splice(0,4)
        },
        movieTitle () {
            return this.movies[0].original_title.toUpperCase()
        },
        ...mapGetters (['link'])
    },
    methods: {
        closeModal () {
            let modal = document.querySelector(".modal");
            let menu = document.querySelector(".menu");
            menu.classList.remove("display-N");
            modal.classList.remove("display-FJA");
            modal.classList.add("display-N");
            //console.log(this.$store.state.count);
        }
    }
}