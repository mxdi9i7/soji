import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { CreateJobContainer } from '../createJob/CreateJobContainer';
import { SetCreateJobToActive } from '../../actions/CreateTask'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import '../../assets/dash.css'

class ClientNewJob extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createJob: false
        }
    }
    render() {
        let { setCreateJobToActive } = this.props
        return(
            <div>
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash">Dashboard</Link>
                                <span>/</span>
                                New Job
                            </h1>
                        </div>
                        <div className="dashActions">
                            <button onClick={setCreateJobToActive}>
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


const mapStateToProps = state => {
    return {
        isCreateJobActive: state.isCreateJobActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCreateJobToActive: () => {
            dispatch(SetCreateJobToActive)
        }
    }
}



export const ClientNewJobPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientNewJob)
