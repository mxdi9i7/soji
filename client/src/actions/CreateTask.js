export const DeleteTask = current => {
    return {
        type: 'DELETE_TASK',
        current
    }
}

export const CreateTaskInStore = (task) => {
    return {
        type: 'CREATE_TASK_IN_STORE',
        task
    }
}

export const HandleTaskInput = (field, value, currentIndex) => {
    return {
        type: 'HANDLE_TASK_INPUT',
        field, value, currentIndex
    }
}