import React, { Component } from 'react';
import Dashnav from '../partials/Dashnav';
import SideNav from '../partials/SideNav';
import '../../assets/dash.css'
export default class DashboardPage extends Component {

    render() {
        return(
            <div>
                <Dashnav />
                <SideNav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="dashActions">
                            <button>
                                <i className="fa fa-plus"></i>Create a New Job
                            </button>
                            <i className="fa fa-search"></i><input type="text" placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}