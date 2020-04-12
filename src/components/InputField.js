import React, { useState, useEffect } from "react";
import NewInputField from "./NewInputField";

function InputField(props) {
  const [mapper, setMapper] = useState([
    { id: 2222, count: 0 },
    { id: 11111, count: 0 }
  ]);

  useEffect(() => {
    setMapper(prev => [...prev, props.map]);
  }, [props.map]);

  function updateMapper(item, id) {
    let var1 = mapper.find(el => el.id === id);
    let index = mapper.indexOf(var1);
    let var2 = mapper;
    var2[index] = {
      id: id,
      count: Number(item)
    };
    setMapper(var2);
    props.countPasser(item);
    console.log(var2);
    props.setFields(var2);
  }

  return (
    <div>
      {mapper.map(el => (
        <NewInputField key={el.id} id={el.id} updateMapper={updateMapper} />
      ))}
    </div>
  );
}

export default InputField;
