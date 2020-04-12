import React, { useState, useEffect } from "react";
import "../main.scss";

function GraphNode(props) {
  const [useCount, setUseCount] = useState(props.count);

  useEffect(() => {
    setUseCount(props.count);
  }, [props.count]);

  return (
    <div
      className="container"
      style={{
        width: 60 / props.total + "%",
        marginLeft: 60 / props.total + "px"
      }}
    >
      <div
        className="graph_node"
        style={{
          height: (1.4 * useCount) / (props.total / 5) + "px",
          marginTop: (-1.4 * useCount) / (props.total / 5) + "px"
        }}
      ></div>
      <div className="node_info">
        <p>{props.count}</p>
      </div>
    </div>
  );
}

export default GraphNode;
