import React from 'react';
import moment from 'moment';

import './Events.css';

const Event = ( props ) => {

    const start = moment(props.start).format('MM/DD');

    return (
        <li className="listItem">
            <span className="startDate red">{ start }</span>
            <span>{props.name}</span>
            <span className="deleteEvent" onClick={props.click}><i className="fa fa-times"></i></span>
        </li>
    );
};

export default Event;