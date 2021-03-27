<template>
    <div id="app">
        <div class="player-area">
            <Player :points="this.$store.state.playerPoints1" name="Pikachu" photo="./static/assets/pikachu-inicio.png" :style="{color: '#FFD700'}" />
            <p class="players-vs">VS</p>
            <Player :points="this.$store.state.playerPoints2" name="Charmander" photo="./static/assets/charmander-inicio.png" :style="{color: '#FF4500'}" />
        </div>

        <Controls />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        Player: () =>
            import ("@/components/Player.vue"),

        Controls: () => import("@/components/Controls.vue")
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
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
    overflow-x: hidden;
}

.player-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 2rem;
}

.players-vs {
    font-size: 8rem;
    font-weight: bold;
    color: #DA70D6;
    font-family: 'Rammetto One', cursive;
    padding: 0 1rem;
}
</style>
