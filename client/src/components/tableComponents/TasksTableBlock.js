import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
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
                        Task ID: 
                        {
                            task.taskID
                        }
                        <Link to={`/dash/task/${task.taskID}`}> Visit task</Link>
                    </p>
                    <p>
                        {
                            task.taskTitle
                        }
                    </p>
                </td>
                <td>
                    <p>
                        Job ID: 
                        {
                            task.jobID
                        }
                    </p>
                </td>
                <td>
                    <p>team name</p>
                    <p>Team ID: </p>
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
