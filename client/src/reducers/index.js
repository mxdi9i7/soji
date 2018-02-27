import { combineReducers, createStore } from 'redux';
import handleClientLogin from './auth';
import createTask from './CreateTask';

export const sojiApp = combineReducers({
    handleClientLogin,
    createTask
})

export const store = createStore(sojiApp)