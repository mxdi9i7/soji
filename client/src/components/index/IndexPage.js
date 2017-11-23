import React, { Component } from 'react';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
class IndexPage extends Component {
    componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="indexSection">
                        Index Page
                </div>
                <Footer />
            </div>
        );
    }
}

export default IndexPage;



