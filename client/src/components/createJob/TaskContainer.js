import React, { Component } from 'react';
import { DeleteTask } from '../../actions/CreateTask';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';


export class Task extends Component {


    render() {
        const { handleTaskDelete, currentIndex, task } = this.props
        console.log(store.getState().createTask.task)
        return (
            <div className="taskContainer">
                <div className="taskCount">
                    <div className="taskDelete" onClick={() => {
                        handleTaskDelete(currentIndex)
                    }}>
                        <i className="fa fa-trash"></i>
                    </div>
                    <div className="taskCountLabel">
                        {this.props.currentIndex}
                    </div>
                </div>
                <div className="taskBox">
                    <div className="taskRow">
                        <div className="taskInputContainer">
                            <h1>Task Title: </h1>
                            <input type="text" placeholder="Add a title to your task" />
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
        handleTaskDelete: (current) => {
            dispatch(DeleteTask(current))
        }
    }
}

export const TaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)
