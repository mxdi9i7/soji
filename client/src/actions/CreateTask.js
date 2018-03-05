export const DeleteTask = {
    type: 'DELETE_TASK'
}

export const CreateTaskInStore = (task) => {
    return {
        type: 'CREATE_TASK_IN_STORE',
        task
    }
}

export const HandleTaskInput = (value, name, currentIndex) => {
    return {
        type: 'HANDLE_TASK_INPUT',
        value, 
        currentIndex,
        name
    }
}

export const HandleJobInput = (value, name) => {
    return {
        type: 'HANDLE_JOB_INPUT',
        value,
        name
    }
}

export const SubmitJob = (title, desc) => {
    
}

export const SetCreateJobToActive = {
    type: 'SET_CREATE_JOB_TO_ACTIVE'
}