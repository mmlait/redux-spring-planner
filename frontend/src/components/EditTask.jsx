import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../colors';


const EditTaskForm = styled.form`
  padding: 10px;
  margin-bottom: 30px;
`

const EditTaskInput = styled.textarea`
  width: 90%;
  height: 100%;
  padding: 10px;
  font-family: "Segoe UI", "Helvetica Neue", serif;
  font-size: 1rem;
  text-shadow: none;
  border: none;
  &:focus {
    outline: none;
  }
`

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`

const SaveChangesBtn = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.whiteText};
  width: 110px;
  padding: 10px 0;
  margin-right: 20px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
  &:focus {
    outline: none;
  }
`

const RemoveBtn = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.whiteText};
  width: 110px;
  padding: 10px 0;
  margin-left: 20px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
  &:focus {
    outline: none;
  }
`

class EditTask extends Component {

  userInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleDeleteBtnClick = () => {
    this.props.deleteTask(this.props.selectedTaskId);
    this.props.toggleModal();
  }

  handleEditBtnClick = () => {
    let selectedTaskId = this.props.selectedTaskId
    let updatedTaskDesc = this.userInput.current.value
    this.props.updateTask(selectedTaskId, updatedTaskDesc);
    this.props.toggleModal();
  }

  render() {
    return (
      <EditTaskForm onSubmit={this.handleSubmit}>
        <EditTaskInput
          rows="4" cols="25"
          type="text"
          ref={this.userInput}
          defaultValue={this.props.taskDesc}>
       </EditTaskInput>
       <BtnDiv>
         <SaveChangesBtn type="button" onClick={ this.handleEditBtnClick }>Save Changes</SaveChangesBtn>
         <RemoveBtn type="button" onClick={ this.handleDeleteBtnClick }>Delete</RemoveBtn>
       </BtnDiv>
      </EditTaskForm>
    );
  }
}

export default EditTask;
