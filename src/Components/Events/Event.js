import React from 'react';
import moment from 'moment';

import classes from './Events.css';
import baseClasses from '../../Assets/styles/Base.css';

const Event = ( props ) => {

    const start = moment(props.start).format('MM/DD');

    return (
        <li className={classes.listItem}>
            <span className={[classes.startDate, baseClasses.red].join(' ')}>{ start }</span>
            <span>{props.name}</span>
            <span className={classes.viewEvent} onClick={props.click}><i className="fa fa-eye"></i></span>
        </li>
    );
};

export default Event;