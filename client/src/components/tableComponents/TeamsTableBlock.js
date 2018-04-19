import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import '../../assets/dash.css'

class block extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team: this.props.team
        }
    }
    render() {
        return(
            <tr onClick={() => {
                window.location.href = "/dash/teams/configure/" + this.state.team.teamID
            }}>
                <td>
                    <p>{this.state.team.teamID}</p>
                    <span>{this.state.team.teamName}</span>
                </td>
                <td>
                    <p>{this.state.team.managerID}</p>
                </td>
                <td>actions</td>
            </tr>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        team: ownProps.team
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        team: stateProps.team
    }
}


export const TeamsTableBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(block)
