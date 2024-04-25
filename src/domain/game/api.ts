import baseAPIClient from "../../shared/libs/apiClient";
import { GameState } from "./types";

interface MakeMovePayload {
  position: number;
}

const gameAPIService = {
  fetchGameStatus: () => baseAPIClient.get<GameState>("/game/status"),
  startNewGame: () => baseAPIClient.post<GameState>("/game/start"),
  makeMove: (payload: MakeMovePayload) =>
    baseAPIClient.post<GameState>("/game/move", payload),
};

export default gameAPIService;
