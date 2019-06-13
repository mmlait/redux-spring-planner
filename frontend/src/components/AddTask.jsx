import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../colors';


const AddTaskForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.addTaskBg};
  margin-bottom: 30px;
  border-radius: 3px;
`

const AppTaskInput = styled.input`
  width: 100%;
  background-color: ${colors.addTaskBg};
  padding: 10px;
  font-family: "Segoe UI", "Helvetica Neue", serif;
  font-size: 1rem;
  text-shadow: none;
  border: none;
  border-radius: 3px;
  &:focus {
    outline: none;
    background-color: ${colors.addTaskInputHover};
  }
`

const AddTaskBtn = styled.button`
  display: block;
  background-color: ${colors.buttonBg};
  color: ${colors.whiteText};
  margin-left: 10px;
  padding: 10px;
  width: 110px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
`

class AddTask extends Component {

  userInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // check that input value is not empty
    if (this.userInput.current.value.trim() !== "") {
        this.props.createTask(this.userInput.current.value);
    }
    e.currentTarget.reset();
  }

  render() {
    return (
      <AddTaskForm onSubmit={this.handleSubmit}>
        <AppTaskInput
          type="text"
          ref={this.userInput}
          placeholder="Add task"
         />
         <AddTaskBtn type="submit">Add task</AddTaskBtn>
      </AddTaskForm>
    );
  }
}

export default AddTask;
