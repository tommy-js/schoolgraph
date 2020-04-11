import React from "react";
import NewGrade from "./NewGrade";

function NewInputField(props) {
  return (
    <div>
      <NewGrade id={props.id} updateMapper={props.updateMapper} />
    </div>
  );
}

export default NewInputField;
