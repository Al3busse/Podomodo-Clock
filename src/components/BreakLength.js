import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function BreakLength(props) {
  return (
    <Container fluid>
      <h4 id='break-label'>Break Length</h4>
      <Row className='justify-content-center'>
        <Button
          onClick={props.increaseBreak}
          id='break-increment'
          disabled={!props.timerRunning ? "" : "disabled"}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span id='break-length'>{props.breakLength}</span>
        <Button
          onClick={props.decreaseBreak}
          id='break-decrement'
          disabled={!props.timerRunning ? "" : "disabled"}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </Row>
    </Container>
  );
}

export default BreakLength;
