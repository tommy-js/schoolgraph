import React from "react";
import "../main.scss";

function ClassNameField(props) {
  return (
    <div className="input_field_child">
      <input
        className="input_field"
        type="text"
        required
        placeholder="Class"
        onChange={e => props.updateName(e)}
      />
    </div>
  );
}

export default ClassNameField;
