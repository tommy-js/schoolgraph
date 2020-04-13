import React, { useState, useEffect } from "react";
import "../main.scss";

function NewGrade(props) {
  const [score, setTotalScore] = useState({ grade: 0, totalGrade: null });

  useEffect(() => {
    props.updateMapper(score.grade, props.id, score.totalGrade);
  });

  function updateGrade(e) {
    let tempItem = e.target.value;
    setTotalScore({ grade: tempItem, totalGrade: score.totalGrade });
  }

  function modTotalCourse(e) {
    let totalCourseScore = e.target.value;
    setTotalScore({ grade: score.grade, totalGrade: totalCourseScore });
  }

  return (
    <div className="input_field_child">
      <input
        className="input_type_number"
        type="number"
        placeholder="grade"
        min="0"
        max="200"
        onChange={e => updateGrade(e)}
      />
      <input
        type="number"
        placeholder="Percentage of total course"
        min="0"
        max="100"
        onChange={e => modTotalCourse(e)}
      />
    </div>
  );
}

export default NewGrade;
