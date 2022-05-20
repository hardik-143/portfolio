import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data";
const NavMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`container-lg nav-menu-wrapper ${isOpen ? "open" : ""}`}>
      <ul className="nav-list hide-sm list-menu">
        {navLinks.map((item, index) => {
          const { name, url } = item;
          return (
            <li key={index} className="nav-list-item list-menu">
              <Link
                to={url}
                onClick={() => {
                  closeMenu();
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
