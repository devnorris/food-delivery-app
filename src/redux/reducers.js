import { combineReducers } from 'redux';

import {
  RESTAURANTS_REJECTED,
  RESTAURANTS_REQUESTED,
  RESTAURANTS_RESOLVED,
} from './actions';

const restaurants = (state = null, action) => {
  switch (action.type) {
    case RESTAURANTS_RESOLVED:
      return action.payload.data;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case RESTAURANTS_REQUESTED:
      return true;
    case RESTAURANTS_REJECTED:
    case RESTAURANTS_RESOLVED:
      return false;
    default:
      return state;
  }
};

const networkError = (state = false, action) => {
  switch (action.type) {
    case RESTAURANTS_REJECTED:
      return true;
    case RESTAURANTS_REQUESTED:
    case RESTAURANTS_RESOLVED:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ restaurants, loading, networkError });
export default rootReducer;
