import { all, put, takeLatest, call } from "redux-saga/effects";
import { actions } from "../../rootActions";
import { api } from "../../rootApi";
import { SagaIterator } from "redux-saga";
import { ApiResponse } from "apisauce";
import { GameState } from "../types";

function* fetchGameStatus(): SagaIterator {
  try {
    yield put(actions.game.fetchGameStatus.request());

    const apiResult: ApiResponse<GameState> = yield call(
      api.game.fetchGameStatus
    );

    if (apiResult.ok && !!apiResult.data) {
      yield put(actions.game.fetchGameStatus.success(apiResult.data));
    } else {
      yield put(actions.game.fetchGameStatus.failed());
    }
  } catch (error) {
    yield put(actions.game.fetchGameStatus.failed(error as Error));
  }
}

function* startNewGame(): SagaIterator {
  try {
    yield put(actions.game.startNewGame.request());

    const apiResult: ApiResponse<GameState> = yield call(api.game.startNewGame);

    if (apiResult.ok && !!apiResult.data) {
      yield put(actions.game.startNewGame.success(apiResult.data));
    } else {
      yield put(actions.game.startNewGame.failed());
    }
  } catch (error) {
    yield put(actions.game.startNewGame.failed(error as Error));
  }
}

function* makeMove(action: { type: string; payload: number }): SagaIterator {
  try {
    yield put(actions.game.makeMove.request());

    const apiResult: ApiResponse<GameState> = yield call(api.game.makeMove, {
      position: action.payload,
    });

    if (apiResult.ok && !!apiResult.data) {
      yield put(actions.game.makeMove.success(apiResult.data));
    } else {
      yield put(actions.game.makeMove.failed());
    }
  } catch (error) {
    yield put(actions.game.makeMove.failed(error as Error));
  }
}

export default function* gameSagas() {
  yield all([
    takeLatest([actions.game.fetchGameStatus.base.type], fetchGameStatus),
    takeLatest([actions.game.makeMove.base.type], makeMove),
    takeLatest([actions.game.startNewGame.base.type], startNewGame),
  ]);
}
