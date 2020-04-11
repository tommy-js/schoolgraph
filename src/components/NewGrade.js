import React, { useState } from "react";

function NewGrade(props) {
  const [item, setItem] = useState(0);

  function updateInput(e) {
    setItem(e.target.value);
    props.updateMapper(item, props.id);
  }

  return (
    <div>
      <input
        type="number"
        placeholder="grade"
        min="0"
        onChange={e => updateInput(e)}
      />
    </div>
  );
}

export default NewGrade;
