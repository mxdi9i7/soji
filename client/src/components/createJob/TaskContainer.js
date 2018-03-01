import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import { HandleTaskTitleInput } from '../../actions/CreateTask';

export class Task extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //     }
    // } 
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     const index = this.props.task.length;
    //     let tasks;
    //     if (!this.state.tasks) {
    //         tasks = []
    //         let task = {
    //             [name]: value
    //         }
    //         tasks.push(task)
    //     } else {
    //         tasks = this.state.tasks
    //         tasks[index] = {
    //             ...tasks[index],
    //             [name]: value
    //         }
    //     }

    //     this.setState({
    //         tasks
    //     }, console.log(tasks));
    // }
    render() {
        const { task, handleTaskInput } = this.props
        return (
            <div className="taskContainer">
                <div className="taskCount">
                    <div className="taskCountLabel">
                        {this.props.currentIndex}
                    </div>
                </div>
                <div className="taskBox">
                    <div className="taskRow">
                        <div className="taskInputContainer">
                            <h1>Task Title: </h1>
                            <input type="text" placeholder="Add a title to your task" name="title" onChange={handleTaskInput} />
                        </div>
                        <div className="taskInputContainer">
                            <h1>Estimated Duration: </h1>
                            <input type="number" placeholder="Minutes" />
                        </div>
                    </div>
                    <div className="taskRow">
                        <div className="taskInputContainer">
                            <h1>Description: </h1>
                            <input type="text" placeholder="Add a full and clear description of your task" />
                        </div>
                    </div>
                    <div className="taskRow">
                        <div className="taskInputContainer">
                            <label htmlFor="taskFile">Task File Upload</label>
                            <input type="file" id="taskFile" />
                        </div>
                        <div className="taskInputContainer">
                            <label htmlFor="taskVideo">Task Video Upload</label>
                            <input type="file" id="taskVideo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleTaskInput: (e) => {
            const taskCount = store.getState().createTask.task.length;
            const name = e.target.name;
            const value = e.target.value;
            dispatch(HandleTaskTitleInput(value, name, taskCount - 1))
        }
    }
}



export const TaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)
