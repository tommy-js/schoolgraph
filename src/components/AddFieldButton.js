import React from "react";
import "../main.scss";

const AddFieldButton = props => {
  return (
    <button className="input_field_child" onClick={props.field}>
      Button
    </button>
  );
};

export default AddFieldButton;
