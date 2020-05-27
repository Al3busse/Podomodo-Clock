import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function BreakLength(props) {
  return (
    <div>
      <h4 id='break-label'>Break Length</h4>
      <Button
        onClick={props.increaseBreak}
        id='break-increment'
        disabled={!props.timerRunning ? "" : "disabled"}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <p id='break-length'>{props.breakLength}</p>
      <Button
        onClick={props.decreaseBreak}
        id='break-decrement'
        disabled={!props.timerRunning ? "" : "disabled"}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
    </div>
  );
}

export default BreakLength;
