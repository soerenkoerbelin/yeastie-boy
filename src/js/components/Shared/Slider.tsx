import React from "react";

import "./Slider.scss";

function Slider(props: any) {
  return (
    <div className="slider-container">
      <label className="basic-label" htmlFor={props.id}>{props.value} {props.label}</label>
      <input className="basic-slider" onChange={props.onChange} min={props.min} max={props.max} step={props.step} id={props.id} type="range" placeholder={props.placeholder}></input>
    </div>
  );
}

export default Slider;
