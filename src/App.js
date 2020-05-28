import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import LongBreakLength from "./components/LongBreakLength";
import Timer from "./components/Timer";
import Alarm from "./sound/BeepSound.wav";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      longBreakLength: 20,
      sessionLength: 25,
      timerCount: 25,
      timerSeconds: 0,
      currentTimer: "Session",
      breakCounter: 0,
      timerRunning: false,
    };
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseLongBreakLength = this.onIncreaseLongBreakLength.bind(this);
    this.onDecreaseLongBreakLength = this.onDecreaseLongBreakLength.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.updateTimerMinute = this.updateTimerMinute.bind(this);
    this.timerCountdown = this.timerCountdown.bind(this);
    this.playAlarm = this.playAlarm.bind(this);
    this.timerRunningSwitch = this.timerRunningSwitch.bind(this);
  }

  onIncreaseSessionLength() {
    if (this.state.sessionLength < 60 && !this.state.timerRunning) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timerCount: this.state.sessionLength + 1,
      });
    } else {
      return;
    }
  }
  onDecreaseSessionLength() {
    if (this.state.sessionLength > 1 && !this.state.timerRunning) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timerCount: this.state.sessionLength - 1,
      });
    } else {
      return;
    }
  }
  onIncreaseBreakLength() {
    if (this.state.breakLength < 60 && !this.state.timerRunning) {
      this.setState({ breakLength: this.state.breakLength + 1 });
    } else {
      return;
    }
  }

  onDecreaseBreakLength() {
    if (this.state.breakLength > 1 && !this.state.timerRunning) {
      this.setState({ breakLength: this.state.breakLength - 1 });
    } else {
      return;
    }
  }

  onIncreaseLongBreakLength() {
    if (this.state.longBreakLength < 60 && !this.state.timerRunning) {
      this.setState({ longBreakLength: this.state.longBreakLength + 1 });
    } else {
      return;
    }
  }

  onDecreaseLongBreakLength() {
    if (this.state.longBreakLength > 1 && !this.state.timerRunning) {
      this.setState({ longBreakLength: this.state.longBreakLength - 1 });
    } else {
      return;
    }
  }

  timerCountdown() {
    switch (this.state.timerSeconds) {
      case 0:
        this.setState({ timerSeconds: 59 });
        this.updateTimerMinute();
        break;
      default:
        this.setState({ timerSeconds: this.state.timerSeconds - 1 });
        break;
    }
  }

  updateTimerMinute() {
    if (this.state.timerCount > 0) {
      this.setState({ timerCount: this.state.timerCount - 1 });
    } else {
      this.playAlarm();
      if (this.state.currentTimer === "Session") {
        if (this.state.breakCounter === 3) {
          this.setState({
            timerCount: this.state.longBreakLength,
            currentTimer: "Long Break",
            timerSeconds: 0,
            breakCounter: 0,
          });
        } else {
          this.setState({
            timerCount: this.state.breakLength,
            currentTimer: "Break",
            timerSeconds: 0,
            breakCounter: this.state.breakCounter + 1,
          });
        }
      } else {
        this.setState({
          timerCount: this.state.sessionLength,
          currentTimer: "Session",
          timerSeconds: 0,
        });
      }
    }
  }

  playAlarm() {
    if (this.state.timerCount === 0) {
      this.audioAlarm.play();
    }
  }

  onResetTimer() {
    this.setState({
      breakLength: 5,
      longBreakLength: 20,
      sessionLength: 25,
      timerCount: 25,
      timerSeconds: 0,
      currentTimer: "Session",
      timerRunning: false,
    });
    this.audioAlarm.pause();
    this.audioAlarm.currentTime = 0;
  }

  timerRunningSwitch() {
    this.setState({ timerRunning: !this.state.timerRunning });
  }

  render() {
    return (
      <Container id='container' fluid>
        <Row>
          <h1>
            <img
              src={require("./pomodoro.png")}
              alt='tomato'
              height='50px'
              width='50px'
            />{" "}
            Pomodoro Clock
          </h1>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <SessionLength
              sessionLength={this.state.sessionLength}
              increaseSession={this.onIncreaseSessionLength}
              decreaseSession={this.onDecreaseSessionLength}
              timerRunning={this.state.timerRunning}
            />
          </Col>
          <Col xs={12} sm={4}>
            <BreakLength
              breakLength={this.state.breakLength}
              increaseBreak={this.onIncreaseBreakLength}
              decreaseBreak={this.onDecreaseBreakLength}
              timerRunning={this.state.timerRunning}
            />
          </Col>
          <Col xs={12} sm={4}>
            <LongBreakLength
              longBreakLength={this.state.longBreakLength}
              increaseLongBreak={this.onIncreaseLongBreakLength}
              decreaseLongBreak={this.onDecreaseLongBreakLength}
              timerRunning={this.state.timerRunning}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Timer
              timerCount={this.state.timerCount}
              resetTimer={this.onResetTimer}
              timerCountdown={this.timerCountdown}
              currentSession={this.state.currentTimer}
              timerSeconds={this.state.timerSeconds}
              timerRunning={this.state.timerRunning}
              timerRunningSwitch={this.timerRunningSwitch}
            />
          </Col>
        </Row>
        <audio
          id='beep'
          preload='auto'
          src={Alarm}
          ref={(audio) => {
            this.audioAlarm = audio;
          }}
        />
        <Row>
          <footer id='footer'>
            Made by{" "}
            <a href='https://github.com/Al3busse' id='footerA'>
              Alejandro Busse
            </a>
          </footer>
        </Row>
      </Container>
    );
  }
}

export default App;
