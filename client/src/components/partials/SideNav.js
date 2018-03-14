import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/navs.css'

export default class SideNav extends Component {
    
    render() {
        return (
            <div className="sidenavContainer">
                <div className="toggleContainer navButton">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="divider"></div>
                <Link to="/dash/" className={this.props.currentPage == "dash" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-home"></i>
                    <h2>Dashboard</h2>
                </Link>
                <Link to="/dash/jobs" className={this.props.currentPage == "jobs" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-briefcase"></i>
                    <h2>Jobs</h2>
                </Link>
                <Link to="/dash/files" className={this.props.currentPage == "files" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-paperclip"></i>
                    <h2>Files</h2>
                </Link>
                <Link to="/dash/employees" className={this.props.currentPage == "employees" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-users"></i>
                    <h2>Employees</h2>
                </Link>
                {/* <Link to="/dash/clients" className={this.props.currentPage == "clients" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-address-book "></i>
                    <h2>Clients</h2>
                </Link>
                <Link to="/dash/billing" className={this.props.currentPage == "billing" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-credit-card "></i>
                    <h2>Billing</h2>
                </Link> */}
            </div>
        )
    }
}