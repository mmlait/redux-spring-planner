import * as UiActionTypes from '../actionTypes/ui';


const initialState = {
  modalIsOpen: false
}

export default function ModalVisibility(state=initialState, action) {

  switch(action.type) {
    case UiActionTypes.TOGGLE_MODAL_VISIBILITY:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }

    default:
      return state;
  }

}
