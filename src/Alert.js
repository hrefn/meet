import React, { Component } from "react";

class Alert extends Component {
  constructor (props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      'display': 'inline'
    };
  }

  render () {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor (props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor (props) {
    super(props);
    this.color = 'red';
  }
}

class WarningAlert extends Alert {
  constructor (props) {
    super(props);
    this.color = 'orange';
    this.fontSize = '20px'
  }

  getSyle = () => {
    return {
      color: this.color,
      fontStyle: this.fontSize
    }
  }
} 

export { InfoAlert, ErrorAlert, WarningAlert };