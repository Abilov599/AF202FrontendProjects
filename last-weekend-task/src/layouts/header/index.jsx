import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="m-auto">
      <div id="nav-bar">
        <div id="site-logo">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="btn btn-join">
              <NavLink to="/sign-up">Join</NavLink>
            </li>
            <li className="btn btn-login">
              <NavLink to="/log-in">Log In</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div>
          <h1>Online learning platform</h1>
          <p>
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies
          </p>
          <Link className="btn-join" to="/sign-up">
            Join For Free
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
