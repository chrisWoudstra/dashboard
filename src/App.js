import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import logo from './Assets/images/logo.svg';

import Radium from 'radium';

import classes from './App.css';

class App extends Component {

    state = {
        loggedIn: true
    };

    loginHandler = () => {
        const currentLoginState = this.state.loggedIn;
        this.setState({ loggedIn: !currentLoginState});
    };

    render() {

        if (this.state.loggedIn) {
            return (
                <div className={classes.app}>
                    <Navbar logout={this.loginHandler.bind(this)}/>
                    <Content/>
                </div>
            );
        } else {
            return (
                <div className={classes.app}>
                    <div className={classes.mainLogo}>
                        <img src={logo} height="200px" alt="Logo"/>
                        <button className={classes.enterButton} onClick={this.loginHandler}>Go</button>
                    </div>
                </div>
            );
        }
    }
}

export default Radium(App);
