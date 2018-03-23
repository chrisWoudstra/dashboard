import React, { Component } from 'react';

import ToDo from '../ToDo/ToDo';
import User from '../User/User';

import './Content.css';

class Content extends Component {

    state = {
        professionalMode: false
    };

    toggleMode = () => {
        console.log('toggleMode');
        const currentMode = this.state.professionalMode;
        this.setState({ professionalMode: !currentMode});
    };

    render() {

        return (

            <div className="container-fluid">
                <div className="content">
                    <User mode={this.state.professionalMode} toggle={this.toggleMode.bind(this)}/>
                    <ToDo mode={this.state.professionalMode}/>
                </div>
            </div>
        )
    }
};

export default Content;