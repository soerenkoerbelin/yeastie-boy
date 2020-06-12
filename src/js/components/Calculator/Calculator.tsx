import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Calculator.scss";
import DottedButton from "../Shared/DottedButton";
import BigSwitch from "../Shared/BigSwitch";

function Calculator() {
  const [changeCalculationType, setChangeCalculationType] = useState(false);
  let calculationType: any;

  function handleChange(e: any) {
    if (changeCalculationType === false) {
      setChangeCalculationType(true);
    } else {
      setChangeCalculationType(false);
    }
  }

  if (changeCalculationType) {
    calculationType = (
      <div>
        <p>salt</p>
      </div>
    );
  } else {
    calculationType = (
      <div>
        <p>yeast</p>
      </div>
    );
  }

  return (
    <div>
      <div className="top-row">
        <h1>Calculator</h1>
        <Link to="/">
          <DottedButton name="back" width="4" height="2" radius="75" />
        </Link>
      </div>
      <div className="content">
        <p>
          In case you want to use fresh yeast instead of dry yeast and vice
          versa you can use this calculator to recalculate the amount of yeast
          you need.
        </p>
        <p>
          Another thing you are able to do in this section is to calculate the
          amount of salt needed for your planned dough.
        </p>
        <div className="center-container">
          <p>
            Tap to change the type of calculation
          </p>
          <div>
            <BigSwitch onChange={(e: any) => handleChange(e)} />
          </div>
          <div>{calculationType}</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
