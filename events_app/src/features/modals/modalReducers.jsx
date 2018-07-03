import { MODAL_CLOSE, MODAL_OPEN } from './modalConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = null;
export const openModal = (state, payload) => {
  console.log('open Mitul');
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

export const closeModal = (state, payload) => {
  console.log('close moal');
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal,
});
