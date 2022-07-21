import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInput = (event) => {
    const number = event.target.value;
    console.log(event)
    if (!isNaN(number) && number >= 0 && number <=32) {
      console.log(number)
      this.setState({ numberOfEvents: number })
    } else {
      console.log(number)
      this.setState({ numberOfEvents: 32 })
    }
  };

  render () {
    return (
      <div className="number-of-events">
        <label className="number-of-events-label" htmlFor="event-number">
          <p>Number of Cities:</p>
          <input
            type="text"
            className="number-of-events-input"
            id="event-number"
            value={this.state.numberOfEvents}
            onChange={(e) => {this.handleInput(e)}}
          />
        </label>
      </div>
    )
  };
}

export default NumberOfEvents;