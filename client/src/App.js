import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import IndexPage from './components/index/IndexPage';
import './App.css';
import './assets/global.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/" component={IndexPage} />
					<Route path="/signup" component={SignupPage}/>
					<Route path="/login" component={LoginPage} />
				</div>
			</Router>
			
    );
  }
}

export default App;
