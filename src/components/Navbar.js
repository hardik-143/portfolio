import React, { useState } from "react";
import Logo from "./Logo";
import "../css/navbar.scss";
import { Link } from "react-router-dom";
import { navLinks } from "../data";
import FadeIn from "react-fade-in/lib/FadeIn";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import NavMenu from "./NavMenu";
// import Cursor from "./Cursor";
const bounceAnimation = keyframes`${rubberBand}`;
const BouncyDiv = styled.div`
  :hover {
    animation: 0.5s ${bounceAnimation};
  }
`;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav>
      <div className="container-lg">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="nav-right">
            <FadeIn
              className="nav-list hide-sm "
              wrapperTag="ul"
              childTag="li"
              childClassName="nav-list-item"
            >
              {navLinks.map((item, index) => {
                const { name, url } = item;
                return (
                  // <li key={index}>
                  <BouncyDiv key={index}>
                    <Link to={url} className="nav-list-item-link">
                      {name}
                    </Link>
                  </BouncyDiv>
                  // </li>
                );
              })}
            </FadeIn>
            {/* <Cursor /> */}
            <div
              className={`nav-menu customMenu ${isMenuOpen ? "opened" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <NavMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
