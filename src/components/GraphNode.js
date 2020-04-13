import React, { useState, useEffect } from "react";
import "../main.scss";

function GraphNode(props) {
  const [useCount, setUseCount] = useState(props.count);
  const [coloring, setColoring] = useState("grey");

  useEffect(() => {
    if (props.totScore === 0) setUseCount(props.count);
    else setUseCount((props.count * props.totScore) / 100);
  });

  useEffect(() => {
    let passing = Number(props.passVal);
    if (useCount >= passing + passing / 2) {
      setColoring("green");
    } else if (useCount > passing && useCount < passing + passing / 2) {
      setColoring("yellow");
    } else if (useCount < passing) {
      setColoring("red");
    }
  });

  return (
    <div
      className="container"
      style={{
        width: 100 / props.total + "%"
      }}
    >
      <div
        className="graph_node"
        style={{
          height: 2 * useCount + "px",
          marginTop: -2 * useCount + "px",
          backgroundColor: coloring
        }}
      ></div>
      <div className="node_info">
        <p>{props.count}</p>
        <p>{props.totScore}</p>
      </div>
    </div>
  );
}

export default GraphNode;
