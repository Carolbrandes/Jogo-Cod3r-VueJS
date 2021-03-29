<template>
    <div class="btn-wrapper">
        <button class="btn btn-ataque" type="button" @click="ataque">Ataque</button>

        <button class="btn btn-ataque-especial" type="button" @click="ataqueEspecial">Ataque Especial</button>

        <button class="btn btn-curar" type="button" @click="curar">Curar</button>

        <button class="btn btn-desistir" type="button" @click="desistir">Desistir</button>
    </div>
</template>

<script>
export default {
    methods: {
        ataque() {
            console.log("Ataque")
            let novoValor1 = this.$store.state.playerPoints1 > 0 && Math.floor(this.$store.state.playerPoints1 - Math.random() * (Math.random() - 3) - 3)
            let novoValor2 = this.$store.state.playerPoints2 > 0 && Math.floor(this.$store.state.playerPoints2 - Math.random() * (Math.random() - 3) - 3)

            this.$store.commit("SET_PLAYER_1", novoValor1)
            this.$store.commit("SET_PLAYER_2", novoValor2)
        },

        ataqueEspecial() {
            let novoValor1 = this.$store.state.playerPoints1 > 0 && Math.floor(this.$store.state.playerPoints1 - Math.random() * (Math.random() - 5) - 5)
            let novoValor2 = this.$store.state.playerPoints2 > 0 && Math.floor(this.$store.state.playerPoints2 - Math.random() * (Math.random() - 5) - 5)

            this.$store.commit("SET_PLAYER_1", novoValor1)
            this.$store.commit("SET_PLAYER_2", novoValor2)
        },

        curar() {
            console.log("curar")
            let novoValor1 = this.$store.state.playerPoints1 > 0 && this.$store.state.playerPoints1 < 100 && Math.floor(this.$store.state.playerPoints1 + Math.random() * (Math.random() + 3) + 3)
            let novoValor2 = this.$store.state.playerPoints2 > 0 && this.$store.state.playerPoints1 < 100 && Math.floor(this.$store.state.playerPoints2 + Math.random() * (Math.random() + 3) + 3)

            this.$store.commit("SET_PLAYER_1", novoValor1)
            this.$store.commit("SET_PLAYER_2", novoValor2)
        },

        desistir() {
            this.$store.commit("SET_PLAYER_1", 100)
            this.$store.commit("SET_PLAYER_2", 100)
        }
    }
}
</script>

<style scoped>
.btn-wrapper {
    display: flex;
    justify-content: center;
    background-color: #c695cc;
    padding: 3rem;
    border-radius: 10px;
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
}

.btn {
    width: 250px;
    border: none;
    outline: none;
    border-radius: 10px;
    height: 50px;
    padding: 1rem 2rem;
    margin: 0 1rem;
    color: #3a3939;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    line-height: 0.5rem;
    cursor: pointer;
}

.btn-ataque {
    background-color: #8b1919;
    color: #fff;
}

.btn-ataque-especial {
    background-color: #f7ce1b;
}

.btn-curar {
    background-color: #209c07;
    color: #fff;
}

.btn-desistir {
    background-color: #cecbcb;
}
</style>
