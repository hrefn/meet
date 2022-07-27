import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render () {
    const events = this.props.events
    return (
      <ul className='EventList'>
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>  
        )}
      </ul>
    );
  }
}

export default EventList;