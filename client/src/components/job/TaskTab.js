import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class TaskTab extends Component {
    render() {
        let tasks = this.props.tasks
        return (
            <div className="taskContainer dashTab">
                <h1>Tasks ({tasks.length})</h1>
                <div className="taskList">
                    {
                        tasks.map((task) => {
                            return (
                                <div  className="taskFolder" key={task.taskID}>
                                    <i className="fa fa-folder"></i>
                                    <Link to={`/dash/task/${task.taskID}`}>{task.taskTitle}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
