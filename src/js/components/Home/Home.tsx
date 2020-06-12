import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
  return (
    <div>
      <h3>WELCOME TO YEASTIE BOY!</h3>
      <p>Sometimes, we do not have the time our dough needs. What to do now?</p>
      <p>
        We tried to find way to recalculate the time of rise your dough needs
        when changing the amount of yeast or the temperature. Imagine the recipe
        tells you the time to rise is 1h but you will be back in 4h? Use less
        yeast? How much and at which temperature?
        <span>
          <b> Go for tile 'I have a recipe'!</b>
        </span>
      </p>
      <p>
        Experimenting is great, but sometimes rules of thumb can help you
        creating a nearly optimal result on the first try.
        <span>
          <b> Go for tile 'I want to experiment'!</b>
        </span>
      </p>

      <div className="selection-panel">
        <div className="selection-item">
          <Link to="/recipe">
            <p>I have a <br/> recipe</p>
          </Link>
        </div>
        <div className="selection-item">
          <Link to="/experimental">
            <p>I want to <br/> experiment</p>
          </Link>
        </div>
        <div className="selection-item">
          <Link to="/calculator">
            <p>Dry Yeast / Salt <br/> Calculator</p>
          </Link>
        </div>
        <div className="selection-item">
          <Link to="/knowledge-base">
            <p>Knowledge <br/> base</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
