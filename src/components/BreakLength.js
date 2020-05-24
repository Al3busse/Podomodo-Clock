import React from "react";

function BreakLength(props) {
  return (
    <div>
      <h4>Break Length</h4>
      <button>Add</button>
      <p>{props.breakLength}</p>
      <button>Reduce</button>
    </div>
  );
}

export default BreakLength;
