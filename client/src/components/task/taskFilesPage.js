import React, { Component } from 'react';
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../../reducers/index';
import axios from 'axios';
import Modal from 'react-modal';
import { apiUrl, fileUrl } from '../../serverConfig';
import '../../assets/dash.css'
import '../../assets/job.css'
import { getFiles } from '../../actions/ManageFiles';
import { months } from '../../helpers/twelveMonths'
import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import Alert from 'react-s-alert';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


export class TaskFiles extends Component {
    state = {
        modalIsOpen: false
    }
    async componentDidMount() {
        const taskID = this.props.match.params.id
        let task = await axios.get(apiUrl + '/tasks/fetch/single?taskID=' + taskID)
        let job = await axios.get(apiUrl + '/jobs/fetch/single?jobID=' + task.data.data.jobID)
        let files = await axios.get(`${apiUrl}/files/fetch/month?taskID=${taskID}&month=${this.props.match.params.month}&year=2018`)
        await this.props.getFiles(files.data.data)
        let team = await axios.get(apiUrl + '/teams/fetch/single?teamID=' + job.data.data.teamID)
        await this.setState({team: team.data.data, job: job.data.data, task: task.data.data})
    }
    closeModal() {
        this.setState({modalIsOpen: false})
    }
    toggleFileUpload() {
        this.setState({modalIsOpen: true})
    }
    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }
    handleFileChange(e) {
        this.setState({file: e.target.files[0]})
    }
    handleSubmit(e) {
        const newFile = new FormData()
        newFile.append('jobID', this.state.job.jobID)
        newFile.append('taskID', this.props.match.params.id)
        newFile.append('managerID', this.state.team.managerID)
        newFile.append('fileTitle', this.state.title)
        newFile.append('uploadedBy', this.props.user.identity)
        newFile.append('file', this.state.file)
        axios.post(apiUrl + '/files/create', newFile).then(response => {
            if (response.data.success) {
                Alert.success(response.data.data, {
                    onShow: () => {
                        window.location.reload()
                    }
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
                                <Link to="/dash">Dashboard</Link>
                                <span>/</span>
                                <Link to={this.state.job ? `/dash/job/${this.state.job.jobID}` : ""}>{this.state.job && this.state.job.jobTitle}</Link>
                                <span>/</span>
                                <Link to={this.state.task ? `/dash/task/${this.state.task.taskID}` : ""}>{this.state.task && this.state.task.taskTitle}</Link>
                                <span>/</span>
                                <span>{months[this.props.match.params.month - 1].month} 2018</span>
                            </h1>
                        </div>
                        <div className="dashActions">
                            {
                                <button onClick={this.toggleFileUpload.bind(this)}>
                                    <i className="fa fa-upload"></i>
                                    <span>Upload File</span>
                                </button>
                            }
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal.bind(this)}
                                style={customStyles}
                                contentLabel="Example Modal"
                                ariaHideApp={false}
                            >
                                <div className="fileUploader">
                                    <p>Upload File</p>
                                    <input onChange={this.handleTitleChange.bind(this)} type="text" placeholder="File title" />
                                    <input onChange={this.handleFileChange.bind(this)}  type="file"/>
                                    <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className="dashContainer">
                        <div className="dashTab">
                            <div className="list">
                                
                                {
                                    typeof this.props.files !== "string" ? this.props.files.map(file => {
                                        const date = formatTimeToYYMMDD(file.createdAt)
                                        const createDate = date.year + '/' + date.month + '/' + date.date
                                        return (
                                            <div className={"folder " + file.uploadedBy} key={file.fileID}>
                                                <i className="fa fa-file"></i>
                                                <span>File Name: {file.fileTitle}</span>
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
                                                <a target="_blank" href={fileUrl + file.file.filename} download>
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
                <Alert stack={true} effect={'scale'} timeout={3000} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.tasks.task,
        job: state.job,
        files: state.manageFiles.files,
        user: state.auth
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