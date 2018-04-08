import React, { Component } from 'react';
import Moment from 'moment';

import logo from '../../Assets/images/logo.svg';
import classes from './Navbar.css';
import baseClasses from '../../Assets/styles/Base.css';

class Navbar extends Component {

    state = {
        hour: Moment().format('h'),
        minute: Moment().format('mm'),
        amPm: Moment().format('a')
    };

    updateTime = () => {
        this.setState({
            hour: Moment().format('h'),
            minute: Moment().format('mm'),
            amPm: Moment().format('a')
        })
    };

    render() {
        return (
            <nav className={classes.topNav} onMouseEnter={this.updateTime}>
                <div className={classes.logo}>
                    <img src={logo} height="40px" alt="Logo"/>
                </div>
                <div className={classes.dateTime}>
                    <h1 className={baseClasses.camptonBold}>
                        <span className={baseClasses.red}>{this.state.hour}</span>
                        <span className={baseClasses.gray}>{this.state.minute}</span>
                        <span className={classes.amPm}> {this.state.amPm}</span>
                    </h1>
                </div>
                <div className={classes.power} onClick={this.props.logout}>
                    <i className="fa fa-power-off"></i>
                </div>
            </nav>
        )
    }
};

export default Navbar;