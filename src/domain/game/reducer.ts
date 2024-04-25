import { createReducer } from "@reduxjs/toolkit";
import { GameState } from "./types";
import { gameActions } from "./actions";
import { RequestStatus } from "../../libs/apiClient";

const initialState: GameState = {
  board: {
    cells: [],
  },
  currentPlayer: null,
  gameOver: false,
  winner: null,

  gameStatusRequestStatus: RequestStatus.Idle,
};

const reducer = createReducer(initialState, (builder) => {
  //
  // Game state
  //
  builder
    .addCase(
      gameActions.fetchGameStatus.success,
      (state, { payload: { board, currentPlayer, gameOver, winner } }) => {
        state.board = board;
        state.currentPlayer = currentPlayer;
        state.gameOver = gameOver;
        state.winner = winner;
        state.gameStatusRequestStatus = RequestStatus.Fulfilled;
      }
    )
    .addCase(gameActions.fetchGameStatus.request, (state) => {
      state.gameStatusRequestStatus = RequestStatus.Pending;
    })
    .addCase(gameActions.fetchGameStatus.failed, (state) => {
      state.gameStatusRequestStatus = RequestStatus.Failed;
    });
});

export default reducer;
