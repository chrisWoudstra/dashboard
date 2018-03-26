import React, { Component } from 'react';

import User from '../User/User';
import ToDo from '../ToDo/ToDo';
import Events from '../Events/Events';

import './Content.css';

class Content extends Component {

    state = {
        professionalMode: false
    };

    toggleModeHandler = () => {
        const currentMode = this.state.professionalMode;
        this.setState({ professionalMode: !currentMode});
    };

    render() {

        return (

            <div className="container-fluid">
                <div className="content">
                    <User mode={this.state.professionalMode} toggle={this.toggleModeHandler.bind(this)}/>
                    <ToDo mode={this.state.professionalMode}/>
                    <Events mode={this.state.professionalMode}/>
                </div>
            </div>
        )
    }
};

export default Content;