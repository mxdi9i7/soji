import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import {SideNav} from '../partials/SideNav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import ReactPaginate from 'react-paginate';
import { getEmployees } from '../../actions/ManageEmployees'; 
import { EmployeesTableBlock } from '../tableComponents/EmployeesTableBlock';

import '../../assets/dash.css'

export class Employees extends Component {
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
                <SideNav currentPage={"employees"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1 className="active">Employees</h1><h1>/</h1><h1>Teams</h1>
                        </div>
                    </div>
                    <div className="dashTableContainer">
                        <div className="dashTableTitles">
                            <h1>All Employees</h1>
                            <div className="dashItemFilters">
                                <input type="text" placeholder="Search Employees"/>
                            </div>
                        </div>
                        <table className="dashTable">
                            <thead className="dashTableHeader">
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                    <th>Current Team</th>
                                    <th>Join Date</th>
                                    <th>Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.employees.map((e, i) => {
                                        return (
                                            <EmployeesTableBlock key={i} employee={e} />
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
                                    this.props.fetchEmployees(e.selected + 1)
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
        employees: state.manageEmployees.employees,
        page: state.manageEmployees.page,
        totalPage: state.manageEmployees.totalPage,
        totalItems: state.manageEmployees.totalItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: (e) => {
            axios.get(apiUrl + '/users/fetch/staff', {
                params: {
                    page: e
                }
            })
            .then(response => {
                const employeesData = response.data.data
                store.dispatch(getEmployees(employeesData.page, employeesData.pageCount, employeesData.results, employeesData.totalCount))
            })
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        fetchEmployees: dispatchProps.fetchEmployees,
        page: stateProps.page,
        totalItems: stateProps.totalItems,
        totalPage: stateProps.totalPage,
        employees: stateProps.employees
    }
}


export const EmployeesPage = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Employees)
