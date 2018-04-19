import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../reducers/index'
import { getTasks } from '../../actions/ManageTasks';
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { TasksTableBlock } from '../tableComponents/TasksTableBlock';
import ReactPaginate from 'react-paginate';


import '../../assets/dash.css'

class Tasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: this.props.tasks
        }
    }
    componentWillMount() {
    }
    render() {
        return(
            <div className="tasksDash">
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash/a">Dashboard</Link>
                                <span>/</span>
                                <Link to="/dash/jobs">Jobs</Link>
                                <span>/</span>
                                <span>Tasks</span>
                            </h1>
                        </div>
                    </div>
                    <div className="dashTableContainer">
                        <div className="dashTableTitles">
                            <h1>All Tasks</h1>
                            <div className="dashItemFilters">
                                <select name="" id="">
                                    <option value="day">Last Day</option>
                                    <option value="day">Last Week</option>
                                    <option value="day">Last Month</option>
                                    <option value="day">Last Year</option>
                                </select>
                                <input type="text" placeholder="Search tasks"/>
                            </div>
                        </div>
                        <table className="dashTable">
                            <thead className="dashTableHeader">
                                <tr>
                                    <th>Created</th>
                                    <th>Task</th>
                                    <th>Job</th>
                                    <th>Download</th>
                                    <th>Team</th>
                                    <th>Manager</th>
                                    <th>Client</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.tasks.map((e, i) => {
                                        return (
                                            <TasksTableBlock key={i} task={e} />
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
                                    this.props.fetchTasks(e.selected + 1)
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
        tasks: state.manageTasks.tasks,
        page: state.manageTasks.page,
        totalPage: state.manageTasks.totalPage,
        totalItems: state.manageTasks.totalItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: (e) => {
            axios.get(apiUrl + '/tasks/fetch', {
                params: {
                    page: e
                }
            })
            .then(response => {
                const tasksData = response.data.data
                store.dispatch(getTasks(tasksData.page, tasksData.pageCount, tasksData.results, tasksData.totalCount))
            })
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        tasks: stateProps.tasks,
        page: stateProps.page,
        totalItems: stateProps.totalItems,
        totalPage: stateProps.totalPage,
        fetchTasks: dispatchProps.fetchTasks
    }
}


export const TasksPage = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Tasks)
