import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDescription: false
  }

  handleClick = () => {
    this.setState({ showDescription: !this.state.showDescription })
  }
  
  render () {
    const { event } = this.props

    return (
      <div className='event'>
        <h3 className='event-title'>{event.summary}</h3>
        <p className='event-location'>Location: {event.location}</p>
        <p className='start-time'>Start Time: {event.start.dateTime}</p>
        <p className='end-time'>End Time: {event.end.dateTime}</p>
        {this.state.showDescription && (
          <p className='event-description'>{event.description}</p>
        )}
        <button className='description-button' onClick={this.handleClick}>Show/Hide Description</button>
      </div>
    );
  }
}

export default Event;