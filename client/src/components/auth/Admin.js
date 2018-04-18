import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { apiUrl } from '../../serverConfig';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import { saveTokenToBrowser } from '../../helpers/authenticate';

import '../../assets/auth.css';



export class AdminSignin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleSignin() {
        if (this.state.email && this.state.password) {
            axios.post(apiUrl + '/users/auth/adminLogin', {email: this.state.email, password: this.state.password})
            .then((response) => {
                if (response.data.success) {
                    saveTokenToBrowser(response.data.data)
                    Alert.success("Successfully signed in!")
                    this.setState({
                        isAuthenticated: true
                    })
                } else {
                    Alert.error(response.data.data)
                }
            })
        } else {
            Alert.error("Please fill in all fields before submitting!")
        }
    }

    alertCallback() {
        if (this.state.isAuthenticated) {

        } else {
            window.location.reload()
        }
    }

    handleInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div className="authWrapper">
            {
                this.state.isAuthenticated ? <Redirect to="/dash/a" /> : ""
            }
                <div className="authIdentifier">
                    <p>SOJI Admin Portal</p>
                </div>
                    
                <div className="authContainer">
                    <div className="authHeader">
                        <h1>Signin</h1>
                    </div>
                    <div className="authForm">
                        <div className="authInputGroup">
                            <label>Email:</label>
                            <input onChange={this.handleInput} name="email" type="email"/>
                        </div>
                        <div className="authInputGroup">
                            <label>Password:</label>
                            <input onChange={this.handleInput} name="password" type="password"/>
                        </div>
                        <button onClick={this.handleSignin.bind(this)}>Sign In</button>
                    </div>
                    <div className="authFooter">
                        <p>Not an admin? <a href="/auth/employee">Create Employee Account</a></p>
                    </div>
                </div>
                    <Alert stack={true} effect={'scale'} timeout={3000} onClose={this.alertCallback.bind(this)} />
            </div>
        )
    }
}