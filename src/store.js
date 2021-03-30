import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerPoints1: 100,
    playerPoints2: 100,
    winner: ""
  },

  mutations: {
    SET_PLAYER_1(state, payload) {
      state.playerPoints1 = payload;
    },

    SET_PLAYER_2(state, payload) {
      state.playerPoints2 = payload;
    },

    SET_WINNER(state, payload) {
      state.winner = payload;
    }
  },

  actions: {
    defineWinner(context) {
      context.playerPoints1 > context.playerPoints2
        ? context.commit("SET_WINNER", "Pikachu Venceu!")
        : context.commit("SET_WINNER", "Charmander Venceu!");
    }
  }
});
