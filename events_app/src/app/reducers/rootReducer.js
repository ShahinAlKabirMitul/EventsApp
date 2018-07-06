import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import testReducer from '../../features/testarea/testReducers';
import eventReducer from '../../features/event/eventReducer';
import modalReducers from '../../features/modals/modalReducers';
import authReducers from '../../features/auth/authReducers';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducers,
  auth: authReducers,
  async: asyncReducer,
  toastr: toastrReducer,
});
export default rootReducer;
