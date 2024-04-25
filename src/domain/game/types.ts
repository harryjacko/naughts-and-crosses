import { RequestStatus } from "../../shared/libs/apiClient";

export interface GameState {
  board: Board;

  currentPlayer: Mark;
  winner: Mark;

  gameOver: boolean;

  // Request status
  gameStatusRequestStatus: RequestStatus;
}

type Mark = "X" | "O" | null;

export interface Board {
  cells: Mark[];
}
