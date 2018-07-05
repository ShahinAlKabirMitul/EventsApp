import { createReducer } from '../../app/common/util/reducerUtil';
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from './asyncConstents';

const initialState = {
  laoding: false,
};

export const asyncActionStarted = state => {
  return { ...state, laoding: true };
};

export const asyncActionFinished = state => {
  return { ...state, laoding: false };
};

export const asyncActionError = state => {
  return { ...state, laoding: false };
};

export default createReducer(initialState,{
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinished,
  [ASYNC_ACTION_ERROR] : asyncActionError
})
