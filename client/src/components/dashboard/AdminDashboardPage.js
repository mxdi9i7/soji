import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom';
import { CreateJobContainer } from '../createJob/CreateJobContainer';
import { SetCreateJobToActive } from '../../actions/CreateTask'
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
                 <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                Dashboard
                            </h1>
                        </div>
                        <div className="dashActions">
                            <Link to="/dash/a/new">
                                <button>
                                    <i className="fa fa-plus"></i>
                                    <span>Create a New Job</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="dashContainer">
                        <div className="dashTab tools">
                            <h1>Tools</h1>
                            <div className="toolList">
                                <Link to="/dash/jobs">Jobs List</Link>
                                <Link to="/dash/employees">Employees List</Link>
                                <Link to="/dash/teams">Teams List</Link>
                                <Link to="/dash/files">Files List</Link>
                            </div>
                        </div>
                        <div className="company dashTab">
                            <h1>My Companies ()</h1>
                            <div className="list">
                                
                            </div>
                        </div>
                        {/* <div className="dashFilesList dashTab">
                            <h1>My Files ()</h1>
                            <div className="list">
                                
                            </div>
                        </div> */}
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
