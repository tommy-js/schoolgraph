import React, { useState } from "react";

function NewGrade(props) {
  const [item, setItem] = useState(0);

  function updateInput(e) {
    let tempItem = e.target.value;
    setItem(tempItem);
    props.updateMapper(tempItem, props.id);
  }

  return (
    <div>
      <input
        type="number"
        placeholder="grade"
        min="0"
        max="200"
        onChange={e => updateInput(e)}
      />
    </div>
  );
}

export default NewGrade;
