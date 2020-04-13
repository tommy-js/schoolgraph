import React, { useState, useEffect } from "react";
import SubGrade from "./SubGrade";
import "../main.scss";

function NewGrade(props) {
  const [score, setTotalScore] = useState({ count: 0, totScore: null });
  const [gradeMapper, setGradeMapper] = useState([]);

  useEffect(() => {
    props.updateMapper(score.count, props.id, score.totScore);
  });

  function updateGrade(e) {
    let tempItem = e.target.value;
    if (tempItem < 150)
      setTotalScore({ count: tempItem, totScore: score.totScore });
  }

  function modTotalCourse(e) {
    let totalCourseScore = e.target.value;
    if (totalCourseScore <= 100)
      setTotalScore({ count: score.count, totScore: totalCourseScore });
  }

  function alterGrade(id, item) {
    let index = gradeMapper.find(el => el.id === id);
    let grades = gradeMapper.indexOf(index);
    let gradeChart = gradeMapper;
    gradeChart[grades] = {
      id: id,
      count: Number(item),
      totScore: null
    };
    setGradeMapper(gradeChart);
    props.updateSmallGrade(gradeChart);
    console.log(gradeMapper);
  }

  function addNewGrade() {
    const newGrade = {
      count: null,
      id: Math.floor(Math.random() * 10000)
    };
    setGradeMapper(prev => [...prev, newGrade]);
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
      {gradeMapper.map(el => (
        <SubGrade alterGrade={alterGrade} id={el.id} />
      ))}
      <button onClick={addNewGrade}>Add Sub-Grade</button>
    </div>
  );
}

export default NewGrade;
