import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { getJobs } from '../../actions/ManageJobs';
import { formatTimeToYYMMDD } from '../../helpers/formatTime';

export class ClientDash extends Component {
    state = {}
    async componentDidMount() {
        await this.props.fetchJobs()
        const client = await axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
        await this.setState({client: client.data.data})
        const jobs = await axios.get(apiUrl + '/jobs/fetch/client?clientID=' + client.data.data.clientID)
        await this.setState({jobs: jobs.data.data})
        const jobIDs = this.state.jobs.map(job => job.jobID)
        const files = await axios.post(apiUrl + '/files/fetch/client', {jobIDs})
        await this.setState({files: files.data.data})
    }
    render() {
        return (
            <div>
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                Dashboard
                            </h1>
                        </div>
                        <div className="dashActions">
                            <Link to="/dash/payment">
                                <button>
                                    <i className="fa fa-credit-card"></i>
                                    <span>Make a Payment</span>
                                </button>
                            </Link>
                            <Link to="/dash/new">
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
                                {
                                    (this.state.files && typeof this.state.files !== "string") ? this.state.files.map(file => {
                                        const date = formatTimeToYYMMDD(file.createdAt)
                                        return (
                                            <div  className="taskFolder folder" key={file.fileID}>
                                                <i className="fa fa-folder"></i>
                                                <Link to={`/dash/file/${file.fileID}`}>{file.fileTitle}</Link>
                                                {/* <span>Job ID: {file.jobID}</span>
                                                <span>Task ID: {file.taskID}</span> */}
                                                <span>Date: {date.year}/{date.month}/{date.date}</span>
                                            </div>
                                        )
                                    }) : this.state.files
                                }
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
