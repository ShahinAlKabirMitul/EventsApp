import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

const mapState = state => ({
  events: state.events,
  loading: state.async.loading,
});
const actions = {
  deleteEvent,
};

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };
  render() {
    const { events, loading } = this.props;
    console.log(loading);
    if (loading) {
      return <LoadingComponent inverted={true} />;
    }
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(EventDashboard);
