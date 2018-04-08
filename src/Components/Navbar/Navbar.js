import React, { Component } from 'react';
import Moment from 'moment';

import logo from '../../Assets/images/logo.svg';
import './Navbar.css';

class Navbar extends Component {

    state = {
        hour: Moment().format('h'),
        minute: Moment().format('mm'),
        amPm: Moment().format('a')
    };

    updateTime = () => {
        this.setState({
            currentTime: Moment().format('h:mma')
        })
    };

    render() {
        return (
            <nav className="topNav" onMouseEnter={this.updateTime}>
                <div className="logo">
                    <img src={logo} height="40px" alt="Logo"/>
                </div>
                <div className="dateTime">
                    <h1 className="camptonBold">
                        <span className="red">{this.state.hour}</span>
                        <span className="gray">{this.state.minute}</span>
                        <span className="red amPm"> {this.state.amPm}</span>
                    </h1>
                </div>
                <div className="power" onClick={this.props.logout}>
                    <i className="fa fa-power-off"></i>
                </div>
            </nav>
        )
    }
};

export default Navbar;