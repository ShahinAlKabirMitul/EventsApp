import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const mapState = (state) => ({
  events: state.events
})

class EventDashboard extends Component {
  state = {
    // sfjslkd
    isOpen: false,
    selectedEvent: null,
  };
  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true,
    });
  };
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true,
    });
  };
  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleUpdateEvent=(eventtoUpdate)=>{
    this.setState({
      events:this.state.events.map(event=>{
        if(event.id===eventtoUpdate.id ){
          return Object.assign({},eventtoUpdate)
        }
        else{
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
    });
    console.log(newEvent);
  };
  handleDeleteEvent= (eventId)=> ()=>{
    const updatedEvents=this.state.events.filter(e=> e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }
  render() {
    const { selectedEvent } = this.state;
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default  connect(mapState)( EventDashboard);
