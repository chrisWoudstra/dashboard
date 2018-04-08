import React from 'react';

import classes from './ToDo.css';
import baseClasses from '../../Assets/styles/Base.css';

const Task = ( props ) => {

    let action = null;

    if (props.completed) {
        action = <span className={[classes.taskAction, baseClasses.green].join(' ')} onClick={props.click}><i className="fa fa-check"></i></span>;
    } else {
        action = <span className={[classes.taskAction, baseClasses.red].join(' ')} onClick={props.click}><i className="fa fa-circle-o"></i></span>;
    }

    return (
        <li className={classes.listItem}>
            <span>{props.name}</span>
            { action }
        </li>
    );
};

export default Task;