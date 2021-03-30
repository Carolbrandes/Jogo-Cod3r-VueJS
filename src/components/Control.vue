<template>
    <div class="control">
        <button class="btn btn-ataque" type="button" @click="ataque(alvo)">Ataque</button>

        <button class="btn btn-ataque-especial" type="button" @click="ataqueEspecial(alvo)">Ataque Especial</button>

        <button class="btn btn-curar" type="button" @click="curar(jogador)">Curar</button>

        <button class="btn btn-desistir" type="button" @click="desistir">Desistir</button>
    </div>
</template>

<script>
export default {
    props: ["alvo", "jogador"],

    methods: {
        ataque(alvo) {
            console.log("Ataque")

            if (alvo === "jogador1") {
                let novoValor1 = this.$store.state.playerPoints1 > 0 && Math.floor(this.$store.state.playerPoints1 - Math.max(0, 15) * 3)

                this.$store.commit("SET_PLAYER_1", novoValor1)
            }

            if (alvo === "jogador2") {
                let novoValor2 = this.$store.state.playerPoints1 > 0 && Math.floor(this.$store.state.playerPoints1 - Math.max(0, 15) * 3)

                this.$store.commit("SET_PLAYER_2", novoValor2)
            }

            if (this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0) {
                this.$store.dispatch("defineWinner")
            }
        },

        ataqueEspecial(alvo) {
            if (alvo === "jogador1") {
             let novoValor1 = this.$store.state.playerPoints1 > 0 ? Math.floor(this.$store.state.playerPoints1 - Math.max(0, 20) * 5) : 0

                this.$store.commit("SET_PLAYER_1", novoValor1)
            }

            if (alvo === "jogador2") {
                let novoValor2 = this.$store.state.playerPoints1 > 0 ?  Math.floor(this.$store.state.playerPoints1 - Math.max(0, 20) * 5) : 0

                this.$store.commit("SET_PLAYER_2", novoValor2)
            }

            if (this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0) {
                this.$store.dispatch("defineWinner")
            }
        },

        curar(jogador) {
            console.log("curar")

            if (jogador === "jogador1") {
                let novoValor1 = this.$store.state.playerPoints1 > 0 && this.$store.state.playerPoints1 < 100 ? Math.floor(this.$store.state.playerPoints1 + Math.max(1, 20)) : 0
                this.$store.commit("SET_PLAYER_1", novoValor1)
            }
            if (jogador === "jogador2") {
                let novoValor2 = this.$store.state.playerPoints2 > 0 && this.$store.state.playerPoints2 < 100 ? Math.floor(this.$store.state.playerPoints2 + Math.max(0, 20)) : 0
                this.$store.commit("SET_PLAYER_2", novoValor2)
            }

            if (this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0) {
                this.$store.dispatch("defineWinner")
            }


        },

        desistir() {
            this.$store.commit("SET_PLAYER_1", 100)
            this.$store.commit("SET_PLAYER_2", 100)
        }
    },
}
</script>

<style scoped>
.control {
    width: 500px;
    height: 220px;
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #e477ad;
    border-radius: 10px;
    position: relative;
    background-image: url("/assets/controle.png");
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.btn {
    border: none;
    outline: none;
    border-radius: 10px;
    width: 40%;
    height: 80px;
    padding: 1rem 2rem;
    margin: 0 1rem;
    color: #3a3939;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    line-height: 1.5rem;
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
