import React, { useState } from "react";
import NewGrade from "./NewGrade";

function NewInputField(props) {
  const [id, setId] = useState(props.id);

  return (
    <div className="grade_input_block">
      <div className="left_align_grade_input">
        <NewGrade
          id={id}
          updateMapper={props.updateMapper}
          updateSmallGrade={props.updateSmallGrade}
        />
      </div>
      <button
        className="right_align_grade_button"
        onClick={() => props.removeObj(id)}
      >
        X
      </button>
    </div>
  );
}

export default NewInputField;
