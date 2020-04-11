import React, { useState } from "react";
import GraphNode from "./GraphNode";

function Graph(props) {
  const [graphmapper, setGraphmapper] = useState([{ count: 100 }]);
  return (
    <div>
      {graphmapper.map(el => (
        <GraphNode count={el.count} />
      ))}
    </div>
  );
}

export default Graph;
