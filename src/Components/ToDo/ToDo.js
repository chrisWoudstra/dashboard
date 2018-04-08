import React, { Component } from 'react';
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
        modalIsOpen: false,
        inputValue: ''
    };

    toggleCompleteHandler = (taskIndex) => {

        if (this.props.mode) {
            const tasks = [...this.state.professionalTasks];
            const status = tasks[taskIndex].completed;
            tasks[taskIndex].completed = !status;
            this.setState({ professionalTasks: tasks });
        } else {
            const tasks = [...this.state.personalTasks];
            const status = tasks[taskIndex].completed;
            tasks[taskIndex].completed = !status;
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

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const object = {
            id: this.makeId(),
            name: this.state.inputValue,
            completed: false
        };
        if (this.props.mode) {
            const tasks = [...this.state.professionalTasks];
            tasks.push(object);
            this.setState({ professionalTasks: tasks });
        } else {
            const tasks = [...this.state.personalTasks];
            tasks.push(object);
            this.setState({ personalTasks: tasks });
        }
        this.setState({inputValue: ''});
        this.closeModal();
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
        Modal.defaultStyles.overlay.backgroundColor = 'rgb(36,36,36,0.9)';
    };

    // generate temp id - TODO: handle with db
    makeId = () => {
        return Math.random().toString(36).substr(2, 5);
    };

    render() {

       const action1 = 'fa fa-plus';
       const action2 = 'fa fa-trash';
       const title = 'To Do';

       const modalStyles = {
           content : {
               top                   : '40%',
               left                  : '50%',
               right                 : 'auto',
               bottom                : 'auto',
               marginRight           : '-50%',
               transform             : 'translate(-50%, -50%)',
               backgroundColor       : '#363636',
               border                : 'none',
               width                 : '300px',
               borderRadius          : '10px'
           }
       };

       let count = null;
       let mappedObject = null;

       if (this.props.mode) {
           mappedObject = this.state.professionalTasks;
           count = mappedObject.length;
       } else {
           mappedObject = this.state.personalTasks;
           count = mappedObject.length;
       }

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
                               click={this.toggleCompleteHandler.bind(this, index)}
                               name={task.name}
                               completed={task.completed}/>
                       })}
                   </ul>
                   <Modal
                       isOpen={this.state.modalIsOpen}
                       onAfterOpen={this.afterOpenModal.bind(this)}
                       onRequestClose={this.closeModal.bind(this)}
                       style={modalStyles}
                   >
                       <h4 className="gray camptonBold modalTitle"><span className="red">New</span> { title }</h4>
                       <span className="exitModal" onClick={this.closeModal.bind(this)}><i className="fa fa-times"></i></span>
                       <form onSubmit={this.handleSubmit}>
                           <input autoFocus type="text" className="todoInput" onChange={this.handleChange}/><button type="submit" className="addTodo">+</button>
                       </form>
                   </Modal>
               </div>
           </div>
        )
    }
};

export default ToDo;