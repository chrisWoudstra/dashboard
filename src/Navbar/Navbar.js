import React, { Component } from 'react';
import Moment from 'moment';

import logo from './../logo.svg';
import './Navbar.css';

class Navbar extends Component {

    state = {
        currentDate: Moment().format('dddd, MMMM Qo'),
        currentTime: Moment().format('h:mma')
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
                    <i className="fa fa-calendar"></i> {this.state.currentDate}
                    <p><i className="fa fa-clock-o"></i> {this.state.currentTime}</p>
                </div>
                <div className="power">
                    <i className="fa fa-power-off"></i>
                </div>
            </nav>
        )
    }
};

export default Navbar;