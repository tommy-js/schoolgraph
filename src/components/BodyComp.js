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
  const [modField, setModField] = useState([]);
  const [saveCount, setSaveCount] = useState(0);
  const [nameState, setNameState] = useState("");

  function updateField() {
    setAddField(field(Math.random()));
  }

  function setFields(obj) {
    setModField(obj);
  }

  function countPasser(item) {
    setSaveCount(item);
  }

  function updateName(e) {
    let name = e.target.value;
    setNameState(name);
  }

  return (
    <div className="body">
      <div className="input_field_parent">
        <ClassNameField updateName={updateName} />
        <InputField
          map={addField}
          setFields={setFields}
          countPasser={countPasser}
        />
        <AddFieldButton field={updateField} />
      </div>
      <SaveData />
      <Graph nameState={nameState} modField={modField} saveCount={saveCount} />
    </div>
  );
}

export default BodyComp;
