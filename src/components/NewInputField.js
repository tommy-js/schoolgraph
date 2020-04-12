import React, { useState } from "react";
import NewGrade from "./NewGrade";

function NewInputField(props) {
  const [id, setId] = useState(props.id);

  return (
    <div>
      <NewGrade id={id} updateMapper={props.updateMapper} />
      <button onClick={() => props.removeObj(id)}>Remove</button>
    </div>
  );
}

export default NewInputField;
