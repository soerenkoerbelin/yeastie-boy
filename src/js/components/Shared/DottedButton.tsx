import React from "react";

import "./DottedButton.scss";

function DottedButton(props: any) {
  const buttonStyle = {
    width: props.width + "rem",
    height: props.height + "rem",
    borderRadius: props.radius + "px",
  };

  return (
    <button style={buttonStyle} className="dotted-button">
      {props.name}
    </button>
  );
}

export default DottedButton;
