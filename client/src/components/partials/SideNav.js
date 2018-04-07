import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/navs.css'
import { connect } from 'react-redux'

class Navigation extends Component {
    
    render() {
        return (
            <div>
                {
                    this.props.info.identity === "admin" ?
                    <div className="sidenavContainer">
                        <Link to="/dash/" className={this.props.currentPage === "dash" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-home"></i>
                            <h2>Dashboard</h2>
                        </Link>
                        <Link to="/dash/jobs" className={this.props.currentPage === "jobs" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-briefcase"></i>
                            <h2>Jobs</h2>
                        </Link>
                        <Link to="/dash/files" className={this.props.currentPage === "files" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-paperclip"></i>
                            <h2>Files</h2>
                        </Link>
                        <Link to="/dash/employees" className={this.props.currentPage === "employees" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-users"></i>
                            <h2>Employees</h2>
                        </Link>
                        <Link to="/dash/announcement" className={this.props.currentPage === "announcement" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-paperclip"></i>
                            <h2>Announcement</h2>
                        </Link>
                    </div> : ""
                }
                {
                    this.props.info.identity === "employee" ?
                    <div className="sidenavContainer">
                        <Link to="/dash/" className={this.props.currentPage === "dash" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-home"></i>
                            <h2>Dashboard</h2>
                        </Link>
                        <Link to="/dash/jobs" className={this.props.currentPage === "jobs" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-briefcase"></i>
                            <h2>Jobs</h2>
                        </Link>
                    </div> : ""
                }
                {
                    this.props.info.identity === "client" ?
                    <div className="sidenavContainer">
                        <Link to="/dash/" className={this.props.currentPage === "dash" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-home"></i>
                            <h2>Dashboard</h2>
                        </Link>
                        <Link to="/dash/jobs" className={this.props.currentPage === "jobs" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-briefcase"></i>
                            <h2>Jobs</h2>
                        </Link>
                        <Link to="/dash/billing" className={this.props.currentPage === "billing" ? "active navButton dashboard" : "navButton dashboard"}>
                            <i className="fa fa-credit-card "></i>
                            <h2>Billing</h2>
                        </Link>
                    </div> : ""
                }
            </div>
                
               
                
                /* <Link to="/dash/clients" className={this.props.currentPage == "clients" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-address-book "></i>
                    <h2>Clients</h2>
                </Link>
                <Link to="/dash/billing" className={this.props.currentPage == "billing" ? "active navButton dashboard" : "navButton dashboard"}>
                    <i className="fa fa-credit-card "></i>
                    <h2>Billing</h2>
                </Link> */
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export const SideNav = connect(
    mapStateToProps, mapDispatchToProps
)(Navigation)