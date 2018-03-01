import React, { Component } from 'react';
import { CreateTaskContainer } from './CreateTask';
import '../../assets/createJob.css';
import { SetCreateJobToActive } from '../../actions/CreateTask'
import { connect } from 'react-redux';

class CreateJob extends Component {
    render() {
        let { setCreateJobToActive, isCreateJobActive } = this.props;
        return (
            <div className="dashCreateContainer">
                {
                    isCreateJobActive ? 
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
                        <div onClick={setCreateJobToActive}>
                            <i onClick={setCreateJobToActive} className="fa fa-plus"></i>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isCreateJobActive: state.createTask.isCreateJobActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCreateJobToActive: () => {
            dispatch(SetCreateJobToActive)
        }
    }
}



export const CreateJobContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateJob)
