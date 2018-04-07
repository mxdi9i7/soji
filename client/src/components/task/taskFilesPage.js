import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom'
import {SideNav} from '../partials/SideNav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'
import { months } from '../../helpers/twelveMonths'

export class TaskFiles extends Component {
    async componentDidMount() {
        // let task = await axios.get(apiUrl + '/tasks/fetch/single?id=' + this.props.match.params.id)
        // this.props.initializeTask(task.data.data)
    }
    render() {
        return (
            <div>
                <Dashnav />
                <SideNav currentPage={"jobs"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                Job: {this.props.job.title}
                                / <span>{this.props.task.taskTitle}</span>
                                / <span>January 2018</span>
                             </h1>
                        </div>
                    </div>
                    <div className="filesTable">
                        
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
        // initializeTask: (task) => {
        //     store.dispatch(initializeTask(task))
        // }
    }
}

export const TaskFilesPage = connect(
    mapStateToProps, mapDispatchToProps
)(TaskFiles)