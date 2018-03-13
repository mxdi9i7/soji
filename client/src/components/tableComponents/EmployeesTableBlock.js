import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import '../../assets/dash.css'

class block extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: this.props.employee
        }
        console.log(this.props)
    }
    render() {
        // const YYMMDD = formatTimeToYYMMDD(this.state.employee.createdAt)
        return(
            <tr>
                <td>
                    <p>{this.state.employee.username}</p>
                </td>
                <td>
                    <p>{this.state.employee.totalRating/this.state.employee.ratingCount}%</p>
                </td>
                <td>
                    <p>{this.state.employee.active}</p>
                </td>
                <td>
                    <p>Team Name</p>
                    <span>Team ID: 123919</span>
                </td>
                <td>
                    <p>P.B. Shelley</p>
                    <span>ACC ID: 1281287</span>
                </td>
                <td>
                    {/* {YYMMDD.year}/{YYMMDD.month}/{YYMMDD.date} */}
                </td>
                <td>actions</td>
            </tr>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
    }
}


export const EmployeesTableBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(block)
