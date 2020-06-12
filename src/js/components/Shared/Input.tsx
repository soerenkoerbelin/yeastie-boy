import React from "react";

import "./Input.scss";

function Input(props: any) {
  return (
    <div className="input-container">
      <label className="basic-label" htmlFor={props.id}>{props.label}</label>
      <input className="basic-input" id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
    </div>
  );
}

export default Input;
