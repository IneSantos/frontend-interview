export const store = {
    state: {
      hasgameStarted: false,
      numOfgames: 0,
      scorePlayer1: 0,
      scorePlayer2: 0,
      winsPlayer1: 0,
      winsPlayer2: 0,
      lossPlayer1: 0,
      lossPlayer2:0,
      gameHistory: ['', '', '' , '', '']
    },
    mutations: {
      SET_GAME_STARTED(state, hasgameStarted) {
        state.hasgameStarted = hasgameStarted
      },
      INC_NUM_GAMES(state) {
        state.numOfgames++
      },
      SET_SCORE_PLAYER_1(state, scorePlayer1) {
        state.scorePlayer1 = scorePlayer1
      },
      SET_SCORE_PLAYER_2(state, scorePlayer2) {
        state.scorePlayer2 = scorePlayer2
      },
      SET_WINS_PLAYER_1(state, winsPlayer1) {
        state.winsPlayer1 = winsPlayer1
      },
      SET_WINS_PLAYER_2(state, winsPlayer2) {
        state.winsPlayer2 = winsPlayer2
      },
      SET_LOSS_PLAYER_1(state, lossPlayer1) {
        state.lossPlayer1 = lossPlayer1
      },
      SET_LOSS_PLAYER_2(state, lossPlayer2) {
        state.lossPlayer2 = lossPlayer2
      },
      SET_GAME_HISTORY(state, player) {
        state.push(player);
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
      setScorePlayer1(context, scorePlayer1){
        context.commit('SET_SCORE_PLAYER_1', scorePlayer1);
      },
      setScorePlayer2(context, scorePlayer2){
        context.commit('SET_SCORE_PLAYER_2', scorePlayer2);
      },
      setWinsPlayer1(context, winsPlayer1){
        context.commit('SET_WINS_PLAYER_1', winsPlayer1);
      },
      setWinsPlayer2(context, winsPlayer2){
        context.commit('SET_WINS_PLAYER_2', winsPlayer2);
      },
      setLossPlayer1(context, lossPlayer1) {
        context.commit('SET_LOSS_PLAYER_1', lossPlayer1);
      },
      setLossPlayer2(context, lossPlayer2) {
        context.commit('SET_LOSS_PLAYER_2', lossPlayer2);
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
      getScorePlayer1(state) {
        return state.scorePlayer1;
      },
      getScorePlayer2(state) {
        return state.scorePlayer2;
      },
      getWinsPlayer1(state) {
        return state.winsPlayer1;
      },
      getWinsPlayer2(state) {
        return state.winsPlayer2;
      },
      getLossPlayer1(state) {
        return state.lossPlayer1;
      },
      getLossPlayer2(state) {
        return state.lossPlayer2;
      },
      getGameHistory(state) {
        return state.gameHistory;
      },
    }

}

