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
        this.setState({client: client.data.data})
    }
    render() {
        let { setCreateJobToActive } = this.props
        const redirectTo = () => {
            switch(this.state.client.role) {
                case "client":
                    return <Redirect to="/dash/c" />
                case "employee":
                    return <Redirect to="/dash/e" />
                case "admin":
                    return <Redirect to="/dash/a" />
                default: 
                    return <Redirect to="/dash/c" />
            }
        }
        return(
            <div>
                {
                    redirectTo()
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
