import { combineReducers, createStore } from 'redux';
import handleClientLogin from './auth';
import createTask from './CreateTask';
import manageJobs from './ManageJobs';
import manageEmployees from './ManageEmployees';
import manageFiles from './ManageFiles';
import manageTasks from './ManageTasks';

export const sojiApp = combineReducers({
    handleClientLogin,
    createTask,
    manageJobs,
    manageEmployees,
    manageFiles,
    manageTasks
})

export const store = createStore(sojiApp)