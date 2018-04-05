import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { store } from '../../reducers/index'
import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import '../../assets/dash.css'

class block extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: this.props.task
        }
    }
    render() {
        const task = this.state.task
        const YYMMDD = formatTimeToYYMMDD(task.createdAt)
        return(
            <tr>
                <td>
                    <p>
                        {
                            YYMMDD.year + '/' + YYMMDD.month + '/' + YYMMDD.date
                        }
                    </p>
                </td>
                <td>
                    <p>
                        {
                            task.jobID
                        }
                    </p>
                </td>
                <td>
                    <p>Download</p>
                </td>
                <td>
                    <p>team name</p>
                    <span>Team ID: </span>
                </td>
                <td>
                    <p>manager name</p>
                    <span>ACC ID:</span>
                </td>
                <td>
                    <p>%</p>
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
        task: ownProps.task
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        task: stateProps.task
    }
}


export const TasksTableBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(block)
