import React, { Component } from 'react';
import '../../assets/navs.css'
import '../../assets/dash.css'
import '../../assets/global.css'
import axios from 'axios'
import { apiUrl, employeeAvatarUrl, clientAvatarUrl, adminAvatarUrl } from '../../serverConfig'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import { setUserInfo } from '../../actions/auth'
import { store } from '../../reducers/index'
import { connect } from 'react-redux'

class Navigation extends Component {
    componentDidMount() {
        this.props.decodeToken()
        this.isAuthenticated()
    }
    handleLogout() {
        window.sessionStorage.setItem('token', "")
        this.isAuthenticated()
    }
    isAuthenticated() {
        const token = window.sessionStorage.getItem('token')
        if (!token) {
            window.location.href="/"
        }
    }
    render() {
        let url = "";
        const identity = this.props.info.identity
        if (identity === "employee") {
            url = employeeAvatarUrl
        } else if (identity === "client") {
            url = clientAvatarUrl
        } else if (identity === "admin") {
            url = adminAvatarUrl
        }
        return (
            <div className="dashnavContainer">
                <div className="logoContainer">
                    <img src="http://lisatech.vn/upload/images/Soji-logo.jpg" alt="logo"/>
                </div>
                <div className="actionContainer">
                    <div className="nameContainer">
                        <h3>{this.props.info.username}</h3>
                        <p>{this.props.info.identity}</p>
                    </div>
                    <div className="avatarContainer">
                        <img src={url + this.props.info.photo} alt="avatar"
                         />
                        <i className="fa fa-angle-down"></i>
                        <div onClick={this.handleLogout.bind(this)} className="avatarTab">
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decodeToken: () => {
            axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
            .then((res) => {
                if (res.data.success) {
                    store.dispatch(setUserInfo(res.data.data))
                } else {
                    Alert.success(res.data.data)
                }
            })
        }
    }
}

export const Dashnav = connect(
    mapStateToProps, mapDispatchToProps
)(Navigation)