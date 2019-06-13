import React from 'react';
import styled from 'styled-components';

import colors from '../colors';


const TaskRow = styled.div`
  background-color: ${colors.taskBg};
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 3px;
`

const TaskDesc = styled.div`
  word-break: break-word;
  width: 90%;
  cursor: pointer;
`

const DeleteTaskBtn = styled.button`
  background-color: ${colors.taskBg};
  color: ${colors.buttonBg};
  border: none;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.3rem;
  width: 8%;
  cursor: pointer;
  &:hover {
    color: ${colors.buttonHoverBg}
    transform: scale(1.15);
  }
  &:focus {
    outline: none;
  }
`

const Task = props => {

  function handleClick () {
    props.selectTask(props.id);
    props.toggleModal();
  }

  return(
    <TaskRow>
      <TaskDesc onClick={ handleClick } className="task-desc">
        {props.desc}
      </TaskDesc>
      <DeleteTaskBtn onClick={ () => props.deleteTask(props.id)}>&times;</DeleteTaskBtn>
    </TaskRow>
  );
}

export default Task;
