export const DeleteTask = {
    type: 'DELETE_TASK'
}

export const CreateTaskInStore = (task) => {
    return {
        type: 'CREATE_TASK_IN_STORE',
        task
    }
}

export const HandleTaskTitleInput = (value, name, currentIndex) => {
    return {
        type: 'HANDLE_TASK_TITLE_INPUT',
        value, 
        currentIndex,
        name
    }
}
