import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
import { apiUrl } from '../../serverConfig'

import '../../assets/dash.css'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createJob: false,
            client: {}
        }
    }
    async componentDidMount() {
        const client = await axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
        this.setState({client: client.data.data})
    }
    render() {
        
        return(
            <div>
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                Dashboard
                            </h1>
                        </div>
                        <div className="dashActions">
                            <Link to="/dash/new">
                                <button>
                                    <i className="fa fa-plus"></i>
                                    <span>Create a New Job</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="dashContainer">
                        <div className="dashTab adminTools">
                            <h1>Tools</h1>
                            <div className="toolList">
                                <Link to="/dash/jobs">
                                    <i className="fa fa-briefcase"></i>
                                    <p>Jobs</p>
                                </Link>
                                <Link to="/dash/employees">
                                    <i className="fa fa-users"></i>
                                    <p>Employees</p>
                                </Link>
                                <Link to="/dash/teams">
                                    <i className="fa fa-sitemap"></i>
                                    <p>Teams</p>
                                </Link>
                                <Link to="/dash/files">
                                    <i className="fa fa-file"></i>
                                    <p>Files</p>
                                </Link>
                                <Link to="/dash/announcements">
                                    <i className="fa fa-bullhorn"></i>
                                    <p>Announcements</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export const AdminDashboardPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
