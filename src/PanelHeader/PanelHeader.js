import React from 'react';

import './PanelHeader.css';

const PanelHeader = (props) => {
    return (
        <div className="panelHeader">
            <div className="panelIcon"><i className={props.icon}></i></div>
            <div className="panelTitle">{ props.title }</div>
            <div className="panelAction"><i className={props.action}></i></div>
        </div>
    )
};

export default PanelHeader;