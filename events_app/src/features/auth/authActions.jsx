import { SubmissionError } from 'redux-form';
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

export const registerUser = user => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);

    await createdUser.updateProfile({
      displayName: user.displayName,
    });
    let newUser = {
      displayName: user.displayName,
      createdAt: firestore.FieldValue.serverTimestamp(),
    };
    await firestore.set(`users/${createdUser.uid}`, { ...newUser });
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
  }
};
