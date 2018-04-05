import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import '../../assets/dash.css'

class block extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: this.props.file
        }
    }
    render() {
        // const YYMMDD = formatTimeToYYMMDD(this.state.file.createdAt)
        const file = this.state.file
        return(
            <tr>
                <td>
                    <p>{file.createdAt}</p>
                </td>
                <td>
                    <p>{file.taskID}</p>
                </td>
                <td>
                    <p>Download</p>
                </td>
                <td>
                    <p>team name</p>
                    <span>Team ID: {file.teamID}</span>
                </td>
                <td>
                    <p>manager name</p>
                    <span>ACC ID: {file.teamID}</span>
                </td>
                <td>
                    <p>{file.rating}%</p>
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
        file: ownProps.file
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        file: stateProps.file
    }
}


export const FilesTableBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(block)
