import React, { Component } from 'react';
import Dashnav from '../partials/Dashnav';
import SideNav from '../partials/SideNav';
export default class DashboardPage extends Component {

    render() {
        return(
            <div>
                <Dashnav />
                <SideNav />
            </div>
        )
    }
}