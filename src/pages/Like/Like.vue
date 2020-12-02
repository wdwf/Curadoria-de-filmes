<template>
    <div class="like">
        <div class="like__movie-container wh">
            <div class="like__logo">
                <img src="../../assets/logo-viva-decora.png">
            </div>
            <h2>FILMES CURTIDOS</h2>

            <div class="like__sequence" v-if="moviesLike.length > 1">
                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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

                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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

                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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

                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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

                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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

                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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

                <div class="like__film">
                    <!-- <img src="" alt=""> -->
                    <div class="like__title wh">
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
            <div class="like__notLikeMovie" v-if="moviesLike.length < 1">
                <img src="../../assets/video-camera-vazio.png">
                <h2>NENHUM FILME</h2>
            </div>
        </div>
    </div>
</template>

<script src="./Like.js">
</script>

<style lang="scss">

// Variaveis
@import "../../scss/layoutColors";
@import "../../scss/global";

// SCSS deste componente
@import "./Like";
@import "./Like_Media";
</style>
