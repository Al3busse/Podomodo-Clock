import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import accurateInterval from "accurate-interval";

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      intervalID: 0,
      timerRunning: false,
      buttonState: "Play",
    };
    this.resetButton = this.resetButton.bind(this);
    this.playButton = this.playButton.bind(this);
  }

  playButton() {
    if (this.state.timerRunning === false) {
      var intervalID = accurateInterval(this.props.timerCountdown, 1000);
      this.setState({
        intervalID: intervalID,
        timerRunning: true,
        buttonState: "Pause",
      });
    } else {
      this.state.intervalID && this.state.intervalID.clear();
      this.setState({ timerRunning: false, buttonState: "Play" });
    }
  }

  resetButton() {
    this.props.resetTimer();
    this.setState({
      buttonState: "Play",
      timerRunning: false,
    });
    this.state.intervalID && this.state.intervalID.clear();
  }

  render() {
    return (
      <div>
        <div>
          <h4 id='timer-label'>{this.props.currentSession}</h4>
          <span id='time-left'>
            {this.props.timerCount === 0
              ? "00"
              : this.props.timerCount < 10
              ? "0" + this.props.timerCount
              : this.props.timerCount}
            :
            {this.props.timerSeconds === 0
              ? "00"
              : this.props.timerSeconds < 10
              ? "0" + this.props.timerSeconds
              : this.props.timerSeconds}
          </span>
        </div>
        <div>
          <button onClick={this.playButton} id='start_stop'>
            <FontAwesomeIcon
              icon={this.state.buttonState === "Play" ? faPlay : faPause}
            />
            {this.state.buttonState}
          </button>
          <button onClick={this.resetButton} id='reset'>
            <FontAwesomeIcon icon={faRedo} />
            Reset
          </button>
        </div>
      </div>
    );
  }
}
