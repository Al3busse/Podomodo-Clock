import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import accurateInterval from "accurate-interval";

var runningColor = {
  border: "3px solid silver",
  marginBottom: "5px",
  borderRadius: "25px",
  width: "250px",
  padding: "15px",
  backgroundColor: "black",
  color: "green",
  textShadow: "0 0 10px green",
};

var notRunningColor = {
  border: "3px solid silver",
  marginBottom: "5px",
  borderRadius: "25px",
  width: "250px",
  padding: "15px",
  backgroundColor: "black",
  color: "orange",
  textShadow: "0 0 10px orange",
};
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
      <Container>
        <Row style={!this.props.timerRunning ? notRunningColor : runningColor}>
          <Col>
            <h3 id='timer-label'>{this.props.currentSession}</h3>
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
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Button
              onClick={this.playButton}
              id='start_stop'
              variant={!this.props.timerRunning ? "primary" : "success"}
            >
              <FontAwesomeIcon
                icon={!this.props.timerRunning ? faPlay : faPause}
              />
              {!this.props.timerRunning ? " Play" : " Pause"}
            </Button>
            <Button onClick={this.resetButton} id='reset' variant='danger'>
              <FontAwesomeIcon icon={faRedo} /> Reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
