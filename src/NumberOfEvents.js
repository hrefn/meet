import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInput = (event) => {
    const number = event.target.value;
    if (!isNaN(number) && number >= 0 && number <=32) {
      this.setState({ numberOfEvents: number, infoText: '' })
    } else {
      this.setState({ numberOfEvents: number, infoText: 'Please select a number between 1 and 32' })
    }
    this.props.updateEvents(undefined, number)
  };

  render () {
    return (
      <div className="number-of-events">
        <label className="number-of-events-label" htmlFor="event-number">
          <p>Number of Events:</p>
          <input
            type="text"
            className="number-of-events-input"
            id="event-number"
            value={this.state.numberOfEvents}
            onChange={this.handleInput}
          />
        </label>
        <ErrorAlert text={this.state.infoText} />
      </div>
    )
  };
}

export default NumberOfEvents;