import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { store } from '../../reducers/index';
import { HandleTaskInput } from '../../actions/CreateTask';

export class Task extends Component {
    render() {
        const { handleTaskInput } = this.props
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
                            <input type="number" placeholder="Minutes"  name="duration" onChange={handleTaskInput} />
                        </div>
                    </div>
                    <div className="taskRow">
                        <div className="taskInputContainer">
                            <h1>Description: </h1>
                            <input type="text" placeholder="Add a full and clear description of your task"  name="description" onChange={handleTaskInput} />
                        </div>
                    </div>
                    <div className="taskRow">
                        <div className="taskInputContainer">
                            <label htmlFor="taskFile">Task File Upload</label>
                            <input type="file" id="taskFile"  name="file" onChange={handleTaskInput} />
                        </div>
                        <div className="taskInputContainer">
                            <label htmlFor="taskVideo">Task Video Upload</label>
                            <input type="file" id="taskVideo"  name="video" onChange={handleTaskInput} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.createTask.task
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleTaskInput: (e) => {
            const currentIndex = ownProps.currentIndex;
            const name = e.target.name;
            let value = e.target.value;
            if (name === "file" || name === "video") {
                value = e.target.files[0]
            }
            dispatch(HandleTaskInput(value, name, currentIndex - 1))
        }
    }
}



export const TaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)
