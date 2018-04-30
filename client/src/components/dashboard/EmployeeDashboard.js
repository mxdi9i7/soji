import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { getJobs } from '../../actions/ManageJobs';
import { Announcements } from '../partials/Announcements'
import { formatTimeToYYMMDD } from '../../helpers/formatTime'

export class EmployeeDash extends Component {
    state = {comments: []}
    async componentDidMount() {
        await this.props.fetchJobs()
        const comments = await axios.get(apiUrl + '/comments/fetch/team?teamID=' + this.props.teamID)
        this.setState({comments: comments.data.data})
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
                    </div>
                    <div className="dashContainer employees">
                        <Announcements />
                    </div>
                    <div className="dashContainer employees">
                        <div className="dashTab tools">
                            <h1>Tools</h1>
                            <div className="toolList">
                                <Link to="/dash/announcements">Announcements</Link>
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
                            <h1>My Messages ({this.state.comments.length || 0})</h1>
                            <div className="list">
                                {
                                    this.state.comments && 
                                    this.state.comments.map(comment => {
                                        const date = formatTimeToYYMMDD(comment.createdAt)
                                        return (
                                            <div className="folder" key={comment._id}>
                                                <span>{comment.content}</span>
                                                <span>{date.year}/{date.month}/{date.date}</span>
                                                <Link to={`/dash/file/${comment.fileID}`}>View</Link>
                                            </div>
                                        )
                                    })
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
        teamID: state.auth.teamID,
        user: state.auth
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
        user: stateProps.user,
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
