import { combineReducers, createStore } from 'redux';
import handleClientLogin from './auth';
import createTask from './CreateTask';
import manageJobs from './ManageJobs';
import manageEmployees from './ManageEmployees';

export const sojiApp = combineReducers({
    handleClientLogin,
    createTask,
    manageJobs,
    manageEmployees
})

export const store = createStore(sojiApp)