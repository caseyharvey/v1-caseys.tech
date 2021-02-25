import React from "react";
import { Link } from "react-router-dom";
import "./navbar.sass";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="right-side">
          <Link to="/" className="about">
            about
          </Link>
          <Link to="/Projects">projects</Link>
          <Link to="/Contact">contact</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
