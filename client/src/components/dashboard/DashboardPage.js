import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Redirect } from 'react-router-dom'
import {SideNav} from '../partials/SideNav';
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
        console.log(client)
        this.setState({client: client.data.data})
    }
    render() {
        let { setCreateJobToActive } = this.props
        return(
            <div>
                {
                    this.state.client.role === "client" ? 
                    <Redirect to="/dash/c" />
                     : ""
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isCreateJobActive: state.isCreateJobActive,
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCreateJobToActive: () => {
            dispatch(SetCreateJobToActive)
        }
    }
}



export const DashboardPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
