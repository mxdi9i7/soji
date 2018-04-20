import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import ReactPaginate from 'react-paginate';
import { getEmployees } from '../../actions/ManageEmployees'; 
import { TeamsTableBlock } from '../tableComponents/TeamsTableBlock';
import { getTeams } from '../../actions/ManageTeams';

import '../../assets/dash.css'

export class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount() {
    }
    render() {
        return(
            <div className="employeesDash">
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash">Dashboard</Link> /
                                Teams
                            </h1>
                        </div>
                        <div className="dashActions">
                            <Link to="/dash/teams/new">
                                <button>
                                    <i className="fa fa-plus"></i>
                                    <span>Create a New Team</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="dashTableContainer">
                        <div className="dashTableTitles">
                            <h1>All Employees</h1>
                        </div>
                        <table className="dashTable">
                            <thead className="dashTableHeader">
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Manager</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.teams.map((e, i) => {
                                        return (
                                            <TeamsTableBlock key={i} team={e} />
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
                                    this.props.fetchTeams(e.selected + 1)
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
        teams: state.manageTeams.teams,
        page: state.manageTeams.page,
        totalPage: state.manageTeams.totalPage,
        totalItems: state.manageTeams.totalItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeams: (e) => {
            axios.get(apiUrl + '/teams/fetch', {
                params: {
                    page: e
                }
            })
            .then(response => {
                const teamsData = response.data.data
                store.dispatch(getTeams(teamsData.page, teamsData.pageCount, teamsData.results, teamsData.totalCount))
            })
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        fetchTeams: dispatchProps.fetchTeams,
        page: stateProps.page,
        totalItems: stateProps.totalItems,
        totalPage: stateProps.totalPage,
        teams: stateProps.teams
    }
}


export const TeamsPage = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Teams)
