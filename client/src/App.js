import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import IndexPage from './components/index/IndexPage';
import DashboardPage from './components/dashboard/DashboardPage'
import './App.css';
import './assets/global.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/" component={DashboardPage} />
					<Route path="/signup" component={SignupPage}/>
					<Route path="/login" component={LoginPage} />
				</div>
			</Router>
			
    );
  }
}

export default App;
