import React from "react";
import "./App.css";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerCount: 25,
      timerSeconds: 0,
      currentTimer: "Session",
    };
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.updateTimerMinute = this.updateTimerMinute.bind(this);
    this.timerCountdown = this.timerCountdown.bind(this);
    this.playAlarm = this.playAlarm.bind(this);
  }

  onIncreaseSessionLength() {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timerCount: this.state.sessionLength + 1,
      });
    } else {
      return;
    }
  }
  onDecreaseSessionLength() {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timerCount: this.state.sessionLength - 1,
      });
    } else {
      return;
    }
  }
  onIncreaseBreakLength() {
    if (this.state.breakLength < 60) {
      this.setState({ breakLength: this.state.breakLength + 1 });
    } else {
      return;
    }
  }

  onDecreaseBreakLength() {
    if (this.state.breakLength > 1) {
      this.setState({ breakLength: this.state.breakLength - 1 });
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
        this.setState({
          timerCount: this.state.breakLength,
          currentTimer: "Break",
          timerSeconds: 0,
        });
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
      sessionLength: 25,
      timerCount: 25,
      timerSeconds: 0,
      currentTimer: "Session",
    });
    this.audioAlarm.pause();
    this.audioAlarm.currentTime = 0;
  }

  render() {
    return (
      <div id='container'>
        <h2>Pomodoro Clock</h2>
        <BreakLength
          breakLength={this.state.breakLength}
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
        />
        <SessionLength
          sessionLength={this.state.sessionLength}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
        />
        <Timer
          timerCount={this.state.timerCount}
          resetTimer={this.onResetTimer}
          timerCountdown={this.timerCountdown}
          currentSession={this.state.currentTimer}
          timerSeconds={this.state.timerSeconds}
        />
        <audio
          id='beep'
          preload='auto'
          src='https://goo.gl/65cBl1'
          ref={(audio) => {
            this.audioAlarm = audio;
          }}
        />
      </div>
    );
  }
}

export default App;
