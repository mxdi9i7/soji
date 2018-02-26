import React, { Component } from 'react';
import { AddTaskCount } from '../../actions/CreateTask';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStore } from 'redux';

import '../../assets/createJob.css';

const onCreateTaskClick = () => {
    return
}



class CreateTask extends Component {
   
    render() {
        const { createCount, onCreateTaskClick } = this.props;
        let taskBlocks = [];
        for (let i = 0; i < createCount; i ++) {
            taskBlocks.push(<div> tasks </div>) 
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
                {createCount}
                <div className="createTaskContainer">
                    { renderTaskBlocks }
                </div>
                <button onClick={onCreateTaskClick}>Add a New Task</button>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        createCount: state.createTask.createCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateTaskClick: () => dispatch(AddTaskCount)
    }
}

export const CreateTaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTask)
