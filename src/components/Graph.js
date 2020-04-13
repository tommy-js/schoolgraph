import React, { useState, useEffect, prevState } from "react";
import GraphNode from "./GraphNode";
import GraphInfo from "./GraphInfo";
import GraphOptions from "./GraphOptions";
import "../main.scss";

function Graph(props) {
  const [graphmapper, setGraphmapper] = useState([]);
  const [displayer, setDisplayer] = useState({ opacity: 0, top: 100 });
  const [visual, setVisual] = useState("none");
  const [passVal, setPassVal] = useState(60);
  const [totalScore, setTotalScore] = useState(0);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    setGraphmapper(props.modField);
    if (graphmapper.length > 2 && props.numberOfEntries >= 3) {
      setDisplayer({ opacity: 1, top: 0 });
      setVisual("block");
    }
  }, [props.saveCount]);

  useEffect(() => {
    setTotalScore(0);
    let checkVal = 0;
    for (let k = 0; k < graphmapper.length; k++) {
      checkVal = checkVal + graphmapper[k].count;
    }
    setAvg(Math.floor((checkVal / graphmapper.length) * 100) / 100);
    if (typeof avg != "number") {
      setAvg(0);
    }
  }, [props.saveCount]);

  function modPassVal(e) {
    setPassVal(e);
  }

  return (
    <div className="graph_encloser">
      <div className="options_sideview" style={{ display: visual }}>
        <div className="inner_options_sideview">
          <GraphOptions modPassVal={modPassVal} />
        </div>
      </div>
      <div
        className="graph"
        style={{
          opacity: displayer.opacity,
          top: displayer.top + "px"
        }}
      >
        <div className="graph_title">
          <span className="graph_title_span">{props.nameState}</span>
        </div>
        <div className="graph_node_container">
          {graphmapper.map(el => (
            <GraphNode
              passVal={passVal}
              count={el.count}
              totScore={el.totScore}
              key={el.id}
              total={graphmapper.length}
            />
          ))}
        </div>
        <div
          className="pass_value"
          style={{ height: 2 * passVal + "px" }}
        ></div>
      </div>
      <div className="info_sideview" style={{ display: visual }}>
        <div className="inner_info_sideview">
          <GraphInfo avg={avg} />
        </div>
      </div>
    </div>
  );
}

export default Graph;
