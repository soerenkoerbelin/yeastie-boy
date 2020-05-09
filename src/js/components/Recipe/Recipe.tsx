import React from "react";

import "./Recipe.scss";
import { Link } from "react-router-dom";

import Input from "../Shared/Input";
import DottedButton from "../Shared/DottedButton";

function Recipe() {
  const descText = (
    <p>
      Here you are able to recalculate the rise time, the amount of flour or the
      temperature by changing one of the values. In case you are using older
      yeast or some sour dough, we implemented two check boxes to take this into
      account.
    </p>
  );

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
          <Input
            id="yeast-input"
            type="number"
            placeholder="...the amount of yeast"
            label="Yeast"
          />
          <Input
            id="temp-input"
            type="number"
            placeholder="...the temperature"
            label="Temperature"
          />
          <Input
            id="time-input"
            type="number"
            placeholder="...the time of rise"
            label="Time"
          />
        </form>
      </div>
    </div>
  );
}

export default Recipe;
