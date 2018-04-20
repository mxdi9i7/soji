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
                                <Link to="/dash">Dashboard</Link>
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
                    </div>
                </div>
            </div>
            )
        }   
    }
