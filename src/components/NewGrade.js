import React, { useState } from "react";
import "../main.scss";

function NewGrade(props) {
  const [item, setItem] = useState(0);

  function updateInput(e) {
    let tempItem = e.target.value;
    if (tempItem <= 150) {
      setItem(tempItem);
      props.updateMapper(tempItem, props.id);
    } else {
      return null;
    }
  }

  return (
    <div className="input_field_child">
      <input
        className="input_type_number"
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
