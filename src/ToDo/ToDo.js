import React, { Component } from 'react';

import PanelHeader from '../PanelHeader/PanelHeader';
import Task from './Task';

import './ToDo.css';

class ToDo extends Component {

    state = {
        // TODO: fetch tasks from server
        professionalTasks: [
            { id: 'ndj4a', name: 'Balance 502 Report'},
            { id: 'h31mf', name: 'Refactor 502.js'},
            { id: 'p1o91', name: 'Make 502 dropdown dynamic'}
        ],
        personalTasks: [
            { id: 'asfa1', name: 'Laundry' },
            { id: 'ad98d', name: 'Run' },
            { id: 'alcn6', name: 'Get new tires'}
        ]
    };

    deleteTaskHandler = (taskIndex) => {
        if (this.props.mode) {
            const tasks = [...this.state.professionalTasks];
            tasks.splice(taskIndex, 1);
            this.setState({ professionalTasks: tasks });
        } else {
            const tasks = [...this.state.personalTasks];
            tasks.splice(taskIndex, 1);
            this.setState({ personalTasks: tasks });
        }
    };

    render() {

       const personalTitle = 'To Do';
       const professionalTitle = 'Tasks';
       const icon = 'fa fa-check-circle';
       const action = 'fa fa-plus';

       let mode = null;

       if (this.props.mode) {
           mode = (
               <div className="fullWidth">
                   <PanelHeader title={professionalTitle} icon={icon} action={action}/>
                   <ul className="taskList">
                       {this.state.professionalTasks.map((task, index) => {
                           return <Task
                               key={task.id}
                               click={this.deleteTaskHandler.bind(this, index)}
                               name={task.name}/>
                       })}
                   </ul>
               </div>
           );
       } else {
           mode = (
               <div className="fullWidth">
                   <PanelHeader title={personalTitle} icon={icon} action={action}/>
                   <ul className="taskList">
                       {this.state.personalTasks.map((task, index) => {
                           return <Task
                               key={task.id}
                               click={this.deleteTaskHandler.bind(this, index)}
                               name={task.name}/>
                       })}
                   </ul>
               </div>

           );
       }


        return (
            <div className="toDo col-md-3">
                { mode }
            </div>
        )
    }
};

export default ToDo;