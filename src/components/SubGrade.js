import React, { useState } from "react";

function SubGrade(props) {
  const [grade, setGrade] = useState(0);

  function modGrade(e) {
    let subGrade = e.target.value;
    setGrade(subGrade);
    props.alterGrade(props.id, subGrade);
  }

  return (
    <div>
      <input type="number" placeholder="grade" onChange={e => modGrade(e)} />
    </div>
  );
}

export default SubGrade;
