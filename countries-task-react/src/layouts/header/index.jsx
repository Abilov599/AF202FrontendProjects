import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <nav>
      <span>
        <h1>Where in the world?</h1>
      </span>
      <span>
        <p>
          <i className="fa-regular fa-moon"></i> Dark Mode
        </p>
      </span>
    </nav>
  );
};

export default Header;
