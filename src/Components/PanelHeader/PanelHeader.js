import React from 'react';

import baseClasses from '../../Assets/styles/Base.css';
import classes from './PanelHeader.css';

const PanelHeader = (props) => {

    return (
        <div className={classes.panelHeader}>
            <div className={classes.panelIcon} onClick={props.click1}><i className={props.action1}></i></div>
            <div className={classes.panelTitle}>
                <span className={baseClasses.camptonLight}>{ props.title }</span> <span className={baseClasses.gray}>{ '(' + props.count + ')'}</span>
            </div>
            <div className={classes.panelIcon2} onClick={props.click2}><i className={props.action2}></i></div>
        </div>
    )
};

export default PanelHeader;