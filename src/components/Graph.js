import React, { useState, useEffect } from "react";
import GraphNode from "./GraphNode";
import "../main.scss";

function Graph(props) {
  const [graphmapper, setGraphmapper] = useState([]);

  useEffect(() => {
    setGraphmapper(props.modField);
  }, [props.saveCount]);

  return (
    <div className="graph">
      <div className="graph_node_container">
        {graphmapper.map(el => (
          <GraphNode count={el.count} key={el.id} total={graphmapper.length} />
        ))}
      </div>
    </div>
  );
}

export default Graph;
