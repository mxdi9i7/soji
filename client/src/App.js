import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { DashboardPage } from './components/dashboard/DashboardPage'
import { JobsPage } from './components/dashboard/JobsPage'
import './App.css';
import './assets/global.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/" component={DashboardPage} />
					<Route exact path="/jobs" component={JobsPage} />
				</div>
			</Router>
			
    );
  }
}

export default App;
