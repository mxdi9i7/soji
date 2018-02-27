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
                <Link to="/" className="navButton active dashboard">
                    <i className="fa fa-home"></i>
                    <h2>Dashboard</h2>
                </Link>
                <Link to="/jobs" className="navButton jobs">
                    <i className="fa fa-briefcase"></i>
                    <h2>Jobs</h2>
                </Link>
                <Link to="/files" className="navButton files">
                    <i className="fa fa-paperclip"></i>
                    <h2>Files</h2>
                </Link>
                <Link to="/employees" className="navButton employees">
                    <i className="fa fa-users"></i>
                    <h2>Employees</h2>
                </Link>
                <Link to="/clients" className="navButton clients">
                    <i className="fa fa-address-book "></i>
                    <h2>Clients</h2>
                </Link>
                <Link to="/billing" className="navButton billing">
                    <i className="fa fa-credit-card "></i>
                    <h2>Billing</h2>
                </Link>
            </div>
        )
    }
}