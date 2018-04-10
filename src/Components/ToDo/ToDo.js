import React, { Component } from 'react';
import Modal from 'react-modal';
// components
import PanelHeader from '../PanelHeader/PanelHeader';
import Task from './Task';
// data
import { professionalTasks } from "../../Data/Professional/Tasks";
import { personalTasks } from "../../Data/Personal/Tasks";
// styling
import baseClasses from '../../Assets/styles/Base.css';
import classes from './ToDo.css';

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

    refreshTasksHandler = () => {
        if (this.props.mode) {
            const tasks = [...this.state.professionalTasks];
            const filteredTasks = tasks.filter(task => !task.completed);
            this.setState({ professionalTasks: filteredTasks });
        } else {
            const tasks = [...this.state.personalTasks];
            const filteredTasks = tasks.filter(task => !task.completed);
            this.setState({ personalTasks: filteredTasks });
        }
    };

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue !== '') {
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
        Modal.defaultStyles.overlay.backgroundColor = 'rgb(36,36,36,0.9)';
    };

    // generate temp id - TODO: handle with db
    makeId = () => {
        return Math.random().toString(36).substr(2, 5);
    };

    render() {

       const action1 = 'fa fa-plus';
       const action2 = 'fa fa-refresh';
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
       let mappedArray = null;

       if (this.props.mode) {
           mappedArray = this.state.professionalTasks;
           count = mappedArray.length;
       } else {
           mappedArray = this.state.personalTasks;
           count = mappedArray.length;
       }

       return (
           <div className={[classes.toDo, 'col-md-2'].join(' ')}>
               <div className={[baseClasses.relative, baseClasses.fullWidth].join(' ')}>
                   <PanelHeader
                       title={title}
                       action1={action1}
                       action2={action2}
                       click1={this.openModal.bind(this)}
                       click2={this.refreshTasksHandler.bind(this)}
                       count={count}/>
                   <ul>
                       {mappedArray.map((task, index) => {
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
                       <h4 className={[baseClasses.gray, baseClasses.camptonBold, classes.modalTitle].join(' ')}>
                           <span className={baseClasses.red}>New</span> { title }
                       </h4>
                       <span className={classes.exitModal} onClick={this.closeModal.bind(this)}><i className="fa fa-times"></i></span>
                       <form onSubmit={this.handleSubmit}>
                           <input autoFocus type="text" className={classes.todoInput} onChange={this.handleChange}/>
                           <button type="submit" className={classes.addTodo}>+</button>
                       </form>
                   </Modal>
               </div>
           </div>
        )
    }
};

export default ToDo;