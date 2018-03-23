import React, { Component } from 'react';

import headshot from './../headshot.jpg';
import avatar from './../avatar.png';


import './User.css';

class User extends Component {

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
                    <p className="red">Software Developer</p>
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
                    <p className="red">Chris</p>
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