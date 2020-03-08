import React, { Component } from "react";
import button from "../images/button@2x.png";
import "./Button.css";

export default props => {
  let angle;
  switch (props.position) {
    case 1:
      angle = -45;
      break;
    case 2:
      angle = 45;
      break;
    case 3:
      angle = -135;
      break;
    case 4:
      angle = 135;
      break;
  }

  const style = {
    transform: `rotate(${angle}deg)`,
    width: "100%"
  };
  return (
    <div className="img-div">
      <img
        style={style}
        src={button}
        alt=""
        className={`button-image ${props.color}`}
      />
    </div>
  );
};
