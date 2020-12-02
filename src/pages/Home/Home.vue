<template>
  <div class="home" v-if="movies.length > 1">

    <Modal class="componentModal" />

    <div class="home__movie-container wh">

      <div class="home__logo">
        <img src="../../assets/logo-viva-decora.png" alt="" srcset="">
      </div>

      <div class="home__movie">
        <img class="home__img wh" v-bind:src="link + currentFilm.poster_path">
        <div class="home__component-descript wh">
          <div class="home__sub-descript wh">
            <h2>{{ currentFilm.original_title.toUpperCase() }}</h2>
            <div class="home__favorite">
              <ul>
                <li><img src="../../assets/favorite.png"></li>
                <li><img src="../../assets/favorite.png"></li>
                <li><img src="../../assets/favorite.png"></li>
                <li><img src="../../assets/favorite.png"></li>
                <li><img src="../../assets/favorite_.png"></li>
              </ul>
              <p>
                (120 avaliações)
              </p>
            </div>
            <div class="home__overview">
              <p>Before She was Wond (G...</p>
              <button v-on:click="openModal" class="sinopse">Ver Sinopse</button>
            </div>
          </div>
        </div>
      </div>

      <div class="home__buttons">
        <button class="btn-curtir">
          <img src="../../assets/n-curti.png" alt="" srcset="">
        </button>
        <button class="pular" v-on:click="nextFilms">
          PULAR
        </button>
        <button class="btn-curtir">
          <img src="../../assets/curti.png" alt="" srcset="">
        </button>
      </div>

      <h1> {{ counter }} </h1>
    <button @click="decrement">Decremento</button>
    <button @click="increment">Incremento</button>
    

    </div>
    <img class="home__background" v-bind:src="link + currentFilm.backdrop_path">
    <!-- {{movies[0]}} -->

  </div>
  
</template>

<script src="./Home.js">
</script>


<style lang="scss">

// Variaveis
@import "../../scss/layoutColors";
@import "../../scss/global";

// SCSS deste componente
@import "./Home";
@import "./Home_Media";
</style>
