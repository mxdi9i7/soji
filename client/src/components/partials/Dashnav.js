import React, { Component } from 'react';
import '../../assets/navs.css'
import axios from 'axios'
import { apiUrl, employeeAvatarUrl } from '../../serverConfig'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import { setUserInfo } from '../../actions/auth'
import { store } from '../../reducers/index'
import { connect } from 'react-redux'

class Navigation extends Component {
    componentDidMount() {
        axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
        .then((res) => {
            if (res.data.success) {
                this.props.setInfo(res.data.data)
            } else {
                Alert.success(res.data.data)
            }
        })
    }
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
                        <h3>{this.props.info.username}</h3>
                        <p>{this.props.info.identity}</p>
                    </div>
                    <div className="avatarContainer">
                        <img src={employeeAvatarUrl + this.props.info.photo} alt="avatar"/>
                        <i className="fa fa-angle-down"></i>
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
        setInfo: (info) => {
            store.dispatch(setUserInfo(info))
        }
    }
}

export const Dashnav = connect(
    mapStateToProps, mapDispatchToProps
)(Navigation)