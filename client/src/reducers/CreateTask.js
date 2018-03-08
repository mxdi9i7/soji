const createTask = (state = {
    task: [],
    job: {},
    isCreateJobActive: false
}, action) => {
    switch (action.type) {
        case 'HANDLE_JOB_INPUT':
            let prevJob = state.job;
            prevJob[action.name] = action.value
            return {
                ...state,
                prevJob
            }
        case 'SUBMIT_JOB': 
            return {
                ...state,
                job: {},
                task: [],
                isCreateJobActive: false
            }
        case 'CREATE_TASK_IN_STORE':
            return {
                ...state,
                task: [
                    ...state.task,
                    action.task
                ]
            }
        case 'DELETE_TASK':
            let delState = state;
            delState.task.splice(state.task.length - 1, 1)
            return {
                ...state,
                task: [
                    ...delState.task,
                ]
            }
        case 'HANDLE_TASK_INPUT':
            let taskForm = state.task[action.currentIndex]
            taskForm[action.name] = action.value
            state.task.splice(action.currentIndex, 1, taskForm)
            return {
                ...state,
                task: [
                    ...state.task
                ]
            }
        case 'SET_CREATE_JOB_TO_ACTIVE':
            return {
                ...state,
                isCreateJobActive: true
            }
        default: 
            return state
    }
}

export default createTask