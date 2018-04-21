import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import '../../assets/dash.css'
import { Link } from 'react-router-dom'

class block extends Component {
    render() {
        const YYMMDD = formatTimeToYYMMDD(this.props.job.createdAt)
        return(
            <tr>
                <td>
                    <p>
                        {YYMMDD.year}/{YYMMDD.month}/{YYMMDD.date}
                    </p>
                </td>
                <td>
                    <p>Job Title: {this.props.job.jobTitle} <Link to={`/dash/job/${this.props.job.jobID}`} >Visit Job</Link></p>
                    <p>Job ID: {this.props.job.jobID}</p>
                </td>
                <td>
                    <p>Team ID: {this.props.job.teamID || "Not assigned"}</p>
                    {
                        this.props.job.teamID &&
                        <p><Link to={`/dash/teams/configure/${this.props.job.teamID}`}>Visit Team</Link></p>
                    }
                </td>
                <td>
                    <p>Client ID: {this.props.job.clientID || "Not assigned"}</p>
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
