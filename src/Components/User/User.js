import React, { Component } from 'react';

import headshot from '../../Assets/images/headshot.jpg';
import avatar from '../../Assets/images/avatar.png';

import baseClasses from '../../Assets/styles/Base.css';
import classes from './User.css';

class User extends Component {

    state = {
        name: 'Chris Woudstra',
        personalOccupation: 'Ultra-Marathon Runner',
        currentLocation: 'Fort Myers, FL',
        workOccupation: 'Software Developer',
        employer: 'eGovernment Solutions',
        workLocation: 'Knoxville, TN'
    };

    render() {

        let mode = null;

        const icons = (
            <div>
                <span className={[classes.userIcon, baseClasses.red].join(' ')}><i className="fa fa-user"></i></span>
                <span className={[classes.settingsIcon, baseClasses.gray].join(' ')}><i className="fa fa-gear"></i></span>
            </div>
        );

        if (this.props.mode) {
            mode = (
                <div>
                    { icons }
                    <div className={classes.avatar1}>
                        <img src={headshot} height="125" alt="Headshot"/>
                    </div>
                    <div className={classes.mode1} onClick={this.props.toggle}>
                        <i className="fa fa-toggle-on"></i>
                    </div>
                    <p className={[baseClasses.textLeft, baseClasses.white].join(' ')}>
                        <i className={[baseClasses.red, 'fa fa-code'].join(' ')}></i>&nbsp;&nbsp;{this.state.workOccupation}
                        <br/><i className=" red fa fa-briefcase"></i>&nbsp;&nbsp;{this.state.employer}
                        <br/><i className=" red fa fa-location-arrow"></i>&nbsp;&nbsp;{this.state.workLocation}
                    </p>
                </div>
            );
        } else {
            mode = (
                <div>
                    { icons }
                    <div className={classes.avatar2}>
                        <img src={avatar} height="200" alt="Avatar"/>
                    </div>
                    <div className={classes.mode2} onClick={this.props.toggle}>
                        <i className="fa fa-toggle-off"></i>
                    </div>
                    <p className={classes.personal}>
                        <i className={[baseClasses.red, 'fa fa-address-card'].join(' ')}></i>&nbsp;&nbsp;{this.state.name}
                        <br/><i className={[baseClasses.red, 'fa fa-road'].join(' ')}></i>&nbsp;&nbsp;{this.state.personalOccupation}
                        <br/><i className={[baseClasses.red, 'fa fa-location-arrow'].join(' ')}></i>&nbsp;&nbsp;{this.state.currentLocation}
                    </p>
                </div>
            );
        }


        return (
            <div className={[classes.user, 'col-md-2'].join(' ')}>
                { mode }
            </div>
        )
    }
}

export default User;