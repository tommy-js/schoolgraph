import React, { useState, useEffect } from "react";
import BodyComp from "./BodyComp";
import EnterNotifyer from "./EnterNotifyer";

function CompLoader() {
  const [mapper, setMapper] = useState([{}]);
  const [numberOfEntries, setNumberOfEntries] = useState(0);
  const [modField, setModField] = useState([]);
  const [saveCount, setSaveCount] = useState(0);

  useEffect(() => {
    let counter = 0;
    for (let k = 0; k < modField.length; k++) {
      {
        typeof modField[k].count == "number" ? counter++ : (counter = counter);
      }
    }
    setNumberOfEntries(counter);
  });

  function addNewCourse() {
    let courseList = {
      id: Math.random() * 1000
    };
    setMapper(prev => [...prev, courseList]);
  }

  function setFields(obj) {
    setModField(obj);
  }

  function countPasser(item) {
    setSaveCount(item);
  }

  return (
    <div>
      <EnterNotifyer
        modField={modField}
        numberOfEntries={numberOfEntries}
        saveCount={saveCount}
      />
      {mapper.map(el => (
        <BodyComp
          modField={modField}
          numberOfEntries={numberOfEntries}
          saveCount={saveCount}
          setFields={setFields}
          countPasser={countPasser}
        />
      ))}
      <button onClick={addNewCourse}>Add New Course</button>
    </div>
  );
}

export default CompLoader;
