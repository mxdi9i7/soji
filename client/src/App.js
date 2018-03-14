import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { DashboardPage } from './components/dashboard/DashboardPage'
import { JobsPage } from './components/dashboard/JobsPage'
import { EmployeesPage } from './components/dashboard/EmployeesPage'
import { CreateEmployee } from './components/auth/CreateEmployee';
import { FilesPage } from './components/dashboard/FilesPage';
import { TasksPage } from './components/dashboard/TasksPage';
// import { ClientsPage } from './components/dashboard/ClientsPage';
// import { BillingPage } from './components/dashboard/BillingPage';

import './App.css';
import './assets/global.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/auth/employees" component={CreateEmployee} />
					<Route exact path="/dash/" component={DashboardPage} />
					<Route exact path="/dash/jobs" component={JobsPage} />
					<Route exact path="/dash/employees" component={EmployeesPage} />
					<Route exact path="/dash/files" component={FilesPage} />
					<Route exact path="/dash/tasks" component={TasksPage} />
					{/* <Route exact path="/dash/clients" component={ClientsPage} /> */}
					{/* <Route exact path="/dash/billing" component={BillingPage} /> */}
				</div>
			</Router>
			
    );
  }
}

export default App;
