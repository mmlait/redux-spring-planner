import axios from "axios";

import * as TaskActionTypes from '../actionTypes/task';


// ---CREATE task---
export function createTask(task) {
  return function(dispatch){
    axios.post("http://127.0.0.1:3001/api/tasks", {task})
    .then( response =>{
      if(response) {
        axios.get("http://127.0.0.1:3001/api/tasks")
        .then( response => {
          if(response) {
            dispatch(readTasksAction(response.data))
          }
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const createTaskAction = task => {
  return {
    type: TaskActionTypes.CREATE_TASK,
    task: task
  };
}

// ---READ tasks---
export function readTasks() {
  return function(dispatch){
    axios.get("http://127.0.0.1:3001/api/tasks")
    .then(response=>{
      dispatch(readTasksAction(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const readTasksAction = taskList => {
  return {
    type: TaskActionTypes.READ_TASKS,
    taskList: taskList
  };
}

// ---UPDATE task---
export function updateTask(id, task) {
  return function(dispatch){
    axios.put(`http://127.0.0.1:3001/api/tasks/${id}`, {task})
    .then( response =>{
      if(response) {
        dispatch(updateTaskAction(id, task));
        axios.get("http://127.0.0.1:3001/api/tasks")
        .then( response => {
          if(response) {
            dispatch(readTasksAction(response.data))
          }
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const updateTaskAction = (id, task) => {
  return {
    type: TaskActionTypes.UPDATE_TASK,
    id,
    task
  };
};

// ---DELETE task---
export function deleteTask(id) {
  return function(dispatch){
    axios.delete(`http://127.0.0.1:3001/api/tasks/${id}`)
    .then( response =>{
      if(response) {
        dispatch(deleteTaskAction(id));
        axios.get("http://127.0.0.1:3001/api/tasks")
          .then( response => {
            if(response) {
              dispatch(readTasksAction(response.data))
            }
          })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const deleteTaskAction = id => {
  return {
    type: TaskActionTypes.DELETE_TASK,
    id
  };
}

// ---select task---
export const selectTask = id => {
  return {
    type: TaskActionTypes.SELECT_TASK,
    id
  };
};