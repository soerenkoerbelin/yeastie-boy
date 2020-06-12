import React from "react";

import "./BigSwitch.scss";

function BigSwitch(props: any) {
  return (
    <div className="onoffswitch">
      <input
        type="checkbox"
        name="onoffswitch"
        className="onoffswitch-checkbox"
        id="myonoffswitch"
        onChange={props.onChange}
      />
      <label className="onoffswitch-label" htmlFor="myonoffswitch">
        <span className="onoffswitch-inner"></span>
        <span className="onoffswitch-switch"></span>
      </label>
    </div>
  );
}

export default BigSwitch;
