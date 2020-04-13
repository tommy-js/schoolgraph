import React, { useState, useEffect } from "react";
import NewInputField from "./NewInputField";

function InputField(props) {
  const [mapper, setMapper] = useState([
    { id: 2222, count: 0, totScore: null },
    { id: 11111, count: 0, totScore: null }
  ]);

  useEffect(() => {
    setMapper(prev => [...prev, props.map]);
  }, [props.map]);

  function updateMapper(item, id, totalGrade) {
    let var1 = mapper.find(el => el.id === id);
    let index = mapper.indexOf(var1);
    let var2 = mapper;
    var2[index] = {
      id: id,
      count: Number(item),
      totScore: Number(totalGrade)
    };
    setMapper(var2);
    props.countPasser(item);
    props.setFields(var2);
    // console.log(var2);
  }

  function removeObj(arrayIndex) {
    let var1 = mapper.find(el => el.id === arrayIndex);
    let index = mapper.indexOf(var1);
    let var2 = mapper;
    var2.splice(index, 1);
    setMapper(var2);
    props.countPasser(Math.floor(Math.random() * 100));
    props.setFields(var2);
  }

  return (
    <div>
      {mapper.map(el => (
        <NewInputField
          key={el.id}
          id={el.id}
          updateMapper={updateMapper}
          removeObj={removeObj}
        />
      ))}
    </div>
  );
}

export default InputField;
