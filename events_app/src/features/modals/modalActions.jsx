import { MODAL_CLOSE, MODAL_OPEN } from './modalConstants';

const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps,
    },
  };
};

const closeModal = () => {
  return {
    type: MODAL_CLOSE
  }
};
