import React from 'react';

import './../Base.css';
import './PanelHeader.css';

const PanelHeader = (props) => {

    let panelAction = null;

    if (props.info) {
        panelAction = (
            <div className="panelAction gray"><i className={props.info}></i></div>
        );
    } else {
        panelAction = (
            <div className="panelAction gray">{props.action}</div>
        );
    }

    return (
        <div className="panelHeader">
            <div className="panelIcon"><i className={props.icon}></i></div>
            <div className="panelTitle">{ props.title }</div>
            { panelAction }
        </div>
    )
};

export default PanelHeader;