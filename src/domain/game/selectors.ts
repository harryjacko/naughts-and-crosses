import { RootState } from "../rootState";

export const gameSelectors = {
  getBoard: (state: RootState) => {
    return state.game.board;
  },

  getCurrentPlayer: (state: RootState) => {
    return state.game.currentPlayer;
  },
  getWinner: (state: RootState) => {
    return state.game.winner;
  },
  getGameOver: (state: RootState) => {
    return state.game.gameOver;
  },

  getGameStatusRequestStatus: (state: RootState) => {
    return state.game.gameStatusRequestStatus;
  },
};
