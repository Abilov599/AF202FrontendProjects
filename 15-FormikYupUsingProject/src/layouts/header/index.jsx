import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <nav >
      <ul>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
