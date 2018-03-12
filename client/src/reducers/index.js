import { combineReducers, createStore } from 'redux';
import handleClientLogin from './auth';
import createTask from './CreateTask';
import manageJobs from './ManageJobs';

export const sojiApp = combineReducers({
    handleClientLogin,
    createTask,
    manageJobs
})

export const store = createStore(sojiApp)