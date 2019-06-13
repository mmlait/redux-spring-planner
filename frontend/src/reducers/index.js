import { combineReducers } from 'redux';
import Task from './task';
import Ui from './ui';

const rootReducer = combineReducers({
    Task,
    Ui
});

export default rootReducer;
