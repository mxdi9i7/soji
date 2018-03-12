import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'

import '../../assets/dash.css'

class block extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: this.props.job
        }
    }
    render() {
        return(
            <tr>
                <td>{this.state.job.createdAt}</td>
                <td>
                    <p>{this.state.job.jobTitle}</p>
                    <span>Job ID: {this.state.job.jobID}</span>
                </td>
                <td>{this.state.job.duration}</td>
                <td>
                    <p>Team ID: {this.state.job.teamID}</p>
                </td>
                <td>
                    <p>W.B. Yeats</p>
                    <span>EMPL ID: 123919</span>
                </td>
                <td>
                    <p>P.B. Shelley</p>
                    <span>ACC ID: 1281287</span>
                </td>
            </tr>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        job: ownProps.job
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        job: stateProps.job
    }
}


export const JobsTableBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(block)
