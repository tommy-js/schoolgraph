import React, { useState } from "react";
import "../main.scss";

function GraphOptions(props) {
  const [passVal, setPassVal] = useState(60);
  const [checkedBox, setCheckedBox] = useState(false);

  function modPassVal(e) {
    let passing = e.target.value;
    setPassVal(passing);
    props.modPassVal(passing);
  }

  function changeCheckbox() {
    setCheckedBox(!checkedBox);
  }

  return (
    <div>
      <div className="graph_item">
        <label>Pass value</label>
        <input
          type="number"
          min="1"
          max="89"
          placeholder="60"
          onChange={e => modPassVal(e)}
        />
      </div>
      <div className="graph_item">
        <label>Show line</label>
        <input type="checkbox" checked={checkedBox} onChange={changeCheckbox} />
      </div>
    </div>
  );
}

export default GraphOptions;
