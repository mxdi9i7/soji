import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import { initializeTask } from '../../actions/Tasks';
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'
import { months } from '../../helpers/twelveMonths'

export class TaskMonth extends Component {
    state = {}
    async componentDidMount() {
        let task = await axios.get(apiUrl + '/tasks/fetch/single?taskID=' + this.props.match.params.id)
        await this.props.initializeTask(task.data.data)
        let job = await axios.get(apiUrl + '/jobs/fetch/single?jobID=' + task.data.data.jobID)
        await this.setState({job: job.data.data, task: task.data.data})
    }
    render() {
        return (
            <div>
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash">Dashboard</Link>
                                <span>/</span>
                                <Link to={this.state.job && "/dash/job/"+this.state.job.jobID || ""}>
                                    {this.state.job && this.state.job.jobTitle}
                                </Link>
                                <span>/</span>
                                <span>{this.state.task && this.state.task.taskTitle || ""}</span>
                            </h1>
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
                            {
                                this.state.job && 
                                <span>
                                     <span>{this.state.job.jobTitle} / {this.state.job.jobID}</span>
                                </span>
                            }
                        </div>
                        <div className="infoContainer half">
                            <label>Est. Duration</label>
                            <span>{this.props.task.minute} minutes</span>
                        </div>
                        <div className="infoContainer fluid">
                            <label>Task Description</label>
                            <span>{this.props.task.taskDescription}</span>
                        </div>
                    </div>
                    <div className="taskMonth">
                        {
                            months.map(month => {
                                return (
                                    <div className="folder" key={month.index}>
                                        <i className="fa fa-folder"></i>
                                        <Link to={"/dash/task/" + this.props.task.taskID + '/' + month.index}>{month.month} 2018</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
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