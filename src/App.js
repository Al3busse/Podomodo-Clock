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
    };
  }

  render() {
    return (
      <div id='container'>
        <h2>Pomodoro Clock</h2>
        <BreakLength breakLength={this.state.breakLength} />
        <SessionLength sessionLength={this.state.sessionLength} />
        <Timer timerCount={this.state.timerCount} />
      </div>
    );
  }
}

export default App;
