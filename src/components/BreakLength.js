import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function BreakLength(props) {
  return (
    <div>
      <h4 id='break-label'>Break Length</h4>
      <button onClick={props.increaseBreak} id='break-increment'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <p id='break-length'>{props.breakLength}</p>
      <button onClick={props.decreaseBreak} id='break-decrement'>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}

export default BreakLength;
