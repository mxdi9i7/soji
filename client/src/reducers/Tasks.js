const tasks = (state = {
    taskList: [],
    task: {}
}, action) => {
    switch (action.type) {  
        case 'INITIALIZE_TASKS':
            return {
                taskList: action.tasks
            }
        case 'INITIALIZE_TASK':
            return {
                task: action.task
            }
        default: 
            return state
        }
}

export default tasks