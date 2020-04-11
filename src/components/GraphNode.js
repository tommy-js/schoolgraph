import React, { useState, useEffect } from "react";
import "../main.scss";

function GraphNode({ count }) {
  const [useCount, setUseCount] = useState(count);

  useEffect(() => {
    setUseCount(count);
  }, [count]);

  return <div className="graph_node" style={{ height: count + "px" }}></div>;
}

export default GraphNode;
