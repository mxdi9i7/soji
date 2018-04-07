const tasks = (state = {
    taskList: [],
    task: {}
}, action) => {
    switch (action.type) {  
        case 'INITIALIZE_TASKS':
            return {
                ...state,
                taskList: action.tasks
            }
        case 'INITIALIZE_TASK':
            return {
                ...state,
                task: action.task
            }
        default: 
            return state
        }
}

export default tasks