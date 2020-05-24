import React from "react";

function SessionLength(props) {
  return (
    <div>
      <h4>Session Length</h4>
      <button>Add</button>
      <p>{props.sessionLength}</p>
      <button>Reduce</button>
    </div>
  );
}

export default SessionLength;
