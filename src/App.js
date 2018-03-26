import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import logo from './logo.svg';

import './App.css';
import './Base.css';

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
                <div className="app">
                    <Navbar logout={this.loginHandler.bind(this)}/>
                    <Content/>
                </div>
            );
        } else {
            return (
                <div className="app">
                    <div className="mainLogo">
                        <img src={logo} height="200px" alt="Logo"/>
                        <button className="enterButton" onClick={this.loginHandler}>Go</button>
                    </div>
                </div>
            );
        }
    }
}

export default App;
