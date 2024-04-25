import { RootState } from "../rootState";

export const gameSelectors = {
  getBoard: (state: RootState) => {
    return state.game.board;
  },
  getGameStatusRequestStatus: (state: RootState) => {
    return state.game.gameStatusRequestStatus;
  },
};
