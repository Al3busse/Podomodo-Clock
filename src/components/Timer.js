import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h4>Session</h4>
          <span>{this.props.timerCount}</span>
        </div>
        <div>
          <button>Play</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}
