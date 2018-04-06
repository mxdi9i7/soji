import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import {SideNav} from '../partials/SideNav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import { initializeTask } from '../../actions/Tasks';
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'

export class TaskMonth extends Component {
    async componentDidMount() {
        let task = await axios.get(apiUrl + '/tasks/fetch/single?id=' + this.props.match.params.id)
        console.log(task)
        await this.props.initializeTask(task.data.data)
    }
    render() {
        return (
            <div>
                <Dashnav />
                <SideNav currentPage={"jobs"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>Job: {this.props.job.title} / <span>{this.props.task.taskTitle}</span></h1>
                        </div>
                    </div>
                    <div className="dashInfo">
                        <div className="infoContainer half">
                            <label>Task Title</label>
                            <span>{this.props.task.taskTitle}</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Task ID</label>
                            <span>{this.props.task.taskID}</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Job Reference</label>
                            <span>{this.props.job.title}/{this.props.job.jobID}</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Est. Duration</label>
                            <span>{this.props.task.minute} minutes</span>
                        </div>
                        <div className="infoContainer fluid">
                            <label>Task Description</label>
                            <span>{this.props.task.taskDescription}</span>
                        </div>
                        <div className="infoContainer fluid">
                            <label>Job Manager</label>
                            <span>Manager Name | phone number | email</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        task: state.tasks.task,
        job: state.job
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeTask: (task) => {
            store.dispatch(initializeTask(task))
        }
    }
}

export const TaskMonthPage = connect(
    mapStateToProps, mapDispatchToProps
)(TaskMonth)