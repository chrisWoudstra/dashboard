import React, { Component } from 'react';
// components
import PanelHeader from '../PanelHeader/PanelHeader';
import Task from './Task';
// data
import { professionalTasks } from "../Data/Professional/Tasks";
import { personalTasks } from "../Data/Personal/Tasks";
// styling
import './../Base.css';
import './ToDo.css';

class ToDo extends Component {

    state = {
        // TODO: fetch tasks from server
        professionalTasks: professionalTasks,
        personalTasks: personalTasks
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

       let mode = null;

       let numProTasks = this.state.professionalTasks.length;
       let numPersonalTasks = this.state.personalTasks.length;

       if (this.props.mode) {
           mode = (
               <div className="relative fullWidth">
                   <PanelHeader title={professionalTitle} icon={icon} action={numProTasks}/>
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
               <div className="relative fullWidth">
                   <PanelHeader title={personalTitle} icon={icon} action={numPersonalTasks}/>
                   <ul className="taskList">
                       {this.state.personalTasks.map((task, index) => {
                           return <Task
                               key={task.id}
                               click={this.deleteTaskHandler.bind(this, index)}
                               name={task.name}/>
                       })}
                   </ul>
                   <div className="newTask">

                   </div>
               </div>

           );
       }


        return (
            <div className="toDo col-md-2">
                { mode }
            </div>
        )
    }
};

export default ToDo;