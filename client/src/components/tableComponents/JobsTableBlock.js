import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import '../../assets/dash.css'

class block extends Component {
    render() {
        const YYMMDD = formatTimeToYYMMDD(this.props.job.createdAt)
        return(
            <tr onClick={() => {window.location.href=`/dash/job/${this.props.job.jobID}`}}>
                <td>{YYMMDD.year}/{YYMMDD.month}/{YYMMDD.date}</td>
                <td>
                    <p>{this.props.job.jobTitle}</p>
                    <span>Job ID: {this.props.job.jobID}</span>
                </td>
                <td>
                    <p>Team ID: {this.props.job.teamID}</p>
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
