import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import { initializeJob} from '../../actions/Job';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'
import { Announcements } from '../partials/Announcements'
import { TaskTab } from './TaskTab';
import { initializeTasks } from '../../actions/Tasks'

export class Job extends Component {
    state = {
        job: {}
    }
    async componentDidMount() {
        let job = await axios.get(apiUrl + '/jobs/fetch/single?jobID=' + this.props.match.params.id)
        await this.props.initializeJob(job.data.data)
        let taskList = await axios.get(apiUrl + '/tasks/fetch/list?jobID=' + job.data.data.jobID)
        await this.props.initializeTasks(taskList.data.data)
        let team = await axios.get(apiUrl + '/teams/fetch/single?teamID=' + job.data.data.teamID)
        let manager = await axios.get(apiUrl + '/users/fetch/employee/single?employeeID=' + team.data.data.managerID)
        let client = await axios.get(apiUrl + '/users/fetch/client/single?clientID=' + job.data.data.clientID)
        this.setState({manager: manager.data.data, client: client.data.data, job: job.data.data, team:team.data.data})
    }
    render() {
        let totalDuration = 0;
        if (this.props.tasks.length !== 0) {
            let totalDurationArr = this.props.tasks.map(task => {
                return task.minute
            })
            totalDuration = totalDurationArr.reduce((total, current) => {
                return total + current
            })
        }
        return (
            <div>
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash">Dashboard</Link>
                                <span>/</span>
                                <span>{this.state.job.jobTitle}</span>
                            </h1>
                        </div>
                        <div className="dashActions">
                            {/* <button>
                                <i className="fa fa-skype"></i>
                                <span>Call us on Skype</span>
                            </button> */}
                        </div>
                    </div>
                    <div className="dashInfo">
                        <div className="infoContainer half">
                            <label>Client ID</label>
                            <span>{
                                    this.state.client &&
                                    this.state.client.username
                                } ({
                                    this.state.client &&
                                    this.state.client.clientID
                                    })</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Client Contact Info</label>
                            <span>
                                {
                                    this.state.client &&
                                    this.state.client.email
                                }
                            </span>
                        </div>
                        <div className="infoContainer half">
                            <label>Job Title</label>
                            <span>{this.state.job.jobTitle}</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Job ID</label>
                            <span>{this.state.job.jobID}</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Number of tasks</label>
                            <span>{this.props.tasks.length} tasks</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Total Est. Duration</label>
                            <span>{totalDuration} minutes</span>
                        </div>
                        <div className="infoContainer fluid">
                            <label>Description</label>
                            <span>{this.state.job.jobDescription}</span>
                        </div>
                        <div className="infoContainer third">
                            <label>Repeat Every</label>
                            <span>{this.state.job.repeatEvery ? this.state.job.repeatEvery + " Days" : "N/A"}</span>
                        </div>
                        <div className="infoContainer third">
                            <label># of Repeats</label>
                            <span>{this.state.job.numberOfRepeat ? this.state.job.numberOfRepeat + " Cycles" : "N/A"}</span>
                        </div>
                        <div className="infoContainer third">
                            <label>Never Expires</label>
                            <span>
                                {
                                    this.state.job.neverExpire ?
                                    <i className="fa fa-check"></i>:
                                    <i className="fa fa-times"></i>
                                }
                            </span>
                        </div>
                        <div className="infoContainer fluid">
                            <label>Job Manager</label>
                            <span>
                                {this.state.team && (this.state.team.managerID ? this.state.manager.username + " " : "Not assigned ")} 
                                {this.state.manager && this.state.manager.email}
                            </span>
                        </div>
                    </div>
                    <div className="dashRow">
                        <div className="dashColumn half">  
                            <TaskTab tasks={this.props.tasks}/>
                        </div>
                        <div className="dashColumn half">
                            <Announcements />
                            {/* <Todo  /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        job: state.job,
        tasks: state.tasks.taskList,
        client: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeJob: (job) => {
            store.dispatch(initializeJob(job))
        },
        initializeTasks: (tasks) => {
            store.dispatch(initializeTasks(tasks))
        }
    }
}



export const JobPage = connect(
    mapStateToProps, mapDispatchToProps
)(Job)