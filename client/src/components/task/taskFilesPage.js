import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import axios from 'axios';
import { apiUrl, fileUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'
import { getFiles } from '../../actions/ManageFiles';
import { months } from '../../helpers/twelveMonths'

export class TaskFiles extends Component {
    
    async componentDidMount() {
        let files = await axios.get(`${apiUrl}/files/fetch/month?taskID=${this.props.match.params.id}&month=${this.props.match.params.month}&year=2018`)
        this.props.getFiles(files.data.data)
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
                                <Link to={this.props.job.jobID ? `/dash/job/${this.props.job.jobID}` : "/dash"}>{this.props.job.title || "Job"}</Link>
                                <span>/</span>
                                <Link to={this.props.task.taskID ? `/dash/task/${this.props.task.taskID}` : "/dash"}>{this.props.task.taskTitle || "Task"}</Link>
                                <span>/</span>
                                <span>January 2018</span>
                            </h1>
                        </div>
                    </div>
                    <div className="dashContainer">
                        <div className="dashTab">
                            <div className="list">
                                {
                                    typeof this.props.files !== "string" ? this.props.files.map(file => {
                                        const date = new Date(file.createdAt)
                                        const createDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()
                                        return (
                                            <div className="folder" key={file.fileID}>
                                                <i className="fa fa-file"></i>
                                                <span>File Name: {file.fileName}</span>
                                                <span>Upload Date: {createDate}</span>  
                                                <span>
                                                    Rating: 
                                                    {
                                                        file.rating ? file.rating : 
                                                        " Not yet rated" 
                                                    }
                                                </span>
                                                <a href={"/dash/file/" + file.fileID}>
                                                    <i className="fa fa-eye"></i>
                                                    View File
                                                </a>  
                                                <a href={fileUrl + file.fileName} download>
                                                    <i className="fa fa-download"></i>
                                                    Download
                                                </a>  
                                                
                                                
                                            </div>
                                        )
                                    }) : (this.props.files)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.tasks.task,
        job: state.job,
        files: state.manageFiles.files
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFiles: (files) => {
            store.dispatch(getFiles(1, 1, files, 1))
        }
    }
}

export const TaskFilesPage = connect(
    mapStateToProps, mapDispatchToProps
)(TaskFiles)