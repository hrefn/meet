import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInput = (event) => {
    const number = event.target.value;
    if (!isNaN(number) && number >= 0 && number <=32) {
      this.setState({ numberOfEvents: number })
    } else {
      this.setState({ numberOfEvents: 32 })
    }
    this.props.updateEvents(undefined, number)
  };

  render () {
    console.log(this.props.updateEvents)
    return (
      <div className="number-of-events">
        <label className="number-of-events-label" htmlFor="event-number">
          <p>Number of Cities:</p>
          <input
            type="text"
            className="number-of-events-input"
            id="event-number"
            value={this.state.numberOfEvents}
            onChange={this.handleInput}
          />
        </label>
      </div>
    )
  };
}

export default NumberOfEvents;