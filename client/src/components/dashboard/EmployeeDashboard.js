import React, { Component } from 'react'
import {Dashnav} from '../partials/Dashnav';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { getJobs } from '../../actions/ManageJobs';
import { Announcements } from '../partials/Announcements'

export class EmployeeDash extends Component {
    componentDidMount() {
        this.props.fetchJobs()
    }
    render() {
        return (
            <div>
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                Dashboard
                            </h1>
                        </div>
                    </div>
                    <div className="dashContainer employees">
                        <Announcements />
                    </div>
                    <div className="dashContainer employees">
                        <div className="dashTab tools">
                            <h1>Tools</h1>
                            <div className="toolList">
                            
                            </div>
                        </div>
                        <div className="company dashTab">
                            <h1>My Companies ({this.props.jobs.length})</h1>
                            <div className="list">
                                {
                                    this.props.jobs.map(job => (
                                        <div className="folder" key={job.jobID}>
                                            <i className="fa fa-folder"></i>
                                            <Link to={`/dash/job/${job.jobID}`}>{job.jobTitle}</Link>
                                            <span>
                                            {
                                                job.approved ? 
                                                "Approved" : "Waiting Approval"
                                            }
                                            </span>
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="dashFilesList dashTab">
                            <h1>My Messages ({this.props.jobs.length})</h1>
                            <div className="list">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.manageJobs.jobs,
        teamID: state.auth.teamID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: () => {}
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        jobs: stateProps.jobs,
        teamID: stateProps.teamID,
        fetchJobs: async (e) => {
            const employee = await axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
            const teamID = employee.data.data.teamID
            axios.get(apiUrl + '/jobs/fetch/team?teamID=' + teamID)
            .then(response => {
                const jobsData = response.data.data
                store.dispatch(getJobs(1, 1, jobsData, 1))
            })
        }
    }
}



export const EmployeeDashboard = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(EmployeeDash)
