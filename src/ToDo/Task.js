import React from 'react';

import './ToDo.css';

const Task = ( props ) => {
    return (
        <li className="listItem">
            <span>{props.name}</span>
            <span className="deleteTask" onClick={props.click}><i className="fa fa-times"></i></span>
        </li>
    );
};

export default Task;