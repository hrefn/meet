import React, { Component } from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

class EventList extends Component {
  state = {
    infoText: ''
  }
  componentDidMount = () => {
    if (!navigator.onLine) {
      this.setState({
        infoText: 'No internet connection, results will be loaded from cache'
      });
    } else {
      this.setState({
        infoText: ''
      });
    }
  }

  render () {
    const events = this.props.events
    return (
      <div>
        <WarningAlert text={this.state.infoText} />
        <ul className='EventList'>
          {events.map(event =>
            <li key={event.id}>
              <Event event={event} />
            </li>  
          )}
        </ul>
      </div>
    );
  }
}

export default EventList;