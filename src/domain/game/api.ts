import baseAPIClient from "../../libs/apiClient";
import { GameState } from "./types";

const gameAPIService = {
  fetchGameStatus: () => baseAPIClient.get<GameState>("/game/status"),
};

export default gameAPIService;
