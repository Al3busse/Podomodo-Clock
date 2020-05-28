import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function SessionLength(props) {
  return (
    <Container fluid>
      <h4 id='session-label'>Session Length</h4>
      <Row className='justify-content-center'>
        <Button
          onClick={props.increaseSession}
          id='session-increment'
          disabled={!props.timerRunning ? "" : "disabled"}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span id='session-length'>{props.sessionLength}</span>
        <Button
          onClick={props.decreaseSession}
          id='session-decrement'
          disabled={!props.timerRunning ? "" : "disabled"}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </Row>
    </Container>
  );
}

export default SessionLength;
