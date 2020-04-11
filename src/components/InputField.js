import React, { useState, useEffect } from "react";
import NewInputField from "./NewInputField";

function InputField(props) {
  const [mapper, setMapper] = useState([]);

  useEffect(() => {
    setMapper(prev => [...prev, props.map]);
  }, [props.map]);

  function updateMapper(item, id) {
    let var1 = mapper.find(el => el.id === id);
    let var2 = mapper;
    var2[var1] = {
      id: id,
      count: item
    };
    setMapper(var2);
    console.log(var2);
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
