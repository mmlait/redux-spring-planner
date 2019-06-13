import * as TaskActionTypes from '../actionTypes/task';


const initialState = {
  tasks: [],
  selectedTaskId: 0
}

export default function Task(state=initialState, action) {

  switch(action.type) {
    case TaskActionTypes.CREATE_TASK: {
      const addTaskList = [
        ...state.tasks,
        {
          task: action.task,
        }
      ];
      return {
        ...state,
        tasks: addTaskList
      };
    }

    case TaskActionTypes.READ_TASKS: {
      return {
        ...state,
        tasks: action.taskList
      };
    }

    case TaskActionTypes.UPDATE_TASK: {
      const updateTaskList = state.tasks.map((task) => {
        if(task.id === action.id){
          return {
            ...task,
            task: action.task
          };
        }
        return task;
      });
        return {
          ...state,
          tasks: updateTaskList
        };
      }

    case TaskActionTypes.DELETE_TASK: {
      const removeTaskList = [
        ...state.tasks.slice(0, action.id),
        ...state.tasks.slice(action.id + 1),
      ];
      return {
        ...state,
        tasks: removeTaskList
      };
    }

    case TaskActionTypes.SELECT_TASK: {
      return {
        ...state,
        selectedTaskId: action.id
      };
    }

    default:
      return state;

  }
}
