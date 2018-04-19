import React from 'react'
import { employeeAvatarUrl, apiUrl } from '../../serverConfig'
import axios from 'axios'

class TeamMember extends React.Component {
    state = {
        employee: {}
    }
    componentDidMount = () => {
        if (this.props.employeeID) {
            axios.get(apiUrl + '/users/fetch/employee/single?employeeID=' + this.props.employeeID)
            .then(response => {
                if (response) {
                    this.setState({
                        employee: response.data.data
                    })
                }
            })
        }
    }
    
    handlePromotion() {
        this.props.promoteMember(this.props.employeeID)
    }

    handleRemove() {
        this.props.removeMember(this.props.employeeID)
    }

    render() { 
        const isManager = this.state.employee.isManager
        return ( 
            <div className="teamMemberBlock">
                <div className="memberInfo">
                    <img src={employeeAvatarUrl + (this.state.employee.photo || 'default.jpg')} alt=""/>
                    <span>{this.state.employee.username}</span>
                    <span>Employee {this.state.employee.employeeID}</span>
                </div>
                <div className="memberAction">
                    {isManager ? "" : <button onClick={this.handlePromotion.bind(this)} className="promote">Promote</button>}
                    {isManager ? "" : <button onClick={this.handleRemove.bind(this)} className="remove">Remove from team</button>}
                    {isManager ? <span>Manager</span> : ""}
                </div>                
            </div>
        )
    }
}
 
export default TeamMember;