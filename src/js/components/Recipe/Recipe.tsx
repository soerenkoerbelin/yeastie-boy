import React, { useState } from "react";

import "./Recipe.scss";
import { Link } from "react-router-dom";

import Slider from "../Shared/Slider";
import DottedButton from "../Shared/DottedButton";

/*
TODOS
- use types
- Give hints
- Set Limits, e.g. increase yeast to > 42 gr not possible

- only change temp is working correctly right now!
*/

function Recipe() {
  const [yeast, setYeast] = useState(21);
  const [temp, setTemp] = useState(10);
  const [time, setTime] = useState(12);
  const [changer, setChanger] = useState("time");
  const [increase, setIncrease] = useState("increase");
  const [changerAmount, setChangerAmount] = useState(0);

  const [aType, setAType] = useState("");
  const [bType, setBType] = useState("");
  const [aResult, setAResult] = useState(0);
  const [bResult, setBResult] = useState(0);

  const TOR_CONST: number = -0.1386294;
  const TOR_FACTOR_CONST: number = 48;

  const YEAST_CONST: number = -0.143841;
  const YEAST_FACTOR_CONST: number = 41.009713;

  const TEMP_CONST: number = -0.12;
  const TEMP_FACTOR_CONST: number = 45;

  const descText = (
    <p>
      Here you are able to recalculate the rise time, the amount of yeast or the
      temperature by changing one of the values. In case you are using older
      yeast or some sour dough, we implemented two check boxes to take this into
      account.<br></br>
      Use the sliders to configure your current setup and press calculate to get
      your results!
    </p>
  );

  let result: any;

  if (aResult !== 0 && bResult !== 0) {
    result = (
      <div className="center-vertically">
        <h3>Here are your results!</h3>
        <h3>You can: </h3>
        <p>
          Change the <b>{aType}</b> to <b>{aResult}</b>
        </p>
        <p>
          Change the <b>{bType}</b> to <b>{bResult}</b>
        </p>
      </div>
    );
  } else {
    result = (
      <div>
        <p>Enter values above and press calculate to get a result!</p>
      </div>
    );
  }

  function handleChange(e: any, type: any) {
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

  function handleChangerValue(e: any) {
    setChanger(e.target.value);
  }

  function handleIncreaseValue(e: any) {
    setIncrease(e.target.value);
  }

  function handleChangeValue(e: any) {
    setChangerAmount(e.target.value);
  }

  function tempTimePrediction(newTOR: number) {
    return Math.floor(Math.log(newTOR / TOR_FACTOR_CONST) / TOR_CONST);
  }

  function yeastTimePrediction(newYeastAmount: number) {
    return Math.floor(
      Math.log(newYeastAmount / YEAST_FACTOR_CONST) / YEAST_CONST
    );
  }

  function timeTempPrediction(newTemp: number) {
    return Math.floor(Math.log(newTemp / TEMP_FACTOR_CONST) / TEMP_CONST);
  }

  function changeTime() {
    let newTOR: number;

    if (increase === "increase") {
      newTOR = +time + +changerAmount;
    } else {
      newTOR = +time + -changerAmount;
    }

    return tempTimePrediction(newTOR);
  }

  function changeYeast() {
    let newYeastAmount: number;

    if (increase === "increase") {
      newYeastAmount = +yeast + +changerAmount;
    } else {
      newYeastAmount = +yeast + -changerAmount;
    }

    return yeastTimePrediction(newYeastAmount);
  }

  function changeTemp() {
    let newTemp: number;

    if (increase === "increase") {
      newTemp = +temp + +changerAmount;
    } else {
      newTemp = +temp + -changerAmount;
    }

    return Math.floor(Math.log(newTemp / TOR_FACTOR_CONST) / TOR_CONST);
  }

  function calculate() {
    let aValue;
    let bValue;
    switch (changer) {
      case "yeast":
        setAType("time");
        setBType("temp");
        aValue = changeTime();
        setAResult(aValue);
        bValue = changeTemp();
        setBResult(bValue);
        break;
      case "time":
        setAType("yeast");
        setBType("temp");
        aValue = changeYeast();
        setAResult(aValue);
        bValue = changeTemp();
        setBResult(bValue);
        break;
      case "temp":
        setAType("yeast");
        setBType("time");
        aValue = changeYeast();
        setAResult(aValue);
        bValue = changeTime();
        setBResult(bValue);
        break;
      default:
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
          <h3>My current setup: </h3>
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

          <div className="center-container">
            <p>I want to</p>
            <select
              value={increase}
              onChange={(e: any) => handleIncreaseValue(e)}
            >
              <option value="increase">Increase</option>
              <option value="decrease">Decrease</option>
            </select>
          </div>

          <div className="center-container">
            <p>the</p>
            <select
              value={changer}
              onChange={(e: any) => handleChangerValue(e)}
            >
              <option value="yeast">Amount of yeast</option>
              <option value="time">Time of rise</option>
              <option value="temp">Temperature</option>
            </select>
          </div>

          <div className="center-container">
            <p>
              By the <b>amount</b> of:{" "}
            </p>
            <Slider
              id="change-input"
              min="0"
              max="48"
              step="0.25"
              value={changerAmount}
              label=""
              onChange={(e: any) => handleChangeValue(e)}
            />
          </div>
        </form>
      </div>
      <div className="center-container">
        <button className="dotted-button" onClick={() => calculate()}>
          Calculate
        </button>
      </div>
      <div className="center-container">{result}</div>
    </div>
  );
}

export default Recipe;
