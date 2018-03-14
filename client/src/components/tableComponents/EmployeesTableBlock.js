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
    }
    render() {
        // const YYMMDD = formatTimeToYYMMDD(this.state.employee.createdAt)
        let ratings = 0;
        let active = this.state.employee.active ? "Active" : "Inactive"
        if (this.state.employee.ratingCount === 0) {
            ratings = 0
        } else {
            ratings = this.state.employee.totalRating / this.state.employee.ratingCount;
        }
        
        return(
            <tr>
                <td>
                    <p>{this.state.employee.username}</p>
                    <span>{this.state.employee.staffID}</span>
                </td>
                <td>
                    <p>{ratings}%</p>
                </td>
                <td>
                    <p>{active}</p>
                </td>
                <td>
                    <p>Team Name</p>
                    <span>Team ID: {this.state.employee.teamID}</span>
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
        employee: ownProps.employee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        employee: stateProps.employee
    }
}


export const EmployeesTableBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(block)
