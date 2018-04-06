import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import {SideNav} from '../partials/SideNav';
import { CreateJobContainer } from '../createJob/CreateJobContainer';
import { SetCreateJobToActive } from '../../actions/CreateTask'
import { connect } from 'react-redux';

import '../../assets/dash.css'

class Dashboard extends Component {
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
                <SideNav currentPage={"dash"} />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>Dashboard</h1>
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



export const DashboardPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
