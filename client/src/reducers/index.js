import { combineReducers, createStore } from 'redux';
import auth from './auth';
import createTask from './CreateTask';
import manageJobs from './ManageJobs';
import manageEmployees from './ManageEmployees';
import manageFiles from './ManageFiles';
import manageTeams from './ManageTeams';
import manageTasks from './ManageTasks';
import job from './Job';
import tasks from './Tasks';

export const sojiApp = combineReducers({
    auth,
    createTask,
    manageJobs,
    manageEmployees,
    manageFiles,
    manageTasks,
    manageTeams,
    job,
    tasks
})

export const store = createStore(sojiApp)