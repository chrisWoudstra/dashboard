import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// components
import PanelHeader from '../PanelHeader/PanelHeader';
import Task from './Task';
// data
import { professionalTasks } from "../../Data/Professional/Tasks";
import { personalTasks } from "../../Data/Personal/Tasks";
// styling
import '../../Assets/styles/Base.css';
import './ToDo.css';

class ToDo extends Component {

    state = {
        // TODO: fetch tasks from server
        professionalTasks: professionalTasks,
        personalTasks: personalTasks,
        modalIsOpen: true
    };

    completeTaskHandler = (taskIndex) => {
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

    clearTasksHandler = () => {
        const tasks = [];
        if (this.props.mode) {
            this.setState({ professionalTasks: tasks });
        } else {
            this.setState({ personalTasks: tasks });
        }
    };

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    };

    afterOpenModal = () => {
        Modal.defaultStyles.overlay.backgroundColor = '#242424';
    };

    render() {

       const action1 = 'fa fa-plus';
       const action2 = 'fa fa-trash';

       const modalStyles = {
           content : {
               top                   : '40%',
               left                  : '50%',
               right                 : 'auto',
               bottom                : 'auto',
               marginRight           : '-50%',
               transform             : 'translate(-50%, -50%)',
               backgroundColor       : '#363636',
               border                : 'none'
           }
       };

       let title = null;
       let count = null;
       let mappedObject = null;

       if (this.props.mode) {
           mappedObject = this.state.professionalTasks;
           count = mappedObject.length;
           title = 'Tasks';
       } else {
           mappedObject = this.state.personalTasks;
           count = mappedObject.length;
           title = 'To Do';}

       return (
           <div className="toDo col-md-2">
               <div className="relative fullWidth">
                   <PanelHeader
                       title={title}
                       action1={action1}
                       action2={action2}
                       newClick={this.openModal.bind(this)}
                       clearClick={this.clearTasksHandler.bind(this)}
                       count={count}/>
                   <ul className="taskList">
                       {mappedObject.map((task, index) => {
                           return <Task
                               key={task.id}
                               click={this.completeTaskHandler.bind(this, index)}
                               name={task.name}/>
                       })}
                   </ul>
                   <Modal
                       isOpen={this.state.modalIsOpen}
                       onAfterOpen={this.afterOpenModal.bind(this)}
                       onRequestClose={this.closeModal.bind(this)}
                       style={modalStyles}
                   >
                       <h4 className="red camptonBold"><span className="gray">New</span> { title }</h4>
                       <span onClick={this.closeModal.bind(this)}><i className="fa fa-times exitModal"></i></span>
                       <div>I am a modal</div>
                       <form>
                           <input />
                       </form>
                   </Modal>
               </div>
           </div>
        )
    }
};

export default ToDo;