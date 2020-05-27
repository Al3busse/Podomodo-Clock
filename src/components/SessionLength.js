import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function SessionLength(props) {
  return (
    <div>
      <h4 id='session-label'>Session Length</h4>
      <button onClick={props.increaseSession} id='session-increment'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <p id='session-length'>{props.sessionLength}</p>
      <button onClick={props.decreaseSession} id='session-decrement'>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}

export default SessionLength;
