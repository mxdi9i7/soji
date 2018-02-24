import React, { Component } from 'react';
import '../../assets/navs.css'

export default class Dashnav extends Component {
    
    render() {
        return (
            <div className="dashnavContainer">
                <div className="menuContainer">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="logoContainer">
                    <img src="http://lisatech.vn/upload/images/Soji-logo.jpg" alt="logo"/>
                </div>
                <div className="actionContainer">
                    <div className="nameContainer">
                        <h3>Kevin Song</h3>
                        <p>Admin</p>
                    </div>
                    <div className="avatarContainer">
                        <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="avatar"/>
                        <i className="fa fa-angle-down"></i>
                    </div>
                </div>
            </div>
        )
    }
}