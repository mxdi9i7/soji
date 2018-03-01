import React, { Component } from 'react';
import { CreateTaskInStore } from '../../actions/CreateTask';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { TaskContainer } from './TaskContainer';
import { DeleteTask } from '../../actions/CreateTask';

import '../../assets/createJob.css';

let task

class CreateTask extends Component {
   
    render() {
        const { handleTaskDelete, createTaskInStore, tasks } = this.props;
        task = {
            title: "",
            description: "",
            duration: 0,
            taskFile: {},
            taskVideo: {},
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
                    <button className="submitJobBtn">
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
        tasks: state.createTask.task
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTaskInStore: (task) => dispatch(CreateTaskInStore(task)),
        handleTaskDelete: () => {
            let confirmDelete = window.confirm("Are you sure you want to delete this task?")
            if (confirmDelete) {
                dispatch(DeleteTask)
            }
        }
    }
}

export const CreateTaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTask)
