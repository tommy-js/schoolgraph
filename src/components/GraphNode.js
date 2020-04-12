import React, { useState, useEffect } from "react";
import "../main.scss";

function GraphNode(props) {
  const [useCount, setUseCount] = useState(props.count);
  const [coloring, setColoring] = useState("grey");

  useEffect(() => {
    setUseCount(props.count);
  }, [props.count]);

  useEffect(() => {
    if (useCount >= 90) {
      setColoring("green");
    } else if (useCount > props.passVal && useCount < 90) {
      setColoring("yellow");
    } else if (useCount < props.passVal) {
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
      </div>
    </div>
  );
}

export default GraphNode;
