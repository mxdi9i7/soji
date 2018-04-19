import React, { Component } from 'react'
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { apiUrl, employeeAvatarUrl } from '../../serverConfig';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import TeamMember from './TeamMember'

export class ConfigureTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: "",
            teamID: this.props.match.params.id,
            teamMember: [],
            jobs: []
        }
    }
    componentDidMount() {
        this.getTeamInfo()
        this.getJobsInfo()
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    getJobsInfo() {
        axios.get(apiUrl + '/jobs/fetch/team?teamID=' + this.state.teamID)
        .then(jobs => {
            jobs = jobs.data.data
            this.setState({
                jobs: jobs
            })
        })
    }
    handleChangeTeamName() {
        // axios.post()
    }
    handleAddMember() {
        axios.post(apiUrl + '/teams/update/add', {
            teamID: this.state.teamID,
            employeeID: this.state.addMember
        }).then(response => {
            if (response.data.success) {
                Alert.success(response.data.data, {
                    onClose: this.getTeamInfo()
                })
            } else {
                Alert.error(response.data.data)
            }
        })
    }

    handlePromotion(id) {
        axios.post(apiUrl + '/teams/update/promote', {employeeID: id, teamID: this.state.teamID})
        .then(response => {
            if (response.data.success) {
                Alert.success(response.data.data, {
                    onClose: () => window.location.reload()
                })
            } else {
                Alert.error(response.data.data)
            }
        })
    }

    handleRemove(id) {
        axios.post(apiUrl + '/teams/update/remove', {employeeID: id, teamID: this.state.teamID})
        .then(response => {
            if (response.data.success) {
                Alert.success(response.data.data, {
                    onClose: () => window.location.reload()
                })
            } else {
                Alert.error(response.data.data)
            }
        })
    }

    getTeamInfo() {
        axios.get(apiUrl + '/teams/fetch/single?teamID=' + this.state.teamID)
        .then(team => {
            team = team.data.data
            this.setState({
                teamMember: team.teamMember,
                teamName: team.teamName,
                teamID: team.teamID,
                managerID: team.managerID,
                creationDate: team.creationDate
            })
        })
    }

    handleAddJob() {
        axios.post(apiUrl + '/jobs/update/assign', {
            teamID: this.state.teamID, jobID: this.state.addJob
        }).then(response => {
            if (response.data.success) {
                Alert.success(response.data.data, {
                    onClose: () => this.getTeamInfo()
                })
            } else {
                Alert.error(response.data.data)
            }
        })
    }

    render() {
        return (
            <div>
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash/a">Dashboard</Link>
                                <span>/</span>
                                <Link to="/dash/teams">Teams</Link>
                                <span>/</span>
                                <span>Team {this.state.teamID}</span>
                            </h1>
                        </div>
                        <div className="dashActions">
                        </div>
                    </div>
                    <div className="dashForm dashInfo">
                        <div className="infoContainer half">
                            <label>Team Name</label>
                            <input placeholder={this.state.teamName} onChange={this.handleInputChange.bind(this)} name="teamName" type="text"/>
                            <button onClick={this.handleChangeTeamName.bind(this)}>Change Team Name</button>
                        </div>
                        <div className="infoContainer half">
                            <label>Add Team Member</label>
                            <input onChange={this.handleInputChange.bind(this)} name="addMember" type="text" placeholder="Enter employee ID"/>
                            <button onClick={this.handleAddMember.bind(this)}>Add</button>
                        </div>
                        <div className="infoContainer half">
                            <label>Assign to Job</label>
                            <input onChange={this.handleInputChange.bind(this)} name="addJob" type="text" placeholder="Enter Job ID"/>
                            <button onClick={this.handleAddJob.bind(this)}>Add</button>
                        </div>
                        <div className="teamsContainer">
                            {
                                this.state.teamMember.map(member => (
                                    <TeamMember 
                                    removeMember={this.handleRemove.bind(this)} 
                                    promoteMember={this.handlePromotion.bind(this)} 
                                    key={member} 
                                    employeeID={member}
                                     />
                                ))
                            }
                        </div>
                        <div className="jobsContainer">
                            Assigned To:
                            <br/>
                            {
                                this.state.jobs.map(job => (
                                    <div className="jobFolderContainer" key={job._id}>
                                        <div  className="folder" key={job.jobID}>
                                            <i className="fa fa-folder"></i>
                                            <Link to={`/dash/job/${job.jobID}`}>{job.jobTitle}</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Alert stack={true} effect={'scale'} timeout={3000} />
            </div>
            )
        }   
    }
