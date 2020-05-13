import React, { useState } from "react";

import "./Recipe.scss";
import { Link } from "react-router-dom";

import Slider from "../Shared/Slider";
import DottedButton from "../Shared/DottedButton";

function Recipe() {
  const [yeast, setYeast] = useState(10);
  const [temp, setTemp] = useState(21);
  const [time, setTime] = useState(0.5);

  const descText = (
    <p>
      Here you are able to recalculate the rise time, the amount of flour or the
      temperature by changing one of the values. In case you are using older
      yeast or some sour dough, we implemented two check boxes to take this into
      account.<br></br>
      Change two of the 
    </p>
  );

  function handleChange(e: any, type: string) {
    switch (type) {
      case "yeast":
        setYeast(e.target.value);
        break;
      case "temp":
        setTemp(e.target.value);
        break;
      default:
        setTime(e.target.value);
        break;
    }
  }

  return (
    <div>
      <div className="top-row">
        <h1>I already have a recipe</h1>
        <Link to="/">
          <DottedButton name="back" />
        </Link>
      </div>
      {descText}
      <div className="content">
        <form>
          <Slider
            id="yeast-input"
            min="1"
            max="42"
            step="0.5"
            label="grams of yeast"
            value={yeast}
            onChange={(e: any) => handleChange(e, "yeast")}
          />
          <Slider
            id="temp-input"
            min="0"
            max="35"
            step="0.5"
            value={temp}
            label="°C of temperature"
            onChange={(e: any) => handleChange(e, "temp")}
          />
          <Slider
            id="time-input"
            min="0.25"
            max="48"
            step="0.25"
            value={time}
            label="hours of time to rise"
            onChange={(e: any) => handleChange(e, "time")}
          />
        </form>
      </div>
    </div>
  );
}

export default Recipe;
