import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../colors';
import EditTask from './EditTask.jsx';


const ModalWrapper = styled.div`
  background-color: ${colors.modalBgOverlay};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  background-color: ${colors.modalBg};
  color: ${colors.modalText};
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
  width: 50%;
  max-width: 500px;
  min-height: 150px;
  font-size: 1.5rem;
  border-radius: 3px;
  @media(max-width: 550px) {
    width: 80%;
  }
`

const CloseModal = styled.span`
  color: ${colors.closeModal};
  align-self: flex-end;
  font-size: 28px;
  font-weight: bold;
  padding: 0 7px;
  &:hover {
    color: ${colors.closeModalHover};
    text-decoration: none;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`


const Modal = props => {
  if (props.selectedTaskDesc !== undefined) {
    var task = props.selectedTaskDesc
  }

  return (
    <ModalWrapper id="modal">
      <ModalContent className="modal-content">
        <CloseModal className="close-modal" onClick={ props.toggleModal }>&times;</CloseModal>
        {
          task &&
          <EditTask
            taskDesc={props.selectedTaskDesc}
            toggleModal={props.toggleModal}
            selectedTaskId={props.selectedTaskId}
            updateTask={props.updateTask}
            deleteTask={props.deleteTask}
          />
        }
      </ModalContent>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  selectedTask: PropTypes.object
};

export default Modal;
