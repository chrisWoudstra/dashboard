import React from 'react';

import './ToDo.css';

const Task = ( props ) => {

    let action = null;

    if (props.completed) {
        action = <span className="taskAction completedTask" onClick={props.click}><i className="fa fa-check green"></i></span>;
    } else {
        action = <span className="taskAction incompleteTask" onClick={props.click}><i className="fa fa-circle-o red"></i></span>;
    }

    return (
        <li className="listItem">
            <span>{props.name}</span>
            { action }
        </li>
    );
};

export default Task;