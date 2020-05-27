import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import accurateInterval from "accurate-interval";

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      intervalID: 0,
    };
    this.resetButton = this.resetButton.bind(this);
    this.playButton = this.playButton.bind(this);
  }

  playButton() {
    if (this.props.timerRunning === false) {
      var intervalID = accurateInterval(this.props.timerCountdown, 1000);
      this.props.timerRunningSwitch();
      this.setState({
        intervalID: intervalID,
      });
    } else {
      this.state.intervalID && this.state.intervalID.clear();
      this.props.timerRunningSwitch();
    }
  }

  resetButton() {
    this.props.resetTimer();
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
          <Button
            onClick={this.playButton}
            id='start_stop'
            variant={!this.props.timerRunning ? "primary" : "outline-primary"}
          >
            <FontAwesomeIcon
              icon={!this.props.timerRunning ? faPlay : faPause}
            />
            {!this.props.timerRunning ? " Play" : " Pause"}
          </Button>
          <Button onClick={this.resetButton} id='reset' variant='danger'>
            <FontAwesomeIcon icon={faRedo} /> Reset
          </Button>
        </div>
      </div>
    );
  }
}
