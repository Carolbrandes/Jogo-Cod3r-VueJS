<template>
    <div id="app">
        <div class="player-area">
            <Player name="Pikachu" photo="./static/assets/pikachu-inicio.png" :style="{color: '#FFD700'}" />
            <p class="players-vs">VS</p>
            <Player name="Charmander" photo="./static/assets/charmander-inicio.png" :style="{color: '#FF4500'}" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        Player: () =>
            import ("@/components/Player.vue")
    }
}
</script>

<style>
*{
  box-sizing: border-box;
  padding:0;
  margin: 0;
}

body {
    min-height: 100vh;
    background-color: #4e0891;
    overflow: hidden;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
}

.player-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}

.players-vs {
    font-size: 8rem;
    font-weight: bold;
    color: #DA70D6;
    font-family: 'Rammetto One', cursive;
    padding: 0 1rem;
}
</style>
