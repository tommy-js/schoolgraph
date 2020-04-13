import React, { useState, useEffect } from "react";
import ClassNameField from "./ClassNameField";
import InputField from "./InputField";
import AddFieldButton from "./AddFieldButton";
import SaveData from "./SaveData";
import Graph from "./Graph";
import EnterNotifyer from "./EnterNotifyer";
import "../main.scss";

export function field(num) {
  let setObj = {
    id: num * 1000,
    count: 0,
    totScore: null
  };
  return setObj;
}

function BodyComp(props) {
  const [addField, setAddField] = useState({ id: Math.random() * 1000 });
  const [nameState, setNameState] = useState("");

  function updateField() {
    setAddField(field(Math.random()));
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
          setFields={props.setFields}
          countPasser={props.countPasser}
        />
        <AddFieldButton field={updateField} />
      </div>
      <SaveData />
      <Graph
        nameState={nameState}
        modField={props.modField}
        saveCount={props.saveCount}
        numberOfEntries={props.numberOfEntries}
      />
    </div>
  );
}

export default BodyComp;
