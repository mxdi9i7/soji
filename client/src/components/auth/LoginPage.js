import React, { Component } from 'react';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
class LoginPage extends Component {
    componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="loginSection">
                        Login Page
                </div>
                <Footer />
            </div>
        );
    }
}

export default LoginPage;



