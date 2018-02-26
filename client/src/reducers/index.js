import { combineReducers } from 'redux';
import handleClientLogin from './auth';
import createTask from './CreateTask';

const sojiApp = combineReducers({
    handleClientLogin,
    createTask
})

export default sojiApp