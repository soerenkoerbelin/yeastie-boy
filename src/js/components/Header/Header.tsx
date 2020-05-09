import React from "react";

import Icon from "./../Shared/Icon";
import "./Header.scss";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <Icon icon="yeast32" />
          <h2>YEASTIE BOY</h2>
        </div>
        <div className="header-right">
          <h3>fo' yo' dough</h3>
        </div>
      </div>
      <div className="wave"></div>
    </div>
  );
}

export default Header;
