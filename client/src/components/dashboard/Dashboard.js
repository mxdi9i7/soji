import React, { Component } from 'react'
import {Dashnav} from '../partials/Dashnav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import { ClientDashboard } from './ClientDashboard';
import { AdminDashboardPage } from './AdminDashboardPage'
import { EmployeeDashboard } from './EmployeeDashboard'

export default class Dashboard extends Component {
  render() {
    const role = this.props.user.identity
    let dashboard = null;
    if (role === "employee") {
        dashboard = <EmployeeDashboard />
    } else if (role === "client") {
        dashboard = <ClientDashboard />
    } else {
        dashboard = <AdminDashboardPage />
    }
    return (
      <div>
        <Dashnav />
        { dashboard }
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const DashboardPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
