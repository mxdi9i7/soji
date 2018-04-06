export const initializeTasks = (tasks) => {
    return {
        type: "INITIALIZE_TASKS",
        tasks
    }
}

export const initializeTask = (task) => {
    return {
        type: "INITIALIZE_TASK",
        task
    }
}