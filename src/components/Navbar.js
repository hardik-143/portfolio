import React from "react";
import Logo from "./Logo";
import "../css/navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container-lg">
        <div className="nav-left">
          <Link to={'/'}>
            <Logo />
          </Link>
        </div>
        <div className="nav-right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
