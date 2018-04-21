import React, { Component } from 'react';
import { CreateTaskInStore } from '../../actions/CreateTask';
import { connect } from 'react-redux';
import { TaskContainer } from './TaskContainer';
import { DeleteTask, SubmitJob } from '../../actions/CreateTask';
import { store } from '../../reducers/index'

import axios from 'axios';
import { apiUrl } from '../../serverConfig';


import '../../assets/createJob.css';

let task

class CreateTask extends Component {
   
    render() {
        const { handleTaskDelete, createTaskInStore, tasks, submitJob } = this.props;
        task = {
            title: "",
            description: "",
            duration: 0,
            file: {},
            video: {},
            currentIndex: tasks.length
        }
        let taskBlocks = [];
        for (let i = 0; i < tasks.length; i ++) {
            taskBlocks.push(<TaskContainer task={tasks[i]} currentIndex={i + 1} />) 
        }
        const renderTaskBlocks = taskBlocks.map((e, i) => {
            return (
                <div key={i}>
                    {e}
                </div>
            )
        })
        return (
            <div className="jobTaskListContainer">
                <h1>Task List</h1>
                <p>Create tasks for your job</p>
                <div className="createTaskContainer">
                    { renderTaskBlocks }
                </div>
                <div className="taskAction">
                    {
                        tasks.length > 0 ? 
                        <span className="taskDelete" onClick={() => {
                                handleTaskDelete()
                            }}>
                                <i className="fa fa-trash"></i>
                        </span> : ""
                    }
                    <button onClick={() => {
                        createTaskInStore(task)
                        }} className="addTaskBtn">
                        <i className="fa fa-plus"></i>
                        <span>Add a New Task</span>
                    </button>
                </div>
                {
                    tasks.length > 0 ?
                    <button className="submitJobBtn" onClick={submitJob}>
                        Submit For Review
                    </button> :
                    ""
                }
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        tasks: state.createTask.task,
        job: state.createTask.job,
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        createTaskInStore: (task) => dispatch(CreateTaskInStore(task)),
        handleTaskDelete: () => {
            let confirmDelete = window.confirm("Are you sure you want to delete this task?")
            if (confirmDelete) {
                dispatch(DeleteTask)
            }
        },
        submitJob: () => {}
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        tasks: stateProps.tasks,
        job: stateProps.job,
        user: stateProps.user,
        createTaskInStore: dispatchProps.createTaskInStore,
        handleTaskDelete: dispatchProps.handleTaskDelete,
        submitJob: (e) => {
            const jobUrl = apiUrl + '/jobs/create';
            const taskUrl = apiUrl + '/tasks/create';
            axios.post(jobUrl, {
                ...stateProps.job,
                clientID: stateProps.user.clientID
            }).then((jobData) => {
                const taskResults = stateProps.tasks.map(async (task) => {
                    const newTask = new FormData()
                    newTask.append('title', task.title)
                    newTask.append('description', task.description)
                    newTask.append('jobID', jobData.data.data.jobID)
                    newTask.append('video', task.video)
                    newTask.append('file', task.file)
                    newTask.append('duration', task.duration)
                    return axios.post(taskUrl, newTask).then((taskData) => {
                        return taskData
                    })
                })
                Promise.all(taskResults).then((completed) => {
                    store.dispatch(SubmitJob)
                })
            })
        }
    }
}

export const CreateTaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CreateTask)
