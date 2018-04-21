import React, { Component } from 'react';
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
    render() {
        return (
            <div className="announcementContainer dashTab">
                <h1>Announcements</h1>
                {
                    this.state.announcements && 
                    this.state.announcements.map(announcement => {
                        const date = formatTimeToYYMMDD(announcement.createdAt)
                        return (
                            <div className="announcements" key={announcement._id}>
                                <div className="announcementTab">
                                    <span className="content">{announcement.content}</span>
                                    <span className="date">{date.year}/{date.month}/{date.date}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}