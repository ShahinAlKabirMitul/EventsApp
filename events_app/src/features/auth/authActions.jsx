import { SubmissionError } from 'redux-form';
import { SIGN_OUT_USER } from './authConstents';
import { closeModal } from '../modals/modalActions';

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    //dispatch({ type: LOGIN_USER, payload: { creds } });
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: 'Login Failed ',
      });
    }
  };
};
export const logout = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
