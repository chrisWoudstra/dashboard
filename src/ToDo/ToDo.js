import React, { Component } from 'react';

import PanelHeader from '../PanelHeader/PanelHeader';

import './ToDo.css';

class ToDo extends Component {

    render() {

       const personalTitle = 'To Do';
       const professionalTitle = 'Tasks';
       const icon = 'fa fa-check-circle';
       const action = 'fa fa-plus';
       let mode = null;

       if (this.props.mode) {
           mode = (
               <PanelHeader title={professionalTitle} icon={icon} action={action}/>
           );
       } else {
           mode = (
               <PanelHeader title={personalTitle} icon={icon} action={action}/>
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