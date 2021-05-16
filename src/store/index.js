export const store = {
    state: {
      hasgameStarted: false,
      numOfgames: 0,
      winsPlayer1: 0,
      winsPlayer2: 0,
      gameHistory: ['', '', '' , '', '']
    },
    mutations: {
      SET_GAME_STARTED(state, hasgameStarted) {
        state.hasgameStarted = hasgameStarted
      },
      INC_NUM_GAMES(state) {
        state.numOfgames++
      },
      SET_WINS_PLAYER_1(state, winsPlayer1) {
        state.winsPlayer1 = winsPlayer1
      },
      SET_WINS_PLAYER_2(state, winsPlayer2) {
        state.winsPlayer2 = winsPlayer2
      },
      SET_GAME_HISTORY(state, player) {
        state.gameHistory[state.numOfgames-1] = player;
      },
      RESET_GAME(state) {
        state.hasgameStarted = false;
      }
    },
    actions: {
      setGameStart(context, hasgameStarted){
        context.commit('SET_GAME_STARTED', hasgameStarted);
      },
      resetBoard(context){
        context.commit('RESET_BOARD')
      },
      incNumOfGames(context){
        context.commit('INC_NUM_GAMES');
      },
      setWinsPlayer1(context, winsPlayer1){
        context.commit('SET_WINS_PLAYER_1', winsPlayer1);
      },
      setWinsPlayer2(context, winsPlayer2){
        context.commit('SET_WINS_PLAYER_2', winsPlayer2);
      },
      setGameHistory(context, player){
        context.commit('SET_GAME_HISTORY', player);
      }
    },
    getters: {
      getHasGameStarted(state) {
        return state.hasgameStarted;
      },
      getNumOfGames(state) {
        return state.numOfgames;
      },
      getWinsPlayer1(state) {
        return state.winsPlayer1;
      },
      getWinsPlayer2(state) {
        return state.winsPlayer2;
      },
      getGameHistory(state) {
        return state.gameHistory;
      },
    }

}

