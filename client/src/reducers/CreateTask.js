const createTask = (state = {
    task: []
}, action) => {
    switch (action.type) {
        case 'CREATE_TASK_IN_STORE':
            return {
                ...state,
                task: [
                    ...state.task,
                    action.task
                ]
            }
        case 'DELETE_TASK':
            console.log(action)
            if (action.current === 1) {
                return state
            } else {
                const delState = state;
                delState.task.splice(action.current - 1, 1)
                return {
                    ...state,
                    task: [
                        ...delState.task,
                    ]
                }
            }
        case 'HANDLE_TASK_INPUT':
            const newTaskInputValue = action.value
            return {
                ...state,
                task: [
                    ...state.task,
                ]
            }
        default: 
            return state
    }
}

export default createTask