import { createAction } from "@reduxjs/toolkit";
import { GameState } from "./types";

export const gameActions = {
  fetchGameStatus: {
    base: createAction<void>("game/fetchGameStatus/base"),
    request: createAction<void>("game/fetchGameStatus/request"),
    success: createAction<GameState>("game/fetchGameStatus/success"),
    failed: createAction<Error | undefined>("game/fetchGameStatus/failed"),
  },
  makeMove: {
    base: createAction<number>("game/makeMove/base"),
    request: createAction<void>("game/makeMove/request"),
    success: createAction<GameState>("game/makeMove/success"),
    failed: createAction<Error | undefined>("game/makeMove/failed"),
  },
  startNewGame: {
    base: createAction<void>("game/startNewGame/base"),
    request: createAction<void>("game/startNewGame/request"),
    success: createAction<GameState>("game/startNewGame/success"),
    failed: createAction<Error | undefined>("game/startNewGame/failed"),
  },
};
