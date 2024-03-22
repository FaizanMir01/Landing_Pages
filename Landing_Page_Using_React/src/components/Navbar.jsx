

import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links">
          <a href="#About">About</a>
          <a href="#services">Services</a>
          <a href="#Technologies">Technologies</a>
          <a href="#How To">How To</a>
        </div>
        <div className="btns">
          <Button name="Contact Us" cName="contact" />
          <Button name="Jion Hydra" cName="jion-hydra" />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
