import React, { useState } from "react";
import BodyComp from "./BodyComp";

function CompLoader() {
  const [mapper, setMapper] = useState([{}]);

  function addNewCourse() {
    let courseList = {
      id: Math.random() * 1000
    };
    setMapper(prev => [...prev, courseList]);
  }

  return (
    <div>
      {mapper.map(el => (
        <BodyComp />
      ))}
      <button onClick={addNewCourse}>Add New Course</button>
    </div>
  );
}

export default CompLoader;
