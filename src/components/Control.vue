<template>
    <div class="control">
        <button class="btn btn-ataque" type="button" @click="ataque(jogador)">
                        Ataque
                        </button>

        <button class="btn btn-ataque-especial" type="button" @click="ataqueEspecial(jogador)">Ataque Especial</button>

        <button class="btn btn-curar" type="button" @click="curar(jogador)">Curar</button>

        <button class="btn btn-desistir" type="button" @click="desistir">Desistir</button>
    </div>
</template>

<script>
export default {
    props: ["alvo", "jogador"],


    methods: {
        ataque(jogador) {
            if (jogador === "jogador1") {
                console.log("Jogador 1")
                let valorAtaque = this.$store.state.playerPoints2 - Math.floor(Math.random() * (5 - 1) + 1)
                console.log(valorAtaque)

                if (this.$store.state.playerPoints2 > 0 && valorAtaque >= 0) {
                    this.$store.commit("SET_PLAYER_2", valorAtaque)

                     this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0 && this.$store.dispatch("defineWinner")
                }else {
                    alert("Não foi dessa vez!")
                }

            } else {
                console.log("Jogador 2")
                let valorAtaque2 = this.$store.state.playerPoints1 - Math.floor(Math.random() * (5 - 1) + 1)
                console.log(valorAtaque2)

                if (this.$store.state.playerPoints1 > 0 && valorAtaque2 >= 0) {
                    this.$store.commit("SET_PLAYER_1", valorAtaque2)

                    this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0 && this.$store.dispatch("defineWinner")
                }else {
                    alert("Não foi dessa vez!")
                }
            }


        },

        ataqueEspecial(jogador) {
            if (jogador === "jogador1") {
                console.log("Jogador 1")
                let valorAtaque = this.$store.state.playerPoints2 - Math.floor(Math.random() * (10 - 1) + 1) * 4
                console.log(valorAtaque)

                if (this.$store.state.playerPoints2 > 0 && valorAtaque >= 0) {
                    this.$store.commit("SET_PLAYER_2", valorAtaque)

                    this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0 && this.$store.dispatch("defineWinner")
                }else {
                    alert("Não foi dessa vez!")
                }

            } else {
                console.log("Jogador 2")
                let valorAtaque2 = this.$store.state.playerPoints1 - Math.floor(Math.random() * (10 - 1) + 1) * 4
                console.log(valorAtaque2)

                if (this.$store.state.playerPoints1 > 0 && valorAtaque2 >= 0) {
                    this.$store.commit("SET_PLAYER_1", valorAtaque2)

                    this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0 && this.$store.dispatch("defineWinner")
                }else {
                    alert("Não foi dessa vez!")
                }
                this.$store.state.playerPoints1 === 0 || this.$store.state.playerPoints2 === 0 && this.$store.dispatch("defineWinner")
            }


        },

        curar(jogador) {
            if (jogador === "jogador1") {
                console.log("Jogador 1")
                let valorCura = this.$store.state.playerPoints1 + Math.floor(Math.random() * (10 - 1) + 1) * 4
                console.log(valorCura)

                if (this.$store.state.playerPoints1 > 0 && this.$store.state.playerPoints1 < 100 && valorCura < 100) {
                    this.$store.commit("SET_PLAYER_1", valorCura)
                } else {
                    alert("Não tem cura pra você agora!")
                }
            } else {
                console.log("Jogador 2")
                let valorCura2 = this.$store.state.playerPoints2 + Math.floor(Math.random() * (10 - 1) + 1) * 4
                console.log(valorCura2)

                if (this.$store.state.playerPoints2 > 0 && this.$store.state.playerPoints2 < 100 && valorCura2 < 100) {
                    this.$store.commit("SET_PLAYER_2", valorCura2)
                } else {
                    alert("Não tem cura pra você agora!")
                }
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
