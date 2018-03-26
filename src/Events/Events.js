import React, { Component } from 'react';
//components
import PanelHeader from '../PanelHeader/PanelHeader';
import Event from './Event';
//data
import { professionalEvents } from "../Data/Professional/Events";
import { personalEvents } from "../Data/Personal/Events";
//styling
import './../Base.css';
import './Events.css';

class Events extends Component {

    state = {
        personalEvents: personalEvents,
        professionalEvents: professionalEvents
    };

    deleteEventHandler = (eventIndex) => {
        if (this.props.mode) {
            const events = [...this.state.professionalEvents];
            events.splice(eventIndex, 1);
            this.setState({ professionalEvents: events });
        } else {
            const events = [...this.state.personalEvents];
            events.splice(eventIndex, 1);
            this.setState({ personalEvents: events });
        }
    };

    render() {

        const title = 'Upcoming Events';
        const icon = 'fa fa-calendar';

        let numPersonalEvents = this.state.personalEvents.length;
        let numProEvents = this.state.professionalEvents.length;

        let mode = null;

        if (this.props.mode) {
            mode = (
                <div className="relative fullWidth">
                    <PanelHeader title={title} icon={icon} action={numProEvents}/>
                    <ul className="taskList">
                        {this.state.professionalEvents.map((event, index) => {
                            return <Event
                                key={event.id}
                                click={this.deleteEventHandler.bind(this, index)}
                                name={event.name}
                                start={event.start}
                            />
                        })}
                    </ul>
                </div>
            );
        } else {
            mode = (
                <div className="relative fullWidth">
                    <PanelHeader title={title} icon={icon} action={numPersonalEvents}/>
                    <ul className="eventList">
                        {this.state.personalEvents.map((event, index) => {
                            return <Event
                                key={event.id}
                                click={this.deleteEventHandler.bind(this, index)}
                                name={event.name}
                                start={event.start}
                            />
                        })}
                    </ul>
                </div>

            );
        }


        return (
            <div className="events col-md-3">
                { mode }
            </div>
        )
    }
};

export default Events;