const createTask = (state = {
    createCount: 1
}, action) => {
    switch (action.type) {
        case 'ADD_TASK_COUNT':
            return {
                ...state,
                createCount: state.createCount + 1
            }
        default: 
            return state
    }
}

export default createTask