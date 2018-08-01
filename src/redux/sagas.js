import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';

import {
  RESTAURANTS_REQUESTED,
  RESTAURANTS_REJECTED,
  RESTAURANTS_RESOLVED,
} from './actions';

// GETs the restaurants on the API endpoint using axios
function fetchRestaurants() {
  return axios('https://huddolapi-next.herokuapp.com/v1/challenge');
}

// Worker Saga responsible for calling the fetch function and handling errors
function* fetchRestaurantsSaga() {
  try {
    const restaurants = yield call(fetchRestaurants);
    yield put({ type: RESTAURANTS_RESOLVED, payload: restaurants });
  } catch (error) {
    yield put({ type: RESTAURANTS_REJECTED, payload: error });
  }
}

export default function* rootSaga() {
  yield takeEvery(RESTAURANTS_REQUESTED, fetchRestaurantsSaga);
}
