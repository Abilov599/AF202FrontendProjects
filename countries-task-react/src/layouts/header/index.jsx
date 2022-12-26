import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <nav>
      <span id="logo">
        <h1>Where in the world?</h1>
      </span>
      <span id="night-mode">
        <p>
          <i className="fa-regular fa-moon"></i> Dark Mode
        </p>
      </span>
    </nav>
  );
};

export default Header;
