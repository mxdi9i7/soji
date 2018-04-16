import React, { Component } from 'react'
import axios from 'axios'
import { apiUrl, fileUrl } from '../../serverConfig'
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom';
import '../../assets/dash.css'
import { formatTimeToYYMMDD } from '../../helpers/formatTime'

export default class FilePage extends Component {
    constructor() {
        super()
        this.state = {
            file: {}
        }
    }
    componentDidMount() {
        const fileID = this.props.match.params.id
        axios.get(apiUrl + '/files/fetch/single?fileID=' + fileID).then(file => {
            this.setState({file: file.data.data})
        })
    }
    render() {
        const year = formatTimeToYYMMDD(this.state.file.createdAt).year
        const month = formatTimeToYYMMDD(this.state.file.createdAt).month
        const date = formatTimeToYYMMDD(this.state.file.createdAt).date
        return (
            <div>
                <Dashnav />
                <div className="dashContent">
                    <div className="dashHeader">
                        <div className="dashTitle">
                            <h1>
                                <Link to="/dash">Dashboard</Link>
                                <span>/</span>
                                <span>File {this.state.file.fileID}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="dashContainer">
                        <div className="dashTab">
                            <div className="dashInfo">
                                <div className="dashInfo">
                                    <div className="infoContainer half">
                                        <label>File Name</label>
                                        <span>{this.state.file.fileName}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label>File ID</label>
                                        <span>{this.state.file.fileID}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label>Task ID</label>
                                        <span>{this.state.file.taskID}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label>Job ID</label>
                                        <span>{this.state.file.jobID}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label>Manager ID</label>
                                        <span>{this.state.file.managerID}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label>Upload Date</label>
                                        <span>{`${year}/${month}/${date}`}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label>Rating</label>
                                        <span>{this.state.file.rating || "Not yet rated"}</span>
                                    </div>
                                    <div className="infoContainer half">
                                        <label><i className="fa fa-download"></i> Download File </label>
                                        <a href={fileUrl + this.state.file.fileName} download>Download</a>
                                    </div>
                                    <div className="infoContainer half">
                                        <button>Rate this submission</button>
                                    </div>
                                    <div className="infoContainer half">
                                        <button>Leave a comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
