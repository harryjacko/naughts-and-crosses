import { createAction } from "@reduxjs/toolkit";
import { GameState } from "./types";

export const gameActions = {
  fetchGameStatus: {
    base: createAction<void>("game/fetchGameStatus/base"),
    request: createAction<void>("game/fetchGameStatus/request"),
    success: createAction<GameState>("game/fetchGameStatus/success"),
    failed: createAction<Error | undefined>("game/fetchGameStatus/failed"),
  },
};
