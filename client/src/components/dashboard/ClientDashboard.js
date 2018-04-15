import React, { Component } from 'react'
import {Dashnav} from '../partials/Dashnav';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { getJobs } from '../../actions/ManageJobs';

export class ClientDash extends Component {
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
                        <div className="dashActions">
                            <Link to="/dash/c/new">
                                <button>
                                    <i className="fa fa-plus"></i>
                                    <span>Create a New Job</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="dashContainer">
                        <div className="dashJobListContainer dashTab">
                            <h1>My Jobs ({this.props.jobs.length})</h1>
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
                            <h1>My Files ({this.props.jobs.length})</h1>
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
        clientID: state.auth.clientID
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
        clientID: stateProps.clientID,
        fetchJobs: async (e) => {
            const client = await axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
            const clientID = client.data.data.clientID
            axios.get(apiUrl + '/jobs/fetch/client?clientID=' + clientID)
            .then(response => {
                const jobsData = response.data.data
                store.dispatch(getJobs(1, 1, jobsData, 1))
            })
        }
    }
}



export const ClientDashboard = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ClientDash)
