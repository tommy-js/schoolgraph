import React from "react";
import "../main.scss";

function GraphInfo(props) {
  return (
    <div>
      <div className="graph_item">Avg: {props.avg}%</div>
    </div>
  );
}

export default GraphInfo;
