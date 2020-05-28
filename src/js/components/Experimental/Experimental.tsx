import React from "react";
import { Link } from "react-router-dom";

import "./Experimental.scss";
import DottedButton from "../Shared/DottedButton";

function Experimental() {
  return (
    <div>
      <div className="top-row">
        <h1>Experimental</h1>
        <Link to="/">
          <DottedButton name="back" width="4" height="2" radius="0" />
        </Link>
      </div>
      <p>This section is still under construction!</p>
    </div>
  );
}

export default Experimental;
