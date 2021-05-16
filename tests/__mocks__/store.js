export const storeMocked = {
    actions: {
        setGameStart: jest.fn(),
        resetBoard: jest.fn(),
        incNumOfGames: jest.fn(),
        setWinsPlayer1: jest.fn(),
        setWinsPlayer2: jest.fn(),
        setGameHistory: jest.fn()
    },
    getters: {
        getHasGameStarted: () => false,
        getNumOfGames: () => 0,
        getWinsPlayer1: () => 0,
        getWinsPlayer2: () => 0,
        getGameHistory: () => ['P1', 'P1', 'P2', '', '']
    }
}