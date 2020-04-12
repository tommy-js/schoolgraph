import React, { useState, useEffect } from "react";
import "../main.scss";

function EnterNotifyer(props) {
  const [visual, setVisual] = useState(50);

  useEffect(() => {
    if (props.modField.length > 2) {
      setVisual(0);
    }
  }, [props.modField]);

  return (
    <div style={{ height: visual + "px" }} className="enter_notifyer">
      <span>Enter three grades to start...</span>
    </div>
  );
}

export default EnterNotifyer;
