import React, { Component } from 'react';

import headshot from './../headshot.jpg';
import avatar from './../avatar.png';


import './User.css';

class User extends Component {

    state = {
        name: 'Chris',
        location: 'Knoxville, TN',
        occupation: 'Software Developer',
        employer: 'eGovernment Solutions'
    };

    render() {

        let mode = null;

        if (this.props.mode) {
            mode = (
                <div>
                    <div className="avatar1">
                        <img src={headshot} height="125"/>
                    </div>
                    <div className="mode1" onClick={this.props.toggle}>
                        <i className="fa fa-toggle-on"></i>
                    </div>
                    <p className="white textLeft">
                        <i className=" red fa fa-code"></i>&nbsp;&nbsp;{this.state.occupation}
                        <br/><i className=" red fa fa-briefcase"></i>&nbsp;&nbsp;{this.state.employer}
                        <br/><i className=" red fa fa-location-arrow"></i>&nbsp;&nbsp;{this.state.location}
                    </p>
                </div>
            );
        } else {
            mode = (
                <div>
                    <div className="avatar2">
                        <img src={avatar} height="200"/>
                    </div>
                    <div className="mode2" onClick={this.props.toggle}>
                        <i className="fa fa-toggle-off"></i>
                    </div>
                    <p className="red">{this.state.name}</p>
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