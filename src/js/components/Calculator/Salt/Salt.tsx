import React, { useState } from "react";

import Input from "../../Shared/Input";
import "./Salt.scss";

function Salt() {
  const [saltLevel, setSaltLevel] = useState(2);
  const [flour, setFlour] = useState(0);

  function calculate() {
    console.log(flour);
    console.log(saltLevel);
  }

  function handleSaltLevelValue(e: any) {
    setSaltLevel(e.target.value);
    console.log(e.target.value);
  }

  function handleFlourChange(e: any) {
    setFlour(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="salt">
      <p>
        The calculation of the optimal amount of <b>salt</b> for your dough is
        quite simple:
      </p>
      <p>
        Just enter the amount of <b>flour</b> used for your dough and choose the
        level of salt by using the select. Give it a try!
      </p>

      <div className="center-vertically">
          <Input
            label="flour"
            id="flour"
            type="number"
            placeholder="flour in gr."
            value={flour}
            onChange={(e: any) => handleFlourChange(e)}
          />
          <select
            value={saltLevel}
            onChange={(e: any) => handleSaltLevelValue(e)}
          >
            <option value="1.8">Lower</option>
            <option value="2">Medium</option>
            <option value="2.2">Higher</option>
          </select>
      </div>

      <div className="center-container">
        <button className="dotted-button" onClick={() => calculate()}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Salt;
