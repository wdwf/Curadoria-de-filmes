<template>
    <div class="modal display-FJA wh display-N">
        <div class="modal__container">
            <span class="modal__close" v-on:click="closeModal">&times;</span>
            <span class="img"></span>
            <div class="modal__description"> 
                <h2>TT</h2>
                <p class="modal__typeMovie">2017•FANTASY/SCIENCE FICTION</p>
                <p class="modal__typeMovie">FILME•2H 21M</p>
                <ul class="modal__favority">
                    <li><img src="../../assets/favorite.png"></li>
                    <li><img src="../../assets/favorite.png"></li>
                    <li><img src="../../assets/favorite.png"></li>
                    <li><img src="../../assets/favorite.png"></li>
                    <li><img src="../../assets/favorite.png"></li>
                </ul>
                <p class="modal__preview">(120 avaliações)</p>
                <div class="modal__overwide">
                    <p>
                        havia uma pedra no caminho no caminho havia uma pedra
                    </p>
                </div>
            </div>
        </div>
        <div class="modal__background wh"></div>
    </div>
</template>

<script src="./Modal.js">
</script>

<style lang="scss">

// Variaveis
@import "../../scss/layoutColors";
@import "../../scss/global";
@import "../../scss/resetStyle";

// SCSS deste componente
@import "./Modal";
</style>
