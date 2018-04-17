import React, { Component } from 'react'
import axios from 'axios'
import { apiUrl, fileUrl } from '../../serverConfig'
import {Dashnav} from '../partials/Dashnav';
import { Link } from 'react-router-dom';
import '../../assets/dash.css'
import Modal from 'react-modal';
import { formatTimeToYYMMDD } from '../../helpers/formatTime'
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'

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

class FilePageComponent extends Component {
    constructor() {
        super()
        this.state = {
            file: {},
            modalIsOpen: false,
            comment: "",
            comments: []
        }
    }
    toggleRatingModal() {
        this.setState({modalIsOpen: true})
    }
    closeModal() {
        this.setState({modalIsOpen: false})
    }
    handleRatingInput(e) {
        this.setState({rating: e.target.value})
    }
    submitRating() {
        if (this.state.rating >= 0 && this.state.rating <= 100) {
            axios.post(apiUrl + '/files/update/rating', {
                fileID: this.state.file.fileID,
                rating: this.state.rating
            }).then(async response => {
                if (response.data.success) {
                    Alert.success(response.data.data, {
                        onClose: () => {
                            window.location.reload()
                        }
                    })
                } else {
                    Alert.error(response.data.data)
                }
            })
        } else {
            Alert.error("Rating not meeting requirement!")
        }
    }
    handleCommentInput(e) {
        this.setState({comment: e.target.value})
    }
    async clearCommentInput(comment) {
        let comments = this.state.comments;
        console.log(comment)
        comments.push({content: comment, authorRole: this.props.user.identity, createdAt: new Date()})
        await this.setState({comments})
        this.setState({comment: ""})
    }
    submitComment() {
        const comment = this.state.comment
        if (this.state.comment !== "") {
            axios.post(apiUrl + '/comments/create', {
                content: comment,
                fileID: this.state.file.fileID,
                author: this.props.user.identity
            }).then(response => {
                if (response.data.success) {
                    Alert.success(response.data.data, {
                        onShow: () => {
                            this.clearCommentInput(comment)
                        }
                    })
                } else {
                    Alert.error(response.data.data)
                }
            })
        }
    } 
    async componentDidMount() {
        const fileID = this.props.match.params.id
        let file = await axios.get(apiUrl + '/files/fetch/single?fileID=' + fileID)
        await this.setState({file: file.data.data})
        let comments = await axios.get(apiUrl + '/comments/search/file?fileID=' + this.state.file.fileID)
        await this.setState({comments: comments.data.data})
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
                        <div className="dashTab filePage">
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
                                    {
                                        this.props.user.identity === "client" ?
                                        <button className="rateBtn" onClick={this.toggleRatingModal.bind(this)}>Rate this submission</button> : ""
                                    }
                                </div>
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onRequestClose={this.closeModal.bind(this)}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                    ariaHideApp={false}
                                >
                                    <div className="ratingModal">
                                        <p>Rate this file</p>
                                        <input onChange={this.handleRatingInput.bind(this)} type="number" min="0" max="100" placeholder="0 ~ 100"/>
                                        <button onClick={this.submitRating.bind(this)}>Submit</button>
                                    </div>
                                </Modal>
                                
                            </div>
                            <div className="commentContainer">
                                <h1>Comments</h1>
                                <div className="commentInputContainer">
                                    <input onChange={this.handleCommentInput.bind(this)} value={this.state.comment} type="text"/>
                                    <button onClick={this.submitComment.bind(this)} className="commentBtn">Leave a comment</button>
                                </div>
                                <div className="commentContent">
                                    {
                                        this.state.comments.map(comment => (
                                            <div key={comment._id} className="commentBlock">
                                                {comment.authorRole}: {comment.content}
                                            </div>
                                        ))
                                    }
                                </div>
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
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const FilePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilePageComponent)
