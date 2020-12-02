<template>
    <div class="menu">
        <div v-on:click="MenuAction" class="menu__openbtn">
            <img src="../../assets/menu-lateral.png">
        </div>

        <div id="sideMenu" class="menu__sideMenu">
            <a href="/">FILMES NÃO CURADOS</a>
            <a href="/curtidos">FILMES CURTIDOS</a>
            <a href="/naocurtidos" >FILMES NÃO CURTIDOS</a>
        </div>
    </div>
</template>

<script src="./Menu.js">
</script>


<style lang="scss">

// Variaveis
@import "../../scss/layoutColors";
@import "../../scss/global";

// SCSS deste componente
@import "./Menu";
@import "./Menu_Media.scss";

</style>
