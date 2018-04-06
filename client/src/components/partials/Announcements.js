import React, { Component } from 'react';

export class Announcements extends Component {
    render() {
        return (
            <div className="announcementContainer dashTab">
                <h1>Announcements</h1>
                <div className="announcementTab">
                    <span className="content">今天不上班</span>
                    <span className="date">10/01/2018</span>
                </div>
            </div>
        )
    }
}