import React, { Component } from 'react';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

class SignupPage extends Component {
    componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <Navbar />
                    <div className="signupSection">
                            SignupPage
                    </div>
                <Footer />
            </div>
        );
    }
}

export default SignupPage;



