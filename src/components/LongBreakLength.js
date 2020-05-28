import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function LongBreakLength(props) {
  return (
    <Container fluid>
      <h4 id='long-break-length'>Long Break Length</h4>
      <Row className='justify-content-center'>
        <Button
          onClick={props.increaseLongBreak}
          id='long-break-increment'
          disabled={!props.timerRunning ? "" : "disabled"}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span id='long-break-length'>{props.longBreakLength}</span>
        <Button
          onClick={props.decreaseLongBreak}
          id='long-break-decrement'
          disabled={!props.timerRunning ? "" : "disabled"}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </Row>
    </Container>
  );
}

export default LongBreakLength;
