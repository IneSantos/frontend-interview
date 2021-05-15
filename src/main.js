import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Cell from './components/tic-tac-toe/Cell.vue';

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.component('cell', Cell);

const store = new Vuex.Store({
  state: {
    board:  [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  },
  mutations: {
    SET_BOARD(state, board){
      state.board = board
    },
    RESET_BOARD(){
      state.board =  [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    }
  },
  actions: {
    setBoard(context, board){
      context.commit('SET_BOARD', board);
    },
    resetBoard(context){
      context.commit('RESET_BOARD')
    }
  },
  getters: {
    getBoard(state) {
      return state.board;
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
