<template>
    <div class="btn-wrapper">
        <button class="btn btn-ataque" type="button" @click="ataque">Ataque</button>

        <button class="btn btn-ataque-especial" type="button">Ataque Especial</button>

        <button class="btn btn-curar" type="button">Curar</button>

        <button class="btn btn-desistir" type="button">Desistir</button>
    </div>
</template>

<script>
export default {
    methods: {
        ataque() {
            console.log("Ataque")
            let novoValor1 = this.$store.state.playerPoints1 > 0 && this.$store.state.playerPoints1 - Math.random()
            let novoValor2 = this.$store.state.playerPoints2 > 0 && this.$store.state.playerPoints2 - Math.random()

            console.log(novoValor1)
            console.log(novoValor2)

            this.$store.commit("SET_PLAYER_1", novoValor1)
            this.$store.commit("SET_PLAYER_2", novoValor2)
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
