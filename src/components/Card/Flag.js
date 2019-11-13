import React from "react";
import "./Flag.css";

const Flag = props => (
  <div className="flag" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Flag;