import React, { Component } from 'react';

import headshot from '../../Assets/images/headshot.jpg';
import avatar from '../../Assets/images/avatar.png';

import '../../Assets/styles/Base.css';
import './User.css';

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
                <span className="userIcon pointer"><i className="red fa fa-user"></i></span>
                <span className="settingsIcon pointer"><i className="gray fa fa-gear"></i></span>
            </div>
        );

        if (this.props.mode) {
            mode = (
                <div>
                    { icons }
                    <div className="avatar1">
                        <img src={headshot} height="125" alt="Headshot"/>
                    </div>
                    <div className="mode1" onClick={this.props.toggle}>
                        <i className="fa fa-toggle-on"></i>
                    </div>
                    <p className="white textLeft">
                        <i className=" red fa fa-code"></i>&nbsp;&nbsp;{this.state.workOccupation}
                        <br/><i className=" red fa fa-briefcase"></i>&nbsp;&nbsp;{this.state.employer}
                        <br/><i className=" red fa fa-location-arrow"></i>&nbsp;&nbsp;{this.state.workLocation}
                    </p>
                </div>
            );
        } else {
            mode = (
                <div>
                    { icons }
                    <div className="avatar2">
                        <img src={avatar} height="200" alt="Avatar"/>
                    </div>
                    <div className="mode2" onClick={this.props.toggle}>
                        <i className="fa fa-toggle-off"></i>
                    </div>
                    <p className="white textLeft personalMargin">
                        <i className=" red fa fa-address-card"></i>&nbsp;&nbsp;{this.state.name}
                        <br/><i className=" red fa fa-road"></i>&nbsp;&nbsp;{this.state.personalOccupation}
                        <br/><i className=" red fa fa-location-arrow"></i>&nbsp;&nbsp;{this.state.currentLocation}
                    </p>
                </div>
            );
        }


        return (
            <div className="user col-md-2">
                { mode }
            </div>
        )
    }
}

export default User;