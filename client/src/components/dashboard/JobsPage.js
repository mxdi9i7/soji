import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import {SideNav} from '../partials/SideNav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import { getJobs } from '../../actions/ManageJobs';
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { JobsTableBlock } from '../tableComponents/JobsTableBlock';
import ReactPaginate from 'react-paginate';


import '../../assets/dash.css'

class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: this.props.jobs
        }
    }
    componentWillMount() {
    }
    render() {
        return(
            <div className="jobsDash">
                <Dashnav />
                <SideNav currentPage={"jobs"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1 className="active"><a href="/dash/jobs">Jobs</a></h1><h1>/</h1><h1><a href="/dash/tasks">Tasks</a></h1>
                        </div>
                    </div>
                    <div className="dashTableContainer">
                        <div className="dashTableFilterHeader">
                            <h2 className="active">All</h2>
                            <h2>Unassigned</h2>
                            <h2>Assigned</h2>
                        </div>
                        <div className="dashTableTitles">
                            <h1>All Jobs</h1>
                            <div className="dashItemFilters">
                                <select name="" id="">
                                    <option value="day">Last Day</option>
                                    <option value="day">Last Week</option>
                                    <option value="day">Last Month</option>
                                    <option value="day">Last Year</option>
                                </select>
                                <input type="text" placeholder="Search Jobs"/>
                            </div>
                        </div>
                        <table className="dashTable">
                            <thead className="dashTableHeader">
                                <tr>
                                    <th>Created</th>
                                    <th>Job</th>
                                    <th>Assigned to</th>
                                    <th>Manager</th>
                                    <th>Client</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.jobs.map((e, i) => {
                                        return (
                                            <JobsTableBlock key={i} job={e} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="paginationContainer">
                            <ReactPaginate
                                pageCount={this.props.totalPage}
                                pageRangeDisplayed={3}
                                marginPageDispayed={2}
                                onPageChange={(e) => {
                                    this.props.fetchJobs(e.selected + 1)
                                }}
                                activeClassName={"active"}
                                containerClassName={"react-paginate"}
                                initialPage={0}
                                pageClassName={"page-item"}
                                />
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
        page: state.manageJobs.page,
        totalPage: state.manageJobs.totalPage,
        totalItems: state.manageJobs.totalItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: (e) => {
            axios.get(apiUrl + '/jobs/fetch', {
                params: {
                    page: e
                }
            })
            .then(response => {
                const jobsData = response.data.data
                store.dispatch(getJobs(jobsData.page, jobsData.pageCount, jobsData.results, jobsData.totalCount))
            })
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        jobs: stateProps.jobs,
        page: stateProps.page,
        totalItems: stateProps.totalItems,
        totalPage: stateProps.totalPage,
        fetchJobs: dispatchProps.fetchJobs
    }
}


export const JobsPage = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Jobs)
