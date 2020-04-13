import React, { useState, useEffect } from "react";
import "../main.scss";

function EnterNotifyer(props) {
  const [visual, setVisual] = useState(50);
  const [opac, setOpac] = useState(1);

  useEffect(() => {
    if (props.modField.length > 2 && props.numberOfEntries >= 3) {
      setVisual(0);
      setOpac(0);
    }
  }, [props.saveCount]);

  return (
    <div
      style={{ height: visual + "px", opacity: opac }}
      className="enter_notifyer"
    >
      <span>Enter three grades to start...</span>
    </div>
  );
}

export default EnterNotifyer;
