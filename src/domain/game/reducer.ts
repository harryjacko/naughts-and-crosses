import { createReducer } from "@reduxjs/toolkit";
import { GameState } from "./types";
import { gameActions } from "./actions";
import { RequestStatus } from "../../shared/libs/apiClient";

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

  //
  // New Game
  //
  builder
    .addCase(
      gameActions.startNewGame.success,
      (state, { payload: { board, currentPlayer, gameOver, winner } }) => {
        state.board = board;
        state.currentPlayer = currentPlayer;
        state.gameOver = gameOver;
        state.winner = winner;
        state.gameStatusRequestStatus = RequestStatus.Fulfilled;
      }
    )
    .addCase(gameActions.startNewGame.request, (state) => {
      state.gameStatusRequestStatus = RequestStatus.Pending;
    })
    .addCase(gameActions.startNewGame.failed, (state) => {
      state.gameStatusRequestStatus = RequestStatus.Failed;
    })

    //
    // Make move
    //
    .addCase(
      gameActions.makeMove.success,
      (state, { payload: { board, currentPlayer, gameOver, winner } }) => {
        state.board = board;
        state.currentPlayer = currentPlayer;
        state.gameOver = gameOver;
        state.winner = winner;
      }
    );
});

export default reducer;
