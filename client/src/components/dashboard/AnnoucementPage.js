import React, { Component } from 'react'
import {Dashnav} from '../partials/Dashnav';
import { connect } from 'react-redux';
import { store } from '../../reducers/index'
import { Link } from 'react-router-dom'
import { apiUrl } from '../../serverConfig'
import axios from 'axios'
import { formatTimeToYYMMDD } from '../../helpers/formatTime'

export class Announcements extends Component {
    state = {}
    componentDidMount() {
        axios.get(apiUrl + '/announcements/fetch').then(response => {
            if (response.data.success) {
                this.setState({announcements: response.data.data})
            }
        })
    }
    handleInputChange(e) {
        this.setState({content: e.target.value})
    }
    handlePublish(e) {
        axios.post(apiUrl + '/announcements/create', {content: this.state.content})
        .then(response => {
            if (response.data.success) {
                window.location.href = "/dash/announcements"
            } else {
                alert(response.data)
            }
        })
    }
    render() {
        return (
        <div>
            <Dashnav />
            <div className="dashContent announcement">
                <div className="dashHeader">
                    <div className="dashTitle">
                        <h1>
                            <Link to="/dash">Dashboard</Link>
                            <span>/</span>
                            <span>Annoucements</span>
                        </h1>
                    </div>
                </div>
                <div className="dashForm dashInfo">
                    {
                        this.props.user.identity === "admin" &&
                        <div className="infoContainer half">
                            <label>Announcement Content</label>
                            <input onChange={this.handleInputChange.bind(this)}  type="text"/>
                            <button onClick={this.handlePublish.bind(this)}>Publish</button>
                        </div>
                    }
                    <div className="announcementContainer">
                        {
                            this.state.announcements && this.state.announcements.map(announcement => {
                                const date = formatTimeToYYMMDD(announcement.createdAt)
                                return (
                                    <div className="announcementBlock">
                                        <p>{announcement.content}</p>
                                        <p>{date.year}/{date.month}/{date.date}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
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

export const AnnouncementsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Announcements)