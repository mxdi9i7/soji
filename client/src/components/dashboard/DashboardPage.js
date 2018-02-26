import React, { Component } from 'react';
import Dashnav from '../partials/Dashnav';
import SideNav from '../partials/SideNav';
import CreateJobContainer from '../createJob/CreateJobContainer';

import '../../assets/dash.css'
export default class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
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
                                <i className="fa fa-plus"></i>
                                <span>Create a New Job</span>
                            </button>
                            <i className="fa fa-search "></i>
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                    <CreateJobContainer />
                </div>
            </div>
        )
    }
}