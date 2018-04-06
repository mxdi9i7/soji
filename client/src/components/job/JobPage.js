import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import {SideNav} from '../partials/SideNav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import { initializeJob} from '../../actions/Job';
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'
import { Announcements } from '../partials/Announcements'
import { Todo } from './Todo';
import { TaskTab } from './TaskTab';
import { initializeTasks } from '../../actions/Tasks'

export class Job extends Component {
    async componentDidMount() {
        let job = await axios.get(apiUrl + '/jobs/fetch/single?id=' + this.props.match.params.id)
        await this.props.initializeJob(job.data.data)
        let taskList = await axios.get(apiUrl + '/tasks/fetch/list?jobID=' + job.data.data.jobID)
        await this.props.initializeTasks(taskList.data.data)
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
                <SideNav currentPage={"jobs"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>Job: {this.props.job.title}</h1>
                        </div>
                        <div className="dashActions">
                            <button>
                                <i className="fa fa-skype"></i>
                                <span>Call us on Skype</span>
                            </button>
                        </div>
                    </div>
                    <div className="dashInfo">
                        <div className="infoContainer half">
                            <label>Client ID</label>
                            <span>Client Name (Client ID)</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Client Contact Info</label>
                            <span>Client Email, Phone number</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Job Title</label>
                            <span>{this.props.job.title}</span>
                        </div>
                        <div className="infoContainer half">
                            <label>Job ID</label>
                            <span>{this.props.job.jobID}</span>
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
                            <span>{this.props.job.description}</span>
                        </div>
                        <div className="infoContainer third">
                            <label>Repeat Every</label>
                            <span>5 days</span>
                        </div>
                        <div className="infoContainer third">
                            <label># of Repeats</label>
                            <span>N/A</span>
                        </div>
                        <div className="infoContainer third">
                            <label>Never Expires</label>
                            <span><i className="fa fa-check"></i></span>
                        </div>
                        <div className="infoContainer fluid">
                            <label>Job Manager</label>
                            <span>Manager Name | phone number | email</span>
                        </div>
                    </div>
                    <div className="dashRow">
                        <div className="dashColumn half">
                            <Announcements />
                            <TaskTab tasks={this.props.tasks}/>
                        </div>
                        <div className="dashColumn half">
                            <Todo  />
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
        tasks: state.tasks.taskList
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