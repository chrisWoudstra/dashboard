import React, { Component } from 'react';
import Modal from 'react-modal';
import Moment from 'moment';
//components
import PanelHeader from '../PanelHeader/PanelHeader';
import Event from './Event';
//data
import { professionalEvents } from "../../Data/Professional/Events";
import { personalEvents } from "../../Data/Personal/Events";
//styling
import baseClasses from '../../Assets/styles/Base.css';
import classes from './Events.css';

class Events extends Component {

    state = {
        personalEvents: personalEvents,
        professionalEvents: professionalEvents,
        modalIsOpen: false,
        eventName: null,
        eventDate: Moment().format('MM/DD/YYYY')
    };

    viewEventHandler = () => {

    };

    handleNameChange = (event) => {
        this.setState({ eventName: event.target.value })
    };

    handleDateChange = (event) => {
        this.setState({ eventDate: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.eventName && this.state.eventDate) {

        }
    };

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    };

    afterOpenModal = () => {
        Modal.defaultStyles.overlay.backgroundColor = 'rgb(36,36,36,0.9)';
    };

    render() {

        const title = 'Events';
        const action1 = 'fa fa-plus';

        const modalStyles = {
            content : {
                top                   : '40%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)',
                backgroundColor       : '#363636',
                border                : 'none',
                width                 : '300px',
                borderRadius          : '10px'
            }
        };

        let count = null;
        let mappedArray = null;

        if (this.props.mode) {
            mappedArray = this.state.professionalEvents;
            count = mappedArray.length;
        } else {
            mappedArray = this.state.personalEvents;
            count = mappedArray.length;
        }


        return (
            <div className={[classes.events, 'col-md-3'].join(' ')}>
                <div className={[baseClasses.relative, baseClasses.fullWidth].join(' ')}>
                    <PanelHeader
                        title={title}
                        action1={action1}
                        click1={this.openModal.bind(this)}
                        count={count}/>
                    <ul className="eventList">
                        {mappedArray.map((event, index) => {
                            return <Event
                                key={event.id}
                                click={this.viewEventHandler.bind(this, index)}
                                name={event.name}
                                start={event.start}
                            />
                        })}
                    </ul>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal.bind(this)}
                        onRequestClose={this.closeModal.bind(this)}
                        style={modalStyles}
                    >
                        <h4 className={[classes.modalTitle, baseClasses.gray, baseClasses.camptonBold].join(' ')}>
                            <span className={baseClasses.red}>New</span> Event
                        </h4>
                        <span className={classes.exitModal} onClick={this.closeModal.bind(this)}><i className="fa fa-times"></i></span>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" autoFocus className={classes.customInput} value={this.state.eventName} placeholder="Some Event" onChange={this.handleNameChange}/>
                            <button type="button" className={classes.inputAddon}>
                                <i className="fa fa-tag"></i>
                            </button>
                            <input type="text" className={classes.customInput} value={this.state.eventDate} onChange={this.handleDateChange}/>
                            <button type="button" className={classes.inputAddon}>
                                <i className="fa fa-calendar"></i>
                            </button>
                            <div className={classes.submitDiv}>
                                <button type="submit" className={classes.submitBtn}>Save</button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        )
    }
};

export default Events;