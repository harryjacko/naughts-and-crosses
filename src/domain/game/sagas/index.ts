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

export default function* gameSagas() {
  yield all([
    takeLatest([actions.game.fetchGameStatus.base.type], fetchGameStatus),
  ]);
}
