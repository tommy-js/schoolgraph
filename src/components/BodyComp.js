import React, { useState } from "react";
import ClassNameField from "./ClassNameField";
import InputField from "./InputField";
import AddFieldButton from "./AddFieldButton";
import SaveData from "./SaveData";
import Graph from "./Graph";
import "../main.scss";

export function field(num) {
  let setObj = {
    id: num * 1000,
    count: 0
  };
  return setObj;
}

function BodyComp() {
  const [addField, setAddField] = useState({ id: Math.random() * 1000 });

  function updateField() {
    setAddField(field(Math.random()));
    console.log(addField);
  }

  return (
    <div className="body">
      <ClassNameField />
      <InputField map={addField} />
      <AddFieldButton field={updateField} />
      <SaveData />
      <Graph />
    </div>
  );
}

export default BodyComp;
