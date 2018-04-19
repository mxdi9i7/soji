import React, { Component } from 'react'
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { apiUrl, employeeAvatarUrl } from '../../serverConfig';

export class NewTeamPage extends Component {
    constructor() {
        super()
        this.state = {
            teamName: ""
        }
    }
    handleCreateTeam() {
        axios.post(apiUrl + '/teams/create', {
            teamName: this.state.teamName
        }).then(response => {
            if (response.data.success) {
                window.location.href = "/dash/teams/configure/" + response.data.data
            } else {
                alert(response.data)
            }
        })
    }
    handleInputChange(e) {
        this.setState({teamName: e.target.value})
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
                                <span>Create New Team</span>
                            </h1>
                        </div>
                        <div className="dashActions">
                        </div>
                    </div>
                    <div className="dashForm dashInfo">
                        <div className="infoContainer half">
                            <label>Team Name</label>
                            <input onChange={this.handleInputChange.bind(this)} type="text"/>
                            <button onClick={this.handleCreateTeam.bind(this)}>Create Team</button>
                        </div>
                        {/* <div className="infoContainer half">
                            <label>Add Team Member</label>
                            <input type="text" placeholder="Enter employee ID"/>
                            <button>Add</button>
                        </div>
                        <div className="teamsContainer">
                            <div className="teamMemberBlock">
                                <img src={employeeAvatarUrl + '/default.jpg'} alt=""/>
                                <span>Name</span>
                                <span>Employee 12124</span>
                                <button className="promote">Promote</button>
                                <button className="remove">Remove from team</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            )
        }   
    }
