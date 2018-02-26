import React, { Component } from 'react';
import { CreateTaskContainer } from './CreateTask';
import '../../assets/createJob.css';

export default class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCreateJobActive: false
        }
    }
    triggerCreateJobContainer() {
        this.setState({
            isCreateJobActive: true
        }, console.log(this.state))
    }
    render() {
        return (
            <div className="dashCreateContainer">
                {
                    this.state.isCreateJobActive ? 
                    <div className="createJobContainer">
                        <div className="jobInfoContainer">
                            <div className="createJobCol jobGeneralInfo">
                                <h1>Job Title:</h1>
                                <input type="text" placeholder="Add a title to your job" />
                                <h1>Description:</h1>
                                <input type="text" placeholder="Add a description to your job"/>
                            </div>
                            <div className="createJobCol jobRecurringInfo">
                                <h2>Job Settings</h2>
                                <h1>Repeat Every</h1>
                                <input type="number" placeholder="#" />
                                <select name="" id="">
                                    <option value="day">Days</option>
                                    <option value="week">Weeks</option>
                                    <option value="month">Months</option>
                                </select>
                                <div className="divider"/>
                                <h1>Number of Repeats</h1>
                                <input type="number" placeholder="#"/>
                                <div  className="divider"/>
                                <h1>Never Expires</h1>
                                <input type="radio"/>
                            </div>
                        </div>
                        <CreateTaskContainer />
                    </div> : 
                    <div className="dashUserPrompt">
                        <h1>Create your first job</h1>
                        <p>Tell us about your project and the specific tasks required.</p>
                        <p>We'll help you achieve your company's goals.</p>
                        <div onClick={this.triggerCreateJobContainer.bind(this)}>
                            <i onClick={this.triggerCreateJobContainer.bind(this)} className="fa fa-plus"></i>
                        </div>
                    </div>
                }
            </div>
        )
    }
}