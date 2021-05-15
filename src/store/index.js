const store = {
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

}

export default store;