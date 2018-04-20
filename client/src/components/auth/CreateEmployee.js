import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { apiUrl } from '../../serverConfig';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import { saveTokenToBrowser } from '../../helpers/authenticate';

import '../../assets/auth.css';



export class CreateEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignup: false,
            isAuthenticated: false
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }

    toggleSignup() {
        this.setState({isSignup: !this.state.isSignup})
    }

    handleSignup() {
        if (this.state.username && this.state.email && this.fileInput.files[0] && this.state.password && this.state.key) {
            let data = new FormData()
            data.append("photo", this.fileInput.files[0])
            data.append("username", this.state.username)
            data.append("email", this.state.email)
            data.append("password", this.state.password)
            data.append("key", this.state.key)
            axios.post(apiUrl + '/users/create/employee', data)
            .then((response) => {
                if (response.data.success) {
                    Alert.success(response.data.data)
                } else {
                    Alert.error(response.data.data)
                }
            })
        } else {
            Alert.error("Please fill in all fields before submitting!")
        }
    }

    handleSignin() {
        if (this.state.email && this.state.password) {
            axios.post(apiUrl + '/users/auth/employeeLogin', {email: this.state.email, password: this.state.password})
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
            <div className="employees authWrapper">
            {
                this.state.isAuthenticated ? <Redirect to="/dash" /> : ""
            }
                <div className="authIdentifier">
                    <p>SOJI Employees Portal</p>
                </div>
                    {
                        this.state.isSignup === true ? 
                        <div className="authContainer">
                            <div className="authHeader">
                                <h1>Create Account</h1>
                            </div>
                            <div className="authForm">
                                <div className="authInputGroup">
                                    <label>Profile Image:</label>
                                    <input
                                     ref={input => {
                                         this.fileInput = input
                                     }}
                                     type="file" 
                                     name="photo" 
                                     />
                                </div>
                                <div className="authInputGroup">
                                    <label>User name:</label>
                                    <input onChange={this.handleInput} type="text" name="username" />
                                </div>
                                <div className="authInputGroup">
                                    <label>Email:</label>
                                    <input onChange={this.handleInput} type="email" name="email" />
                                </div>
                                <div className="authInputGroup">
                                    <label>Admin Key:</label>
                                    <input onChange={this.handleInput} type="password" name="key" />
                                </div>
                                <div className="authInputGroup">
                                    <label>Password:</label>
                                    <input onChange={this.handleInput} type="password" name="password" />
                                </div>
                                <button onClick={this.handleSignup} >Create Account</button>
                            </div>
                            <div className="authFooter">
                                <p>Already have an account? <a onClick={this.toggleSignup.bind(this)}>Log in</a></p>
                            </div> 
                        </div>
                        :
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
                                <p>Don't have an account? <a onClick={this.toggleSignup.bind(this)}>Create an account</a></p>
                                <p>Not an employee? <a href="/auth/client">Clients Portal</a></p>
                            </div>
                        </div>
                    }
                    <Alert stack={true} effect={'scale'} timeout={3000} onClose={this.alertCallback.bind(this)} />
            </div>
        )
    }
}