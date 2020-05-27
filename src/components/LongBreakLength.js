import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function LongBreakLength(props) {
  return (
    <div>
      <h4 id='long-break-length'>Long Break Length</h4>
      <Button
        onClick={props.increaseLongBreak}
        id='long-break-increment'
        disabled={!props.timerRunning ? "" : "disabled"}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <p id='long-break-length'>{props.longBreakLength}</p>
      <Button
        onClick={props.decreaseLongBreak}
        id='long-break-decrement'
        disabled={!props.timerRunning ? "" : "disabled"}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
    </div>
  );
}

export default LongBreakLength;
