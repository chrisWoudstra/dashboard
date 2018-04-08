import React from 'react';

import '../../Assets/styles/Base.css';
import './PanelHeader.css';

const PanelHeader = (props) => {

    return (
        <div className="panelHeader">
            <div className="panelIcon" onClick={props.click1}><i className={props.action1}></i></div>
            <div className="panelTitle"><span className="camptonLight">{ props.title }</span> <span className="gray">{ '(' + props.count + ')'}</span></div>
            <div className="panelIcon2 gray" onClick={props.click2}><i className={props.action2}></i></div>
        </div>
    )
};

export default PanelHeader;