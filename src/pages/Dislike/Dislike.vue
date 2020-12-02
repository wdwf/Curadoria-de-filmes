<template>
      <div class="dislike">
        <div class="dislike__movie-container wh">
            <div class="dislike__logo">
                <img src="../../assets/logo-viva-decora.png">
            </div>
            <h2>FILMES NÃO CURTIDOS</h2>
            
            <div class="dislike__sequence" v-if="moviesDislike.length > 1">
                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>

                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>

                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>

                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>

                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>

                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>

                <div class="dislike__film">
                    <!-- <img src="" alt=""> -->
                    <div class="dislike__title wh">
                        <h3>TITLE</h3>
                        <ul>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                            <li><img src="../../assets/favorite.png"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="dislike__notDislikeMovie" v-if="moviesDislike.length < 1">
                <img src="../../assets/video-camera-vazio.png">
                <h2>NENHUM FILME</h2>
            </div>
        </div>
    </div>
  
</template>

<script src="./Dislike.js">
</script>


<style lang="scss">

// Variaveis
@import "../../scss/layoutColors";
@import "../../scss/global";

// SCSS deste componente
@import "./Dislike";
@import "./Dislike_Media.scss";
</style>
