import React, { Component } from 'react'
import axios from 'axios';
import { apiUrl } from '../../serverConfig';
import { Link } from "react-router-dom";
import {Dashnav} from '../partials/Dashnav';
import '../../assets/dash.css'

export default class PaymentPage extends Component {
    state = {
        payments: []
    }
    async componentDidMount() {
        const client = await axios.post(apiUrl + '/users/auth/check', {token: sessionStorage.getItem('token')})
        await this.setState({client: client.data.data})
        const payments = await axios.get(apiUrl + '/payments/fetch/client?clientID=' + this.state.client.clientID)
        await this.setState({payments: payments.data.data})
    }
    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        const newPayment = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            company: this.state.company,
            bank: this.state.bank,
            transferNumber: this.state.transferNumber,
            amount: this.state.amount,
            clientID: this.props.clientID
        }
        axios.post(apiUrl + '/payments/create', newPayment).then(response => {
            console.log(response.data.data)
        })
    }
    render() {
        return (
        <div>
            <Dashnav />
            <div className="dashContent">
                <div className="dashHeader">
                    <div className="dashTitle">
                        <h1>
                            Make a Payment
                        </h1>
                    </div>
                    <div className="dashActions">
                        <Link to="/dash/payment">
                            <button>
                                <i className="fa fa-credit-card"></i>
                                <span>Make a Payment</span>
                            </button>
                        </Link>
                        <Link to="/dash/new">
                            <button>
                                <i className="fa fa-plus"></i>
                                <span>Create a New Job</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="dashContainer">
                    <div className="paymentHistory dashTab">
                        <h1>Payment history</h1>
                        <div className="list">
                            {
                                this.state.payments.map((pay, i) => {
                                    return (
                                        <div key={i} className="paymentItem">
                                            <span>{pay.paymentID}</span>
                                            <span>{pay.company}</span>
                                            <span>${pay.amount}</span>
                                            <span>{pay.createdAt}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="paymentForm dashTab">
                        <h1>Make a payment</h1>
                        <div className="dashInfo">
                            <div className="inputContainer">
                                <label>Company Name:</label>
                                <input type="text" name="company" onChange={this.onInputChange.bind(this)} />
                            </div>
                            <div className="inputContainer">
                                <label>Payer Name:</label>
                                <input type="text" name="name" onChange={this.onInputChange.bind(this)} />
                            </div>
                            <div className="inputContainer">
                                <label>Bank:</label>
                                <input type="text" name="bank" onChange={this.onInputChange.bind(this)} />
                            </div>
                            <div className="inputContainer">
                                <label>Bank Account:</label>
                                <input type="text" name="accountNumber" onChange={this.onInputChange.bind(this)} />
                            </div>
                            <div className="inputContainer">
                                <label>Wire Transfer Number:</label>
                                <input type="text" name="transferNumber" onChange={this.onInputChange.bind(this)} />
                            </div>
                            <div className="inputContainer">
                                <label>Amount:</label>
                                <input type="text" name="amount" onChange={this.onInputChange.bind(this)} />
                            </div>
                            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}